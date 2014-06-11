#!/usr/bin/env node

var prompt   = require('inquirer').prompt
var readdirp = require('readdirp')
var conf     = require('npmconf')
var xtend    = require('xtend')
var dotty    = require('dotty')
var path     = require('path')
var fs       = require('fs')

var target = process.cwd()

getParams(function(err, params) {
  if (err) throw err

  readdirp({
    root: path.join(__dirname, 'templates')
  }).on('data', function(file) {
    var dest = path.resolve(target, file.path)

    if (fs.existsSync(dest)) {
      return console.log('ignoring: ' + file.path)
    }
    // console.log("rendering", file)

    fs.readFile(file.fullPath, 'utf8', function(err, content) {
      if (err) throw err

      content = render(content, params)

      if (file.name.match(/\.json$/g)) {
        content = JSON.stringify(JSON.parse(content), null, 2)
      }

      fs.writeFile(dest, content)
    })
  })
})

function render(template, params) {
  return template.replace(/\{\{([^}]+)}}/g, function(_, name) {
    return dotty.get(params, name)
  })
}

function getParams(done) {
  conf.load({}, function(err, config) {
    if (err) return done(err)

    var data = {
      user: {
          name: config.get('init.author.name')
        , site: config.get('init.author.url')||''
        , email: config.get('init.author.email')
        , github: config.get('init.author.github')
        , username: config.get('username')
      }
    }

    if (!data.user.username) return bail('npm login')
    if (!data.user.name) return bail('npm config set init.author.name "Your Name"')
    if (!data.user.email) return bail('npm config set init.author.email "me@example.com"')
    if (!data.user.github) return bail('npm config set init.author.github "your-github-handle"')

    prompt([
      {
          'name': 'name'
        , 'message': 'Module name'
        , 'default': path.basename(target)
      },
      {
          'name': 'description'
        , 'message': 'Module description'
      },
      // {
      //     'name': 'tags'
      //   , 'message': 'Module tags:'
      // },
      {
          'name': 'stability'
        , 'type': 'list'
        , 'message': 'Module stability:'
        , 'default': 'experimental'
        , 'choices': [
            'deprecated'
          , 'experimental'
          , 'unstable'
          , 'stable'
          , 'frozen'
          , 'locked'
        ]
      }
    ], function(results) {
      if (err) return done(err)

      results.name = dequote(results.name)
      results.description = dequote(results.description)
      // results.tags = JSON.stringify(results.tags.split(' ').map(function(str) {
      //   return dequote(str).trim()
      // }).filter(Boolean), null, 2)

      done(null, xtend(results, data))
    })
  })
}

function bail(cmd) {
  console.log('')
  console.log('Missing configuration option, please run the following using your own value:')
  console.log('')
  console.log('  > ' + cmd)
  console.log('')
}

function dequote(str) {
  return str.replace(/\"+/g, '\\"')
}
