import { faker } from "@faker-js/faker";
import { Address, Company, GeneralInfo } from "../customHoocks/getUsers";
import {
  addressReducer,
  companyReducer,
  generalInfoReducer,
} from "./newUserForm";

const generalInfoTemplate: GeneralInfo = {
  name: "",
  username: "",
  email: "",
  phone: "",
  website: "",
};

const addressTemplate: Address = {
  street: "",
  suite: "",
  city: "",
  zipcode: "",
  geo: { lat: "", lng: "" },
};

const companyTemplate: Company = {
  name: "",
  catchPhrase: "",
  bs: "",
};

describe("general info reducer", () => {
  it("set name", () => {
    const name = faker.person.fullName();
    const result = generalInfoReducer(generalInfoTemplate, {
      type: "SET_NAME",
      data: name,
    });
    expect(result).toEqual({ ...generalInfoTemplate, name });
  });

  it("set username", () => {
    const username = faker.internet.userName();
    const result = generalInfoReducer(generalInfoTemplate, {
      type: "SET_USERNAME",
      data: username,
    });
    expect(result).toEqual({ ...generalInfoTemplate, username });
  });

  it("set email", () => {
    const email = faker.internet.email();
    const result = generalInfoReducer(generalInfoTemplate, {
      type: "SET_EMAIL",
      data: email,
    });
    expect(result).toEqual({ ...generalInfoTemplate, email });
  });

  it("set phone", () => {
    const phone = faker.phone.number();
    const result = generalInfoReducer(generalInfoTemplate, {
      type: "SET_PHONE",
      data: phone,
    });
    expect(result).toEqual({ ...generalInfoTemplate, phone });
  });

  it("set website", () => {
    const website = faker.internet.domainName();
    const result = generalInfoReducer(generalInfoTemplate, {
      type: "SET_WEBSITE",
      data: website,
    });
    expect(result).toEqual({ ...generalInfoTemplate, website });
  });
});

describe("address reducer", () => {
  it("set street", () => {
    const street = faker.location.street();
    const result = addressReducer(addressTemplate, {
      type: "SET_STREET",
      data: street,
    });
    expect(result).toEqual({ ...addressTemplate, street });
  });

  it("set suite", () => {
    const suite = faker.location.buildingNumber();
    const result = addressReducer(addressTemplate, {
      type: "SET_SUITE",
      data: suite,
    });
    expect(result).toEqual({ ...addressTemplate, suite });
  });

  it("set city", () => {
    const city = faker.location.city();
    const result = addressReducer(addressTemplate, {
      type: "SET_CITY",
      data: city,
    });
    expect(result).toEqual({ ...addressTemplate, city });
  });

  it("set zipcode", () => {
    const zipcode = faker.location.zipCode();
    const result = addressReducer(addressTemplate, {
      type: "SET_ZIPCODE",
      data: zipcode,
    });
    expect(result).toEqual({ ...addressTemplate, zipcode });
  });

  it("set latitude", () => {
    const latitude = faker.location.latitude().toString();
    const result = addressReducer(addressTemplate, {
      type: "SET_LAT",
      data: latitude,
    });
    expect(result).toEqual({
      ...addressTemplate,
      geo: { ...addressTemplate.geo, lat: latitude },
    });
  });

  it("set longitude", () => {
    const longitude = faker.location.longitude().toString();
    const result = addressReducer(addressTemplate, {
      type: "SET_LNG",
      data: longitude,
    });
    expect(result).toEqual({
      ...addressTemplate,
      geo: { ...addressTemplate.geo, lng: longitude },
    });
  });
});

describe("company reducer", () => {
  it("set name", () => {
    const name = faker.company.name();
    const result = companyReducer(companyTemplate, {
      type: "SET_COMPANY_NAME",
      data: name,
    });
    expect(result).toEqual({ ...companyTemplate, name });
  });

  it("set catch phrase", () => {
    const catchPhrase = faker.company.catchPhrase();
    const result = companyReducer(companyTemplate, {
      type: "SET_CATCH_PHRASE",
      data: catchPhrase,
    });
    expect(result).toEqual({ ...companyTemplate, catchPhrase });
  });

  it("set bs", () => {
    const bs = faker.company.buzzNoun();
    const result = companyReducer(companyTemplate, {
      type: "SET_BS",
      data: bs,
    });
    expect(result).toEqual({ ...companyTemplate, bs });
  });
});
