// Part I

/**
 * @author : Abel Ngbandaman
 * @description : by asking the user if they would like to play the game, it determines if the  user choosed the  right number.
 * @param : empty
 * @returns : void 
 */

function playTheGame(){

    let response = confirm('Voulez vous jouer ?');

    if(!response){
        alert('Pas de problème, Au revoir');
    }else{
        let computerNumber = Math.round(Math.random() * 10); // generation of computer's number
        console.log(computerNumber)

        let numberUser = prompt("S'il vous plait, entrez un nombre entre 0 et 10 : ");
        while(isNaN(numberUser)){
            alert(`Désolé , ${numberUser} n'est un nombre :`);
            numberUser = prompt("S'il vous plait, réésayez : ");
        };
        
        if(numberUser < 0 || numberUser > 10){
            alert("Ce nombre n'est pas valide, Aurevoir !");
        }else{
            compareNumbers(numberUser, computerNumber); // call of compareNumbers function
        }
    }
}



/**
 * @description : This function checks if the user's number is the same as the computer's number and
                  determines if the user is a winner or not.
 * @param : userNumber : Number
 * @param : computerNumber : Number
 * @returns : void
 */

function compareNumbers(userNumber,computerNumber) {

    let chanceUsed = 1 ; 

    do{
        if(userNumber == computerNumber){
            alert(`GAGNANT !\nLe nombre était ${computerNumber}.`);
            break;
        }else{
            if(userNumber > computerNumber){
                alert('Ton nombre est trop grand...');
            }else{
                alert('Ton nombre est trop petit..');
            }
            userNumber =  prompt('Entrez nouveau nombre : ');
        }

        chanceUsed += 1;

    }while(chanceUsed <3)

    if(chanceUsed === 3){
        alert(`Perdu : Nombre de chances épuisé.\nLe nombre était ${computerNumber}.`);
    }
}