'use strict';

/**
 * test-deploy router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::test-deploy.test-deploy');
