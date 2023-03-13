const tablica = ['Monia', 'Piotrek'];
const pustaTablica = [];
const objekt = { name: 'Staszek', age: 68 };
const funkcja = function (a, b) {
  return a + b;
};
// to jest działająca funkcja
function thing(box) {
    if (!box) {
      return true
    }
    if (Array.isArray(box)) {
      return box.length === 0;
    }
    if (typeof box === 'object') {
      return Object.keys(box).length === 0;
    }
    return false;
  }

  //-----------------------------------------------------



console.log(Array.isArray(tablica));
console.log(Array.isArray(pustaTablica));
console.log(Object.entries(objekt).length);
console.log(tablica.length);

function checkArrray(box) {
    if (Array.isArray(box)) {
        return box.length != 0
      }
}
function checkObject(box) {
    if (typeof box === 'object') {
        return Object.keys(box).length != 0;
      }
}

const resultArray = checkArrray(tablica)
const resultObject = checkObject(objekt)
console.log(resultArray)
console.log(resultObject)
