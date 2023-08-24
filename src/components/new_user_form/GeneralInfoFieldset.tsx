import { GeneralInfoDispatcher } from "../../reducers/newUserForm";
import styles from "./NewUserForm.module.css";
import { GeneralInfo } from "../../customHoocks/getUsers";

interface GeneralInfoProps {
  generalInfo: GeneralInfo;
  dispatch: GeneralInfoDispatcher;
}

export const GeneralInfoFieldset = ({
  generalInfo,
  dispatch,
}: GeneralInfoProps) => {
  return (
    <fieldset className={styles.fieldset}>
      <legend>General Info</legend>
      <input
        type="text"
        id="name"
        placeholder="Full Name"
        name="full_name"
        required
        value={generalInfo.name}
        onChange={(event) =>
          dispatch({ type: "SET_NAME", data: event.target.value })
        }
      />

      <input
        type="text"
        id="username"
        placeholder="Username"
        name="username"
        required
        value={generalInfo.username}
        onChange={(event) =>
          dispatch({ type: "SET_USERNAME", data: event.target.value })
        }
      />

      <input
        type="email"
        id="email"
        placeholder="Email"
        name="email"
        required
        value={generalInfo.email}
        onChange={(event) =>
          dispatch({ type: "SET_EMAIL", data: event.target.value })
        }
      />

      <input
        type="text"
        id="phone"
        placeholder="Phone"
        name="phone"
        required
        value={generalInfo.phone}
        onChange={(event) =>
          dispatch({ type: "SET_PHONE", data: event.target.value })
        }
      />

      <input
        type="text"
        id="website"
        placeholder="Website"
        name="website"
        required
        value={generalInfo.website}
        onChange={(event) =>
          dispatch({ type: "SET_WEBSITE", data: event.target.value })
        }
      />
    </fieldset>
  );
};
