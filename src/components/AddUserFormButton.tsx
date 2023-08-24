import addUserButtonStyles from "./AddUserButton.module.css";
import sharedStyles from "../sharedStyles.module.css";
import { useContext } from "react";
import { UserPannelContext } from "../contexts/UserPanelContextProvider";
import { AddUserIcon } from "../general_ui_components/icons/AddUserIcon";

export const AddUserButton = () => {
  const { setShowNewUserForm } = useContext(UserPannelContext);

  const clickHandler = () => setShowNewUserForm(true);
  return (
    <div className={sharedStyles.container_flex_end}>
      <button
        onClick={clickHandler}
        className={addUserButtonStyles.add_user_button}
      >
        <AddUserIcon />
      </button>
    </div>
  );
};
