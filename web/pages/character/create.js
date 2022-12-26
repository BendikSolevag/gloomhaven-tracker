import { useRouter } from "next/router";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PlayerHandler from "../../components/playerHandler";
import { urlFor, myLoader } from "../helpers/urlFor";
import Image from "next/image";
import client from "../helpers/sanityClient";
import { BackToGallery } from "../../components/backToGallery";

export default function Home({ players, characterTypes }) {
    const router = useRouter();
    const [currentUser, setCurrentUser] = useState("none");
    return (
        <main className="max-w-wrapper mx-auto px-4">
            <PlayerHandler
                router={router}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                players={players}
            />
            <BackToGallery />

            {currentUser !== "none" && (
                <>
                    <h1 className="mb-4">Create New Character</h1>

                    <div>
                        <h2 className="mt-8">Select Character Type</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                            {characterTypes.map((characterType) => (
                                <li key={characterType.name}>
                                    <input
                                        id={characterType.name}
                                        type="radio"
                                        value={characterType.name}
                                        name="characterType"
                                        className="hidden peer"
                                    />
                                    <label
                                        htmlFor={characterType.name}
                                        className="flex flex-nowrap w-full group border-2 border-black rounded-lg p-2 peer-checked:bg-blue-100"
                                    >
                                        <figure className="w-[100px] mr-4">
                                            <Image
                                                src={urlFor(characterType.icon)
                                                    .width(200)
                                                    .height(200)
                                                    .url()}
                                                width={200}
                                                height={200}
                                                alt={`${characterType.name}'s logo`}
                                                loader={myLoader}
                                            />
                                        </figure>
                                        <div className="relative w-fit h-fit">
                                            <h3 className="w-max">
                                                {characterType.name}
                                            </h3>
                                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black transition-all group-hover:w-0" />
                                        </div>{" "}
                                    </label>
                                </li>
                            ))}
                        </ul>
                        <h2 className="mt-8">Select Character Name</h2>
                        <div>
                            <input
                                name="characterName"
                                type="text"
                                placeholder="Jürgen Kloppogoggel"
                                className="mt-2 border-b-[1px] border-black text-xl"
                            ></input>
                        </div>

                        <div className="mb-8 mt-4 flex">
                            <button
                                onClick={async () => {
                                    const type = document.querySelector(
                                        'input[name="characterType"]:checked'
                                    ).value;
                                    const name = document.querySelector(
                                        'input[name="characterName"]'
                                    ).value;
                                    const selectedRelatedCharacterType =
                                        await client.fetch(
                                            `*[_type == "characterType" && name == "${type}"]{_id}`
                                        );
                                    const currentPlayer = await client.fetch(
                                        `*[_type == "player" && name == "${currentUser}"]{_id}`
                                    );
                                    const newCharacter = {
                                        relatedPlayer: {
                                            _type: "reference",
                                            _ref: currentPlayer[0]._id,
                                        },
                                        _id: uuidv4(),
                                        _type: "character",
                                        name: name,
                                        relatedCharacterType: {
                                            _type: "reference",
                                            _ref: selectedRelatedCharacterType[0]
                                                ._id,
                                        },
                                        gold: 50,
                                        xp: 0,
                                        checkmarkPoints: 0,
                                    };
                                    client
                                        .createIfNotExists(newCharacter)
                                        .then(() => {
                                            console.log(
                                                "successfully created new user"
                                            );
                                            return client.fetch(
                                                `*[_type == "character" && name == "${name}"]{_id}`
                                            );
                                        })
                                        .then((characterId) => {
                                            router.push(
                                                `/character/${characterId[0]._id}?user=${router.query.user}`
                                            );
                                        })
                                        .catch((err) =>
                                            console.error(`err: ${err}`)
                                        );
                                }}
                                className="border-2 border-black rounded-lg text-xl p-2 hover:bg-blue-100"
                            >
                                + Add character
                            </button>
                        </div>
                    </div>
                </>
            )}
        </main>
    );
}

export async function getStaticProps() {
    const players = await client.fetch(
        `*[_type == "player" && !(_id in path('drafts.**'))]`
    );
    const characterTypes = await client.fetch(
        `*[_type == "characterType" && !(_id in path('drafts.**'))]`
    );

    return {
        props: {
            players,
            characterTypes,
        },
    };
}
