import CharacterListingCard from "./characterListingCard";

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
    return (
        <>
            {players.map((player) => (
                <>
                    <h2 className="mt-8 mb-4">{player.name}</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 font-karla">
                        {characters
                            .filter(
                                (item) => item.relatedPlayer._id == player._id
                            )
                            .map((character) => (
                                <CharacterListingCard
                                    character={character}
                                    currentUser={currentUser}
                                />
                            ))}
                    </ul>
                </>
            ))}
        </>
    );
};

export default CharacterListing;
