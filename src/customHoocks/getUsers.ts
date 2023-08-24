import { useEffect, useState } from "react";

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
};

const USERS_PATH = "https://jsonplaceholder.typicode.com/users";

export const useGetUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(USERS_PATH);
        const data = (await response.json()) as User[];
        setUsers(data);
        setIsError(false);
      } catch (error) {
        setIsError(true);
        if (error instanceof Error) {
          setErrorMessage(error.message);
          return;
        }
        setErrorMessage("Unknown error");
      } finally {
        setIsLoading(false);
      }
    };
    getUsers();
  }, []);

  return {
    users,
    isLoading,
    isError,
    errorMessage,
  };
};
