'use strict';

/**
 * test-deploy1 service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-deploy1.test-deploy1');
