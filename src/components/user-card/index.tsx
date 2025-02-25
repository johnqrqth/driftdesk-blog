import React from "react";
import { UserType } from "../../types";
import "./usercard.css";

interface UserCardProps {
  user: UserType;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  console.log(user);
  return (
    <div className="user">
      <div className="user-image">
        <img
          src={user.profilePic ? user.profilePic : "http://placebeard.it/80"}
          alt="profile pic"
        />
      </div>
      <div className="user-texts">
        <p className="user-texts__name">{user.name}</p>
        <p className="user-texts__username">{user.username}</p>
      </div>
    </div>
  );
};

export default UserCard;
