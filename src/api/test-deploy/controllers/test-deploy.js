'use strict';

/**
 * test-deploy controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::test-deploy.test-deploy');
