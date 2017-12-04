'use strict'

function kebabCase(str) {
  var res = str

  // convert camelCase capitals to kebab-case
  res = res.replace(/([a-z][A-Z])/g, function(match) {
    return match.substr(0, 1) + '-' + match.substr(1, 1).toLowerCase()
  })

  // convert non-camelCase capitals to lowercase
  res = res.toLowerCase()

  // convert non-alphanumeric characters to hyphens
  res = res.replace(/[^-a-z0-9]+/g, '-')

  // remove hyphens from both ends
  res = res.replace(/^-+/, '').replace(/-$/, '')

  return res
}

function slugify(arg) {
  // return kebab-case of `arg`
  if (typeof arg === 'string')
    return kebabCase(arg)

  // kebab-case each string in the array and concatenate with spaces
  if (Array.isArray(arg))
  {
    var res = ''

    arg.forEach(function(s) {
      res += ' ' + kebabCase(s)
    })

    return res
  }

  return ''
}

hexo.extend.helper.register('slugify', slugify)

module.exports = slugify
