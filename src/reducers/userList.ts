import { User } from "../App";

type AddUserAction = {
  type: "ADD";
  data: User;
};

type DeleteUserAction = {
  type: "DELETE";
  data: { id: number };
};

export const userReducer = (
  state: User[],
  action: AddUserAction | DeleteUserAction
) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.data];
    case "DELETE":
      return state.filter((user) => user.id !== action.data.id);
  }
};
