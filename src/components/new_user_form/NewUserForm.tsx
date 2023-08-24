import newUserFormStyles from "./NewUserForm.module.css";
import sharedStyles from "../../sharedStyles.module.css";
import { FormEvent, useContext, useReducer } from "react";
import { User } from "../../customHoocks/getUsers";
import { UserPannelContext } from "../../contexts/UserPanelContextProvider";
import { CloseFormIcon } from "../../general_ui_components/icons/CloseFormIcon";
import {
  addressReducer,
  companyReducer,
  generalInfoReducer,
} from "../../reducers/newUserForm";
import { GeneralInfoFieldset } from "./GeneralInfoFieldset";
import { AddressFieldset } from "./AddressFieldset";
import { CompanyFieldset } from "./CompanyFieldset";

export const NewUserForm = () => {
  const { setShowNewUserForm, handleCreationOfUser } =
    useContext(UserPannelContext);

  const [generalInfo, generalInfoDispatcher] = useReducer(generalInfoReducer, {
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const [address, addressDispatcher] = useReducer(addressReducer, {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: { lat: "0", lng: "0" },
  });

  const [company, companyDispatcher] = useReducer(companyReducer, {
    name: "",
    catchPhrase: "",
    bs: "",
  });

  const closeFormHandler = () => setShowNewUserForm(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const newUser: User = {
      id: Math.round(Math.random() * 100000),
      ...generalInfo,
      address: {
        ...address,
      },
      company: {
        ...company,
      },
    };
    handleCreationOfUser(newUser);
    setShowNewUserForm(false);
  };
  return (
    <section className={newUserFormStyles.section}>
      <button
        onClick={closeFormHandler}
        className={`${newUserFormStyles.close_button} ${sharedStyles.flex_align_justify_center}`}
      >
        <CloseFormIcon />
      </button>
      <h2>New User</h2>
      <form
        id="add_user"
        className={newUserFormStyles.form}
        onSubmit={handleSubmit}
      >
        <GeneralInfoFieldset
          generalInfo={generalInfo}
          dispatch={generalInfoDispatcher}
        />
        <AddressFieldset address={address} dispatch={addressDispatcher} />
        <CompanyFieldset company={company} dispatch={companyDispatcher} />
      </form>
      <div className={newUserFormStyles.submit_button_container}>
        <button
          type="submit"
          form="add_user"
          className={newUserFormStyles.submit_button}
        >
          Add User
        </button>
      </div>
    </section>
  );
};
