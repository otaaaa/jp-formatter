const formatPrice = require('../lib/price-formatter');

test('formatPrice', () => {
  expect(formatPrice(null)).toStrictEqual(null);

  // with comma
  expect(formatPrice('1万円')).toStrictEqual(10000);
  expect(formatPrice('12万円')).toStrictEqual(120000);
  expect(formatPrice('123万円')).toStrictEqual(1230000);
  expect(formatPrice('1,234万円')).toStrictEqual(12340000);
  expect(formatPrice('1億円')).toStrictEqual(100000000);
  expect(formatPrice('12億円')).toStrictEqual(1200000000);
  expect(formatPrice('123億円')).toStrictEqual(12300000000);
  expect(formatPrice('1,234億円')).toStrictEqual(123400000000);
  expect(formatPrice('1億1万円')).toStrictEqual(100010000);
  expect(formatPrice('1億12万円')).toStrictEqual(100120000);
  expect(formatPrice('1億123万円')).toStrictEqual(101230000);
  expect(formatPrice('1億1,234万円')).toStrictEqual(112340000);
  expect(formatPrice('12億1万円')).toStrictEqual(1200010000);
  expect(formatPrice('12億12万円')).toStrictEqual(1200120000);
  expect(formatPrice('12億123万円')).toStrictEqual(1201230000);
  expect(formatPrice('12億1,234万円')).toStrictEqual(1212340000);
  expect(formatPrice('123億1万円')).toStrictEqual(12300010000);
  expect(formatPrice('123億12万円')).toStrictEqual(12300120000);
  expect(formatPrice('123億123万円')).toStrictEqual(12301230000);
  expect(formatPrice('123億1,234万円')).toStrictEqual(12312340000);
  expect(formatPrice('1,234億1万円')).toStrictEqual(123400010000);
  expect(formatPrice('1,234億12万円')).toStrictEqual(123400120000);
  expect(formatPrice('1,234億123万円')).toStrictEqual(123401230000);
  expect(formatPrice('1,234億1,234万円')).toStrictEqual(123412340000);

  // without comma
  expect(formatPrice('1万円')).toStrictEqual(10000);
  expect(formatPrice('12万円')).toStrictEqual(120000);
  expect(formatPrice('123万円')).toStrictEqual(1230000);
  expect(formatPrice('1234万円')).toStrictEqual(12340000);
  expect(formatPrice('1億円')).toStrictEqual(100000000);
  expect(formatPrice('12億円')).toStrictEqual(1200000000);
  expect(formatPrice('123億円')).toStrictEqual(12300000000);
  expect(formatPrice('1234億円')).toStrictEqual(123400000000);
  expect(formatPrice('1億1万円')).toStrictEqual(100010000);
  expect(formatPrice('1億12万円')).toStrictEqual(100120000);
  expect(formatPrice('1億123万円')).toStrictEqual(101230000);
  expect(formatPrice('1億1234万円')).toStrictEqual(112340000);
  expect(formatPrice('12億1万円')).toStrictEqual(1200010000);
  expect(formatPrice('12億12万円')).toStrictEqual(1200120000);
  expect(formatPrice('12億123万円')).toStrictEqual(1201230000);
  expect(formatPrice('12億1234万円')).toStrictEqual(1212340000);
  expect(formatPrice('123億1万円')).toStrictEqual(12300010000);
  expect(formatPrice('123億12万円')).toStrictEqual(12300120000);
  expect(formatPrice('123億123万円')).toStrictEqual(12301230000);
  expect(formatPrice('123億1234万円')).toStrictEqual(12312340000);
  expect(formatPrice('1234億1万円')).toStrictEqual(123400010000);
  expect(formatPrice('1234億12万円')).toStrictEqual(123400120000);
  expect(formatPrice('1234億123万円')).toStrictEqual(123401230000);
  expect(formatPrice('1234億1234万円')).toStrictEqual(123412340000);

  // with space
  expect(formatPrice(' 1 万 円 ')).toStrictEqual(10000);
  expect(formatPrice(' 1 2 万 円 ')).toStrictEqual(120000);
  expect(formatPrice(' 1 2 3 万 円 ')).toStrictEqual(1230000);
  expect(formatPrice(' 1 2 3 4 万 円 ')).toStrictEqual(12340000);
  expect(formatPrice(' 1 万 円 ')).toStrictEqual(10000);
  expect(formatPrice(' 1 2 万 円 ')).toStrictEqual(120000);
  expect(formatPrice(' 1 2 3 万 円 ')).toStrictEqual(1230000);
  expect(formatPrice(' 1 , 2 3 4 万 円 ')).toStrictEqual(12340000);
  expect(formatPrice(' 1 億 ')).toStrictEqual(100000000);
  expect(formatPrice(' 1 2 億 ')).toStrictEqual(1200000000);
  expect(formatPrice(' 1 2 3 億 ')).toStrictEqual(12300000000);
  expect(formatPrice(' 1 , 2 3 4 億 ')).toStrictEqual(123400000000);
  expect(formatPrice(' 1 億 円 ')).toStrictEqual(100000000);
  expect(formatPrice(' 1 2 億 円 ')).toStrictEqual(1200000000);
  expect(formatPrice(' 1 2 3 億 円 ')).toStrictEqual(12300000000);
});
