import Link from "next/link";
import Image from "next/image";
import ExpIcon from "./icons/expIcon";
import CoinsIcon from "./icons/coinsIcon";
import ArrowIcon from "./icons/arrowIcon";
import { urlFor, myLoader } from "../helpers/urlFor";

const CharacterListingCard = ({ character, currentUser }) => (
    <li key={character.name}>
        <Link
            href={`/character/${character._id}?user=${currentUser}`}
            className="flex flex-nowrap w-full group border-2 border-black rounded-lg p-2"
        >
            <figure className="w-[100px] mr-4">
                <Image
                    src={urlFor(character.relatedCharacterType.icon)
                        .width(200)
                        .height(200)
                        .url()}
                    width={200}
                    height={200}
                    alt={`${character.name}'s logo`}
                    loader={myLoader}
                />
            </figure>
            <div className="flex-grow pr-2">
                <div className="relative w-fit">
                    <h3 className="w-max">{character.name}</h3>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black transition-all group-hover:w-0" />
                </div>
                <span className="">{character.relatedCharacterType.name}</span>
                <div className="text-md flex mt-2">
                    <span className="flex items-center mr-4">
                        <ExpIcon classNames={"w-5 h-5 mr-1"} />
                        {character.xp || 0}
                    </span>
                    <span className="flex items-center">
                        <CoinsIcon classNames={"w-5 h-5 mr-1"} />
                        {character.gold || 0}
                    </span>
                    <div className="flex ml-auto items-center">
                        <span className="transition ease-in-out group-hover:-translate-x-4  duration-300">
                            {character.relatedPlayer.name == currentUser &&
                                `Edit character`}
                            {character.relatedPlayer.name != currentUser &&
                                `View character`}
                        </span>
                        <ArrowIcon classNames={"ml-1 h-5 w-5"} />
                    </div>
                </div>
            </div>
        </Link>
    </li>
);

export default CharacterListingCard;
