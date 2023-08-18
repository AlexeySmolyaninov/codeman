import { User } from "../App";

interface UserListProps {
  users: User;
  setShowNewUserForm: (value: boolean) => void;
}

export const UserList = ({ users }: UserListProps) => {
  console.log(users);
  return <h2>List will be here</h2>;
};
