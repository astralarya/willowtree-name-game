import {Dispatch} from "redux";
import {AppAction} from "../types/redux";

export const newRound = (): AppAction => ({
  type: "NEW_ROUND",
});

export const answerCorrect = (): AppAction => ({
  type: "ANSWER_CORRECT",
});

export const clearOverlay = (): AppAction => ({
  type: "CLEAR_OVERLAY",
});

export const drawOverlay = (): AppAction => ({
  type: "DRAW_OVERLAY",
});

export const answerIncorrect = (slug: string): AppAction => ({
  type: "ANSWER_INCORRECT",

  slug,
});

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const beginRound = () => {
  return (dispatch: Dispatch<AppAction>) => {
    dispatch(newRound());
    return sleep(50).then(() => dispatch(clearOverlay()));
  };
};

export const endRound = () => {
  return (dispatch: any) => {
    dispatch(answerCorrect());
    return sleep(2000)
      .then(() => dispatch(drawOverlay()))
      .then(() => sleep(2000))
      .then(() => dispatch(beginRound()));
  };
};
