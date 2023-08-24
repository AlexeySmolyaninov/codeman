import { useEffect, useState } from "react";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export const useGetUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        await fetch("https://jsonplaceholder.typicode.com/users").then(
          async (response) => {
            if (!response.ok) {
              throw new Error(`Status ${response.status}`);
            }
            const data = (await response.json()) as User[];
            setUsers(data);
            setIsError(false);
          }
        );
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
