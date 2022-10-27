import { useState } from 'react';
import { MainLayout } from 'components/common/common';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';
import { BookingModal } from './components/components';
import { connect } from 'react-redux';
import { getLevel, getType, getPeopleCount } from '../../assets/adapter/adapter';

const DetailedQuest = (props) => {
  const {quest, isDataLoaded} = props;
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const HandleBookingBtnClick = () => {
    setIsBookingModalOpened(()=>!isBookingModalOpened);
  };
  if (!isDataLoaded || !quest) {
    return <></>
  }
  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`../${quest.coverImg}`}
          alt={`Квест ${quest.title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{quest.title}</S.PageTitle>
            <S.PageSubtitle>{getType(quest.type)}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{`${quest.duration} мин`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{getPeopleCount(quest.peopleCount)}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{getLevel(quest.level)}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>
              {quest.description}
            </S.QuestDescription>

            <S.QuestBookingBtn onClick={HandleBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal onBookingBtnClick={HandleBookingBtnClick}/>}
      </S.Main>
    </MainLayout>
  );
};

const mapStateToProps = (state) => ({
  quest: state.quests.quest,
  isDataLoaded: state.quests.isDataLoaded,
});

export { DetailedQuest };
export default connect(mapStateToProps)(DetailedQuest)
