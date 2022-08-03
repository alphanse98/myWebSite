let two = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2");
      resolve(mari());
    //   reject();
    }, 0);
  });
};
two()
//   .then(() => console.log("mari"))
  .catch(() => console.log("error mari wast"));

  let mari = ()=> console.log('mari wrking');

let arr = [1,2,3,4,
            9,5,6,]
            

// let one = () => console.log("1");

// let two = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("2");
//       resolve();
//     }, 0);
//   });
// };

// let three = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("3" , resolve,reject);
//       resolve();
//     }, 0);
//   });
// };

// let f4 = async () => {
//   two();
//   await three();
//   one();
// };
// f4();

var arcr = [1,2,3,3]
console.log(arcr);
// console.log(arcr.map());

var mapx = arcr.map((v)=>console.log(v))
