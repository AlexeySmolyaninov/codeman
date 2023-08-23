import { User } from "../../App";
import userListStyles from "./UserList.module.css";
import sharedStyles from "../../sharedStyles.module.css";

interface UserDaitlsProps {
  user: User;
  setShowExpandedUserInformation: (show: boolean) => void;
  deleteUserHandler: (id: number) => void;
}

export const UserDetails = ({
  user,
  setShowExpandedUserInformation,
  deleteUserHandler,
}: UserDaitlsProps) => {
  const closeDropDownHandler = () => setShowExpandedUserInformation(false);
  return (
    <tr>
      <td
        colSpan={6}
        className={userListStyles.user_list_td}
        style={{ textAlign: "left" }}
      >
        <div className={sharedStyles.conatiner_flex_direction_column}>
          <div style={{ alignSelf: "end", paddingRight: "2rem" }}>
            <button
              onClick={closeDropDownHandler}
              className={`${userListStyles.button} ${userListStyles.user_list_chevron_up}`}
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div className={userListStyles.user_detail_section}>
              <h2 className={userListStyles.section_h2}>General Info</h2>
              <ul className={userListStyles.section_list}>
                <li>Name: {user.name}</li>
                <li>Username: {user.username}</li>
                <li>Email: {user.email}</li>
                <li>Phone: {user.phone}</li>
              </ul>
            </div>
            <div className={userListStyles.user_detail_section}>
              <h2 className={userListStyles.section_h2}>Address</h2>
              <ul className={userListStyles.section_list}>
                <li>Street: {user.address.street}</li>
                <li>Suite: {user.address.suite}</li>
                <li>City: {user.address.city}</li>
                <li>Zipcode: {user.address.zipcode}</li>
                <li>Latitude: {user.address.geo.lat}</li>
                <li>Longtitude: {user.address.geo.lng}</li>
              </ul>
            </div>
            <div className={userListStyles.user_detail_section}>
              <h2 className={userListStyles.section_h2}>Company</h2>
              <ul className={userListStyles.section_list}>
                <li>Name: {user.company.name}</li>
                <li>Catch Phrase: {user.company.catchPhrase}</li>
                <li>Bs: {user.company.bs}</li>
              </ul>
            </div>
          </div>
          <button
            className={userListStyles.delete_user_button}
            onClick={() => deleteUserHandler(user.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};
