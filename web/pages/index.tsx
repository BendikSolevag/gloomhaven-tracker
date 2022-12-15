import { createClient } from "next-sanity";
import { useRouter } from "next/router";
import { useState } from "react";
import PlayerHandler from "../components/playerHandler";
import CharacterListing from "../components/characterListing";

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

          <CharacterListing characters={characters} />
        </>
      )}
    </main>
  );
}

const client = createClient({
  projectId: "sg0xr2eu",
  dataset: "production",
  apiVersion: "2022-12-15", // use current UTC date - see "specifying API version"!
  token:
    "sk9iWLIsZkxhvdTUZkXSm0GUkVucTpYfB6WU5FPdG0RBK14Tn9OQfdc28bkmIBHwFHEPIcsxBOUulAupHFWAKcCT3n3eQayyeWrhgCCF2jkEesONwULB6j1FNwdQm0w0ZJc4XXwIroZa6866GyzMF3DzBIZO9oLZtEBUeVPnVTwBSBPGVAaK", // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});

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
