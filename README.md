# module-generator 
[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

The generator script I use for fresh modules.

## Usage

Install with npm:

``` bash
npm install -g hughsk/module-generator
```

Update your npm config:

``` bash
npm config set init.author.name "Your Name"
npm config set init.author.email "me@example.com"
npm config set init.author.github "your-github-handle"
```

Run the generator in a fresh folder and you're good to go!

``` bash
mkdir my-new-module
cd my-new-module
module-generator
npm init
```

## License

MIT. See [LICENSE.md](http://github.com/hughsk/module-generator/blob/master/LICENSE.md) for details.
