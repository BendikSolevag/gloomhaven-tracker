import { useRouter } from "next/router";
import { useState } from "react";
import PlayerHandler from "../components/playerHandler";
import CharacterListing from "../components/characterListing";
import client from "./helpers/sanityClient";

export default function Home({ characters, players }) {
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
      {currentUser !== "none" && (
        <>
          <h1 className="mb-4">The Gallery</h1>
          <p className="font-karla">
            The gallery houses all the finest soldiers in the land of
            Gloomhavenland
          </p>

          <CharacterListing characters={characters} currentUser={currentUser} />
        </>
      )}
    </main>
  );
}

export async function getStaticProps() {
  const characters = await client.fetch(
    `*[_type == "character"]{..., relatedCharacterType->, relatedPlayer->, perkProgressionList[]{..., perkType->}}`
  );
  const players = await client.fetch(`*[_type == "player"]`);

  return {
    props: {
      characters,
      players,
    },
  };
}
