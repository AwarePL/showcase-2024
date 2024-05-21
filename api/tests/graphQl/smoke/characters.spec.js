import { expect } from "chai";
import { runGraphQlQuery } from "../../helpers.cjs";
describe("Positive Smoke Test for Characters endpoint", () => {
  describe("Query Characters endpoint for all chatacters named Rick who are male, human and alive", () => {
    let characters;
    let info;
    const query = `query Characters {
      characters(
          filter: { name: "Rick", species: "human", gender: "male", status: "alive" }
      ) {
          results {
              id
              name
              image
              species
          }
          info {
              count
              pages
          }
      }
  }
  `;
    before(async () => {
      const data = await runGraphQlQuery(query);
      characters = data.data.characters.results;
      info = data.data.characters.info;
    });


    it("Expect to find Rick Sanchez on list of characters", () => {
      characters = characters.map((character) => character.name);
      expect(characters).to.include("Rick Sanchez");
    });

    it("Expect results count to be at least 20", () => {
      expect(characters.length).to.be.greaterThanOrEqual(20);
    });

      it("Expect info to contain page count of more than 1 for more than 20 resaults", () => {
      if (characters.length > 20) {
        expect(info.pages).to.be.greaterThan(1);
      }
    });
  });
});

describe("Negative Smoke Test for Characters endpoint", () => {
  describe("Break Characters schema, expect descriptive error messages", () => {
    it("Query page id as a string, expect to get 'Expected type Int' error message", async () => {
      const query = `query Characters {characters(page: "invalid type") {results {id}}}`;
      const characters = await runGraphQlQuery(query);
      expect(characters.errors[0].message).to.include("Expected type Int");
    });

    it("Query filter.name string as a number, expect to get 'Expected type String' error message", async () => {
      const query = `query Characters {characters(filter: { name: 1 }) {results {id}}}`;
      const characters = await runGraphQlQuery(query);
      expect(characters.errors[0].message).to.include("Expected type String");
    });

    it("Query info.count as null, expect to get 'Unknown argument' error message", async () => {
      const query = `query Characters {characters(info: { count: null }) {results {id}}}`;
      const characters = await runGraphQlQuery(query);
      expect(characters.errors[0].message).to.include("Unknown argument");
    });
  });
});