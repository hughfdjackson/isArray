var a = require('assert')
var isArray = require('..')

suite('isArray')

test('isArray works', function(){
    var array = []
    var arrayLike = { length: 0 }
    var object = {}

    a.equal(isArray(array), true)
    a.equal(isArray(arrayLike), false)
    a.equal(isArray(object), false)
});
