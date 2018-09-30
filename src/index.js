module.exports = function getZerosCount(number) {
  /*реализован через сортировки сосисок и булочек информация https://site.ada.edu.az/~medv/acm/Docs%20e-olimp/Volume%202/123.html
  https://tproger.ru/problems/how-many-zeros-at-the-end-of-the-factorial-of-100/ */
  zero = 0
  for (var i = 1; i <= number; i++) {
    counter = i;
    while (counter%5 == 0) {
      counter /= 5;
      zero ++

    }
  }
  return zero
}


