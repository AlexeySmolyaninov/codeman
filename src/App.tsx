import { UserPannel } from "./components/UserPanel";
import { UserPannelProvider } from "./contexts/UserPanelContextProvider";

export const App = () => {
  return (
    <UserPannelProvider>
      <UserPannel />
    </UserPannelProvider>
  );
};
