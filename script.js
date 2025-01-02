const btnCheck = document.getElementById("check-btn");
const result = document.getElementById("result");
const inputValue = document.getElementById('text-input');
function isAlpha(letter){
    return   /^[a-zA-Z]$/.test(letter);
}

function removeNonChar(word){
    const length = word.length;
    let newWord = "";
    for(let i = 0; i < length; i++){
        let letter = word[i]; 

        if(isAlpha(letter)){
            newWord += letter;
        }
    }

    return newWord;
}
function checkPalindrome(word){
    
    let newWord = removeNonChar(word);
    const length = newWord.length;
    let palindrome = "";

    for(i = length - 1; i >= 0; i--){
        palindrome += newWord[i];
    }

    return (palindrome === newWord);
}

function main(){
    
    let word = inputValue.value;
    if(word === ""){
        alert("Please input a value");
        return;
    }
    if(checkPalindrome(word)){
        result.innerHTML = word+" is  a palindrome ";
    }else{
        result.innerHTML = word+" is not a palindrome ";
    }
    
    
}

btnCheck.addEventListener('click',main);