import client from "../../helpers/sanityClient";
import { useRouter } from "next/router";
import { useState } from "react";
import PlayerHandler from "../../components/playerHandler";
import BackToGallery from "../../components/backToGallery";
import CheckmarkPoints from "../../components/character/checkmarkPoints";
import ExpCounter from "../../components/character/expCounter";
import GoldCounter from "../../components/character/goldCounter";

export default function Character({ character, players }) {
    const router = useRouter();
    const [currentUser, setCurrentUser] = useState("none");
    const [currentCheckmarkPoints, setCurrentCheckmarkPoints] = useState(
        character[0].checkmarkPoints || 0
    );
    const [currentExp, setCurrentExp] = useState(
        character[0].xp || 0
    );
    const [currentGold, setCurrentGold] = useState(
        character[0].gold || 0
    );
    console.log(character[0]);
    return (
        <main className="max-w-wrapper mx-auto px-4">
            <PlayerHandler
                router={router}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                players={players}
            />
            <BackToGallery />

            <h1 className="mb-4">{character[0].name}</h1>
            <span className="block">
                Owner: {character[0].relatedPlayer.name}
            </span>
            <span> Type: {character[0].relatedCharacterType.name}</span>

            <ExpCounter 
                currentExp={currentExp}
                setCurrentExp={setCurrentExp}
            />

            <GoldCounter 
                currentGold={currentGold}
                setCurrentGold={setCurrentGold}
            />

            <CheckmarkPoints
                currentCheckmarkPoints={currentCheckmarkPoints}
                setCurrentCheckmarkPoints={setCurrentCheckmarkPoints}
            />
        </main>
    );
}

export async function getServerSideProps(context) {
    const character = await client.fetch(
        `*[_type == "character"  && _id == "${context.params.id}"]{..., relatedCharacterType->, relatedPlayer->, perkProgressionList[]{..., perkType->}}`
    );
    const players = await client.fetch(`*[_type == "player"]`);

    return {
        props: {
            character,
            players,
        },
    };
}
