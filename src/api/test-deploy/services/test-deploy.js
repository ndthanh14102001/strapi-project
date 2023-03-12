'use strict';

/**
 * test-deploy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-deploy.test-deploy');
