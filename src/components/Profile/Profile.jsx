import { signOut } from "firebase/auth";
import React from "react";
import { Button } from "react-bootstrap";
import auth from "../../fireBase.init";

const Profile = () => {
  const handleLogOut = () => {
    signOut(auth);
  };
  return (
    <div className="m-auto">
      <Button onClick={handleLogOut} variant="warning">
        Log Out
      </Button>
    </div>
  );
};

export default Profile;
