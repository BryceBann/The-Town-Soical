import React from 'react';

const LikeList = ({ likes = [] }) => {
  return (
    <>
    <p>Likes</p>
      <div className="flex-row my-4">
        {likes &&
          likes.map((like) => (
            <div key={like._id} className="col-12 mb-3 pb-3">
              <p>like</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default LikeList;