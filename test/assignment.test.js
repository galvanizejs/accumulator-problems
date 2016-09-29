window.onload = function() {
  var expect = chai.expect;
  mocha.setup('bdd');
  
  describe('test', function() {

    it("string set properly", function() {
      expect(test()).to.eq("This Works!")
    })

  })
  

  describe('sum', function() {

    it("returns 0 if the input is empty", function() {
      expect(sum([]), "Default value is incorrect").to.eq(0)
    })

    it("sums the integers in the array", function() {
      expect(sum([2])).to.eq(2)
      expect(sum([2,4])).to.eq(6)
      expect(sum([2,4,6])).to.eq(12)
      expect(sum([2,4,6,8])).to.eq(20)
      expect(sum([2,4,6,8,10])).to.eq(30)
    })

  })

  describe('doubleLetters', function() {

    it("returns an empty string when the input is empty", function() {
      expect(doubleLetters(""), "Default value is incorrect").to.eq("")
    })

    it("doubles every letter in the given string", function() {
      expect(doubleLetters("abc")).to.eq("aabbcc")
      expect(doubleLetters("xyzpdq")).to.eq("xxyyzzppddqq")
    })

  })

  describe('doubleNumbers', function() {

    it("returns an empty array when the input is empty", function() {
      expect(doubleNumbers([]), "Default value is incorrect").to.deep.eq([])
    })

    it("doubles every number in the given array", function() {
      expect(doubleNumbers([1,2,3])).to.deep.eq([2,4,6])
      expect(doubleNumbers([10,20,30,40])).to.deep.eq([20,40,60,80])
    })

  })

  describe('multiplyNumbers', function() {

    it("returns 0 when the input is empty", function() {
      expect(multiplyNumbers([], 3), "Default value is incorrect").to.deep.eq([])
    })

    it("doubles every number in the given array", function() {
      expect(multiplyNumbers([1,2,3], 3)).to.deep.eq([3,6,9])
      expect(multiplyNumbers([10,20,30,40], 5)).to.deep.eq([50,100,150,200])
    })

  })

  describe('interleave', function() {

    it("returns an empty array when the inputs are empty", function() {
      expect(interleave([], []), "Default value is incorrect").to.deep.eq([])
    })

    it("interleaves elements from two arrays when input is present", function() {
      expect(interleave(["a", "b", "c"], ["x", "y", "z"])).to.deep.eq(["a", "x", "b", "y", "c", "z"])
      expect(interleave([1,2,3,4], [5,6,7,8])).to.deep.eq([1,5,2,6,3,7,4,8])
    })

  })

  describe('createRange', function() {

    it("returns an empty array when the input is empty", function() {
      expect(createRange(0), "Default value is incorrect").to.deep.eq([])
    })

    it("creates an array of the specified length with the specified values", function() {
      expect(createRange(4, "a")).to.deep.eq(["a", "a", "a", "a"])
      expect(createRange(7, "z")).to.deep.eq(["z", "z", "z", "z", "z", "z", "z"])
    })

  })

  describe('flipArray', function() {

    it("returns an empty object when the input is empty", function() {
      expect(flipArray([]), "Default value is incorrect").to.deep.eq({})
    })

    it("turns the of items into an object", function() {
      expect(flipArray(["a", "b", "c"])).to.deep.eq({a: 0, b: 1, c: 2})
      expect(flipArray([10, 20])).to.deep.eq({10: 0, 20: 1})
    })

  })

  describe('arraysToObject', function() {

    it("returns an empty object when the input is empty", function() {
      expect(arraysToObject([]), "Default value is incorrect").to.deep.eq({})
    })

    it("turns the array of arrays into an object", function() {
      expect(arraysToObject([["name", "Sue"], ["age", "24"]])).to.deep.eq({name: "Sue", age: "24"})
      expect(arraysToObject([["height", 24], ["weight", 22]])).to.deep.eq({height: 24, weight: 22})
    })

  })

  describe('reverseString', function() {

    it("returns an empty string when the input is empty", function() {
      expect(reverseString(""), "Default value is incorrect").to.deep.eq("")
    })

    it("returns the string reversed", function() {
      expect(reverseString("Sue")).to.deep.eq("euS")
      expect(reverseString("Steve")).to.deep.eq("evetS")
    })

    it("does not call the builtin `.reverse` method", function() {
      expect(reverseString.toString()).to.not.match(/\.split|\.reverse/)
    })

  })

  describe('repeats', function() {

    it("returns true when given an empty string (which seems strange, but go with it :)", function() {
      expect(repeats(""), "Default value is incorrect").to.deep.eq(true)
    })

    it("returns true when the second half of the string equals the first", function() {
      expect(repeats("bahbah")).to.deep.eq(true)
      expect(repeats("nananananananana")).to.deep.eq(true)
    })

    it("returns false when the second half of the string does not equal the first", function() {
      expect(repeats("bahba")).to.deep.eq(false)
      expect(repeats("nananananann")).to.deep.eq(false)
    })

    it("does not use .repeat", function() {
      expect(repeats.toString()).to.not.match(/\.repeat/)
    })

  })

  describe('everyOther', function() {

    it("returns an empty string when given an empty string", function() {
      expect(everyOther(""), "Default value is incorrect").to.deep.eq("")
    })

    it("returns a string with every other letter", function() {
      expect(everyOther("a")).to.deep.eq("a")
      expect(everyOther("ab")).to.deep.eq("a")
      expect(everyOther("abc")).to.deep.eq("ac")
      expect(everyOther("abc")).to.deep.eq("ac")
      expect(everyOther("abcd")).to.deep.eq("ac")
      expect(everyOther("abcde")).to.deep.eq("ace")
      expect(everyOther("Hello there")).to.deep.eq("Hlotee")
    })

  })

  describe('allEqual', function() {

    it("returns true when given an empty string", function() {
      expect(allEqual(""), "Default value is incorrect").to.deep.eq(true)
    })

    it("returns true when all letters are equal", function() {
      expect(allEqual("aaa")).to.deep.eq(true)
      expect(allEqual("bbbbb")).to.deep.eq(true)
    })

    it("returns false when all letters are not equal", function() {
      expect(allEqual("ab")).to.deep.eq(false)
      expect(allEqual("abbbbbbb")).to.deep.eq(false)
    })

  })

  describe('sumLetters', function() {

    it("returns 0 when given an empty string", function() {
      expect(sumLetters(""), "Default value is incorrect").to.deep.eq(0)
    })

    it("returns the sum of the numbers contained in the string", function() {
      expect(sumLetters("111")).to.deep.eq(3)
      expect(sumLetters("2233")).to.deep.eq(10)
    })

  })

  describe('countVowels', function() {

    it("returns 0 when given an empty string", function() {
      expect(countVowels(""), "Default value is incorrect").to.deep.eq(0)
    })

    it("returns the count of the vowels in a string (not counting 'y')", function() {
      expect(countVowels("aeiouy")).to.deep.eq(5)
      expect(countVowels("Hello")).to.deep.eq(2)
    })

  })

  describe('split', function() {

    it("returns an empty array when given an empty string", function() {
      expect(split(""), "Default value is incorrect").to.deep.eq([])
    })

    it("returns an array containing the characters of the string", function() {
      expect(split("Hello")).to.deep.eq(["H", "e", "l", "l", "o"])
      expect(split("hi")).to.deep.eq(["h", "i"])
    })

    it("does not use the builtin split method", function() {
      expect(split.toString()).to.not.match(/\.split/)
    })

  })

  describe('getCodePoints', function() {

    it("returns an empty array when given an empty string", function() {
      expect(getCodePoints(""), "Default value is incorrect").to.deep.eq([])
    })

    it("returns an array containing the codePoints of each letter in the string", function() {
      expect(getCodePoints("Hello")).to.deep.eq([ 72, 101, 108, 108, 111 ])
      expect(getCodePoints("hi")).to.deep.eq([ 104, 105 ])
    })

  })

  describe('letterMap', function() {

    it("returns an empty object when given an empty string", function() {
      expect(letterMap(""), "Default value is incorrect").to.deep.eq({})
    })

    it("returns an object that maps letters to their _last_ position in the string", function() {
      expect(letterMap("up")).to.deep.eq({u: 0, p: 1})
      expect(letterMap("Hello")).to.deep.eq({H: 0, e: 1, l: 3, o: 4})
      expect(letterMap("aaa")).to.deep.eq({a: 2})
    })

  })

  describe('letterCount', function() {

    it("returns an empty object when given an empty string", function() {
      expect(letterCount(""), "Default value is incorrect").to.deep.eq({})
    })

    it("returns an object that maps letters to the number of occurrences", function() {
      expect(letterCount("up")).to.deep.eq({u: 1, p: 1})
      expect(letterCount("Hello")).to.deep.eq({H: 1, e: 1, l: 2, o: 1})
      expect(letterCount("aaa")).to.deep.eq({a: 3})
    })

  })

  describe('threeOdds', function() {

    it("returns false when passed 0s", function() {
      expect(threeOdds(0, 0), "Default value is incorrect").to.deep.eq(false)
    })

    it("returns true if there are at least 3 odd whole numbers between the numbers given", function() {
      expect(threeOdds(0,6)).to.deep.eq(true)
      expect(threeOdds(0,7)).to.deep.eq(true)
      expect(threeOdds(10,18)).to.deep.eq(true)
    })

    it("returns false if there are not at least 3 odd whole numbers between the numbers given", function() {
      expect(threeOdds(0,2)).to.deep.eq(false)
      expect(threeOdds(0,3)).to.deep.eq(false)
      expect(threeOdds(0,4)).to.deep.eq(false)
      expect(threeOdds(0,5)).to.deep.eq(false)
    })

  })

  describe('leftPad', function() {

    it("returns the original string when it's longer than the padding", function() {
      expect(leftPad("Hello", 0, "-")).to.deep.eq("Hello")
      expect(leftPad("Hello", 1, "-")).to.deep.eq("Hello")
      expect(leftPad("Hello", 2, "-")).to.deep.eq("Hello")
      expect(leftPad("Hello", 3, "-")).to.deep.eq("Hello")
      expect(leftPad("Hello", 4, "-")).to.deep.eq("Hello")
      expect(leftPad("Hello", 5, "-")).to.deep.eq("Hello")
    })

    it("returns a string of the specified length padded by the specified character", function() {
      expect(leftPad("Hello", 6, "-")).to.deep.eq("-Hello")
      expect(leftPad("Hello", 7, "-")).to.deep.eq("--Hello")
      expect(leftPad("Hello", 8, "-")).to.deep.eq("---Hello")
      expect(leftPad("a", 4, "^")).to.deep.eq("^^^a")
      expect(leftPad("bb", 5, " ")).to.deep.eq("   bb")
    })

  })

  describe('createString', function() {

    it("returns an empty string when given 0 or a negative number", function() {
      expect(createString(0, "r")).to.deep.eq("")
      expect(createString(-1, "r")).to.deep.eq("")
    })

    it("returns a string of spaces of the specified length when given a positive number", function() {
      expect(createString(1, "r")).to.deep.eq("r")
      expect(createString(3, "w")).to.deep.eq("www")
    })

  })

  describe('factorial', function() {

    it("returns 1 when given 0", function() {
      expect(factorial(0)).to.deep.eq(1)
    })

    it("returns the factorial of the number", function() {
      expect(factorial(1)).to.deep.eq(1)
      expect(factorial(2)).to.deep.eq(2)
      expect(factorial(3)).to.deep.eq(6)
      expect(factorial(4)).to.deep.eq(24)
      expect(factorial(5)).to.deep.eq(120)
      expect(factorial(6)).to.deep.eq(720)
    })

  })

  describe('arrayOfNumbers', function() {

    it("returns an empty array when passed 0", function() {
      expect(arrayOfNumbers(0)).to.deep.eq([])
    })

    it("returns an array of all of the numbers between 1 and that number, inclusive", function() {
      expect(arrayOfNumbers(1)).to.deep.eq([1])
      expect(arrayOfNumbers(2)).to.deep.eq([1,2])
      expect(arrayOfNumbers(3)).to.deep.eq([1,2,3])
      expect(arrayOfNumbers(4)).to.deep.eq([1,2,3,4])
      expect(arrayOfNumbers(5)).to.deep.eq([1,2,3,4,5])
      expect(arrayOfNumbers(6)).to.deep.eq([1,2,3,4,5,6])
    })

  })

  describe('evenOdd', function() {

    it("returns an empty object when passed 0s", function() {
      expect(evenOdd(0,0)).to.deep.eq({})
    })

    it("returns an object with all of the numbers between those numbers (inclusive), and whether they are even or odd", function() {
      expect(evenOdd(0,1)).to.deep.eq({0: "even", 1: "odd"})
      expect(evenOdd(11,15)).to.deep.eq({11: "odd", 12: "even", 13: "odd", 14: "even", 15: "odd"})
    })

  })

  describe('growingKeys', function() {

    it("returns an empty object when passed 0", function() {
      expect(growingKeys(0, "a")).to.deep.eq({})
    })

    it("returns an object with as many keys specified, with the keys growing by one each time", function() {
      expect(growingKeys(1,"a")).to.deep.eq({"a": true})
      expect(growingKeys(2,"b")).to.deep.eq({"b": true, "bb": true})
      expect(growingKeys(3,"c")).to.deep.eq({"c": true, "cc": true, "ccc": true})
    })

  })

  describe('every', function() {

    it("returns true when passed an empty array", function() {
      expect(every([], "a")).to.deep.eq(true)
    })

    it("returns true when all elements match the given value", function() {
      expect(every([1, 1], 1)).to.deep.eq(true)
      expect(every(["A", "A", "A"], "A")).to.deep.eq(true)
    })

    it("returns false when not all elements match the given value", function() {
      expect(every([1, 2], 1)).to.deep.eq(false)
      expect(every(["A", "B", "A"], "A")).to.deep.eq(false)
    })

    it("does not use .every", function() {
      expect(every.toString()).to.not.match(/\.every/)
    })

  })

  describe('some', function() {

    it("returns false when passed an empty array", function() {
      expect(some([], "a")).to.deep.eq(false)
    })

    it("returns true when at least one element matches the given value", function() {
      expect(some([1, 2], 1)).to.deep.eq(true)
      expect(some(["A", "B", "C"], "B")).to.deep.eq(true)
    })

    it("returns false when no elements match the given value", function() {
      expect(some([1, 2], 3)).to.deep.eq(false)
      expect(some(["A", "B", "A"], "D")).to.deep.eq(false)
    })

    it("does not use .some", function() {
      expect(some.toString()).to.not.match(/\.some/)
    })

  })

  describe('toSentence', function() {

    it("returns an empty string when passed an empty array", function() {
      expect(toSentence([])).to.deep.eq("")
    })

    it("returns a string with the elements joined by a comma, with the last element separated by 'and'", function() {
      expect(toSentence(["cat", "bird"])).to.deep.eq("cat and bird")
      expect(toSentence(["a", "b", "c"])).to.deep.eq("a, b and c")
      expect(toSentence(["a", "b", "c", "d"])).to.deep.eq("a, b, c and d")
    })

    it("does not use .join", function() {
      expect(toSentence.toString()).to.not.match(/\.join/)
    })

  })

  describe('acronym', function() {

    it("returns an empty string when passed an empty array", function() {
      expect(acronym([])).to.deep.eq("")
    })

    it("returns a string that's an acronym of the items of the array", function() {
      expect(acronym(["cat", "bird"])).to.deep.eq("cb")
      expect(acronym(["how", "now", "brown", "cow"])).to.deep.eq("hnbc")
    })

  })

  describe('min', function() {

    it("returns undefined when passed an empty array", function() {
      expect(min([])).to.deep.eq(undefined)
    })

    it("returns the minimum value of the array", function() {
      expect(min([1])).to.deep.eq(1)
      expect(min([1,0])).to.deep.eq(0)
      expect(min([1,-1,0])).to.deep.eq(-1)
      expect(min([1,-1,0,-45])).to.deep.eq(-45)
    })

    it("does not use Math.min", function() {
      expect(min.toString()).to.not.match(/Math\.min/)
    })

  })

  describe('index', function() {

    it("returns an empty object when passed an empty array", function() {
      expect(index([], 'id')).to.deep.eq({})
    })

    it("returns an object indexed by the given property", function() {
      expect(index([{id: 1, name: "Will"}, {id: 2, name: "Sue"}], 'id')).to.deep.eq({
        1: {id: 1, name: "Will"},
        2: {id: 2, name: "Sue"},
      })

      expect(index([{name: "Will", age: 32}, {name: "Sue", age: 33}], 'name')).to.deep.eq({
        'Will': {name: "Will", age: 32},
        'Sue':  {name: "Sue", age: 33},
      })
    })

  })

  describe('invert', function() {

    it("returns an empty object when passed an empty object", function() {
      expect(invert({})).to.deep.eq({})
    })

    it("returns an object where the keys and values have been swapped", function() {
      expect(invert({a: "1", b: "2", c: "3"})).to.deep.eq({1: "a", 2: "b", 3: "c"})
      expect(invert({"hello": "world"})).to.deep.eq({world: "hello"})
    })

    it("does not use Object.keys or Object.values", function() {
      expect(invert.toString()).to.not.match(/Object\.keys|Object\.values/)
    })

  })

  describe('addSignature', function() {

    it("returns an empty object when passed an empty object", function() {
      expect(addSignature({})).to.deep.eq({})
    })

    it("returns an object where the keys have '-signed' appended", function() {
      let input = {
        "Contract": "blah blah"
      }
      let expected = {
        "Contract-signed": "blah blah - Joe"
      }

      expect(addSignature("Joe", input)).to.deep.eq(expected)

      input = {
        "Agreement": "something",
        "Code of Conduct": "blah blah"
      }
      expected = {
        "Agreement-signed": "something - Beth",
        "Code of Conduct-signed": "blah blah - Beth"
      }

      expect(addSignature("Beth", input)).to.deep.eq(expected)
    })

  })

  describe('pairs', function() {

    it("returns an empty array when passed an empty object", function() {
      expect(pairs({})).to.deep.eq([])
    })

    it("returns an object where the keys have '-signed' appended", function() {
      expect(pairs({a: "b", c: "d"})).to.deep.eq(["a - b", "c - d"])
      expect(pairs({hey: "there"})).to.deep.eq(["hey - there"])
    })

  })

  describe('sumValues', function() {

    it("returns 0 when passed an empty object", function() {
      expect(sumValues({})).to.deep.eq(0)
    })

    it("returns the sum of the values", function() {
      expect(sumValues({a: 1, c: 5})).to.deep.eq(6)
      expect(sumValues({foo: 12, bar: 5, baz: 3})).to.deep.eq(20)
    })

    it("does not use Object.values", function() {
      expect(sumValues.toString()).to.not.match(/Object\.values/)
    })

  })

  describe('biggestProperty', function() {

    it("returns undefined when passed an empty object", function() {
      expect(biggestProperty({})).to.deep.eq(undefined)
    })

    it("returns the name of the property that has the highest value", function() {
      expect(biggestProperty({a: 1, c: 5})).to.deep.eq("c")
      expect(biggestProperty({acme: 3, foo: 12, bar: 5, baz: 3})).to.deep.eq("foo")
    })

    it("does not use Math.max or Object.keys", function() {
      expect(biggestProperty.toString()).to.not.match(/Object\.keys|Math\.max/)
    })

  })

  describe('keyForValue', function() {

    it("returns undefined when passed an empty object", function() {
      expect(keyForValue({}, 12)).to.deep.eq(undefined)
    })

    it("returns the name of the property that has the matching value", function() {
      expect(keyForValue({a: 1, c: 5}, 5)).to.deep.eq("c")
      expect(keyForValue({foo: 12, bar: 5, baz: 3}, 12)).to.deep.eq("foo")
    })

  })

  describe('containsValue', function() {

    it("returns false when passed an empty object", function() {
      expect(containsValue({}, 2)).to.deep.eq(false)
    })

    it("returns true if the object has the value", function() {
      expect(containsValue({a: 1, c: 5}, 5)).to.deep.eq(true)
      expect(containsValue({acme: 3, foo: 12, bar: 5, baz: 3}, 12)).to.deep.eq(true)
    })

    it("returns false if the object does not have the value", function() {
      expect(containsValue({a: 1, c: 5}, 7)).to.deep.eq(false)
      expect(containsValue({acme: 3, foo: 12, bar: 5, baz: 3}, 45)).to.deep.eq(false)
    })

    it("does not use .includes", function() {
      expect(containsValue.toString()).to.not.match(/\.includes/)
    })

  })

  mocha.run();
};
