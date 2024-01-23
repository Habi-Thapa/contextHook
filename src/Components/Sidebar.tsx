import { useUserContext } from "../useContext/Context";

type Props = {};

const Sidebar = (props: Props) => {
  const user = useUserContext();

  return (
    <>
      <div>{user.name}</div>
      <div>Subscribed: {user.isSubscribed ? "T" : "F"}</div>
    </>
  );
};

export default Sidebar;
