import React from "react";
import "../Home/Home.css";
import NavBar from "./../Navbar/Navbar";
import { QUERY_ME } from "../../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
import PostsList from "../Posts/Posts";
import { DELETE_USER } from "../../utils/mutations";
import { AiFillDelete } from "react-icons/ai"
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Profile = (refetch) => {
  const { loading, data } = useQuery(QUERY_ME)
  const currentUsername = data?.me?.username;
  const [deleteUser] = useMutation(DELETE_USER);

  const user = data?.me || {};
  const userId = data?.me._id || {};
  console.log(userId);
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  const handleDelete = async (userId) => {
    try {
      const { data, error } = await deleteUser({
        variables: { userId },
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div className="Home">
      <NavBar />
      <div className="postCard">
        <div className="profiledelete">
        <p className="deleteusers"> Delete Profile</p>
        <NavLink
        as={Link}
        to="/"
        onClick={Auth.logout}
        className="DeleteUser"
        > 
          <AiFillDelete onSubmit={Auth.logout} onClick={() => handleDelete(user._id)} />
        </NavLink>
        </div>
        <PostsList
          posts={user.posted}
          currentUsername={currentUsername}
          showTitle={false}
          showUsername={false}
          refetch={refetch}
        />
      </div>
    </div>
  );
};
export default Profile;
