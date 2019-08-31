import React from "react";
import LikedPerson from "./LikedPerson";

export default function Lonely({
  activeUserImage,
  likedUsers,
  superLikedUsers
}) {
  return (
    <div className="lonely">
      <p>There's no new around you.</p>
      <span className="pulse">
        <img src={`/images/users/${activeUserImage}`} alt="You..." />
      </span>
      <div id="liked-people">
        <p>
          {likedUsers.length > 0 &&
            "People you liked ... let's hope they like you too!"}
        </p>
        {likedUsers.map(user => (
          <LikedPerson key={user.id} person={user} />
        ))}
        <p>{superLikedUsers.length > 0 && "People you are super Liked!!!"}</p>
        {superLikedUsers.map(user => (
          <LikedPerson key={user.id} person={user} />
        ))}
      </div>
    </div>
  );
}
