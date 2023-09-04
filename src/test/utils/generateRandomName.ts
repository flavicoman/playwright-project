// Function to generate a random name
export default
    function generateRandomName(): string {
    const adjectives = ['Big', 'Strong', 'White', 'Red', 'Tall'];
    const nouns = ['John', 'Lewis', 'Bruce', 'Andrew', 'Grape'];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${randomAdjective} ${randomNoun}`;
}
