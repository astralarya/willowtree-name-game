import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {newRound} from "../actions/game";
import {AppAction, AppState, TeamMember} from "../types/redux";
import {Face} from "./face";

import styles from "./game.scss";

const mapStateToProps = (state: AppState) => {
  return {
    teamMembers: state.teamMembers,

    currFaces: state.currFaces,
    currIdx: state.currIdx,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AppAction>) => {
  return {
    newRound_: () => dispatch(newRound()),
  };
};

const Game = ({teamMembers, currFaces, currIdx, newRound_}: {
teamMembers: TeamMember[],
currFaces: TeamMember[],
currIdx: number,
newRound_: () => AppAction}) => {
  if (currIdx === null) {
    newRound_();
    return (
      <div>
        <p>Ready</p>
      </div>
    );
  } else {
    const currName = currFaces[currIdx];
    const faceArray = currFaces.map((teamMember: TeamMember, idx: number) => (
      <Face key={idx} teamMember={teamMember} />
    ));
    return (
      <div>
        <h1>{`Who is ${currName.firstName} ${currName.lastName}?`}</h1>
        <div className={styles.faceContainer}>
          {faceArray}
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
