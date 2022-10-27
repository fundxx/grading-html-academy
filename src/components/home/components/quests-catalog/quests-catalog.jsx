import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quests-catalog.styled';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getLevel, getPeopleCount } from '../../../../assets/adapter/adapter';
import {categories} from '../../../../assets/const/const';

const QuestsCatalog = (props) => {
  const {questList} = props;
  const [currentList, setCurrentList] = useState(questList);
  const [currentActive, setCurrentActive] = useState(`all`)
  useEffect(()=>setCurrentList(questList), [questList])
  const switchCategory = (category) => {
    if (category === `all`) {
      setCurrentActive(`all`);
      return (setCurrentList(questList));
    }
    setCurrentActive(category);
    setCurrentList(questList.filter((quest) => quest.type === category));
  }
  return (
    <>
      <S.Tabs>
        {categories.map((category) => (
          <S.TabItem key={category.key} >
            <S.TabBtn isActive={currentActive === category.key} onClick={() => switchCategory(category.key)}>
              {category.img}
              <S.TabTitle  >{category.name}</S.TabTitle>
            </S.TabBtn>
          </S.TabItem>
        ))}
      </S.Tabs>

      <S.QuestsList>
        {currentList.map( (quest) => {
          return (
            <S.QuestItem key={quest.id}>
              <S.QuestItemLink to={`/detailed-quest/${quest.id}`}>
                <S.Quest>
                  <S.QuestImage
                    src={quest.previewImg}
                    width='344'
                    height='232'
                    alt={`квест ${quest.title}`}
                  />

                  <S.QuestContent>
                    <S.QuestTitle>{quest.title}</S.QuestTitle>

                    <S.QuestFeatures>
                      <S.QuestFeatureItem>
                        <IconPerson />
                        {getPeopleCount(quest.peopleCount)}
                      </S.QuestFeatureItem>
                      <S.QuestFeatureItem>
                        <IconPuzzle />
                        {getLevel(quest.level)}
                      </S.QuestFeatureItem>
                    </S.QuestFeatures>
                  </S.QuestContent>
                </S.Quest>
              </S.QuestItemLink>
            </S.QuestItem>
          )
        })}
      </S.QuestsList>
    </>
  );
}

const mapStateToProps = (state) => ({
  questList: state.quests.questList,
});

export { QuestsCatalog };
export default connect(mapStateToProps)(QuestsCatalog)
