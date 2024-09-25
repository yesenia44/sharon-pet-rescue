const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
    const pet = {
        name: name,
        species: species,
        isTired: 5, 
        sleep: function () {
            console.log(`${this.name} needs a nap. Zzz`);
            this.isTired = 1; // value changed to 1 so pet is tired.
        },

        play: function() {
            if (this.isTired === 10) { // if this.isTired equals to 10
                console.log("Too tired to play.");// then pet is tired to play
                this.sleep(); // calls sleep function. 
            } else {   
            console.log(`Yay ${this.name} loves to play!`)
            this.isTired += 1// increase the value by 1.
            }
        }
    }
    return pet; 
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle")

//console.log(sora, clover, baxter, cleo, francine);

clover.sleep(); //value for isTired went from 5 to 1 because the function was called
baxter.play(); // value for isTired went from 5 to 6 because it adds 1 after being called

console.log(clover, baxter);

clover.isTired = 8; // redefine isTired property to 8
francine.isTired = 9; //redefine isTired property to 9

const allPets = [sora, clover, baxter, cleo, francine]; // array 
console.log(allPets);
   
const showPets = function (petArray) { // function with petArray as a parameter
    pets.innerHTML = ""; //empty string. empties the list when showPets runs
    for (let pet of petArray) { // for .. of loop
        let status = "ready to play"; // declaring a variable
        if(pet.isTired >= 7) { // if statement. if pet.isTired is greater or equal to 7
            status = "sleeping"; // pet is sleeping
        }
        const li = document.createElement("li");  // creating a list element
        li.innerHTML = `<span class= "pet-name">${pet.name}</span> the ${pet.species} is ${status}`; // add span class which adds color on pet name
        //add pet, object, before adding the property so it won't show up as undefined.
        pets.append(li) // adds list to pets
    }
}
statusButton.addEventListener("click", function () { // when clicking the button, the function will occur
    showPets(allPets)// calls the function with allPets as parameter
    }
);
    
       
        
        
       
    


