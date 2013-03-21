"use strict"

function cooriented(a, b) {
  if(a.length !== b.length) {
    return 0
  }
  var pa = 1, pb = 1, c = 0, n = 0
  for(var i=0, ilen=a.length; i<ilen; ++i) {
    for(var j=0; j<i; ++j) {
      var da = a[i] - a[j]
      if(da < 0) {
        pa = -pa
      } else if(!da) {
        return 0
      }
      var db = b[i] - b[j]
      if(db < 0) {
        pb = -pb
      } else if(!db) {
        return 0
      }
      if(a[i] === b[j]) {
        ++c, ++n
      }
      if(b[i] === a[j]) {
        --c, ++n
      }
    }
    if(a[i] === b[i]) {
      ++n
    }
  }
  if(c !== 0 || n !== a.length) {
    return 0
  }
  return pa * pb
}

module.exports = cooriented
