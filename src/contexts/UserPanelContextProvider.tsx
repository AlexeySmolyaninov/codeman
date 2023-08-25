import {
  PropsWithChildren,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { User, useGetUsers } from "../customHoocks/getUsers";
import { userReducer } from "../reducers/userList";

type UserPanelContextType = {
  users: User[];
  showNewUserForm: boolean;
  setShowNewUserForm: (value: boolean) => void;
  handleUserDeletion: (id: number) => void;
  handleCreationOfUser: (user: User) => void;
};

export const UserPannelContext = createContext<UserPanelContextType>({
  users: [],
  showNewUserForm: false,
  setShowNewUserForm: () => {},
  handleUserDeletion: () => {},
  handleCreationOfUser: () => {},
});

export const UserPannelProvider = ({ children }: PropsWithChildren) => {
  const [showNewUserForm, setShowNewUserForm] = useState(false);
  const { users: usersFetched } = useGetUsers();
  const [users, dispatch] = useReducer(userReducer, []);

  const handleUserDeletion = (id: number) => {
    dispatch({
      type: "DELETE",
      data: id,
    });
  };

  const handleCreationOfUser = (user: User) => {
    dispatch({
      type: "ADD",
      data: user,
    });
  };

  const handleSetUsers = (usersFetched: User[]) => {
    dispatch({
      type: "SET",
      data: usersFetched,
    });
  };

  useEffect(() => {
    handleSetUsers(usersFetched);
  }, [usersFetched]);

  return (
    <UserPannelContext.Provider
      value={{
        users,
        showNewUserForm,
        setShowNewUserForm,
        handleUserDeletion,
        handleCreationOfUser,
      }}
    >
      {children}
    </UserPannelContext.Provider>
  );
};
