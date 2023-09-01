module.exports = {
    apps: [
      {
        name: 'restaurant-app',
        script: 'server.js', // Path to your application's entry script
        instances: 1,
        exec_mode: 'fork',
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
        env: {
          NODE_ENV: 'production'
        }
      }
    ]
  };
  