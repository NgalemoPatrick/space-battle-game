//Enable prompt()

const prompt = require('prompt-sync')();

// Class Uss ship


class UssShip {
    // attributs declaration
    name = '';
    hull = 20;
    accuracy = 0.7;


    constructor(name) {
        this.name = name;
    }


    ussShipAttackAccuracy() {
        // determine the accuracy of the attack
        const accuracyStrenght = Math.random();
        return accuracyStrenght.toFixed(1);
    }

    isUssShipReteated() {
        return false;
    }
}


// Alien class 

class AlienShip {
    // Attributs declaration
    name = '';
    hull;
    hullMax = 6;
    hullMin = 3;
    firePowerMax = 4;
    firePowerMin = 2
    accuracyMax = 0.8;
    accuracyMin = 0.6;

    constructor(name) {
        this.name = name;
        this.hull = Math.floor((Math.random()*this.hullMax) + this.hullMin);
    }

    alienAttackedAccuracy() {
        const alienOffense = Math.random()*this.accuracyMax;
        return alienOffense.toFixed(1);
    }

    assignFirePower(){
        const firePower = Math.floor((Math.random()*this.firePowerMax) + this.firePowerMin)
        return firePower;
    }
}



//Get Uss ship name
    console.log('\n');
    let shipN = prompt("Enter the ship name: ");

// initialize uss and alien objects
    const uss1 = new UssShip(shipN);
    const alien1 = new AlienShip("ALIEN-SHIP");

//---------- Testing Uss ship properties ------------------------------ 
    console.log(`\n---------------------${uss1.name} characteristics-------`)
    // console.log(`Uss Ship Name : ${uss1.name}`);
    console.log(`RANDOM ACCURACY is : ${uss1.ussShipAttackAccuracy()}`);
    console.log(`HULL is : ${uss1.hull}`);
    console.log("\n");

//------------------------- Testing alien properties -------------
console.log(`---------------------${alien1.name} characteristics-------`)
    // console.log(`Alien name : ${alien1.name}`);
    console.log(`FIREPOWER is : ${alien1.assignFirePower()}`);
    console.log(`HULL is : ${alien1.hull}`);
    console.log(`ACCURACY is : ${alien1.alienAttackedAccuracy()}`);

// functions
// Main program
    
// check alien hull damage
// define the the retreat variable
console.log('\n---------------------Demo---------------------------');

let retreat = true;
    while(retreat) {
        
        do{
            //display who is attacking
            console.log(`\n${uss1.name} is attacking....`);
    
            if(uss1.ussShipAttackAccuracy() === '0.7') {
                alien1.hull -= 5;
            }else{
                alien1.hull -= 1;
            }
    
            console.log(`\n${alien1.name} HULL after the attack is : ${alien1.hull}\n`);
    
        }while(alien1.hull > 0);

            const input = prompt("Do you want to RETREAT? Enter yes/no : ");
            if(input === "yes"){
                retreat = false;
            }
     };

     // check if I am out of the do while loop
     console.log(`\n\n${uss1.name} RETREATED!!!!!\n`);


        


