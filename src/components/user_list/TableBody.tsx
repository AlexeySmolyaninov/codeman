import { useState } from "react";
import { User } from "../../App";
import userListStyles from "./UserList.module.css";
import { UserDetails } from "./UserDetails";

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
      <td className={userListStyles.user_list_td}>{user.email}</td>
      <td className={userListStyles.user_list_td}>
        {user.address.street}, {user.address.city}
      </td>
      <td className={userListStyles.user_list_td}>{user.phone}</td>
      <td className={userListStyles.user_list_td}>{user.website}</td>
      <td className={userListStyles.user_list_td}>
        <button
          onClick={onChevronClickHandler}
          className={userListStyles.button}
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={userListStyles.user_list_chevron_down_icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};
