const postalBarcode = (num) => {
  // will check if the number is empty or not
  if (!num) return false;

  num = String(num)
    .split("")
    .map((a) => Number(a));
  let lastDigit = num.reduce((a, b) => a + b) % 10;

  if (lastDigit !== 0) num.push(10 - lastDigit);

  const code = {
    0: "||:::",
    1: ":::||",
    2: "::|:|",
    3: "::||:",
    4: ":|::|",
    5: ":|:|:",
    6: ":||::",
    7: "|:::|",
    8: "|::|:",
    9: "|:|::",
  };

  //will replace every number with the correspond code
  num = num.map((n) => code[n]);

  num.unshift("|");
  num.push("|");

  return num.join("");
};

console.log(postalBarcode(123));
