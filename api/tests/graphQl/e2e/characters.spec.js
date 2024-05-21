import { expect } from "chai";
import { runGraphQlQuery } from "../../helpers.cjs";

describe("Characters endpoint end to end scenarios", () => {
        it("Query Characters endpoint for character named 'Evil Summer Clone' expect to find same character with same name and image in Character endpoint using found id",async () => {
            let evilSummerClone;
            const charactersQuery = `query Characters {
                characters(filter: { name: "Evil Summer Clone" }) {
                        results {
                                id
                                name
                                image
                        }
                }
            }`;
                const characters = await runGraphQlQuery(charactersQuery);
                evilSummerClone = characters.data.characters.results;
                expect(Number(evilSummerClone[0].id)).to.greaterThan(0);
                
                const characterQuery = `query Character {
                    character(id: ${evilSummerClone[0].id}) {
                        name
                        image
                    }
                }`;
                const character = await runGraphQlQuery(characterQuery);
                expect(evilSummerClone[0].name).to.equal(character.data.character.name);
                expect(evilSummerClone[0].image).to.equal(character.data.character.image);
        });
    });
