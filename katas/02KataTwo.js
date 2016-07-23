'use strict';

var assert = require('assert');

// Given an array A, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

//[1, 2, 3, 4, 5, 2, 1, 4, 2, 3, 5]
//should return 2

function findOdd(arr) {
    // Your code here
    var count=0;
    var unique = arr.filter(function(item, i){
      return arr.indexOf(item) === i;
    });

    for(var i=0; i<unique.length; i++){
      for(var j=0; j<arr.length; j++){
        if(arr[j]===unique[i]) {
          count++;
        }
      }

      if(count%2!==0) {
        return unique[i];
      }
      else{
        count = 0;
      }
    }

}


// Tests

describe('#findOdd()', function () {
    it('should find the int that appears an odd number of times', function () {
        assert.equal(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]), 5);
        assert.equal(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]), -1);
        assert.equal(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]), 5);
        assert.equal(findOdd([10]), 10);
        assert.equal(findOdd([1,1,1,1,1,1,10,1,1,1,1]), 10);
        assert.equal(findOdd([5,4,3,2,1,5,4,3,2,10,10]), 1);
    });
});
