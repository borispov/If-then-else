exports.ifThen = function(func) {
  return (func &&
         (typeof(func) === 'function' || 
         func instanceof Function || 
         {}.toString.call(func) === '[object Function]' ))
}

function ifThen(condition, then, otherwise) {
  if (condition) {
    const isItFunc = isFunc(then)
    isItFunc ? then() : then
  } else {
    const isItFunc = isFunc(otherwise)
    isItFunc ? otherwise() : otherwise
  }
}