#!/usr/bin/node

const fs = require("fs");
const fileName = process.argv[2];
const string = process.argv[3];

fs.readFile(fileName, string, 'utf-8', (err) => {
    if (err) {
        console.log(err);
    }
});

