function iterativeLog(arr) {
  i = 0
  arr.forEach(arr => {
    console.log(`${i++}: ${arr}`)
  })
}

function iterate(cb) {
  var arr = [1,2,3,4]
  arr.forEach(cb)
  return arr
}

function doToArray(arr, cb) {
  arr.forEach(cb)
}