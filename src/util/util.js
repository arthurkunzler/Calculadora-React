const roundFloat = (number = 0, decimals = 1) => {
  const hasDecimalPoint = number.toString().includes(".");
  const floatPart = hasDecimalPoint ? number.toString().split(".")[1] : "";
  console.log(floatPart);
  if (floatPart.length > decimals) {
    return number.toFixed(decimals);
  } else return number;
};

export { roundFloat };
