

 export default function generateRandomEmail(): string {
    const emailDomain = ['gmail.com', 'yahoo.com', 'outlook.com', 'example.com', 'testmail.com'];
    const randomDomain = emailDomain[Math.floor(Math.random() * emailDomain.length)];
  
    const usernameLength = Math.floor(Math.random() * 10) + 5; // Random length between 5 and 14 characters
    let username = '';
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  
    for (let i = 0; i < usernameLength; i++) {
      username += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return `${username}@${randomDomain}`;
  }
  
