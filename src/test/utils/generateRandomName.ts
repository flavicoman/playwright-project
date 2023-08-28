// Function to generate a random name
export default
    function generateRandomName(): string {
    const adjectives = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
    const nouns = ['Apple', 'Banana', 'Cherry', 'Orange', 'Grape'];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${randomAdjective} ${randomNoun}`;
}
