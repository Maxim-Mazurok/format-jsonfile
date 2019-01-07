# format-jsonfile
format-jsonfile is a CLI tool just for formatting your json files.
## 👉 This fork uses `require('os').EOL` instead of `\n` in resulting files.

## Install
Using git:

```bash
$ git clone https://github.com/tmokmss/format-jsonfile.git
$ cd format-jsonfile
$ npm install .
```

Using npm:

```bash
$ npm install -g format-jsonfile
```

## Usage
```
Usage: format-jsonfile [input json filename] [OPTIONS]
By default, the formatted json is printed to console

-o | --out    : specify output filename
-w | --width  : specify the number of spaces for indent
-e | --encode : specify encoding for input json (utf8 by default)
-s | --space  : indent by space (default)
-t | --tab    : indent by tab
-h | --help   : print help
```
