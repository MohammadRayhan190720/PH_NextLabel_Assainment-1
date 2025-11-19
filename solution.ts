

const formatValue = ( value : unknown ) : string | number | boolean | undefined =>{
  if( typeof value === "string"){
     return value.toUpperCase();
  }else if(typeof value === "number"){
    return value*10;
  } else if(typeof value === "boolean"){
    return !value;
  }

}


const getLength = <T extends {length : number}>(value : T ) =>{
     
  return value.length;
  
}


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



type Arr = {
    title: string;
    rating: number;
  }

const filterByRating = (array : Arr[]) : Arr[] =>{

  const validRating = array.filter(item => item.rating > 0 && item.rating <= 5 )


  const bestRatingProduct = validRating.filter(arr => arr.rating >= 4)
  return bestRatingProduct;
  }


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


  for(let i = 0; i<arr1.length;i++){
    if(!isExists(arr1[i])){
      result[result.length] = arr1[i];
    }

  }
  

  for (let i = 0; i<arr2.length;i++){
    if(!isExists(arr2[i])){
      result[result.length] = arr2[i]
    }
  }
  return result;

}




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

