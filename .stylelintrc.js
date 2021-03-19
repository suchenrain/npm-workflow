module.exports = {
    extends: 'stylelint-config-standard',
    rules: {
        'at-rule-empty-line-before': null,
        indentation: [
            4,
            {
                except: ['block'],
                message: 'Please use 4 spaces for indentation.',
                severity: 'warning',
            },
        ],
    },
};
