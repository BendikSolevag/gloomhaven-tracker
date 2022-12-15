import { createClient } from "next-sanity";

export default function Home({ characters }) {
  return (
    <main className="max-w-wrapper mx-auto px-4">
      <h1 className="text-4xl  font-playfair">The Gallery</h1>
      <p className="font-karla">{characters.length}</p>
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

  return {
    props: {
      characters,
    },
  };
}
