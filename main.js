// Select a random person from the data
let starterIndex = Math.floor(Math.random() * dataObj[0].results.length);

let selectedPerson = dataObj[0].results[starterIndex];

let nameHeader = document.getElementById('per_name');


let genderText = document.getElementById("gender");

let ageText = document.getElementById("age");

let addressText= document.getElementById("addy");

let phoneNum = document.getElementById("digits");






function setRandomPerson(selectedPerson){
    picture.src = selectedPerson.picture.large 

    genderText.innerText += selectedPerson.gender;

    ageText.innerText += selectedPerson.registered.age;

    addressText.innerText+= " " + selectedPerson.location.street.number + " "+ selectedPerson.location.street.name + " " + selectedPerson.location.state;

    phoneNum.innerText += selectedPerson.phone;
    

    nameHeader.innerText = selectedPerson.name.first + " "+ selectedPerson.name.last


}

setRandomPerson(selectedPerson)



let changeBtn = document.getElementById("randomBtn")

function changePerson(event){
    event.preventDefault();
    
    let starterIndex = Math.floor(Math.random() * dataObj[0].results.length);
    let selectedPerson = dataObj[0].results[starterIndex];


    // Clear previous content and set new content
    nameHeader.innerText = "";
    genderText.innerText = "Gender: ";
    ageText.innerText = "Age: ";
    addressText.innerText = "Address: ";
    phoneNum.innerText = "Phone: ";
    picture.src = "";


    setRandomPerson(selectedPerson);
}

 changeBtn.addEventListener("click", changePerson)



