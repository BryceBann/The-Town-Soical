import React, { useState } from "react";
import "../Home/Home.css";
import NavBar from "./../Navbar/Navbar";
import { QUERY_ME, QUERY_USER } from "../../utils/queries";
import Auth from "../../utils/auth";
import { useQuery, useMutation } from "@apollo/client";
import { Navigate, useParams } from 'react-router-dom';
import PostsList from "../Posts/Posts";

const Profile = () => {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam },
      });

      const user = data?.me || data?.user || {};

    //   if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    //     return <Navigate to="/profile" />;
    //   }

if (loading) {
    return <h2>LOADING...</h2>;
  }
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
      <div style={{ marginLeft: "15%", padding: "20px"}} className="flex-row justify-center col-md-6">
      {/* <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2> */}
        <div className="col-12 col-md-10 mb-5">
          <PostsList
            posts={user.posts}
            title={`${user.username}'s thoughts...`}
            showTitle={false}
            showUsername={false}
          />
        </div>

      </div>
    </div>
  );
};
export default Profile;