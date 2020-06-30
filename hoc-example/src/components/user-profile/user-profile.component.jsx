import React from "react";

import withData from "../with-data";

const UserProfile = ({ data, name, email }) => {
  return (
    <div className="container">
      <h1>{name}</h1>
      <h2>{email}</h2>
      Posts:{" "}
      {data.map((_post) => (
        <div className="post" key={_post.id}>
          <h1>{_post.title}</h1>
          <p>{_post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default withData(UserProfile);
