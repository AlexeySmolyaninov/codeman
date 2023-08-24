import { useContext } from "react";
import { AddUserButton } from "./AddUserFormButton";
import { Header } from "./Header";
import { NewUserForm } from "./NewUserForm";
import { UserList } from "./user_list/UserList";
import { UserPannelContext } from "../contexts/UserPannelContextProvider";

export const UserPannel = () => {
  const { showNewUserForm } = useContext(UserPannelContext);
  return (
    <main style={{ margin: "0 5rem" }}>
      <Header />
      <UserList />
      {!showNewUserForm && <AddUserButton />}
      {showNewUserForm && <NewUserForm />}
    </main>
  );
};
