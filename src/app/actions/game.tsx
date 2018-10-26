import {AppAction} from "../types/redux";

export const newRound = (): AppAction => ({
  type: "NEW_ROUND",
});

export const answerCorrect = (): AppAction => ({
  type: "ANSWER_CORRECT",
});

export const answerIncorrect = (slug: string): AppAction => ({
  type: "ANSWER_INCORRECT",

  slug,
});
