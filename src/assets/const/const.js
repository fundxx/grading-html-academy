import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';

const categories = [
  {
    key: `all`,
    name: `Все квесты`,
    img: <IconAllQuests/>,
  },
  {
    key: `adventures`,
    name: `Приключения`,
    img: <IconAdventures/>,
  },
  {
    key: `horror`,
    name: `Ужасы`,
    img: <IconHorrors/>
  },
  {
    key: `mystic`,
    name: `Мистика`,
    img: <IconMystic/>
  },
  {
    key: `detective`,
    name: `Детектив`,
    img: <IconDetective/>
  },
  {
    key: `sci-fi`,
    name: `Sci-fi`,
    img: <IconScifi/>
  },
]
const Level = {
  EASY: `easy`,
  MEDIUM: `medium`,
  HARD: `hard`,
}
const Type = {
  HORROR: `horror`,
  ADVENTURES: `adventures`,
  DETECTIVE: `detective`,
  MYSTIC: `mystic`,
  SCI_FI: `sci-fi`,
}
const Legal = {
  ON: `on`,
  OFF: `off`
}

export {categories, Level, Type, Legal};
