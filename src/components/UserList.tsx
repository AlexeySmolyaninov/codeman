import { User } from "../App";
import userListStyles from "./UserList.module.css";
import sharedStyles from "../sharedStyles.module.css";
import { useState } from "react";

interface UserListProps {
  users: User[];
  setShowNewUserForm: (value: boolean) => void;
}

export const UserList = ({ users }: UserListProps) => {
  return (
    <div className={sharedStyles.container_centered}>
      <table className={userListStyles.user_list}>
        <TableHead />
        <TableBody users={users} />
      </table>
    </div>
  );
};

interface TableBodyProps {
  users: User[];
}

const TableBody = ({ users }: TableBodyProps) => {
  return (
    <tbody>
      {users.map((user) => {
        return <TableRow key={user.id} user={user} />;
      })}
    </tbody>
  );
};

const TableHead = () => {
  return (
    <thead className={userListStyles.user_list_thead}>
      <tr>
        <th className={userListStyles.user_list_thead_th}>Name</th>
        <th className={userListStyles.user_list_thead_th}>Email</th>
        <th className={userListStyles.user_list_thead_th}>Address</th>
        <th className={userListStyles.user_list_thead_th}>Phone</th>
        <th className={userListStyles.user_list_thead_th}>Website</th>
        <th className={userListStyles.user_list_thead_th}></th>
      </tr>
    </thead>
  );
};

interface TableRowProps {
  user: User;
}

const TableRow = ({ user }: TableRowProps) => {
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
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={userListStyles.user_list_chevron_down_icon}
          onClick={onChevronClickHandler}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </td>
    </tr>
  );
};

interface UserDaitlsProps {
  user: User;
  setShowExpandedUserInformation: (show: boolean) => void;
}

const UserDetails = ({
  user,
  setShowExpandedUserInformation,
}: UserDaitlsProps) => {
  return (
    <tr>
      <td
        colSpan={6}
        className={userListStyles.user_list_td}
        style={{ textAlign: "left" }}
      >
        <div className={sharedStyles.conatiner_flex_direction_column}>
          <div style={{ alignSelf: "end", paddingRight: "2rem" }}>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              onClick={() => setShowExpandedUserInformation(false)}
              className={userListStyles.user_list_chevron_up}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <section className={userListStyles.user_detail_section}>
              <h2 className={userListStyles.section_h2}>General Info</h2>
              <ul className={userListStyles.section_list}>
                <li>Name: {user.name}</li>
                <li>Username: {user.username}</li>
                <li>Email: {user.email}</li>
                <li>Phone: {user.phone}</li>
              </ul>
            </section>
            <section className={userListStyles.user_detail_section}>
              <h2 className={userListStyles.section_h2}>Address</h2>
              <ul className={userListStyles.section_list}>
                <li>Street: {user.address.street}</li>
                <li>Suite: {user.address.suite}</li>
                <li>City: {user.address.city}</li>
                <li>Zipcode: {user.address.zipcode}</li>
                <li>Latitude: {user.address.geo.lat}</li>
                <li>Longtitude: {user.address.geo.lng}</li>
              </ul>
            </section>
            <section className={userListStyles.user_detail_section}>
              <h2 className={userListStyles.section_h2}>Company</h2>
              <ul className={userListStyles.section_list}>
                <li>Name: {user.company.name}</li>
                <li>Catch Phrase: {user.company.catchPhrase}</li>
                <li>Bs: {user.company.bs}</li>
              </ul>
            </section>
          </div>
        </div>
      </td>
    </tr>
  );
};
