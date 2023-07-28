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
  const valueByArr1 = arr1.reduce((acc, index) => {
    if (acc[index]) {
      acc[index] += 1;
    } else {
      acc[index] = 1;
    }
    return acc;
  }, {});

  const valueByArr2 = arr2.reduce((acc, index) => {
    if (acc[index]) {
      acc[index] += 1;
    } else {
      acc[index] = 1;
    }
    return acc;
  }, {});

  const crossbreeding = [];

  Object.entries(valueByArr1).forEach(([num, count1]) => {
    const count2 = valueByArr2[num] || 0;
    const minCount = Math.min(count1, count2);
    for (let i = 0; i < minCount; i++) {
      crossbreeding.push(Number.parseInt(num, 10));
    }
  });

  return crossbreeding;
}

const arr1 = [1, 1, 1, 2, 3, 4, 7, 7, 7];
const arr2 = [1, 3, 4, 5, 6, 7];

console.log(arrayConvergence(arr1, arr2));


function getPropByPath(obj, path) {
  let value = obj;
  const keys = path.split(/\[|\]|\./).filter(key => key !== '');  

  for (let key of keys) {
    if (value && typeof value === 'object') {
      if (Array.isArray(value) && /^\d+$/.test(key)) {
        value = value[Number.parseInt(key, 10)];
      } else if (key in value) {
        value = value[key];
      } else {
        console.log('Такого свойства нет в объекте');
        return undefined;
      }
    } else {
      console.log('Такого свойства нет в объекте');
      return undefined;
    }
  }
  return value;
}

const newObj ={
  arr: [
    {
      login: 'Test'
    },
    {
      yourName: 'Name'
    }
  ],
  person:{
    personName: 'spider-man'
  }
}
console.log(getPropByPath(newObj, 'arr[0].login'));
console.log(getPropByPath(newObj, 'arr[1].yourName'))
console.log(getPropByPath(newObj, 'person.personName'))
