let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#message");
const userscoring = document.querySelector("#userscore");
const compscoring = document.querySelector("#compscore");
const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomchoice = Math.floor(Math.random() * 3);
    return options[randomchoice];
};

const showwinner = (userwin,userchoice,compchoice) => {
    if (userwin) {
        userscore++;
        userscoring.innerText = userscore;
       message.innerText = `You win boss 🎉 ${userchoice} beats ${compchoice}`;
        message.style.backgroundColor = "#0f7e11";
    } else {
        compscore++;
        compscoring.innerText = compscore;
       message.innerText = `You loss buddy  🎉 ${compchoice} beats ${userchoice}`;
        message.style.backgroundColor = "#b22222";
    }
};

const draw = () => {
    message.innerText = "It's a Draw 🤝";
    message.style.backgroundColor = "#081b31";
};

const playgame = (userchoice) => {
    const compchoice = gencompchoice();

    if (userchoice === compchoice) {
        draw();
    } else {
        let userwin = true;

        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }

        showwinner(userwin,userchoice,compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
