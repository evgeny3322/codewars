// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript

function getSum( a,b ){
    if (a == b) return a; //(1)
    if (a < b) {
        return a + getSum(a+1, b); //(2)
    }else {
        return a + getSum(a-1,b); //(3)
    }
}