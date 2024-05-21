import { expect } from "chai";
import { runGraphQlQuery } from "../../helpers.cjs";

describe("Query Characters for all chatacters named Rick who are male, human and alive", () => {
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
