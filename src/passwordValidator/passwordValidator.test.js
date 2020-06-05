import { isValidPassword } from "./passwordValidator.js";

describe("isValidPassword", () => {
  test("should be a function", () => {
    expect(typeof isValidPassword).toBe("function");
  });

  test("should receive a password and an username as a parameters", () => {
    expect(isValidPassword.length).toEqual(2);
  });

  test("should return false if password have less then 8 characters", () => {
    const password = "123456";
    expect(isValidPassword(password)).toBe(false);
  });

  test("should return false if password have spaces", () => {
    const password = "123 45  6";
    expect(isValidPassword(password)).toBe(false);
  });

  test("should return false if password have concatened username", () => {
    const username = "user123";
    const password = `123${username}456`;
    expect(isValidPassword(password, username)).toBe(false);
  });

  test("should return true if password are valid", () => {
    const password = "mdu&$¨!çk";
    const username = "user123";
    expect(isValidPassword(password, username)).toBe(true);
  });
});
