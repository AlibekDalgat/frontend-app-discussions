import React from 'react';

import { AppContext } from '@edx/frontend-platform/react';
import Header from '@edx/frontend-component-header';

import { useLearningHeaderMenu } from './hooks';

import './index.scss';

export const LearningHeader = ({
  courseOrg,
  courseNumber,
  courseTitle,
  showUserDropdown,
}) => {
  const { authenticatedUser, config: appConfig } = React.useContext(AppContext);

  const courseSearchUrl = appConfig.COURSE_CATALOG_URL || '/courses';

  const headerMenu = useLearningHeaderMenu({
    courseSearchUrl,
    authenticatedUser,
    courseOrg,
    courseNumber,
    courseTitle,
  });

  return (
    <Header
      mainMenuItems={headerMenu.mainMenu}
      secondaryMenuItems={headerMenu.secondaryMenu}
      userMenuItems={headerMenu.userMenu}
    />
  );
};