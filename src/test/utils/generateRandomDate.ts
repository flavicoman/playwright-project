export default function generateRandomDate(): string {

  const currentDate = new Date();
  const minDate = new Date('2023-08-01');
  const timeDiff = currentDate.getTime() - minDate.getTime();
  const randomTime = Math.floor(Math.random() * timeDiff);
  const randomDate = new Date(minDate.getTime() + randomTime);
  const day = String(randomDate.getDate()).padStart(2, '0');
  const month = String(randomDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = String(randomDate.getFullYear());
  return `${day}/${month}/${year}`;
}