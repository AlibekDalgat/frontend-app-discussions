import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { getConfig } from '@edx/frontend-platform';

import getLearningHeaderMenu from './LearningHeaderMenu';

export const useLearningHeaderMenu = ({
  courseSearchUrl,
  authenticatedUser,
  courseOrg,
  courseNumber,
  courseTitle,
}) => {
  const { formatMessage } = useIntl();
  return getLearningHeaderMenu(
    formatMessage,
    courseSearchUrl,
    authenticatedUser,
    courseOrg,
    courseNumber,
    courseTitle
  );
};