import React from "react";
import {connect} from "react-redux";
import styles from "./index.scss";
import {toggleActive} from "../actions/index.tsx";

const mapStateToProps = (state) => {
  return {
    active: state.active,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleActive: () => dispatch(toggleActive()),
  };
};

const Main = ({active, toggleActive}) => {
  return (
    <div className={active?
        `${styles.button} ${styles.active}`:
        `${styles.button} ${styles.inactive}`}
      onClick={toggleActive}
    >
      <p>Hello World!</p>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
