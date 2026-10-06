function sumNested(arr) {

  const items = Array.isArray(arr) ? arr : null;


  return items && items.reduce((total, item) => total + sumNested(item), 0) || arr;
}


const input = [1, [2, 3, [4, 5]], 6];
console.log(sumNested(input));