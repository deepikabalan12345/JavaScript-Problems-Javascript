function findLongestWord(str){
    const words=str.split(' ');
    let longestWord='';
    for(let word of words){
        if(word.length>longestWord.length){
            longestWord=word;
        }
    }
    return longestWord;
}
console.log(findLongestWord("The best way to predict your future is to create it"));
