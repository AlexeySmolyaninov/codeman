import { parseEmail } from "./utils";

describe("utils", () => {
  it("parseEmail", () => {
    const expectedResult = "alex@smol.com";
    const result = parseEmail("AleX@Smol.Com");
    expect(result).toEqual(expectedResult);
  });
});
