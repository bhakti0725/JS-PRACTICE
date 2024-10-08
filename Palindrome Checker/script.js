const inputQ= document.getElementById("enter");
const answerElement= document.getElementById("answer");

function isPalindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}
function giveAnswer(){
    let que= inputQ.value;
    if(isPalindrome(que)){
        answerElement.textContent= `${que} is a palindrome`;
        answerElement.style.display="flex";
    }
    else {
        answerElement.textContent= `${que} is not a palindrome`;
        answerElement.style.display="flex";
    }
}





