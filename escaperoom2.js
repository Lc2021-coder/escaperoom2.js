var readlineSync = require('readline-sync');
const playerName = readlineSync.question("What is your Name?");

const welcomeMessage = "welcome" + "Shane" + "to my escaperoom game simulation.";
console.log(welcomeMessage);

let isAlive = true;
let pickupKey = false;

while(isAlive == true){
    const menuId = readlineSync.keyIn('Hit 1 to put hand in the hole \n Hit 2 to find key \n Hit 3 to open door key: ', {limit: '$<1-3>'});
        if(menuId == 1){
            console.log("Shane" + "you are doing a great job keep going, do not put your hand in the hole or game will be over!");
            //If Shane put his hand in the hole
            //game over!
            isAlive = false
        }else if(menuId == 2 && pickupKey === false){
            console.log("Shane" + "you have not pickup the key! keep looking for the Key.");
            //Shane has not found the key yet!
            // Shane keep going until you find the key.
            pickupKey = true
        }else if( menuId == 3 && pickupKey == false){
            console.log("Shane" + "why you go to the door with no key? Go back and pickup the key!");
            //Shane the door will not open, you do not have the key, you must go back and pickup key!
            pickupKey = false
        }else if(menuId == 2 && pickupKey == true){
            console.log("Shane" + "Amazing job! You did it! You pickup the key, you may now proceed to the next option!");
            //Yes! Shane, You did it. You found the key! You may proceed to the next option.
            pickupKey = true
            let isAlive = false
        }else if(menuId == 3 &&pickupKey == true){
            console.log("Shane" + "You already pickedup key and open the door! You escaped, YOU WIN!");
           //Shane you Already pickedup key and have now opened the door!
            //YOU WIN! You have escaped!
            //GAME OVER
            
        }
         

        
    
}
