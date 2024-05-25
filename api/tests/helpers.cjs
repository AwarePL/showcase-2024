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

async function runRest(endpoint, methodName) {
  const results = await fetch(process.env.rest + endpoint, {
    method: methodName,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await results.json();
  return data;
}

const restUrl = process.env.rest;
module.exports = { runGraphQlQuery, runRest, restUrl };
