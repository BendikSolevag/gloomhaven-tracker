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
                    </ul>
                </div>
            ))}
        </>
    );
};

export default CharacterListing;
