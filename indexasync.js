console.log('person1: shows ticket');
console.log('person2: shows ticket');

//proimese
/**const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => resolve("ticket"), 3000);
  });
  promiseWifeBringingTicks.then((t) => {
    console.log(`person3:shows ${t}`);
  });
  const getPopcorn = promiseWifeBringingTicks.then((t) => {
    console.log("wife:i have ticks");
    console.log("husband:we should go in");
    console.log("wife:no i  hungry");
    return new Promise((resolve, reject) => resolve(`${t} popcorn`));
  });
  const getButter = getPopcorn.then((t) => {
    console.log("husbund:I got popcorn");
    console.log("wife:I need butter on popcorn");
    return new Promise((resolve, reject) => resolve(`${t} butter`));
  });
  const getColdDrinks = getButter.then((t) => {
    console.log("husbund:I got butter");
    console.log("wife:I need cold drink too honey");
    return new Promise((resolve, reject) => resolve(`${t} cold Drink`));
  });
  getColdDrinks.then((t) => {
    console.log(t);
    console.log(`Husband:Anything else darling`);
    console.log(`Wife: lets go we are going to miss the preivew`);
    */

    // Async /Await

        const preMovie = async () => {
          const promiseWifeBringingTicks = new Promise((resolve, reject) => {
            setTimeout(() => resolve("ticket"), 3000);
          });

          const getPopcorn = new Promise((resolve, reject) => {
            resolve("popcorn");
          });
          const addButter = new Promise((resolve, reject) => {
            resolve("butter");
          });
          const getColdDrinks = new Promise((resolve, reject) => {
            resolve("cold Drinks");
          });

          let ticket = await promiseWifeBringingTicks;

          console.log("wife:i have ticks");
          console.log("husband:we should go in");
          console.log("wife:no i am hungry");

          let popcorn = await getPopcorn;

          console.log("husbund:I got popcorn");
          console.log("wife:I need butter on popcorn");

          let butter = await addButter;

          console.log("husbund:lets go honey");
          console.log("wife:I need cold drink too");

          let coldDrink = await getColdDrinks;

          console.log(`Husband:I got cold drink`);
          console.log(`Husband:Anything else darling`);
          console.log(`Wife: lets go we are going to miss the preivew`);
          console.log(`Husband: thanks for the reminder *grin*`);

          return ticket;
        };

        preMovie();
  console.log('person4: shows ticket');
console.log('person5: shows ticket');