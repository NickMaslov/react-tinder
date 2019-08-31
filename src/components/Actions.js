import React from "react";
import Rewind from "./actions/Rewind";
import Dislike from "./actions/Dislike";
import Like from "./actions/Like";
import SuperLike from "./actions/SuperLike";

export default function Actions({ person, modifySuperficialChoises }) {
  return (
    <div id="actions">
      <Rewind userId={person.id} />
      <Dislike
        userId={person.id}
        modifySuperficialChoises={modifySuperficialChoises}
      />
      <Like
        userId={person.id}
        modifySuperficialChoises={modifySuperficialChoises}
      />
      <SuperLike
        userId={person.id}
        modifySuperficialChoises={modifySuperficialChoises}
      />
    </div>
  );
}
