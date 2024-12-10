const textInput= document.querySelector("#text-input");
const button = document.querySelector("#check-btn")
const result = document.querySelector("#result");


button.addEventListener('click', ()=>{
  const buttonText= textInput.value.trim();
  if(buttonText ===""){
    alert("Please input a value")
  } 
    const processedText = buttonText.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    result.innerText = `Text procesat: ${processedText}`;
    console.log(result.innerText)
  let reversedText="";
    for (let i = processedText.length - 1; i >= 0; i--) {
      reversedText += processedText[i]; 
    } 
    console.log(reversedText)
    if (processedText === reversedText) {
      result.innerText = `${buttonText} is a palindrome`;
    } else {
      result.innerText = `${buttonText} is not a palindrome`;
    }
})
