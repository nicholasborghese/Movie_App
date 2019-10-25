/* eslint-disable no-console */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'movie-app',
    environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
      apiKey: "AIzaSyD_2NeVSPu-cBP6y3xtpVCKk_ludE6qWdM",
      authDomain: "movie-favorites-6893b.firebaseapp.com",
      databaseURL: "https://movie-favorites-6893b.firebaseio.com",
      projectId: "movie-favorites-6893b",
      storageBucket: "movie-favorites-6893b.appspot.com",
      messagingSenderId: "640734523332",
      appId: "1:640734523332:web:dc13a2a75837698e557e91"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  try {
    const custom = require('./custom-config');
    ENV.OMDB_API_KEY = custom.config.OMDB_API_KEY;
  } catch (err) {
    console.log('config/custom-config.js not found');
  }

  return ENV;
};
