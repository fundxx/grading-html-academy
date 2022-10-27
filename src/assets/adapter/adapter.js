import {Level, Type} from '../const/const';

const getLevel = (level) => {
  switch (level) {
    case (Level.EASY): {
      return (`простой`)
    }
    case (Level.MEDIUM): {
      return (`средний`)
    }
    case (Level.HARD): {
      return (`сложный`)
    }
    default: {
      return (`не определено`)
    }
  }
}

const getType = (type) => {
  switch (type) {
    case (Type.HORROR): {
      return (`Ужасы`)
    }
    case (Type.ADVENTURES): {
      return (`Приключения`)
    }
    case (Type.DETECTIVE): {
      return (`Детектив`)
    }
    case (Type.MYSTIC): {
      return (`Мистика`)
    }
    case (Type.SCI_FI): {
      return (`Sci-fi`)
    }
    default: {
      return (`не определено`)
    }
  }
}

const getPeopleCount = ([min, max]) => {
  return(`${min}-${max} чел`)
}
export {getLevel, getType, getPeopleCount};
