import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  myLearning: {
    id: 'courseExit.dashboardLink',
    defaultMessage: 'Моё обучение',
    description: 'Ссылка на дашборд в основном меню хедера страницы курса',
  },
  catalog: {
    id: 'courseExit.discoveryLink"',
    defaultMessage: 'Каталог обучения',
    description: 'Ссылка на каталог курсов в основном меню хедера',
  },
  ratings: {
    id: 'courseExit.header.ratings',
    defaultMessage: 'Рейтинги',
    description: 'Ссылка на страницу рейтингов в основном меню хедера',
  },

  profile: {
    id: 'courseExit.profileLink',
    defaultMessage: 'Профиль',
    description: 'Ссылка на профиль пользователя в выпадающем меню',
  },
  account: {
    id: 'courseExit.accountLink',
    defaultMessage: 'Учётная запись',
    description: 'Ссылка на настройки аккаунта в выпадающем меню',
  },
  rewards: {
    id: 'courseExit.rewardsLink',
    defaultMessage: 'Мои награды',
    description: 'Ссылка на награды пользователя в выпадающем меню',
  },
  signOut: {
    id: 'courseExit.exitLink',
    defaultMessage: 'Выйти',
    description: 'Ссылка на выход из аккаунта в выпадающем меню',
  },

  courseOrgNumber: {
    id: 'learningHeader.course.orgNumber',
    defaultMessage: '{org} {number}',
    description: 'Формат организации и номера курса',
  },
  courseTitle: {
    id: 'learningHeader.course.title',
    defaultMessage: '{title}',
    description: 'Название курса',
  },
});

export default messages;