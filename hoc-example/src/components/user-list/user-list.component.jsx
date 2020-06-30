import React from "react";

import withData from "../with-data";

const UserList = ({ data }) => {
  return (
    <div className="container user-list">
      <h1> Users List </h1>
      {data.map((_user) => (
        <div className="post" key={_user.id}>
          <h1>{_user.name}</h1>
          <h2>{_user.email}</h2>
        </div>
      ))}
    </div>
  );
};

export default withData(UserList);
