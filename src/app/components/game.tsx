import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {answerIncorrect, beginRound, endRound} from "../actions/game";
import {AppAction, AppState, TeamMember} from "../types/redux";
import {Face} from "./face";

import styles from "./game.scss";

const mapStateToProps = (state: AppState) => {
  return {
    teamMembers: state.teamMembers,

    currFaces: state.currFaces,
    currIdx: state.currIdx,
    currReveal: state.currReveal,
    featured: state.featured,
    overlay: state.overlay,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    answerIncorrect_: (slug: string) => dispatch(answerIncorrect(slug)),
    beginRound_: () => dispatch(beginRound()),
    endRound_: () => dispatch(endRound()),
  };
};

const Game = ({
  teamMembers,
  currFaces,
  currIdx,
  currReveal,
  featured,
  overlay,
  answerIncorrect_,
  beginRound_,
  endRound_,
}: {
teamMembers: TeamMember[],
currFaces: TeamMember[],
currIdx: number,
currReveal: boolean[],
featured: boolean,
overlay: boolean,
answerIncorrect_: (slug: string) => AppAction,
beginRound_: () => Promise<AppAction>,
endRound_: () => Promise<AppAction>,
}) => {
  if (currIdx === null) {
    beginRound_();
    return (
      <div>
        <p>Ready</p>
      </div>
    );
  } else {
    const currName = currFaces[currIdx];
    const title = featured ?
      `${currName.firstName} ${currName.lastName}${currName.jobTitle ? ` - ${currName.jobTitle}` : ""}` :
      `Who is ${currName.firstName} ${currName.lastName}?`;
    const onClickFace = (teamMember: TeamMember) => {
      if (teamMember.slug === currName.slug) {
        endRound_();
      } else {
        answerIncorrect_(teamMember.slug);
      }
    };
    const faceArray = currFaces.map((teamMember: TeamMember, idx: number) => (
      <Face
        key={idx}
        teamMember={teamMember}
        reveal={currReveal[idx] || featured && idx === currIdx}
        hide={featured && idx !== currIdx}
        featured={featured && idx === currIdx}
        onClick={onClickFace}
      />
    ));
    return (
      <div>
        <div className={`${styles.overlay} ${!overlay ? styles.clear : ""}`} />
        <h1>{title}</h1>
        <div className={styles.faceContainer}>
          {faceArray}
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
