cooriented
==========
Checks relative parity of two sequences.  Can be used to evaluate the differential in simplicial homology.

Usage
=====
Via npm:

    npm install cooriented
    
```javascript
console.log(require("cooriented")([0,1,2], [0,1,2])) // prints +1
console.log(require("cooriented")([0,1,2], [1,0,2])) // prints -1
```

`require("cooriented")(a, b)`
-----------------------------
Computes the relative orientation of a vs b.  This is done by evaluating the Vandermonde polynomials of degree n for a and b, then taking their quotient mod 3.  If:

* a.length !== b.length
* OR the elements in a and b do not match
* OR either a or b contains any repeated elements

Then this returns 0.

Credits
=======
(c) 2013 Mikola Lysenko.
