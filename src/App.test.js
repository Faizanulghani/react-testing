import User from "./User";

test("getUserList returns correct value", () => {
  const userInstance = new User({});
  expect(userInstance.getUserList()).toBe("user list");
});
