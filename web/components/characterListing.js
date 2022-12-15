import Link from "next/link";

const CharacterListing = ({ characters }) => {
  console.log(characters);
  return (
    <ul className="my-8 grid grid-cols-1 md:grid-cols-2 gap-8 font-karla">
      {characters.map((character) => (
        <li key={character.name} className="">
          <Link href={`/character/${character._id}`}>
            <h3>{character.name}</h3>
            <span>{character.relatedCharacterType.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CharacterListing;
