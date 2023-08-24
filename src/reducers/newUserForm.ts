import { Dispatch } from "react";
import { Address, Company, GeneralInfo } from "../customHoocks/getUsers";

export type GeneralInfoDispatcher = Dispatch<
  SetName | SetUsername | SetEmail | SetPhone | SetWebsite
>;

type SetName = {
  type: "SET_NAME";
  data: string;
};

type SetUsername = {
  type: "SET_USERNAME";
  data: string;
};

type SetEmail = {
  type: "SET_EMAIL";
  data: string;
};

type SetPhone = {
  type: "SET_PHONE";
  data: string;
};

type SetWebsite = {
  type: "SET_WEBSITE";
  data: string;
};

export const generalInfoReducer = (
  state: GeneralInfo,
  action: SetName | SetUsername | SetEmail | SetPhone | SetWebsite
): GeneralInfo => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.data };
    case "SET_USERNAME":
      return { ...state, username: action.data };
    case "SET_EMAIL":
      return { ...state, email: action.data };
    case "SET_PHONE":
      return { ...state, phone: action.data };
    case "SET_WEBSITE":
      return { ...state, website: action.data };
  }
};

export type AddressDispatcher = Dispatch<
  SetStreet | SetSuite | SetCity | SetZipcode | SetLat | SetLng
>;

type SetStreet = {
  type: "SET_STREET";
  data: string;
};

type SetSuite = {
  type: "SET_SUITE";
  data: string;
};

type SetCity = {
  type: "SET_CITY";
  data: string;
};

type SetZipcode = {
  type: "SET_ZIPCODE";
  data: string;
};

type SetLat = {
  type: "SET_LAT";
  data: string;
};

type SetLng = {
  type: "SET_LNG";
  data: string;
};

export const addressReducer = (
  state: Address,
  action: SetStreet | SetSuite | SetCity | SetZipcode | SetLat | SetLng
): Address => {
  switch (action.type) {
    case "SET_STREET":
      return { ...state, street: action.data };
    case "SET_SUITE":
      return { ...state, suite: action.data };
    case "SET_CITY":
      return { ...state, city: action.data };
    case "SET_ZIPCODE":
      return { ...state, zipcode: action.data };
    case "SET_LAT":
      return { ...state, geo: { ...state.geo, lat: action.data } };
    case "SET_LNG":
      return { ...state, geo: { ...state.geo, lng: action.data } };
  }
};

export type CompanyDispatcher = Dispatch<
  SetCompanyName | SetCatchPhrase | SetBs
>;

type SetCompanyName = {
  type: "SET_COMPANY_NAME";
  data: string;
};

type SetCatchPhrase = {
  type: "SET_CATCH_PHRASE";
  data: string;
};

type SetBs = {
  type: "SET_BS";
  data: string;
};

export const companyReducer = (
  state: Company,
  action: SetCompanyName | SetCatchPhrase | SetBs
): Company => {
  switch (action.type) {
    case "SET_COMPANY_NAME":
      return { ...state, name: action.data };
    case "SET_CATCH_PHRASE":
      return { ...state, catchPhrase: action.data };
    case "SET_BS":
      return { ...state, bs: action.data };
  }
};
