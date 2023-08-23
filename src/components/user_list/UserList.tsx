import { User } from "../../App";
import userListStyles from "./UserList.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import { TableBody } from "./TableBody";
import { TableHead } from "./TableHead";

interface UserListProps {
  users: User[];
  setShowNewUserForm: (value: boolean) => void;
  deleteUserHandler: (id: number) => void;
}

export const UserList = ({ users, deleteUserHandler }: UserListProps) => {
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
        <TableBody users={users} deleteUserHandler={deleteUserHandler} />
      </table>
    </section>
  );
};
