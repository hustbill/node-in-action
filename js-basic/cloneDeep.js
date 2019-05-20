/*
*  Deep Copy function by JavaScript
*  Date: 2019-05-20
*
*
/



function cloneDeep(obj) {
  const isObject = o => o instanceof Object && o.constructor !== Function
  const isArray = o => Array.isArray(o)
  if (!isObject(obj) && !isArray(obj)) {
    return obj
  }

  const result = isArray(obj) ? [] : {}
  Object.keys(obj).forEach(key => {
    result[key] = cloneDeep(obj[key])
  })

  return result
}

var array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

var cloneArray = cloneDeep(array);
console.log("cloneArray: ", cloneArray);

var jsonObj = {
  'last name': 'zhang',
  'first name': 'bowen',
  'age': 6,
  'address': 'foster city, 94404'
}

var copyJsonObj = cloneDeep(jsonObj);
console.log("copyJsonObj: ", copyJsonObj);
