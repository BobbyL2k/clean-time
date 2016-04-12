# Clean Time

Simple readable time generator for your clean coding goodness

## Installation

npm install clean-time --save

## Usage

```js
var time = require('clean-time');

console.log(time(1).second());              //   1000   
console.log(time(2).seconds());             //   2000
console.log(time(2).minutes());             // 120000
console.log(time(2).minutes(2).seconds());  // 122000
```

## Author

* BobbyL2k

## License

MIT
