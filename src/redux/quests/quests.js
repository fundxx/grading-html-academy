import ActionType from '../action';

const InitialState = {
  quest: [],
  questList: [],
  order: [],
  isDataLoaded: false,
}

const questsReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.GET_ALL_QUESTS: {
      return {
        ...state,
        questList: action.payload
      }
    }
    case ActionType.GET_CURRENT_QUEST: {
      return {
        ...state,
        quest: action.payload,
        isDataLoaded: true,
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default questsReducer;
