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
    <div>
      <p>{JSON.stringify(users)}</p>
    </div>
  );
};

export default UserIndexScreen;
