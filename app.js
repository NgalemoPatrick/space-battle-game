//This program simulate a space battle between and Uss ship and space alien
//

//Enable prompt()

const prompt = require('prompt-sync')();

// Class Uss ship


class UssShip {
    // attributs declaration
    name = '';
    hull = 20;
    accuracy = "0.7";


    constructor(name) {
        this.name = name;
    }


    ussShipAttackAccuracy() {
        // determine the accuracy of the attack
        const accuracyStrenght = Math.random()*0.8;
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
    firePower;
    accuracy;
    hullMax = 6;
    hullMin = 3;
    firePowerMax = 4;
    firePowerMin = 2
    accuracyMax = 0.8;
    accuracyMin = 0.6;

    constructor(name) {
        this.name = name;
        // randomly set the hull of the alien ship
        this.hull = Math.floor(Math.random()*(this.hullMax - this.hullMin)) + this.hullMin;
        // randomly set the firepower of the alien ship
        this.firePower = Math.floor(Math.random()*(this.firePowerMax - this.firePowerMin) )+ this.firePowerMin;
        // randomly set the accuracy of the alien ship
        this.accuracy = Math.floor(Math.random()*(this.accuracyMax - this.accuracyMin)) + this.accuracyMin;
    }

    alienAttackedAccuracy() {
        const alienOffense = Math.floor(Math.random()*(this.accuracyMax - this.accuracyMin)) + this.accuracyMin;
        return alienOffense.toFixed(1);
    }

    assignFirePower(){
        const firePower = Math.floor(Math.random()*this.firePowerMax) + this.firePowerMin;
        return firePower;
    }
}



//Get Uss ship name
    console.log('\n');
    let shipN = prompt("Enter the ship name: ");

// initialize uss and alien objects
    const uss1 = new UssShip(shipN);
// alien object    
    const alien1 = new AlienShip("Alistar");
    const alien2 = new AlienShip("Cosmos");
    const alien3 = new AlienShip("Elazo");
    const alien4 = new AlienShip("Kylo");
    const alien5 = new AlienShip("Novak");

// alien data set
const alien = [alien1,alien2,alien3,alien4,alien5];

//---------- Testing Uss ship properties ------------------------------ 
    console.log(`\n---------------------${uss1.name} characteristics-------`)
    // console.log(`Uss Ship Name : ${uss1.name}`);
    console.log(`ACCURACY is : ${uss1.ussShipAttackAccuracy()}`);
    console.log(`HULL is : ${uss1.hull}`);
    console.log("\n");

// //------------------------- Testing alien properties -------------
//     console.log(`---------------------${alien[0].name} characteristics-------`)
//     // console.log(`Alien name : ${alien1.name}`);
//     console.log(`FIREPOWER is : ${alien[0].assignFirePower()}`);
//     console.log(`HULL is : ${alien[0].hull}`);
//     console.log(`ACCURACY is : ${alien[0].alienAttackedAccuracy()}`);

// functions
// Main program
    
// check alien hull damage
// define the the retreat variable


let retreat = true;
let count = 0;

    while(retreat) {
//------------------------- Testing alien properties -------------
    console.log(`---------------------${alien[count].name} characteristics-------`)
    // console.log(`Alien name : ${alien1.name}`);
    console.log(`FIREPOWER is : ${alien[count].firePower}`);
    console.log(`HULL is : ${alien[count].hull}`);
    console.log(`ACCURACY is : ${alien[count].accuracy}`);
    console.log('\n---------------------Demo---------------------------\n');
        
        do{
            //display uss ship attacking
            console.log(`\n${uss1.name} is attacking....`);
    
            if(uss1.ussShipAttackAccuracy() === uss1.accuracy) {
                alien[count].hull -= 5;
            }else{
                alien[count].hull -= 1;
            }
    
            console.log(`\n${alien[count].name} HULL after the attack is : ${alien[count].hull}\n`);

            // display the alien attack
            // if(alien[count].alienAttackedAccuracy === alien[count].accuracyMax) {
            //     uss1.hull -= alien[count].assignFirePower();
            // }else{
            //     uss1.hull -= 1;
            // }
            // console.log(`\n${uss1.name} HULL after the attack is : ${uss1.hull}\n`);
    
        }while(alien1.hull > 0);

            const input = prompt("Do you want to RETREAT? Enter yes/no : ");
            if(input === "yes"){
                retreat = false;
            }else{
                count++;
            }
     };

     // check if I am out of the do while loop
     console.log(`\n\n${uss1.name} RETREATED!!!!!\n`);


        


