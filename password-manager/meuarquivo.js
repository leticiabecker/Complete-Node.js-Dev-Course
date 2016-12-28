function _bar() {
  return 'foo';
}

function _baz () {
  return 'foo'
}

module.exports = {
  bar: _bar,
  baz: _baz
};


arr  = [1, 2, 3]
arr[0] // 1
arr[1] // 2
arr[2] // 3

obj = {
  um: 1, 
  dois: 2,
  tres: {
    a: 4,
    b: 5
  }
}
obj.um // 1
obj.dois //2
obj.tres // {a: 4, b: 5}
obj.tres.a // 4
obj.tres.b // 5