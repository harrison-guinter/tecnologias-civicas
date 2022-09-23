export const transformObjectToKeyValueArray = (object) => {
  const arr = [];
  Object.keys(object).forEach((key) => {
    arr.push([key, object[key]]);
  });

  return arr;
};

export const mergeObjectsToKeyValueArray = (objectArr) => {
  const firstObject = objectArr[0];
  const secondObject = objectArr[1];
  const arr = [];

  Object.keys(firstObject).forEach((key) => {
    arr.push([key, firstObject[key], secondObject[key]]);
  });

  return [arr];
};
