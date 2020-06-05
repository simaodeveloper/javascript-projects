import { isPangram } from "./pangram";

describe("isPangram", () => {
  test("should return true given a pandram", () => {
    expect(isPangram("Two driven jocks help fax my big quiz")).toBe(true);
    expect(isPangram("Pack my box with five dozen liquor jugs")).toBe(true);
    expect(isPangram("The five boxing wizards jump quickly")).toBe(true);
    expect(isPangram("Bright vixens jump; dozy fowl quack")).toBe(true);
    expect(isPangram("Jackdaws love my big sphinx of quartz")).toBe(true);
    expect(isPangram("Jackdaws lve my big sphinx f quartz")).toBe(false);
  });
});
