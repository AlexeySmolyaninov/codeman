import styles from "./NewUserForm.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import { Address } from "../../customHoocks/getUsers";
import { AddressDispatcher } from "../../reducers/newUserForm";

interface AddressFieldsetProps {
  address: Address;
  dispatch: AddressDispatcher;
}

export const AddressFieldset = ({
  address,
  dispatch,
}: AddressFieldsetProps) => {
  return (
    <fieldset className={styles.fieldset}>
      <legend>Address</legend>
      <input
        type="text"
        id="street"
        placeholder="Street"
        name="street"
        required
        value={address.street}
        onChange={(event) =>
          dispatch({ type: "SET_STREET", data: event.target.value })
        }
      />

      <input
        type="text"
        id="suite"
        placeholder="Suite"
        name="suite"
        required
        value={address.suite}
        onChange={(event) =>
          dispatch({ type: "SET_SUITE", data: event.target.value })
        }
      />

      <input
        type="text"
        id="city"
        placeholder="City"
        name="city"
        required
        value={address.city}
        onChange={(event) =>
          dispatch({ type: "SET_CITY", data: event.target.value })
        }
      />

      <input
        type="text"
        id="zipcode"
        placeholder="Zipcode"
        name="zipcode"
        required
        value={address.zipcode}
        onChange={(event) =>
          dispatch({ type: "SET_ZIPCODE", data: event.target.value })
        }
      />
      <div className={styles.lat_lng_group}>
        <div className={sharedStyles.conatiner_flex_direction_column}>
          <label htmlFor="lat">Latitude</label>
          <input
            type="number"
            id="lat"
            name="lat"
            required
            value={address.geo.lat}
            onChange={(event) =>
              dispatch({ type: "SET_LAT", data: event.target.value })
            }
          />
        </div>
        <div className={sharedStyles.conatiner_flex_direction_column}>
          <label htmlFor="lng">Longtitude</label>
          <input
            type="number"
            id="lng"
            name="lng"
            required
            value={address.geo.lng}
            onChange={(event) =>
              dispatch({ type: "SET_LNG", data: event.target.value })
            }
          />
        </div>
      </div>
    </fieldset>
  );
};
