import newUserFormStyles from "./NewUserForm.module.css";
import sharedStyles from "../sharedStyles.module.css";
import { FormEvent, useState } from "react";
import { User } from "../App";

interface NewUserFormProps {
  setShowNewUserForm: (value: boolean) => void;
  handleCreationOfUser: (user: User) => void;
}

export const NewUserForm = ({
  setShowNewUserForm,
  handleCreationOfUser,
}: NewUserFormProps) => {
  const closeFormHandler = () => setShowNewUserForm(false);
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  const [street, setStreet] = useState("");
  const [suite, setSuite] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [latitude, setLatitude] = useState("0");
  const [longtitude, setLongtitude] = useState("0");

  const [companyName, setCompanyName] = useState("");
  const [catchPhrase, setCatchPhrase] = useState("");
  const [bs, setBs] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const newUser: User = {
      id: Math.random() * 100000,
      name: fullName,
      username,
      email,
      phone,
      website,
      address: {
        street,
        suite,
        city,
        zipcode,
        geo: {
          lat: latitude,
          lng: longtitude,
        },
      },
      company: {
        name: companyName,
        catchPhrase,
        bs,
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={newUserFormStyles.close_svg}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h2>New User</h2>
      <form
        id="add_user"
        className={newUserFormStyles.form}
        onSubmit={handleSubmit}
      >
        <fieldset className={newUserFormStyles.fieldset}>
          <legend>General Info</legend>
          <input
            type="text"
            id="name"
            placeholder="Full Name"
            required
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />

          <input
            type="text"
            id="username"
            placeholder="Username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />

          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            type="text"
            id="phone"
            placeholder="Phone"
            required
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />

          <input
            type="text"
            id="website"
            placeholder="Website"
            required
            value={website}
            onChange={(event) => setWebsite(event.target.value)}
          />
        </fieldset>
        <fieldset className={newUserFormStyles.fieldset}>
          <legend>Address</legend>
          <input
            type="text"
            id="street"
            placeholder="Street"
            required
            value={street}
            onChange={(event) => setStreet(event.target.value)}
          />

          <input
            type="text"
            id="suite"
            placeholder="Suite"
            required
            value={suite}
            onChange={(event) => setSuite(event.target.value)}
          />

          <input
            type="text"
            id="city"
            placeholder="City"
            required
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />

          <input
            type="text"
            id="zipcode"
            placeholder="Zipcode"
            required
            value={zipcode}
            onChange={(event) => setZipcode(event.target.value)}
          />
          <div className={newUserFormStyles.lat_lng_group}>
            <div className={sharedStyles.conatiner_flex_direction_column}>
              <label htmlFor="lat">Latitude</label>
              <input
                type="number"
                id="lat"
                required
                value={latitude}
                onChange={(event) => setLatitude(event.target.value)}
              />
            </div>
            <div className={sharedStyles.conatiner_flex_direction_column}>
              <label htmlFor="lng">Longtitude</label>
              <input
                type="number"
                id="lng"
                required
                value={longtitude}
                onChange={(event) => setLongtitude(event.target.value)}
              />
            </div>
          </div>
        </fieldset>
        <fieldset className={newUserFormStyles.fieldset}>
          <legend>Company</legend>
          <input
            type="text"
            id="name"
            placeholder="Name"
            required
            value={companyName}
            onChange={(event) => setCompanyName(event.target.value)}
          />

          <input
            type="text"
            id="catch_phrase"
            placeholder="Catch Phrase"
            required
            value={catchPhrase}
            onChange={(event) => setCatchPhrase(event.target.value)}
          />

          <input
            type="text"
            id="bs"
            placeholder="Bs"
            required
            value={bs}
            onChange={(event) => setBs(event.target.value)}
          />
        </fieldset>
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
