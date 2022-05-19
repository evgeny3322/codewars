// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

function DNAStrand(dna) {
    let dnaArr = dna.split("");
    for (let i = 0; i < dnaArr.length; i++) {
        if (dnaArr[i] === "A") {
            dnaArr[i] = "T";
        } else if (dnaArr[i] === "T") {
            dnaArr[i] = "A";
        } else if (dnaArr[i] === "C") {
            dnaArr[i] = "G";
        } else if (dnaArr[i] === "G") {
            dnaArr[i] = "C";
        }
    }
    let s = dnaArr.join("");
    return s;
}

console.log(DNAStrand('ATCG'))

