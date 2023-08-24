import { Company } from "../../customHoocks/getUsers";
import { CompanyDispatcher } from "../../reducers/newUserForm";
import style from "./NewUserForm.module.css";

interface CompanyFieldsetProps {
  company: Company;
  dispatch: CompanyDispatcher;
}

export const CompanyFieldset = ({
  company,
  dispatch,
}: CompanyFieldsetProps) => {
  return (
    <fieldset className={style.fieldset}>
      <legend>Company</legend>
      <input
        type="text"
        id="name"
        placeholder="Name"
        name="company_name"
        required
        value={company.name}
        onChange={(event) =>
          dispatch({ type: "SET_COMPANY_NAME", data: event.target.value })
        }
      />

      <input
        type="text"
        id="catch_phrase"
        placeholder="Catch Phrase"
        name="catch_phrase"
        required
        value={company.catchPhrase}
        onChange={(event) =>
          dispatch({ type: "SET_CATCH_PHRASE", data: event.target.value })
        }
      />

      <input
        type="text"
        id="bs"
        placeholder="Bs"
        name="bs"
        required
        value={company.bs}
        onChange={(event) =>
          dispatch({ type: "SET_BS", data: event.target.value })
        }
      />
    </fieldset>
  );
};
