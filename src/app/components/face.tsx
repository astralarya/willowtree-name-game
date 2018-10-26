import React from "react";
import {TeamMember} from "../types/redux";

import styles from "./face.scss";

export const Face = ({teamMember, reveal = false, onClick = () => null}: {
teamMember: TeamMember,
reveal: boolean,
onClick?: (teamMember: TeamMember) => any,
}) => {
  const onClickCurry = () => onClick(teamMember);
  const className = `${styles.container} ${reveal ? styles.reveal : ""}`;
  const name = `${teamMember.firstName} ${teamMember.lastName}`;
  return (
    <div className={className} onClick={onClickCurry}>
      <img src={teamMember.headshot.url} />
      <p>{name}</p>
    </div>
  );
};
