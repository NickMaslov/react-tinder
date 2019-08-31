import React from "react";

export default function Superlike({ userId, modifySuperficialChoises }) {
  return (
    <button
      type="button"
      onClick={() =>
        modifySuperficialChoises(userId, "ADD_TO_SUPERLIKED_USERS")
      }
    >
      <img src="images/misc/superlike.png" alt="Superlike User" />
    </button>
  );
}
