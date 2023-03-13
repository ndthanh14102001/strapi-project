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
});
