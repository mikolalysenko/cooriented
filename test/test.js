var cooriented = require("../cooriented.js")

require("tap").test("check orientation", function(t) {

  t.equals(cooriented([0,1,2], [0,1,2]), 1)
  t.equals(cooriented([0,1,2], [1,0,2]), -1)


  t.equals(cooriented([0,1,2], [0]), 1)
  t.equals(cooriented([0,1,2], [1]), 1)
  t.equals(cooriented([0,1,2], [2]), 1)



  t.equals(cooriented([0,1,2], [0,1]), 1)
  t.equals(cooriented([0,1,2], [1,0]), -1)
  t.equals(cooriented([0,1,2], [5]), 0)
  
  t.equals(cooriented([0,1,2], [0,2]), -1)

  t.end()
})