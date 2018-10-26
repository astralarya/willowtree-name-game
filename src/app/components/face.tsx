import React from "react";
import {TeamMember} from "../types/redux";

import styles from "./face.scss";

export const Face = ({teamMember}: {
teamMember: TeamMember,
}) => {
  return (
    <div className={styles.container}>
      <img src={teamMember.headshot.url} />
    </div>
  );
};
