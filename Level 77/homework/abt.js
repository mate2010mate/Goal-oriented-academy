const key = "age";
const person1 = {
    name: "Luka",
    [key]: 25
};
console.log(person1);


function getDynamicKey() {
    return "dynamicKey";
}
const obj = {
    [getDynamicKey()]: "This is a dynamic property"
};
console.log(obj);

const prefix = "user";
const userProfile = {
    [`${prefix}_name`]: "Sandro",
    [`${prefix}_age`]: 28
};
console.log(userProfile);
