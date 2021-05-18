// function square(num){
//     return num *2;
// }


// const square = function(num){
//     return num *2;
// }



function reverse(string) {
    const reversedString = [];
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString.push(string[i])
    }
    return reversedString.join("");
}

reverse("hello");



class customArray {
    constructor() {
        this.data = {};
        this.length = this.length = 0;
    }

    push(item) {
        this.data[this.length] = item;
        return item;
    }
}

function mergeSorted(arr1, arr2) {
    const merged = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] < arr2[j]) {
                merged.push(arr1[i]);
            }
            else {
                merged.push(arr2[j]);
            }
        }
    }
    return merged;
}


class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    //better version is commented
    // get(key) {
    //     let basket = this.data;
    //     let k = this._hash(key);
    //     if(basket[k] === undefined)
    //     return "No such item found in your basket";
    //     // let item = Object.keys(basket).find(item => item == key);
    //     return basket[k];
    // }

    //second version
    // get(key) {
    //     let basket = this.data;
    //     let k = this._hash(key);
    //     let name = Object.keys(basket[k]);
    //     console.log(name);
    //     let quantity = basket[k][name];
    //     if(basket[k] === undefined)
    //     return "No such item found in your basket";
    //     // let item = Object.keys(basket).find(item => item == key);
    //     return `${name} : ${quantity}`;
    // }

    get(key) {
        let basket = this.data;
        let k = this._hash(key);
        let name = Object.keys(basket[k]).find(item => item === key);
        let quantity = basket[k][key];
        if (basket[k] === undefined)
            return "No such item found in your basket";
        // let item = Object.keys(basket).find(item => item == key);
        return `${name} : ${quantity}`;
    }

    set(key, value) {
        let position = this._hash(key);
        let item = {}
        item[key] = value;
        let data = this.data;
        if (!data[position])
            return data[position] = item;
        return data[position][key] = value;
    }

    // set(key, value) {
    //     let item = {} 
    //     item[key] = value;
    //     let data = this.data;
    //     let position = this._hash(key);
    //     return data.splice(position, 0, item);
    // }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')

console.log(myHashTable._hash("grapes"))
console.log(myHashTable._hash("milk"));
console.log(myHashTable._hash("banana"));
console.log(myHashTable._hash("mayonnaise"));
console.log(myHashTable._hash("apple"));
console.log(myHashTable._hash("eggs"));
console.log(myHashTable._hash("lettuce"));
console.log(myHashTable._hash("renga"));
console.log(myHashTable._hash("beed"));
console.log(myHashTable._hash("mostarda"));
console.log(myHashTable._hash("batates"));
console.log(myHashTable._hash("molokheya"));
console.log(myHashTable._hash("ahwa"));
console.log(myHashTable._hash("shay"));









class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    get(key) {
        let basket = this.data;
        let k = this._hash(key);
        if (basket[k] === undefined)
            return "No such item found in your basket";
        let name = Object.keys(basket[k]).find(item => item === key);
        let quantity = basket[k][key];
        // let item = Object.keys(basket).find(item => item == key);
        return `${name} : ${quantity}`;
    }

    set(key, value) {
        let position = this._hash(key);
        let item = {}
        item[key] = value;
        let data = this.data;
        if (!data[position])
            return data[position] = item;
        return data[position][key] = value;
    }

    keys() {
        let data = this.data;
        const items = [];
        let keys = Object.keys(data);
        console.log(keys)
        // if (data != undefined) {
            for (let key in keys) {
                items.push(Object.keys(data[keys[key]]))
            }
        // }
        let toPurchase = [].concat.apply([], items);
        return toPurchase;
    }

    // set(key, value) {
    //     let item = {} 
    //     item[key] = value;
    //     let data = this.data;
    //     let position = this._hash(key);
    //     return data.splice(position, 0, item);
    // }
}

const myHashTable = new HashTable(50);
myHashTable.set("ahwa", 20)
// myHashTable.set("bateekh", 2)
// console.log(`yes ${myHashTable.get("ahwa")}`);
myHashTable.set("banana", 10)
// console.log(myHashTable)
// console.log(myHashTable.get("banana"))
// console.log(myHashTable.get("ahwa"))
// console.log(myHashTable.get("bateekh"))
console.log(myHashTable.set("bateekh", 10))
// console.log(myHashTable.get("bateekh"))
console.log(myHashTable.keys())
// console.log(myHashTable)



class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    get(key) {
        let basket = this.data;
        let k = this._hash(key);
        if (basket[k] === undefined || basket[k][key] === undefined)
            return "No such item found in your basket";
        let name = Object.keys(basket[k]).find(item => item === key);
        let quantity = basket[k][key];
        // let item = Object.keys(basket).find(item => item == key);
        return `${name} : ${quantity}`;
    }

    set(key, value) {
        let position = this._hash(key);
        let item = {}
        item[key] = value;
        let data = this.data;
        if (!data[position])
            return data[position] = item;
        return data[position][key] = value;
    }

    keys() {
        let data = this.data;
        const items = [];
        let keys = Object.keys(data);
        console.log(keys)
        if (data != undefined) {
            for (let key in keys) {
                items.push(Object.keys(data[keys[key]]))
            }
        }
        let toPurchase = [].concat.apply([], items);
        return toPurchase;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set("ahwa", 20)
myHashTable.set("banana", 10)
console.log(myHashTable.get("banana"))
console.log(myHashTable.get("ahwa"))
console.log(myHashTable.get("bateekh"))
console.log(myHashTable.set("bateekh", 10))
console.log(myHashTable.get("bateekh"))
console.log(myHashTable.keys())



function firstRecurring(arr) {
    const numbers = {};
    let noRecur = "No any recurring numbers";
    for(let i = 0; i < arr.length; i++){
      if(numbers[arr[i]]){
        return arr[i];
      }
      else{
        numbers[arr[i]] = 1;
        firstRecur = "";
      }
      // console.log(i);
    }
    return noRecur;
}

firstRecurring([2,3,2,5]);



function firstRecurring(arr) {
    const numbers = {};
    let noRecur = "No any recurring numbers";
    for(let i = 0; i < arr.length; i++){
      if(numbers[arr[i]]){
        return arr[i];
      }
      else{
        numbers[arr[i]] = 1;
      }
      // console.log(i);
    }
    return noRecur;
}

firstRecurring([2,3,1,5]);





class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
      if(this.node){
        this.node.next = {
          value: value,
          next: null
        }
        this.tail = this.node.next;
        return this.node.next;
      }
      this.node = {
        value: value,
        next: null
      }
      if(this.head.next === null)
      this.head.next = this.node;
      this.length++;
    }
  }
  
  let myLinkedList = new LinkedList(10);
  // console.log(myLinkedList.head);
  // console.log(Object.keys(myLinkedList))
  myLinkedList.append("hello");
  myLinkedList.append(5);
  myLinkedList.append("mohamed");
  myLinkedList.append("bateekh");
  myLinkedList.append("mooz");
  console.log(myLinkedList);
  console.log(`node number ${myLinkedList.node[]}`)