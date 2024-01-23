import { useContext } from "react";
import { DashboardContext } from "../useContext/Context";

type Props = {};

const Sidebar = (props: Props) => {
  const user = useContext(DashboardContext);

  return (
    <>
      <div>{user?.name}</div>
      <div>Subscribed: {user?.isSubscribed ? "T" : "F"}</div>
    </>
  );
};

export default Sidebar;
