 

 function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  export default  function generateRandomPhoneNumber(): string {
    const areaCode = getRandomNumber(100, 999).toString(); 
    const firstPart = getRandomNumber(100, 999).toString(); 
    const secondPart = getRandomNumber(1000, 9999).toString(); 
    return `(${areaCode}) ${firstPart}-${secondPart}`;
  }