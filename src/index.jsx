import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React, { StrictMode } from 'react';

// eslint-disable-next-line import/no-unresolved
import { createRoot } from 'react-dom/client';

import {
  APP_INIT_ERROR, APP_READY, initialize, mergeConfig,
  subscribe, getConfig,
} from '@edx/frontend-platform';
import { AppProvider, ErrorPage } from '@edx/frontend-platform/react';

import Head from './components/Head/Head';
import { DiscussionsHome } from './discussions';
import messages from './i18n';
import store from './store';

import './index.scss';

const rootNode = createRoot(document.getElementById('root'));

const applyWidgetTheme = () => {
  const config = getConfig();
  const root = document.documentElement;

  root.style.setProperty('--primary', '#2F2F60');
  root.style.setProperty('--primary-light', '#EDE8F5');

  if (!config.WIDGET_MODE) {
    return;
  }


  root.style.setProperty('--primary', config.WIDGET_BRAND_PRIMARY);

  if (config.WIDGET_MODE && config.WIDGET_LOGO_URL) {
    document.body.setAttribute('data-widget-mode', 'true');
    document.documentElement.style.setProperty('--widget-logo-url', `url(${config.WIDGET_LOGO_URL})`);
  } else {
    document.body.removeAttribute('data-widget-mode');
  }
};

subscribe(APP_READY, () => {
  applyWidgetTheme();
  rootNode.render(
    <StrictMode>
      <AppProvider store={store}>
        <Head />
        <DiscussionsHome />
      </AppProvider>
    </StrictMode>,
  );
});

subscribe(APP_INIT_ERROR, (error) => {
  rootNode.render(<ErrorPage message={error.message} />);
});

initialize({
  requireAuthenticatedUser: true,
  messages,
  handlers: {
    config: () => {
      mergeConfig({
        LEARNING_BASE_URL: process.env.LEARNING_BASE_URL,
        LEARNER_FEEDBACK_URL: process.env.LEARNER_FEEDBACK_URL,
        STAFF_FEEDBACK_URL: process.env.STAFF_FEEDBACK_URL,
        ENABLE_PROFILE_IMAGE: process.env.ENABLE_PROFILE_IMAGE,
      }, 'DiscussionsConfig');
    },
  },
});
