import { useEffect, useReducer, useState } from "react";
import { Header } from "./components/Header";
import { NewUserForm } from "./components/NewUserForm";
import { UserList } from "./components/user_list/UserList";
import { AddUserButton } from "./components/AddUserFormButton";
import { userReducer } from "./reducers/userList";
import { User, useGetUsers } from "./customHoocks/getUsers";

export const App = () => {
  const [showNewUserForm, setShowNewUserForm] = useState(false);
  const { users: usersFetched } = useGetUsers();
  const [users, dispatch] = useReducer(userReducer, []);

  useEffect(() => {
    dispatch({
      type: "SET",
      data: usersFetched,
    });
  }, [usersFetched]);

  const handleUserDeletion = (id: number) => {
    dispatch({
      type: "DELETE",
      data: { id },
    });
  };

  const handleCreationOfUser = (user: User) => {
    dispatch({
      type: "ADD",
      data: user,
    });
  };

  return (
    <main style={{ margin: "0 5rem" }}>
      <Header />
      <UserList
        users={users}
        setShowNewUserForm={setShowNewUserForm}
        deleteUserHandler={handleUserDeletion}
      />
      {showNewUserForm ? (
        <NewUserForm
          setShowNewUserForm={setShowNewUserForm}
          handleCreationOfUser={handleCreationOfUser}
        />
      ) : (
        <AddUserButton setShowNewUserForm={setShowNewUserForm} />
      )}
    </main>
  );
};
