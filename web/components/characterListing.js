import CharacterListingCard from "./characterListingCard";
import Link from "next/link";
import PlusIcon from "../components/icons/plusIcon";

const CharacterListing = ({ characters, players, currentUser }) => {
    players.sort((a, b) => {
        if (a.name == currentUser) {
            return -1;
        }
        if (b.name == currentUser) {
            return 1;
        }
        return 0;
    });
    console.log(characters);
    return (
        <>
            {players.map((player) => (
                <div key={player._id}>
                    <h2 className="mt-8 mb-4">{player.name}</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 font-karla">
                        {characters
                            .filter(
                                (item) =>
                                    item.relatedPlayer &&
                                    item.relatedPlayer._id == player._id
                            )
                            .map((character) => (
                                <CharacterListingCard
                                    key={character._id}
                                    character={character}
                                    currentUser={currentUser}
                                />
                            ))}
                        <li>
                            <Link
                                href={`/character/create?user=${currentUser}`}
                                className="flex flex-nowrap w-full group border-2 border-black rounded-lg p-2"
                            >
                                <div className="flex-grow pr-2">
                                    <div className="flex items-center">
                                        {" "}
                                        <PlusIcon
                                            classNames={
                                                "w-[20px] h-[20px] mx-2 mt-[3px] transition-all group-hover:rotate-90"
                                            }
                                        />
                                        <div className="relative w-max">
                                            <h3>Create character</h3>
                                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black transition-all group-hover:w-0" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            ))}
        </>
    );
};

export default CharacterListing;
