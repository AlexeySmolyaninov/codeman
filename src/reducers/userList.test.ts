import { createRandomUser } from "../mocks/users";
import { userReducer } from "./userList";

describe("userReducer", () => {
  it("set users when list is empty", () => {
    const user1 = createRandomUser();
    const user2 = createRandomUser();
    const expectedResult = [user1, user2];
    const result = userReducer([], { type: "SET", data: [user1, user2] });
    expect(result).toEqual(expectedResult);
  });

  it("set users when list is not empty", () => {
    const user1 = createRandomUser();
    const user2 = createRandomUser();
    const user3 = createRandomUser();
    const expectedResult = [user2, user3];
    const result = userReducer([user1], { type: "SET", data: [user2, user3] });
    expect(result).toEqual(expectedResult);
  });

  it("add user", () => {
    const user1 = createRandomUser();
    const user2 = createRandomUser();
    const expectedResult = [user1, user2];
    const result = userReducer([user1], { type: "ADD", data: user2 });
    expect(result).toEqual(expectedResult);
  });

  it("delete user", () => {
    const user1 = createRandomUser();
    const user2 = createRandomUser();
    const expectedResult = [user1];
    const result = userReducer([user1, user2], {
      type: "DELETE",
      data: user2.id,
    });
    expect(result).toEqual(expectedResult);
  });
});
