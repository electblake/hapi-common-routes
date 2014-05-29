hapi-common-routes
------------------

Collection of my favourite


Common Asset Routes (Static)
============================

h3. Example

```
/**
 * hapi-common-routes plugin
 * server is created via new Hapi.Server
 */

var commonRouteOptions = {
    assets: {
        __dirname: __dirname, // added to paths below
        script: 'public/script',
        style: 'public/style',
        images: 'public/images'
    }
};

server.pack.require('hapi-common-routes', commonRouteOptions, function(err){
    if(err){
        eye(false, 'Failed loading hapi-common-routes');
    }
});
```