const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: "sg0xr2eu",
  dataset: "production",
  apiVersion: "2022-12-15", // use current UTC date - see "specifying API version"!
  token:
    "sk9iWLIsZkxhvdTUZkXSm0GUkVucTpYfB6WU5FPdG0RBK14Tn9OQfdc28bkmIBHwFHEPIcsxBOUulAupHFWAKcCT3n3eQayyeWrhgCCF2jkEesONwULB6j1FNwdQm0w0ZJc4XXwIroZa6866GyzMF3DzBIZO9oLZtEBUeVPnVTwBSBPGVAaK", // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});

function getandpush() {
  const res = fetch("http://gloomhavendb.com/api/items")
    .then((res) => res.json())
    .then((data) => {
      let docs = [];
      data.forEach((item) => {
        console.log(item);
        const doc = {
          _type: "item",
          name: item.name,
          cost: item.price,
          description: item.text,
          slot: item.slot,
          exhaustionType: item.limit,
          imageUrl: item.imageUrl,
        };
        docs.push(doc);
      });
      return docs;
    })
    .then((docs) => {
      docs.forEach((doc, i) => {
        setTimeout(() => {
          client
            .create(doc)
            .then((res) => console.log("created"))
            .catch((err) => console.error(err));
        }, 250 * i);
      });
    });
}

getandpush();

// Restart: Delete all _item docs
//client.delete({
//  query: `*[_type == "item"]`,
//});
