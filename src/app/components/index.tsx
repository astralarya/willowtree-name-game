import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {toggleActive} from "../actions/index";
import {AppAction, AppState} from "../types/redux";
import styles from "./index.scss";

const mapStateToProps = (state: AppState) => {
  return {
    active: state.active,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AppAction>) => {
  return {
    toggleActiveProp: () => dispatch(toggleActive()),
  };
};

const Main = ({active, toggleActiveProp}: {active: boolean, toggleActiveProp: () => AppAction}) => {
  const className = active ?
    `${styles.button} ${styles.active}` :
    `${styles.button} ${styles.inactive}`;
  return (
    <div
      className={className}
      onClick={toggleActiveProp}
    >
      <p>Hello World!</p>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
