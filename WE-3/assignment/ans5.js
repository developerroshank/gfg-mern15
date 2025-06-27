const num = [1, 2, 3, 2, 4, 1];
const rem_dup = [];

for (let i = 0; i < num.length; i++) {
    const e = num[i];
    if (rem_dup.indexOf(e) === -1) {
        rem_dup.push(e);
    }
}

console.log("Removed Duplicate:", rem_dup);