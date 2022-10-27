import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from 'components/common/common';
import { QuestsCatalog } from './components/components';
import * as S from './home.styled';
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchQuests } from '../../redux/api-actions';

const HomePage = (props) => {
  const {onLoadData} = props;
  useEffect(() => {
    onLoadData();
  }, [onLoadData]);
  return (
    <MainLayout>
      <S.Main forwardedAs='main'>
        <PageHeading>
          <PageTitle>Выберите тематику</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </PageHeading>
        <QuestsCatalog />
      </S.Main>
    </MainLayout>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchQuests())
  }
});

export { HomePage };
export default connect(null, mapDispatchToProps)(HomePage)
