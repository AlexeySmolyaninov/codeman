import { UserPannel } from "./components/UserPannel";
import { UserPannelProvider } from "./contexts/UserPannelContextProvider";

export const App = () => {
  return (
    <UserPannelProvider>
      <UserPannel />
    </UserPannelProvider>
  );
};
