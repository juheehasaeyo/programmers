function solution(myString) {
    myString = myString.toLowerCase();
    if(myString.includes("a")) {
        myString = myString.replaceAll("a","A");
    }
    return myString;
}