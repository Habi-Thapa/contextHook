import React from "react";
import { User } from "../App";
import { useUserContext } from "../useContext/Context";

type Props = {};

const Profile = (props: Props) => {
  const user = useUserContext();
  return <div>{user.name}</div>;
};

export default Profile;
