module.exports = {
    apps: [
        {
            name: 'website',
            script: './server.js',
            instances: 2,
            exec_mode: 'cluster',
            out_file: './logs/stdout.log',
            error_file: './logs/stderr.log',
            log_date_format: 'YYYY-MM-DD HH:mm:ss',
            merge_logs: true,
            max_memory_restart: '800M',
            env: {
                NODE_ENV: 'production',
                PORT: 8080,
            },
        },
    ],

    deploy: {
        production: {
            user: 'SSH_USERNAME',
            host: 'SSH_HOSTMACHINE',
            ref: 'origin/master',
            repo: 'GIT_REPOSITORY',
            path: 'DESTINATION_PATH',
            'pre-deploy-local': '',
            'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
            'pre-setup': '',
        },
    },
};
