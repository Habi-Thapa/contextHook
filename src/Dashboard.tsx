import { User } from "./App";
import Profile from "./Components/Profile";
import Sidebar from "./Components/Sidebar";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <>
      <Sidebar />
      <Profile />
    </>
  );
};

export default Dashboard;
