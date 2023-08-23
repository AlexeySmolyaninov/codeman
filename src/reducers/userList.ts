import { User } from "../App";

type Action = {
  type: "ADD" | "DELETE";
  data: User;
};

export const userReducer = (state: User[], action: Action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.data];
    case "DELETE":
      return state.filter((user) => user.id !== action.data.id);
    default:
      throw Error(`user reducer doens't know action type ${action.type}`);
  }
};
