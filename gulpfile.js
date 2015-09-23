'use strict';

var requireDir = require('require-dir'),
    gulp = require('gulp');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp', { recurse: true });