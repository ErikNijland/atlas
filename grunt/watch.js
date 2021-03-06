module.exports = {
    js: {
        files: [
            'modules/**/*.js',
            'modules/**/*.html'
        ],
        tasks: [
            'clean:js',
            'build-js',
            'test-js'
        ]
    },
    css: {
        files: [
            'modules/**/*.scss'
        ],
        tasks: [
            'clean:css',
            'build-css',
            'test-css'
        ]
    },
    static: {
        files: [
            'index.html'
        ],
        tasks: [
            'build-develop'
        ]
    },
    assets: {
        files: 'modules/shared/assets/**/*',
        tasks: ['copy:assets']
    },
    livereload: {
        options: {
            livereload: true
        },
        files: [
            'build/**/*',
            '!build/temp/**/*'
        ]
    }
};