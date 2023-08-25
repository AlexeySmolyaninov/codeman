import { faker } from "@faker-js/faker";
import { Address, Company, GeneralInfo, User } from "../customHoocks/getUsers";

export const createRandomGeneralInfo = (): GeneralInfo => {
  return {
    name: `${faker.person.firstName()} ${faker.person.lastName()}`,
    username: faker.internet.userName(),
    phone: faker.phone.number(),
    website: faker.internet.domainName(),
    email: faker.internet.email(),
  };
};

export const createRandomAddress = (): Address => {
  return {
    street: faker.location.street(),
    suite: faker.location.buildingNumber(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode(),
    geo: {
      lat: faker.location.latitude().toString(),
      lng: faker.location.longitude().toString(),
    },
  };
};

export const createRandomCompany = (): Company => {
  return {
    name: faker.company.name(),
    catchPhrase: faker.company.catchPhrase(),
    bs: faker.company.buzzNoun(),
  };
};

export const createRandomUser = (): User => {
  return {
    id: faker.number.int({ min: 0, max: 1000 }),
    ...createRandomGeneralInfo(),
    address: {
      ...createRandomAddress(),
    },
    company: {
      ...createRandomCompany(),
    },
  };
};
