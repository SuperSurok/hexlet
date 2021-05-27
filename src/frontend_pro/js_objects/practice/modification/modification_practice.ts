const _ = require('lodash');

type dataLesson = {
  name: string;
  description: string;
};

const lesson = {
  name: 'ДеструКТУРИЗАЦИЯ',
  description: 'каК удивитЬ колек',
};

/// ///////////////////////////////////////////////////
/// ////////////// First Solution /////////////////////
/// ///////////////////////////////////////////////////
const normalize = (data: dataLesson): void[] =>
  Object.keys(data).map((key) => {
    switch (key) {
      case 'name':
        data[key] = _.capitalize(_.toLower(data[key]));
        break;
      case 'description':
        data[key] = _.toLower(data[key]);
        break;
      default:
        break;
    }
  });
normalize(lesson);

/// ///////////////////////////////////////////////////
/// ////////////// Second Solution ////////////////////
/// ///////////////////////////////////////////////////
const normalizeSecond = (data: dataLesson): void => {
  const name = _.capitalize(data.name.toLowerCase());
  const description = data.description.toLowerCase();

  data.name = name;
  data.description = description;
};
normalizeSecond(lesson);

/// ///////////////////////////////////////////////////
/// ////////////// Master Solution ////////////////////
/// ///////////////////////////////////////////////////
{
  const normalizeMaster = (lesson: dataLesson): void => {
    lesson.name = _.capitalize(lesson.name);
    lesson.description = _.toLower(lesson.description);
  };
  normalizeMaster(lesson);
}
