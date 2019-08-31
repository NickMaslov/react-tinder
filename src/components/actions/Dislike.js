import React from "react";

export default function Dislike({ userId, modifySuperficialChoises }) {
  return (
    <button
      type="button"
      onClick={() => modifySuperficialChoises(userId, "ADD_TO_DISLIKED_USERS")}
    >
      <img src="images/misc/dislike.png" alt="Dislike User" />
    </button>
  );
}
