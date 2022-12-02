function merge(left, right) {
  let mergedArr = [];
  let i = 0;
  let j = 0;
  // Try merging till we reach end of either one of the arrays.
  while (i < left.length && j < right.length) {
    if (compare(left[i], right[j])) {
      mergedArr.push(left[i]);
      i++;
    } else {
      mergedArr.push(right[j]);
      j++;
    }
  }
  return mergedArr.concat(left.slice(i)).concat(right.slice(j));
}
