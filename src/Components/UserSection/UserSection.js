import React from "react";
import UserSectionCard from "./UserSectionCard";

function UserSection() {
  const users = require("../../data/user.json");

  return <div className="user-section container">
    {users.map((user) => (
      <UserSectionCard key={user.userId} user={user} />
    ))}
  </div>;
}

export default UserSection;
