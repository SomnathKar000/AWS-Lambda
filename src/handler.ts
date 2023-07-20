"use strict";

export const generateRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  console.log("This random number is: " + randomNumber);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "The random number is gemented successfully",
        number: randomNumber,
      },
      null,
      2
    ),
  };
};
