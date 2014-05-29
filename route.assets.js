exports = module.exports = function(settings) {
    return [
        {   method: 'GET', path: '/style/{param}', handler: {
            directory: {
                path: settings.__dirname + '/' + settings.style
            }
        }},
        {   method: 'GET', path: '/script/{param}', handler: {
            directory: {
                path: settings.__dirname + '/' + settings.script
            }
        }},
        { method: 'GET', path: '/images/{param}', handler: {
            directory: {
                path: settings.__dirname + '/' + settings.images
            }
        }}
    ];
}