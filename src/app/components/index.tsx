import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {fetchData} from "../actions/index";
import {AppAction, AppState, TeamMember} from "../types/redux";
import styles from "./index.scss";

const mapStateToProps = (state: AppState) => {
  return {
    status: state.status,
    teamMembers: state.teamMembers,
  };
};

const mapDispatchToProps = (dispatch: any) => { // HOPE typings fix
  return {
    fetchData_: (uri: string) => dispatch(fetchData(uri)),
  };
};

const Main = ({uri, status, teamMembers, fetchData_}: {
uri: string,
status: "not-ready" | "loading" | "error" | "ready",
teamMembers: TeamMember[],
fetchData_: (uri: string) => Promise<AppAction>}) => {
  switch (status) {
    case "not-ready":
      fetchData_(uri);
      // fall through
    case "loading":
      return (
        <div>
          <p>Loading</p>
        </div>
      );
    case "error":
      return (
        <div>
          <p>Error</p>
        </div>
      );
    case "ready":
      console.log(teamMembers);
      return (
        <div>
          <p>Ready</p>
        </div>
      );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
