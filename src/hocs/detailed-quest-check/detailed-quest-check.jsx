import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentQuest } from '../../redux/api-actions';
import { useHistory, useParams } from 'react-router-dom';
import DetailedQuest from '../../components/detailed-quest/detailed-quest';

const DetailedQuestCheck = (props) => {
  const onGetCurrentQuest = props.onGetCurrentQuest;
  const {quest, isDataLoaded} = props;
  const history = useHistory()
  const id = useParams().id;
  useEffect(() => {
    onGetCurrentQuest(id);
  }, [id, onGetCurrentQuest])


  if (!quest && isDataLoaded) {
    history.push(`/error`)
  }
  return (
    <DetailedQuest/>
  );
};

const mapStateToProps = (state) => ({
  quest: state.quests.quest,
  isDataLoaded: state.quests.isDataLoaded,
});
const mapDispatchToProps = (dispatch) => ({
  onGetCurrentQuest(id) {
    dispatch(fetchCurrentQuest(id))
  }
});

export { DetailedQuestCheck };
export default connect(mapStateToProps, mapDispatchToProps)(DetailedQuestCheck)
