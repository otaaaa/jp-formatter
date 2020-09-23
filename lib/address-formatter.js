const formatAlphanumeric = require('./alphanumeric-formatter');
const formatKansuuji = require('./kansuuji-formatter');

module.exports = (text) => {
  const halfCharsAddress = formatAlphanumeric(text);
  const shapedAddress = formatKansuuji(halfCharsAddress)
    .split('丁目')
    .filter(v => v)
    .join('-');
  const addressReg = '((?:旭川|伊達|石狩|盛岡|奥州|田村|南相馬|那須塩原|東村山|武蔵村山|羽村|十日町|上越|富山|野々市|大町|蒲郡|四日市|姫路|大和郡山|廿日市|下松|岩国|田川|大村|宮古|富良野|別府|佐伯|黒部|小諸|塩尻|玉野|周南)市|(?:余市|高市|[^市]{2,3}?)郡(?:玉村|大町|.{1,5}?)[町村]|(?:.{1,4}市)?[^町]{1,4}?区|.{1,7}?[市町村])(.+)';
  const [prefecture, wardAndcityAndStreetNumber] = shapedAddress.match(new RegExp(/(...??[都道府県])(.+)/)).slice(1, 3);
  const [ward, cityAndStreetNumber] = (
    wardAndcityAndStreetNumber.match(new RegExp(addressReg)) ||
    [wardAndcityAndStreetNumber, wardAndcityAndStreetNumber, null]
  ).slice(1, 3);
  const [city, street_number] = !!cityAndStreetNumber ?
    (
      cityAndStreetNumber.match(/(.*?)([\d|-]+)/) ||
      [cityAndStreetNumber, cityAndStreetNumber, null]
    ).slice(1, 3) :
    [null, null];

  return { prefecture, ward, city, street_number };
}
