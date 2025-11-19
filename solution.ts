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

