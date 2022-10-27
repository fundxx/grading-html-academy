import { combineReducers } from 'redux';
import questsReducer from './quests/quests';

const reducer = combineReducers({
  quests: questsReducer,
})

export default reducer;
