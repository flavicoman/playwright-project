export default function generateRandomDate(): string {
    // Get the current date as a starting point
    const currentDate = new Date();
  
    // Set the minimum date to August 2023
    const minDate = new Date('2023-08-01');
  
    // Calculate the time difference in milliseconds between minDate and currentDate
    const timeDiff = currentDate.getTime() - minDate.getTime();
  
    // Generate a random number within the time difference range
    const randomTime = Math.floor(Math.random() * timeDiff);
  
    // Create a new date by adding the random time to minDate
    const randomDate = new Date(minDate.getTime() + randomTime);
  
    // Format the date as dd/mm/yyyy
    const day = String(randomDate.getDate()).padStart(2, '0');
    const month = String(randomDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = String(randomDate.getFullYear());
  
    return `${day}/${month}/${year}`;
  }