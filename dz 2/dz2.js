function clonDeepObj (dest, obj) {
  const clonDeepObjKey = Array.isArray(obj)? [] : {}
  for(let key in obj)
  {
    if((obj[key] !== null && typeof obj[key]) === 'object') {
      clonDeepObjKey[key] = clonDeepObj({}, obj[key]);
    } else{
      clonDeepObjKey[key] = obj[key]
    }
  }
  return clonDeepObjKey
}

const obj = {
  start: 0,
  arr: [
  {
      end: 9
    },
    {
      fix: true
    }
  ]
}

const obj2 = clonDeepObj({},obj );
obj2.arr[0].end = 5
obj2.arr[1].fix = false


console.log(obj);
console.log(obj2);


function arrayConvergence(arr1, arr2) {
  const newArr = arr1.filter((item)=> arr2.includes(item))
  return newArr
}

const arr1 = [1, 1, 1, 2, 3, 4, 7, 7,7];
const arr2 = [1,3,4,5,6,7,7,7,7] 

console.log(arrayConvergence(arr1, arr2));




function getPropByPath(obj, path) {
    let value = obj;
    const keys = path.split(/\[|\]|\./).filter(key => key !== '');  
  
    keys.forEach((key) => {
      if (value && typeof value === 'object') {

        if (Array.isArray(value) && /^\d+$/.test(key)) {
          value = value[parseInt(key)];
        } else if (key in value) {
          value = value[key];
        } else {
          value = undefined;
          console.log('Такого свойства нет в объекте');
          return; 
        }
      } else {
        value = undefined;
        console.log('Такого свойства нет в объекте');
        return; 
      }
    }); 
    return value;
  }

const newObj ={
  arr: [
    {
    login: 'Test'
  }
  ]
}


console.log(getPropByPath(newObj, 'arr[0].login'));
