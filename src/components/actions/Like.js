import React from "react";

export default function Like({ userId, modifySuperficialChoises }) {
  return (
    <button
      type="button"
      onClick={() => modifySuperficialChoises(userId, "ADD_TO_LIKED_USERS")}
    >
      <img src="images/misc/like.png" alt="Like User" />
    </button>
  );
}
