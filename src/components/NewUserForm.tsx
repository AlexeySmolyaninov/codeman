import newUserFormStyles from "./NewUserForm.module.css";
import sharedStyles from "../sharedStyles.module.css";

interface NewUserFormProps {
  setShowNewUserForm: (value: boolean) => void;
}

export const NewUserForm = ({ setShowNewUserForm }: NewUserFormProps) => {
  const closeFormHandler = () => setShowNewUserForm(false);
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
      <form className={newUserFormStyles.form}>
        <fieldset>
          <legend>General Info</legend>
          <input type="text" id="name" placeholder="Full Name" required />

          <input type="text" id="username" placeholder="Username" required />

          <input type="email" id="email" placeholder="Email" required />

          <input type="text" id="phone" placeholder="Phone" required />
        </fieldset>
        <div>
          <fieldset>
            <legend>Address</legend>
            <input type="text" id="street" placeholder="Street" required />

            <input type="text" id="suite" placeholder="Suite" required />

            <input type="text" id="city" placeholder="City" required />

            <input type="text" id="zipcode" placeholder="Zipcode" required />

            <label htmlFor="lat">Latitude</label>
            <input type="number" id="lat" required />

            <label htmlFor="lng">Longtitude</label>
            <input type="number" id="lng" required />
          </fieldset>
        </div>
        <div>
          <fieldset>
            <legend>Company</legend>
            <input type="text" id="name" placeholder="Name" required />

            <input
              type="text"
              id="catch_phrase"
              placeholder="Catch Phrase"
              required
            />

            <input type="text" id="bs" placeholder="Bs" required />
          </fieldset>
        </div>
        <button type="submit">Create</button>
      </form>
    </section>
  );
};
