var walk = require('walk');
var files = [];

// Walker options
var walker = walk.walk('./build', { followLinks: false });

walker.on('file', function (root, stat, next) {
    // Add this file to the list of files
    const _file = root.replace('./build', '') + '/' + stat.name;
    files.push(_file.substring(1));
    next();
});

walker.on('end', function () {
    console.log(files);
});
