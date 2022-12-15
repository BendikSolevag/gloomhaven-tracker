const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: "sg0xr2eu",
  dataset: "production",
  apiVersion: "2022-12-15", // use current UTC date - see "specifying API version"!
  token:
    "sk9iWLIsZkxhvdTUZkXSm0GUkVucTpYfB6WU5FPdG0RBK14Tn9OQfdc28bkmIBHwFHEPIcsxBOUulAupHFWAKcCT3n3eQayyeWrhgCCF2jkEesONwULB6j1FNwdQm0w0ZJc4XXwIroZa6866GyzMF3DzBIZO9oLZtEBUeVPnVTwBSBPGVAaK", // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});

const res = fetch("http://gloomhavendb.com/api/items")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      const doc = {
        _type: "item",
        name: data.name,
        https://www.sanity.io/docs/js-client#creating-documents
      };
    });
  });
