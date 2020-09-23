# jp-formatter

## Installation

Using npm:

```
$ npm i --save lodash.round
```

In Node.js:

```
const {
  formatAlphanumeric,
  formatKansuuji,
  formatAddress,
  formatPrice
} = require('jp-formatter');

formatAddress('東京都墨田区江東橋４丁目１０－１３');

// {
//   prefecture: '東京都',
//   ward: '墨田区',
//   city: '江東橋',
//   street_number: '4-10-13',
// }
```
