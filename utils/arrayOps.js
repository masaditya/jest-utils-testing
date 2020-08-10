module.exports = {
  pushItem(array, item) {
    return [...array, item];
  },
  popItem(array, item) {
    return array.pop(item);
  },
  findUser(array, name) {
    return array.find((el) => el.name === name);
  },
  findIndex(array = [], item) {
    return array.findIndex((el) => el.id === item.id);
  },
  findKeyProps(object) {
    return Object.keys(object);
  },
};
