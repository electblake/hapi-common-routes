exports = module.exports = [
    {   method: 'GET', path: '/style/{param}', handler: {
        directory: {
            path: 'www/style/'
        }
    }},
    {   method: 'GET', path: '/script/{param}', handler: {
        directory: {
            path: 'www/script/'
        }
    }},
    { method: 'GET', path: '/images/{param}', handler: {
        directory: {
            path: 'www/images/'
        }
    }}
];