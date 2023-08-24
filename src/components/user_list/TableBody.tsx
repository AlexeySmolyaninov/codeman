import { useState } from "react";
import userListStyles from "./UserList.module.css";
import { UserDetails } from "./UserDetails";
import { parseEmail } from "../../utils";
import { User } from "../../customHoocks/getUsers";
import { ChevronDownIcon } from "../../general_ui_components/icons/ChevronDownIcon";

interface TableBodyProps {
  users: User[];
  deleteUserHandler: (id: number) => void;
}

export const TableBody = ({ users, deleteUserHandler }: TableBodyProps) => {
  return (
    <tbody>
      {users.map((user) => {
        return (
          <TableRow
            key={user.id}
            user={user}
            deleteUserHandler={deleteUserHandler}
          />
        );
      })}
    </tbody>
  );
};

interface TableRowProps {
  user: User;
  deleteUserHandler: (id: number) => void;
}

const TableRow = ({ user, deleteUserHandler }: TableRowProps) => {
  const [showExpandedUserInformation, setShowExpandedUserInformation] =
    useState(false);

  const onChevronClickHandler = () =>
    setShowExpandedUserInformation(!showExpandedUserInformation);

  if (showExpandedUserInformation) {
    return (
      <UserDetails
        key={user.id}
        user={user}
        setShowExpandedUserInformation={setShowExpandedUserInformation}
        deleteUserHandler={deleteUserHandler}
      />
    );
  }
  return (
    <tr>
      <td className={userListStyles.user_list_td}>{user.name}</td>
      <td className={userListStyles.user_list_td}>{parseEmail(user.email)}</td>
      <td className={userListStyles.user_list_td}>
        {user.address.street}, {user.address.city}, {user.address.zipcode}
      </td>
      <td className={userListStyles.user_list_td}>{user.phone}</td>
      <td className={userListStyles.user_list_td}>{user.website}</td>
      <td className={userListStyles.user_list_td}>
        <button
          onClick={onChevronClickHandler}
          className={userListStyles.button}
        >
          <ChevronDownIcon />
        </button>
      </td>
    </tr>
  );
};
