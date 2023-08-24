import userListStyles from "./UserList.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";
import { useContext } from "react";
import { UserPannelContext } from "../../contexts/UserPanelContextProvider";

// interface UserListProps {
//   users: User[];
//   setShowNewUserForm: (value: boolean) => void;
//   deleteUserHandler: (id: number) => void;
// }

export const UserList = () => {
  const { users, handleUserDeletion } = useContext(UserPannelContext);
  return (
    <section
      className={sharedStyles.container_centered}
      style={{
        borderRadius: ".3rem",
        boxShadow: ".1rem .2rem .6rem 0 rgba(0,0,0,0.3)",
        marginBottom: "1.6rem",
      }}
    >
      <table className={userListStyles.user_list}>
        <TableHead />
        <TableBody users={users} deleteUserHandler={handleUserDeletion} />
      </table>
    </section>
  );
};
