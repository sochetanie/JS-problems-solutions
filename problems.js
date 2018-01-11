// #1
let code = '(a(((a))a(ab)))' 
// result return => true

let tempArr = []
function checkingCodeforParenthesis(code) {
  let splStr = code.split('')
  for(let i=0; i<splStr.length; i++) {
    if (splStr[i] === '(') {
      tempArr.push('(')
    } else {
      tempArr.pop()
    }
  }
  
  if (tempArr.length === 0) {
    return true
  } else {
    return false
  }
}
checkingCodeforParenthesis(code)



// #2
let arr1 = [2,6,90,456,23,5,9,1,2,3,4,56,98,36,987,11,765]
let arr2 = [23,6,4,765,4,1,2]
// result => [2, 6, 23, 1, 4, 765]

let newArr = []
function commonNum(arr2,arr1) {
  for(let i=0; i<arr2.length; i++) {
    for(let j=0; j<arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        if(!newArr.includes(arr2[i])) {
          newArr.push(arr2[i])
        }
      }
    }
  }
  return newArr
}
commonNum(arr1,arr2)



// #3
let arrOfStrs = ['ABC','123','zyx','fs3'] 
//result => ['A1zf','B2ys','C3x3']

let newArr = []
function newStr(arrOfStr) {
  
  let splitArr = []
  arrOfStrs.forEach( el => splitArr.push(el.split('')) )
  
  let tempStr = []
  for(let j=1;j<splitArr.length;j++) {
    for(let i=0;i<splitArr.length;i++) {
      tempStr.push(splitArr[i].shift())
      }
      tempStr.join('')
      newArr.push(tempStr)
      tempStr = []
    }
    return newArr.map(el=>el.join(''))
}
newStr(arrOfStrs)

