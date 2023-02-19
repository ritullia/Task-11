

console.log("Veikia");

BASE_URL = 'https://melon-potent-period.glitch.me/skills';

let data;

fetch(BASE_URL)
    .then((response) => response.json())
    .then((result) => {
        console.log(result);
        data = result; //susigrazinam kintamaji
        drawTable(result); // paleidziame funkcija i fetch duomen pasiemimui
    })
    .catch((error) => console.error(error));

function drawTable(skillsArr) {

    let mainSkillsTable = document.getElementById('skills');

    skillsArr.forEach(data => {
        let tBody = document.createElement("tbody");
        tBody.classList.add('table-body')

        let trEl = document.createElement('tr');
        let thElm = document.createElement("th");
        thElm.textContent = data.id
        let thElmSec = document.createElement("th");
        thElmSec.textContent = data.skill
        let thElmBtn = document.createElement("th");
        thElmBtn.textContent = data.action
        let deletBtn = document.createElement("button")
        deletBtn.textContent = "Delete";
        deletBtn.classList.add("btn-delete")


        thElmBtn.append(deletBtn)
        trEl.append(thElm, thElmSec, thElmBtn)
        tBody.append(trEl)
        mainSkillsTable.append(tBody)


    });



}

document.getElementById("btn").addEventListener('click', () => {
    window.location.href = "add.html"
})