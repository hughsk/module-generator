# module-generator 
[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

The generator script I use for fresh modules. Forked from [hughsk](https://github.com/hughsk/module-generator). Feel free to fork for further customization.

## Usage

Install with npm:

``` bash
npm install -g mattdesl/module-generator
```

Update your npm config:

```bash
# required
npm config set init.author.name "Your Name"
npm config set init.author.email "me@example.com"
npm config set init.author.github "your-github-handle"

# optional, defaults to your github
npm config set init.author.url "http://your-site.com/"
```

Run the generator in a fresh folder and you're good to go!

``` bash
mkdir my-new-module
cd my-new-module
module-generator
```

This will produce some generic files already filled in:

```
README.md
LICENSE.md
package.json
.gitignore
.npmignore
```

## Usage

```
Options
	--test, -t      generate test.js and index.js with tape
    --user, -u      the user/organization override
```

## Basic Tests

If you specify `--test` or `-t` flags, it will produce `index.js` and `test.js` files if they don't already exist. The index will be empty, and the test looks like this for a module called `my-funky-module`.

```js
var myFunkyModule = require('./')
var test = require('tape').test

test(/* description inserted here */, function(t) {
	
	t.end()
})
```

This also installs `tape@lastest` as a default devDependency and stores it in your `package.json`. 

Example:
 
```module-generator -t```

## User/Organization

If you want the GitHub links to point to a specific organization or user, you can specify it with a command-line parameter. For example:

```sh
module-generator -u stackgl
```

This will use "stackgl" as the name in License and in all github links. The author's name/URL still uses `npm config` as set earlier. 

## License

MIT. See [LICENSE.md](http://github.com/hughsk/module-generator/blob/master/LICENSE.md) for details.
