import { useState } from "react";
import Dashboard from "./Dashboard";
import { DashboardContext } from "./useContext/Context";

export interface User {
  isSubscribed: boolean;
  name: string;
}

interface DemoProps {}

const App = (props: DemoProps) => {
  const [user] = useState<User>({
    isSubscribed: true,
    name: "You",
  });

  return (
    <>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </>
  );
};

export default App;
