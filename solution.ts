//problem-1

const formatValue = ( value : unknown ) : string | number | boolean | undefined =>{
  if( typeof value === "string"){
     return value.toUpperCase();
  }else if(typeof value === "number"){
    return value*10;
  } else if(typeof value === "boolean"){
    return !value;
  }

}
// console.log(formatValue("hellO"))
// console.log(formatValue(5))
// console.log(formatValue(true))

//problem-2

const getLength = <T extends {length : number}>(value : T ) =>{
     
  return value.length;
  
}

// console.log(getLength("typesc r ipt"));
// console.log(getLength([10, 20, 30, 40]));

//problem-3

class Person {
  name: string;
  age : number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  getDetails(){
    return `name : ${this.name}, age ${this.age}`
  }
}

// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());

//problem-4


type Arr = {
    title: string;
    rating: number;
  }

const filterByRating = (array : Arr[]) : Arr[] =>{

  const validRating = array.filter(item => item.rating > 0 && item.rating <= 5 )


  const bestRatingProduct = validRating.filter(arr => arr.rating >= 4)
  return bestRatingProduct;
  }
const books = [
  { title: "Book A", rating: 4 },
  { title: "Book B", rating: 3 },
  { title: "Book C", rating: 5 },
  { title: "Book d", rating: 7 },
];

console.log(filterByRating(books));

//problem-5 
type User = {
  id: number;
  name : string;
  email : string;
  isActive : boolean;
}
const filterActiveUsers = (users : User[]) : User[] =>{

  const activeUsers = users.filter(user => (user.isActive === true))
  return activeUsers;


}

const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

// console.log(filterActiveUsers(users));

//problem-6 
interface Book {
  title:string;
  author:string;
  publishedYear:number;
  isAvailable:boolean;
}

const printBookDetails = (obj : Book ) =>{
  console.log(
    `Title:${obj.title}, Author:${obj.author}, Published:${obj.publishedYear}, Available: ${obj.isAvailable ? "Yes" : "No"} `
  );

}

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);

//problem-7

const getUniqueValues = <T>(arr1 : T [] , arr2: T[] ) : T[] =>{
  const result: T[] = [];

  const isExists = (value : T): boolean =>{
    for(let i = 0; i<result.length; i++){
      if(result[i] === value){
        return true;
      }
       
    }
    return false;
  }

  //arr1
  for(let i = 0; i<arr1.length;i++){
    if(!isExists(arr1[i])){
      result[result.length] = arr1[i];
    }

  }
  
  //arr-2
  for (let i = 0; i<arr2.length;i++){
    if(!isExists(arr2[i])){
      result[result.length] = arr2[i]
    }
  }
  return result;

}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7,2,3];
console.log(getUniqueValues(array1, array2));

//problem-8


type Products = {
  name: string;
  price:number;
  quantity:number;
 discount?: number;  //optional number from 0–100, representing a percentage discount
}

const calculateTotalPrice = (products : Products[]) : number =>{

       if (products.length === 0) return 0;
    
       return products.map(product => {
        const basePrice = product.price * product.quantity;

        const discountPrice = product.discount ? (basePrice * product.discount) /100 : 0 ;

        const productPrice = basePrice - discountPrice ;

        return productPrice;

      }).reduce((sum , current ) => sum + current , 0)
      
;
}


const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

// console.log(calculateTotalPrice(products));
