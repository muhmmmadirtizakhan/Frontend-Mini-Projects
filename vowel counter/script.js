const submitBtn = document.querySelector(".submit");
const textarea = document.querySelector(".textarea");
const resultDiv = document.getElementById("result");

submitBtn.addEventListener("click", () => {
    const stringinput = textarea.value;

    let consonantcounter = 0;
    let vowelcounter = 0;
    let charactercount = 0;

    for (let char of stringinput) {
        charactercount++;

        if (
            char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
            char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'
        ) {
            vowelcounter++;
        } else {
            consonantcounter++;
        }

     
        if (char === " ") {
            consonantcounter--;
        }

       
        if (char >= '0' && char <= '9') {
            consonantcounter--;
        }

        
        if (
            !(char >= 'a' && char <= 'z') &&
            !(char >= 'A' && char <= 'Z') &&
            !(char === " ")
        ) {
            consonantcounter--;
        }
    }

    resultDiv.innerHTML = `
        Total Characters: ${charactercount} <br>
        Vowels: ${vowelcounter} <br>
        Consonants: ${consonantcounter}
    `;
});