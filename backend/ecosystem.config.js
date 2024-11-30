module.exports = {
  apps: [
    {
      name: 'backend',
      script: './server.js',
      env_file: '/var/www/Lisa-Tastevin---Psychomotricienne/backend/.env',
      env: {
        NODE_ENV: 'production', // Si nécessaire
      },
    },
  ],
};

