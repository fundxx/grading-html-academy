const ActionType = {
  GET_ALL_QUESTS: `quest/load`,
  GET_CURRENT_QUEST: `quest/getCurrent`,
}

const ActionCreator = {
  loadQuests: ({ data }) => ({
    type: ActionType.GET_ALL_QUESTS,
    payload: data,
  }),
  getCurrentQuest: ({ data }) => ({
    type: ActionType.GET_CURRENT_QUEST,
    payload: data,
  }),
}

export {ActionCreator};
export default ActionType;
