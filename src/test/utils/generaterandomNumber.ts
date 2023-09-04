function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  export default  function generateRandomNumber(): string { 
    const number = getRandomNumber(1000, 9999).toString(); 
    return `${number}`;
  }