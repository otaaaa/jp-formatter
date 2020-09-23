const formatAddress = require('../lib/address-formatter');

test('formatAddress', () => {
  expect(formatAddress('東京都墨田区文花三丁目8-2')).toStrictEqual({
    prefecture: '東京都',
    ward: '墨田区',
    city: '文花',
    street_number: '3-8-2',
  });

  expect(formatAddress('東京都葛飾区亀有5丁目48-7')).toStrictEqual({
    prefecture: '東京都',
    ward: '葛飾区',
    city: '亀有',
    street_number: '5-48-7',
  });

  expect(formatAddress('東京都北区神谷３丁目')).toStrictEqual({
    prefecture: '東京都',
    ward: '北区',
    city: '神谷',
    street_number: '3',
  });

  expect(formatAddress('東京都墨田区江東橋４丁目１０－１３')).toStrictEqual({
    prefecture: '東京都',
    ward: '墨田区',
    city: '江東橋',
    street_number: '4-10-13',
  });

  expect(formatAddress('東京都新宿区北新宿４丁目28－15')).toStrictEqual({
    prefecture: '東京都',
    ward: '新宿区',
    city: '北新宿',
    street_number: '4-28-15',
  });

  expect(formatAddress('東京都目黒区下目黒1丁目')).toStrictEqual({
    prefecture: '東京都',
    ward: '目黒区',
    city: '下目黒',
    street_number: '1',
  });

  expect(formatAddress('東京都福生市大字福生８７５－８－３')).toStrictEqual({
    prefecture: '東京都',
    ward: '福生市',
    city: '大字福生',
    street_number: '875-8-3',
  });

  expect(formatAddress('東京都台東区元浅草１')).toStrictEqual({
    prefecture: '東京都',
    ward: '台東区',
    city: '元浅草',
    street_number: '1',
  });

  expect(formatAddress('東京都台東区東上野3-35-9')).toStrictEqual({
    prefecture: '東京都',
    ward: '台東区',
    city: '東上野',
    street_number: '3-35-9',
  });

  expect(formatAddress('東京都葛飾区白鳥2-4')).toStrictEqual({
    prefecture: '東京都',
    ward: '葛飾区',
    city: '白鳥',
    street_number: '2-4',
  });

  expect(formatAddress('東京都世田谷区下馬1')).toStrictEqual({
    prefecture: '東京都',
    ward: '世田谷区',
    city: '下馬',
    street_number: '1',
  });

  expect(formatAddress('東京都文京区大塚')).toStrictEqual({
    prefecture: '東京都',
    ward: '文京区',
    city: '大塚',
    street_number: null,
  });

  expect(formatAddress('東京都豊島区')).toStrictEqual({
    prefecture: '東京都',
    ward: '豊島区',
    city: null,
    street_number: null,
  });

  expect(formatAddress('東京都千代田区千代田区')).toStrictEqual({
    prefecture: '東京都',
    ward: '千代田区',
    city: '千代田区',
    street_number: null,
  });
});
