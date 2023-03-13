module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  documentation: {
    enableSwagger: false,
    config: {
      info: {
        version: '1.0.0',
      },
      "x-strapi-config": {
        "path": "/documentation",
        "showGeneratedFiles": true,
        "pluginsForWhichToGenerateDoc": [
          "email",
          "upload",
          "users-permissions"
        ],
        "plugins": ['email', 'upload', 'users-permissions']
      },
    },
  },
  "entity-relationship-chart": {
    enabled: false,
    config: {
      // By default all contentTypes and components are included.
      // To exlclude strapi's internal models, use:
      exclude: [
        "strapi::core-store",
        "webhook",
        "admin::api-token",
        "plugin::upload.file",
        "plugin::i18n.locale",
        "plugin::users-permissions.permission",
        "plugin::users-permissions.role",
        "admin::api-token-permission",
        "plugin::upload.folder",
        "admin::transfer-token",
        "admin::transfer-token-permission",
        "admin::user",
      ],
    },
  },
});
