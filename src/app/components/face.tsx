import React from "react";
import {TeamMember} from "../types/redux";

export const Face = ({teamMember}: {
teamMembers: TeamMember[],
}) => {
  return (
    <div>
      <img src={teamMember.headshot.url} />
    </div>
  );
}
