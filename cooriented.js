"use strict"

function cooriented(a, b) {
  var s = 0
  for(var i=0; i<b.length; ++i) {
    var j = a.indexOf(b[i])
    if(j < 0) {
      return 0
    }
    s += (j+1)*i
  }
  return s & 1 ? -1 : 1
}

module.exports = cooriented
