console.log("Veikia");

BASE_URL = 'https://melon-potent-period.glitch.me/skills';

let data;

fetch(BASE_URL)
    .then((response) => response.json())
    .then((result) => {
        console.log(result);
        data = result; //susigrazinam kintamaji
        // drawCards(result); // paleidziame funkcija i fetch duomen pasiemimui
    })
    .catch((error) => console.error(error));

function drawTable(skillsArr) {

    let mainSkillsTable = document.getElementById('output');

    skillsArr.forEach(data => {

    });



}

document.getElementById("btn").addEventListener('click', () => {
    window.location.href = "add.html"
})