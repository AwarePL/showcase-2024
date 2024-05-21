require("dotenv-json")();

async function runGraphQlQuery(query) {
  const results = await fetch(process.env.graphQl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });
  const data = await results.json();
  return data;
}
module.exports = { runGraphQlQuery };