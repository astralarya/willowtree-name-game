import {Dispatch} from "redux";
import {AppAction, TeamMember} from "../types/redux";

export const requestData = (uri: string): AppAction => ({
  type: "REQUEST_DATA",

  uri,
});

export const requestError = (): AppAction => ({
  type: "REQUEST_ERROR",
});

export const recieveData = (teamMembers: TeamMember[]): AppAction => ({
  type: "RECIEVE_DATA",

  teamMembers,
});

export const fetchData = (uri: string) => {
  return (dispatch: Dispatch<AppAction>) => {
    dispatch(requestData(uri));
    return fetch(uri)
      .then(
        (response) => response.json(),
        (error) => dispatch(requestError()),
      )
      .then(
        (json) => dispatch(recieveData(json)),
      );
  };
};
