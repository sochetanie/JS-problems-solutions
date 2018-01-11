// #1
let code = '(a(((a))a(ab)))' //=> return true

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
let arr1 = [2,6,90,456,23,5,9,1,2,3,4]
let arr2 = [23,6,4,765,4,1,2]
// => [ 2, 6, 23 ]

let newArr = []

function commonNum(arr2,arr1) {
  for(let i=0; i<arr1.length; i++) {
    for(let j=0; j<arr2.length; j++) {
      if (arr2[i] === arr2[j]) {
        if(!newArr.includes(arr1[i])) {
          newArr.push(arr1[i])
        }
      }
    }
  }
  return newArr
}
commonNum(arr2,arr1)


// #3
let strsArr = ['ABC','123','zyx','fs3']    //=> result ['A1zf','B2ys','C3x3']

let newArr = []

function newStr(strsArr) {
  for (let i =0; i< strsArr.map( e=> e.length ).reduce((a,b)=> Math.max(a,b)); i++){
    let temp = ''
    strsArr.forEach(e=>{
      if(e[i]) temp += e[i]
    })
    newArr.push(temp)
  }
  return newArr
}
newStr(strsArr)

