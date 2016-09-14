# located-in

[![NPM version](https://img.shields.io/npm/v/located-in.svg?style=flat-square)](https://npmjs.com/package/located-in) [![NPM downloads](https://img.shields.io/npm/dm/located-in.svg?style=flat-square)](https://npmjs.com/package/located-in) [![Build Status](https://img.shields.io/circleci/project/egoist/located-in/master.svg?style=flat-square)](https://circleci.com/gh/egoist/located-in)

> Get users by a speified location.

## Install

```bash
$ npm install --save located-in
```

## Usage

```js
const locatedIn = require('located-in')

// find users in china or hongkong
locatedIn(['china', 'hongkong'])
  .then(data => {
    console.log(data)
    // {
    //   total_count: 3,                                                                      
    //   incomplete_results: false,                                                           
    //   items: []
    // }
  })
```

## API

### locatedIn(locations, [options])

#### locations

Type: `array`

A list of locations.

#### options

##### all

Type: `boolean`<br>
Default: `false`

Whether to concat all results in one array.

##### per_page

Type: `number`<br>
Default: `50`

`50` items per page.

##### keyword

Type: `string`<br>
Default: `''`

The search keyword.

##### sort

Type: `string`<br>
Default: `followers`

How to sort the results.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT](https://egoist.mit-license.org/) © [EGOIST](https://github.com/egoist)
