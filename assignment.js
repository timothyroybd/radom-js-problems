//Problem No- 1 Ana to Vori
function anaToVori(ana) {
  //if input is less than 0, then ask to input a valid number
  if (ana < 0 || typeof ana !== "number") {
    console.log("please enter a positive number");
    return "please enter a positive number";
  }
  //else if the number is equal to 0 or bigger than 0 return ana/16
  else if (ana >= 0) {
    let vori = ana / 16;

    console.log(vori);
    return vori;
  }
}
//Problem No - 2 Panda Cost
function pandaCost(singaraQuantity, somuchaQuantity, gilapiQuantity) {
  let singaraPrice = 7;
  let somuchaPrice = 10;
  let gilapiPrice = 15;
  let totalPrice = 0;
  //if the input is less than 0 or the type is  not a number return error
  if (
    singaraQuantity < 0 ||
    somuchaQuantity < 0 ||
    gilapiQuantity < 0 ||
    typeof singaraQuantity !== "number" ||
    typeof somuchaQuantity !== "number" ||
    typeof gilapiQuantity !== "number"
  ) {
    console.log("please enter a positive number");
    return "please enter a positive number";
  } else if (
    singaraQuantity >= 0 &&
    somuchaQuantity >= 0 &&
    gilapiQuantity >= 0
  ) {
    //elsemultiply corresponding value and add them up
    singaraPrice *= singaraQuantity;
    somuchaPrice *= somuchaQuantity;
    gilapiPrice *= gilapiQuantity;
    totalPrice = singaraPrice + somuchaPrice + gilapiPrice;
    console.log(totalPrice);
    return totalPrice;
  }
}
//Problem No - 3 Picnic Budget
function picnicBudget(totalTravelers) {
  let totalPrice = 0;
  if (totalTravelers < 0 || typeof totalTravelers !== "number") {
    console.log("please enter a positive number");
    return "please enter a positive number";
  }

  if (totalTravelers >= 0) {
    let updatedTotalTravelers = totalTravelers;
    if (updatedTotalTravelers > 200) {
      updatedTotalTravelers -= 200;
      totalPrice += updatedTotalTravelers * 3000;
      totalPrice += 100 * 4000;
      totalPrice += 100 * 5000;
      console.log(totalPrice);
      return totalPrice;
    } else if (updatedTotalTravelers > 100 && updatedTotalTravelers <= 200) {
      updatedTotalTravelers -= 100;
      totalPrice += updatedTotalTravelers * 4000;
      totalPrice += 100 * 5000;
      console.log(totalPrice);
      return totalPrice;
    } else if (updatedTotalTravelers > 0 && updatedTotalTravelers <= 100) {
      totalPrice += updatedTotalTravelers * 5000;
      console.log(totalPrice);
      return totalPrice;
    }
  }
}
//Problem No - 4 Odd Friend
function oddFriend(friends) {
  if (Array.isArray(friends) === false) {
    console.log("please enter a valid array");
    return "please enter a valid array";
  }
  for (let i = 0; i < friends.length; i++) {
    let friend = friends[i];
    if (friend.length % 2 === 1) {
      console.log(friend);
      return friend;
    }
  }
}
