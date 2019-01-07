#!/usr/bin/env node

const fs = require('fs');
const minimist = require('minimist');
const jf = require('json-format');
const endOfLine = require('os').EOL;

const usage = [
    "Usage: format-jsonfile [input json filename] [OPTIONS]",
    "By default, the formatted json is printed to console",
    "",
    "-o | --out    : specify output filename",
    "-w | --width  : specify the number of spaces for indent",
    "-e | --encode : specify encoding for input json (utf8 by default)",
    "-s | --space  : indent by space (default)",
    "-t | --tab    : indent by tab",
    "-h | --help   : print help",
].join('\n');

args = process.argv.slice(2);
opts = {
    string : ["o", "e"],
    boolean : ["t", "s", "h"],
    alias : {
        "width" : "w",
        "help" : "h",
        "tab" : "t",
        "space" : "s",
        "out" : "o",
        "encode" : "e"
    },
    default : {
        _ : null,
        "o" : null,
        "t" : false,
        "s" : true,
        "w" : 2,
        "encode" : "utf8"
    }
}
var argv = minimist(args, opts);

if (argv.h) console.log(usage);

if (argv._.length ==0) {
    console.log(usage);
    return 1;
}

const input = argv._[0];
const output = argv.o;
const encode = argv.encode;

fs.readFile(input, encode, (err, data) => {
    if (err) return console.log(err);
    parseAndOutput(data);
})

function parseAndOutput(jsonstr) {
    var config = {
        type: argv.t ?  "tab" : "space",
        size: argv.t ? 1 : argv.width
    }
    json = JSON.parse(jsonstr);
    var formatted = jf(json, config).replace(/\n/g, endOfLine);
    if (output) {
        fs.writeFile(output, formatted, (err) => {
            if (err) return console.log(err);
        })
    } else{
        console.log(formatted);
    }
}
