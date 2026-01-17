const submitbutton = document.getElementById("meow");

submitbutton.addEventListener("click", function() {
    const valuestoring = document.getElementById("dob").value;
    if(valuestoring === ""){
        document.getElementById("result").textContent = "Select a date!";
        return;
    }

    const date = new Date(valuestoring);
    const today = new Date();
    let age = today.getFullYear() - date.getFullYear();

    if(today.getMonth() < date.getMonth() || 
       (today.getMonth() === date.getMonth() && today.getDate() < date.getDate())){
        age--;
    }

    document.getElementById("result").textContent = age + " years";
});
