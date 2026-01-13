const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const filteredStates = states.filter(state => !/^[aeiou]/i.test(state));

console.log("States not starting with a vowel:", filteredStates);
