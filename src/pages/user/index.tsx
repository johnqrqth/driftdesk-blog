import React from "react";
import { useSelector } from "react-redux";
import useApiResource from "../../utils/useApiResource";
import {
  fetchUsersFailure,
  fetchUsersStart,
  fetchUsersSuccess,
} from "../../features/usersSlice";
import { RootState } from "../../app/store";
import { fetchUsers } from "../../utils/api/fetchData";
import "./users.css";
import UserCard from "../../components/user-card";

const UserIndexScreen: React.FC = () => {
  const { users, status, error } = useSelector(
    (state: RootState) => state.users
  );

  useApiResource(
    fetchUsers,
    fetchUsersStart,
    fetchUsersSuccess,
    fetchUsersFailure
  );

  if (status === "loading") {
    return <div>Loading posts...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="users">
      <div className="users-innnerdiv">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserIndexScreen;
