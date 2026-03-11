import { getConfig } from '@edx/frontend-platform';
import messages from './messages';

const getLearningHeaderMenu = (
  formatMessage,
  courseSearchUrl,
  authenticatedUser,
  courseOrg,
  courseNumber,
  courseTitle
) => {
  const { ENABLE_PROGRAMS } = getConfig();

  return {
    mainMenu: [
  {
    type: 'item',
    href: `${getConfig().LMS_BASE_URL}/dashboard`,
    content: formatMessage(messages.myLearning),
  },
  {
    type: 'item',
    href: courseSearchUrl.startsWith('http') ? courseSearchUrl : `${getConfig().LMS_BASE_URL}${courseSearchUrl}`,
    content: formatMessage(messages.catalog),
  },
    {
      type: 'item',
      href: `${getConfig().ACCOUNT_PROFILE_URL}/ratings`,
      content: formatMessage(messages.ratings),
    },
],

userMenu: authenticatedUser ? [
  {
    heading: '',
    items: [
      {
        type: 'item',
        href: `${getConfig().ACCOUNT_PROFILE_URL}/u/${authenticatedUser.username}`,
        content: formatMessage(messages.profile),
      },
      {
        type: 'item',
        href: getConfig().ACCOUNT_SETTINGS_URL,
        content: formatMessage(messages.account),
      },
      {
        type: 'item',
        href: `${getConfig().ACCOUNT_PROFILE_URL}/rewards`,
        content: formatMessage(messages.rewards),
      },
    ],
  },
  {
    heading: '',
    items: [
      {
        type: 'item',
        href: getConfig().LOGOUT_URL,
        content: formatMessage(messages.signOut),
      },
    ],
  },
] : [],
  };
};

export default getLearningHeaderMenu;