function threeSum(arr, target) {
// write your code here
  // sort the array in ascending order
  arr.sort(function(a, b) {
    return a - b;
  });

  // initialize the variables
  var result = arr[0] + arr[1] + arr[2];
  var n = arr.length;

  // loop through the array
  for (var i = 0; i < n - 2; i++) {
    var j = i + 1;
    var k = n - 1;

    // use two pointers to find the closest sum
    while (j < k) {
      var sum = arr[i] + arr[j] + arr[k];
      if (Math.abs(sum - target) < Math.abs(result - target)) {
        result = sum;
      }
      if (sum < target) {
        j++;
      } else {
        k--;
      }
    }
  }

  return result;
}

module.exports = threeSum;
