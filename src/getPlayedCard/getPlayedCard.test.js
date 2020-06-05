import { getCard } from "./getPlayedCard";

describe("getPlayedCard", () => {
  test("should return a random card", () => {
    const card = getCard();
    expect(card).not.toBeUndefined();
    expect(typeof card).toBe("object");
    expect(Object.keys(card)).toEqual(
      expect.arrayContaining(["value", "suit"])
    );
  });
});
