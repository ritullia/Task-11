

console.log("Veikia");

BASE_URL = 'https://melon-potent-period.glitch.me/skills';

let data = [];
console.log(BASE_URL)


fetch(BASE_URL + '/', {
    method: "GET",
    headers: { 'Content-Type': 'application/json' }
})
    .then((response) => response.json())
    .then((result) => {
        console.log(result);
        data = result; //susigrazinam kintamaji
        drawTable(data); // paleidziame funkcija i fetch duomen pasiemimui
    })
    .catch((error) => console.error(error));

function drawTable(skillsArr) {

    let mainSkillsTable = document.getElementById('skills');

    skillsArr.forEach(data => {
        console.log(data)
        let tBody = document.createElement("tbody");
        tBody.classList.add('table-body')

        let trEl = document.createElement('tr');
        trEl.classList.add('tr-row')
        let thElm = document.createElement("th");
        thElm.textContent = data.id;
        // console.log(data.id)
        let thElmSec = document.createElement("th");
        thElmSec.textContent = data.skill;
        let thElmBtn = document.createElement("th");
        thElmBtn.textContent = data.action;
        let deletBtn = document.createElement("button");
        deletBtn.textContent = "Delete";
        deletBtn.classList.add("btn-delete");
        deletBtn.addEventListener("click", deleteSkill);
        thElmBtn.append(deletBtn);
        trEl.append(thElm, thElmSec, thElmBtn);
        tBody.append(trEl);
        mainSkillsTable.append(tBody);

    });

    console.log(skillsArr);
    return data


}


async function deleteSkill(data) {
    console.log("Delete from FRONT END")
    await fetch(BASE_URL + '/' + data.id, {
        method: "DELETE",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data[id]),
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}




document.getElementById("btn").addEventListener('click', () => {
    window.location.href = "add.html"
})