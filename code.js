//from  147 to 158
// class car{
//     constructor(name, model, price)
//     {
//         this.n = name;
//         this.m = model;
//         this.p = price;
//     }
//     run()
//     {
//         return `car is running`;
//     }
//     stop()
//     {
//         return `car is stopping`;
//     }

// }

// let carone=new car("MG",2022,420000);
// console.log(`car one name is ${carone.n} And Model Is ${carone.m} And Price Is ${carone.p}`);
// console.log(carone.run());
// console.log("#".repeat(25));

// class Phone {
//     constructor(name, serial, price) {
//       this.name = name;
//       this.serial = serial;
//       this.price = price;
//     }
//   }

//  class Tablet extends Phone{
//     constructor(name, serial, price,size)
//     {
//         super(name, serial, price);
//         this.s=size || "Unknown";
//     }
//     fullDetails()
//     {
//         return`${this.name} Serial is ${this.serial} And Size Is ${this.s}`
//     }
//  }
//   let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
//   let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
//   let TabletThree = new Tablet("LG", 250450650, 650);

//   console.log(`${TabletOne.fullDetails()}`);
//   console.log(`${TabletTwo.fullDetails()}`);
//   console.log(`${TabletThree.fullDetails()}`);
// console.log("#".repeat(20));



// class User {
//     #c;
//     constructor(username, card) {
//       this.u = username;
//       this.#c = card;
//     }
//     get_card()
//        {
//         let regex=/\d{4}-\d{4}-\d{4}-\d{4}/ig;
//          if(!regex.test(this.#c))
//          {
//           return `${this.#c.toString().match(/\d{4}/g).join("-")}` 

//          }
//          else
//          {
//             return `${this.#c}` 
//          }
//        }

//        showData()
//        {
//         return `Hello ${this.u} Your Credit Card Number Is ${this.get_card()} `;
//        }
//   }
// console.log("#".repeat(20));

//   let userOne = new User("Osama", "1234-5678-1234-5678");
// let userTwo = new User("Ahmed", "1234567812345678");
// let userThree = new User("Ghareeb", 1234567812345678);

// console.log(userOne.showData());
// console.log(userTwo.showData());
// console.log(userThree.showData());
// console.log(userOne.get_card()); 
// console.log("#".repeat(20));


// let myStr = "Elzero";
// String.prototype.addLove=function()
// {
//   return`I Love Elzero Web School`
// };
// console.log(myStr.addLove()); 
// console.log("#".repeat(20));

// const myObj = {
//     username: "Elzero",
//     id: 100,
//     score: 1000,
//     country: "Egypt",
//   };

//   Object.defineProperties(myObj,{
//     score:{
//         writable:false,
//         enumerable:true,
//         configurable:true
//     },
//     country:{
//         enumerable:false,
//     },
//     id:
//     {
//         writable:true,
//         enumerable:false,
//         configurable:true
//     }
//   })


//   myObj.score = 500;

//   for (let prop in myObj) {
//     console.log(`${prop} => ${myObj[prop]}`);
//   }
// delete myObj.country;
//   console.log(myObj);
// console.log("#".repeat(20));
//-------------------------------------------------------------
// let date=new Date();
// let birth=new Date("1/1/2004");
// let diff=date-birth;
// let sec=(diff/1000).toFixed(0);
// console.log(`${sec} Seconds`);
// console.log(`${(sec/60).toFixed(0)} Minutes`);
// console.log(`${(sec/60/60).toFixed(0)} Hours`);
// console.log(`${(sec/60/60/24).toFixed(0)} Days`);
// console.log(`${(sec/60/60/24/30).toFixed(0)} Months`);
// console.log(`${(sec/60/60/24/30/12).toFixed(0)} Years`);


// let date =new Date();
// date.setTime(1000);
// date.setMonth(10*12);
// date.setHours(0);
// console.log(date);


// let arr=["January","February","March","April","May","June","July","Agust","September","October","November","December"]
// let date = new Date();
// date.setDate(0);
// console.log(date);
// console.log(`Previous Month Is ${arr[date.getMonth()]} And Last Day Is ${date.getDate()}`)



// let date1=new Date(1072908000000);
// console.log(date1);
// let date2=new Date("jan 1 2004");
// console.log(date2);
// let date3=new Date("2004");
// console.log(date3);


// let start=performance.now();
// for(let i=0 ;i<99999 ;i++)
// {
//     console.log(+i);
// }
// let end=performance.now();
// let diff=(end-start).toFixed(0);
// console.log(`Loop Took ${diff} Milliseconds`);



// function* gen(){
//     yield 14;
//     yield 154;
//     yield 494;
//     yield 1034;
//     yield 1774;
//     yield 2714;
//     yield 3854;
//     yield 5194;
//     yield 6734;
// }
// let generator = gen();

// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false}
// console.log(generator.next()); // {value: 494, done: false}
// console.log(generator.next()); // {value: 1034, done: false}
// console.log(generator.next()); // {value: 1774, done: false}
// console.log(generator.next()); // {value: 2714, done: false}
// console.log(generator.next()); // {value: 3854, done: false}
// console.log(generator.next()); // {value: 5194, done: false}
// console.log(generator.next()); // {value: 6734, done: false}



// function* genNumbers() {
//     yield* [1, 2, 2, 2, 3, 4, 5];
//   }
//   function* genLetters() {
//     yield* ["A", "B", "B", "B", "C", "D"];
//   }
//   function* genAll()
//   {
//     yield* new Set(genNumbers());
//     yield* genLetters();
//   } 
//   let generator = genAll(); 
//   console.log(generator.next()); // {value: 1, done: false}
//   console.log(generator.next()); // {value: 2, done: false}
//   console.log(generator.next()); // {value: 3, done: false}
//   console.log(generator.next()); // {value: 4, done: false}
//   console.log(generator.next()); // {value: 5, done: false}
//   console.log(generator.next()); // {value: "A", done: false}
//   console.log(generator.next()); // {value: "B", done: false}
//   console.log(generator.next()); // {value: "C", done: false}
//   console.log(generator.next()); // {value: "D", done: false}




// import * as modOne from "./mod-two.js";
// import calc from "./mod-one.js";
// console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree));

//------------------------------------------------------------------------------------
//from 169 to 178



// let myrrequst=new XMLHttpRequest();
// myrrequst.open("GET","articles.json");
// myrrequst.send();
// console.log(myrrequst);
// myrrequst.onreadystatechange=function()
//     {
//       if(myrrequst.status===200 && myrrequst.readyState===4)
//       {
//         console.log(this.responseText);
//         setTimeout(()=>{
//             console.log("Data Loaded");
//         })
//       }
//     }




// let myrrequst=new XMLHttpRequest();
// myrrequst.open("GET","articles.json");
// myrrequst.send();
// console.log(myrrequst);
// myrrequst.onreadystatechange=function()
//     {
//       if(myrrequst.status===200 && myrrequst.readyState===4)
//       {
//         let mainData=JSON.parse(this.responseText);
//         for(let i=0 ; i< mainData.length;i++)
//         {
//           mainData[i]["category"]="All";
//         }
//         console.log(mainData);
//         let updatedData=JSON.stringify(mainData);
//         console.log(updatedData);
//       }
//     }





// let myrrequst=new XMLHttpRequest();
// myrrequst.open("GET","articles.json");
// myrrequst.send();
// myrrequst.onreadystatechange=function()
//     {
//       if(myrrequst.status===200 && myrrequst.readyState===4)
//       {
//         let mainData=JSON.parse(this.responseText);
//         let parent=document.createElement('div');
//         parent.id="data";
//         document.body.appendChild(parent);
//         for(let i=0 ; i< mainData.length;i++)
//         {
//             let child=document.createElement('div');
//             let title=document.createElement('h2');
//             let p1=document.createElement('p');
//             let p2=document.createElement('p');
//             let p3=document.createElement('p');
//             title.textContent=mainData[i]["title"];
//             p1.textContent=mainData[i]["body"];
//             p2.textContent=mainData[i]["category"];
//             p3.textContent=mainData[i]["author"];

//             parent.appendChild(child);
//             child.appendChild(title);
//             child.appendChild(p1);
//             child.appendChild(p2);
//             child.appendChild(p3);
//         }
//       }
//     }

//----------------------------------------------------------------------
// const res =new Promise((reslove,reject)=>
// {
//     let page=new XMLHttpRequest();
//     page.open("GET","art.json");
//     page.send();
//     page.onload=function()
//     {
//         if(this.readyState===4 && this.status===200)
//         {  
//             let data=JSON.parse(page.responseText);
//             console.log(data);
//             reslove(data);
//         }
//         else{
//             reject(Error("some thing wrong"));
//         }
//     }
// })
// res.then((value)=>{
//  value.length=5;
//  console.log(value);
//  for(let i=0;i<value.length;i++)
//  {
//             let parent=document.createElement('div');
//             let h3=document.createElement('h3');
//             let p=document.createElement('p');
//             h3.textContent=value[i]["title"];
//             p.textContent=value[i]["description"];

//             parent.appendChild(h3);
//             parent.appendChild(p);
//             document.body.appendChild(parent);
            
//  }
// }).catch((rej)=>
// {
//     console.log(rej);
// })





//fetch return entire http response
fetch("art.json").then((page)=>
{  
    let value=page.json();
    console.log(value);
    // value.length=5;
    // console.log(value);
    return value;
}).then((value)=>{
    value.length=5;
    console.log(value);
    return value;
}).then((value)=>{
    for(let i=0;i<value.length;i++)
         {
                    let parent=document.createElement('div');
                    let h3=document.createElement('h3');
                    let p=document.createElement('p');
                    h3.textContent=value[i]["title"];
                    p.textContent=value[i]["description"];
        
                    parent.appendChild(h3);
                    parent.appendChild(p);
                    document.body.appendChild(parent);
                    
         }
})












