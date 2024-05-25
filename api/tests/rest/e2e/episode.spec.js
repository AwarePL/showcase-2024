import { expect } from "chai";
import { runRest, restUrl } from "../../helpers.cjs";

describe("Episode endpoint end to end scenarios", () => {
  let charactersInEpisodeOne;
  before(async () => {
    const data = await runRest("episode/1", "GET");
    charactersInEpisodeOne = data.characters;
  });
  it("Expect all characters found in episode 1 exist in characters endpoint", async () => {
    for (const character of charactersInEpisodeOne) {
      const characterId = character.replace(`${restUrl}character/`, "");
      const data = await runRest(`character/${characterId}`, "GET");
      expect(data.episode[0]).to.include.key("1");
    }
  });
});
