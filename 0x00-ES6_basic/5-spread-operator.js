export default function concatArrays(array1, array2, string) {
  const arr = array1.concat(array2)
  arr.push(string.splite(''));
  return arr
}
