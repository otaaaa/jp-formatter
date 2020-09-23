module.exports = (str) => {
  return str.replace(/[一二三四五六七八九〇]+丁目/g, (s) => {
    return s.replace(/一/g, 1)
            .replace(/二/g, 2)
            .replace(/三/g, 3)
            .replace(/四/g, 4)
            .replace(/五/g, 5)
            .replace(/六/g, 6)
            .replace(/七/g, 7)
            .replace(/八/g, 8)
            .replace(/九/g, 9)
            .replace(/〇/g, 0);
  });
}
