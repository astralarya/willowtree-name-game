import React from "react";
import {TeamMember} from "../types/redux";

import styles from "./face.scss";

export const Face = ({teamMember, reveal = false, hide = false, featured = false, onClick = () => null}: {
teamMember: TeamMember,
reveal: boolean,
hide: boolean,
featured: boolean,
onClick?: (teamMember: TeamMember) => any,
}) => {
  const onClickCurry = () => onClick(teamMember);
  const className = `${styles.container} `
    + `${reveal ? styles.reveal : ""} `
    + `${hide ? styles.hide : ""}`
    + `${featured ? styles.featured : ""}`;
  const name = `${teamMember.firstName} ${teamMember.lastName}`;
  return (
    <div className={className} onClick={onClickCurry}>
      <img src={teamMember.headshot.url} />
      <p>{name}</p>
    </div>
  );
};
