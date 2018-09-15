module.exports = [
  {
    name: 'mock server',
    type: 'rawlist',
    message: 'Select mock server',
    choices: [
      'nei (default)',
      'rap'
    ],
    default: 0,
    filter: function (val) {
      return {
        'nei (default)': 'nei',
        'rap': 'rap',
      }[val]
    }
  },
  {
    name: 'adaptation',
    type: 'rawlist',
    message: 'Select adaptation',
    choices: [
      'rem (default)',
      'vw'
    ],
    default: 0,
    filter: function (val) {
      return {
        'rem (default)': 'rem',
        'vw': 'vw',
      }[val]
    }
  },
  {
    name: 'statistical platform',
    type: 'rawlist',
    message: 'Select statistical platform',
    choices: [
      'none (default)',
      'Zhuge (诸葛io)',
      'Umeng (友盟)',
      'Baidu (百度统计)'
    ],
    default: 0,
    filter: function (val) {
      return {
        'none (default)': 'none',
        'Zhuge (诸葛io)': 'zhuge',
        'Umeng (友盟)': 'umeng',
        'Baidu (百度统计)': 'baidu'
      }[val]
    }
  }
]