import { expect } from "chai";
import { runRest } from "../../helpers.cjs";

describe("Positive Smoke Test for Episode endpoint", () => {
  describe("Query Episode endpoint for all episodes", () => {
    let episodes;
    let info;
    before(async () => {
      const data = await runRest("episode", "GET");
      episodes = data.results;
      info = data.info;
    });
    it("Expect to find at least 19 episodes on first page", () => {
      expect(episodes.length).to.be.greaterThanOrEqual(19);
    });
    it("Expect first episode to have a name 'Pilot' and ep code 'S01E01'", () => {
      expect(episodes[0].name).to.equal("Pilot");
      expect(episodes[0].episode).to.equal("S01E01");
    });
    it("Expect to last page to have correct amount of episodes, next page to be null and prev current page -1", async () => {
      const lastPage = await runRest(`episode?page=${info.pages}`, "GET");
      expect(lastPage.results.length).to.be.equal(
        info.count - (info.pages - 1) * episodes.length,
      );
      expect(lastPage.info.next).to.be.null;
      expect(lastPage.info.prev).to.contain(info.pages - 1);
    });
  });
});

describe("Negative Smoke Test for Episode endpoint", () => {
  describe("run not allowed methods, use invalid episode id", () => {
    const methods = ["POST", "PATCH", "PUT", "DELETE"];

    for (const method of methods) {
      it(`Expect to return error 'There is nothing here.' for method ${method}`, async () => {
        const data = await runRest("episode", method);
        expect(data.error).to.be.equal("There is nothing here.");
      });
    }
    it("Expect to return error 'Episode not found' for invalid episode id", async () => {
      const data = await runRest("episode/999999", "GET");
      expect(data.error).to.be.equal("Episode not found");
    });

    it("Expect to return error 'Hey! you must provide an id' for invalid episode id", async () => {
      const data = await runRest("episode/invalid", "GET");
      expect(data.error).to.be.equal("Hey! you must provide an id");
    });
  });
});
