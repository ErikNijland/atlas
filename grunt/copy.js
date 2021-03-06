module.exports = {
    index: {
        src: ['index.html'],
        dest: 'build/index.html'
    },
    assets: {
        files: [
            {
                cwd: 'modules/shared/assets/',
                src: '**/*',
                dest: 'build/assets/',
                expand: true,
                flatten: false
            }
        ]
    },
    bower_bbga_fonts: {
        files: [
            {
                cwd: 'bower_components/bbga_visualisatie_d3/',
                src: [
                    '**/*.eot',
                    '**/*.svg',
                    '**/*.ttf',
                    '**/*.woff',
                    '**/*.woff2'
                ],
                dest: 'build/',
                expand: true,
                flatten: true
            }
        ]
    },
    bower_leaflet_images: {
        files: [
            {
                cwd: 'bower_components/leaflet/images',
                src: [
                    '**/*.png'
                ],
                dest: 'build/assets',
                expand: true
            }
        ]
    },
    bower_leaflet_measure_images: {
        files: [
            {
                cwd: 'bower_components/leaflet-measure/dist/',
                src: [
                    '**/*.png'
                ],
                dest: 'build/',
                expand: true,
                flatten: false
            }
        ]
    }
};