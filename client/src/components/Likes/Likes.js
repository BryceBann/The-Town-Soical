import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { ADD_LIKE, UNLIKE } from "../../utils/mutations";
import { QUERY_POSTS } from "../../utils/queries";
import { useQuery } from "@apollo/client";

const LikeList = ({ postId }) => {
  const [likeCount, setLikeCount] = useState("");
  const [addLike] = useMutation(ADD_LIKE);
  const [unLike] = useMutation(UNLIKE);
  const [userLikedPost, setUserLikedPost] = useState("");
  const [userUnlikedPost, setUserUnlikedPost] = useState("");
  const { data, loading, error, refetch } = useQuery(QUERY_POSTS, {
    variables: { id: postId },
  });

  const handleSubmit = async (event) => {
    if(!userLikedPost) {
    try {
      const { data } = await addLike({
        variables: {
          postId,
          likeCount
        },
      });

      setLikeCount("");
      setUserLikedPost(true);
      refetch();
    } catch (err) {
      console.error(err);
    }
  } else if (userLikedPost === true && !userUnlikedPost) {
    if (userUnlikedPost) {
      return;
    }
    try {
      const { data } = await unLike({
        variables: {
          postId,
          likeCount
        },
      });
      setLikeCount("");
      setUserLikedPost(false);
      setUserUnlikedPost(true);
      refetch();
    } catch (err) {
      console.error(err);
    }
  }
};

  return (
    <>
    <FaHeart className="likeBtn" style={{ color: userLikedPost ? 'red' : 'pink' }} 
    onClick={() => handleSubmit() }/>
    </>
  );
};

export default LikeList;
