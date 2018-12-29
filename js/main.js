const scoreUser = document.getElementById('user');
const scoreComp = document.getElementById('comp');
const round = document.getElementById('ronda');
const rock = document.getElementById('piedra');
const paper = document.getElementById('papel');
const scissors = document.getElementById('tijera');
const result = document.getElementById('resultado');

let rounds = 1;
let userScore = 0;
let compScore = 0;

const comp = ()=>{
    let options = ["r","p","s"];
    let number = Math.floor(Math.random()*3);
    return options[number];
}

var convertLetter = (letter)=>{
    if(letter == "r") return "Piedra";
    if(letter == "p") return "Papel";
    return "Tijera"
}

var scoreColor = ()=>{
    if(userScore > compScore){
        scoreUser.style.backgroundColor = "green";
        scoreComp.style.backgroundColor = "red";
    }else if(userScore < compScore){
        scoreUser.style.backgroundColor = "red";
        scoreComp.style.backgroundColor = "green";
    }
}

var win = (userOption,compChoice)=>{
    userScore++;
    scoreUser.textContent = userScore;
    scoreComp.textContent = compScore;
    result.textContent = convertLetter(userOption) + " le gana a " + convertLetter(compChoice) + ". Tu Ganastes.";
}

var lose = (userOption,compChoice)=>{
    compScore++;
    scoreUser.textContent = userScore;
    scoreComp.textContent = compScore;
    result.textContent = convertLetter(userOption) + " pierde con " + convertLetter(compChoice) + ". Tu Pierdes.";
}

var draw = (userOption,compChoice)=>{
    scoreUser.textContent = userScore;
    scoreComp.textContent = compScore;
    result.textContent = convertLetter(userOption) + " es igual a " + convertLetter(compChoice) + ". Empate.";
}

var game = (userOption)=>{
    let compChoice = comp();
    let result = userOption+compChoice;
    if(result == "rs" || result == "pr" || result == "sp"){
        win(userOption,compChoice);
    }else if(result == "sr" || result == "rp" || result == "ps"){
        lose(userOption,compChoice);
    }else{
        draw(userOption,compChoice);
    }
    rounds++;
    round.textContent = rounds;
    scoreColor();
}

var init = ()=>{
    rock.addEventListener("click",()=>{
        game("r");
    })
    
    paper.addEventListener("click",()=>{
        game("p");
    })
    
    scissors.addEventListener("click",()=>{
        game("s")
    })
}

init();