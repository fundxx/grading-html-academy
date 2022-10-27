import { ActionCreator } from './action';

const fetchQuests = () => (dispatch, _getState, api) => (
  api.get(`/quests`)
    .then((data)=> dispatch(ActionCreator.loadQuests(data)))
);

const fetchCurrentQuest = (id) => (dispatch, _getState, api) => (
  api.get(`/quests/${id}`)
    .then((quest) => dispatch(ActionCreator.getCurrentQuest(quest)))
);

const setOrder = (form) => (dispatch, _getState, api) => (
  api.post(`/orders`, form)
);

export {fetchQuests, fetchCurrentQuest, setOrder};
