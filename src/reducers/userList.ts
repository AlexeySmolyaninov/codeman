import { User } from "../customHoocks/getUsers";

type AddUserAction = {
  type: "ADD";
  data: User;
};

type DeleteUserAction = {
  type: "DELETE";
  data: { id: number };
};

type SetUserAction = {
  type: "SET";
  data: User[];
};

export const userReducer = (
  state: User[],
  action: AddUserAction | DeleteUserAction | SetUserAction
): User[] => {
  switch (action.type) {
    case "SET":
      return action.data;
    case "ADD":
      return [...state, action.data];
    case "DELETE":
      return state.filter((user) => user.id !== action.data.id);
  }
};
