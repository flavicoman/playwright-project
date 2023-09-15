export default
    function generateRandomRateName(): string {
    const adjectives = ['an', 'al', 'aa', 'abc', 'als', 'add', 'asr', 'asr', 'aft'];
    const nouns = ['rate', 'rtt', 'rta', 'siren', 'yes'];
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${randomAdjective} ${randomNoun}`;
}
