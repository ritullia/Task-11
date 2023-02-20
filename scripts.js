console.log("Veikia");

BASE_URL = 'https://melon-potent-period.glitch.me/';

let data;
console.log(BASE_URL)


fetch(BASE_URL + '/skills', {
    method: "GET",
    headers: { 'Content-Type': 'application/json' }
})
    .then((response) => response.json())
    .then((result) => {
        //susigrazinam kintamaji
        drawTable(result); // paleidziame funkcija i fetch duomen pasiemimui
    })
    .catch((error) => console.error(error));

function drawTable(data) {

    let mainSkillsTable = document.getElementById('skills');

    data.forEach(item => {
        console.log(item)
        let tBody = document.createElement("tbody");
        tBody.classList.add('table-body')

        let trEl = document.createElement('tr');
        trEl.classList.add('tr-row')
        let thElm = document.createElement("th");
        thElm.textContent = item.id;
        // console.log(data.id)
        let thElmSec = document.createElement("th");
        thElmSec.textContent = item.skill;
        let thElmBtn = document.createElement("th");
        thElmBtn.textContent = item.action;
        let deletBtn = document.createElement("button");
        deletBtn.textContent = "Delete";
        deletBtn.classList.add("btn-delete");

        async function deleteSkill() {
            console.log("Delete from FRONT END")
            await fetch(BASE_URL + '/skill/' + item.id, {
                method: "DELETE",
                body: JSON.stringify(),
            })
                .then(response => {
                    response.json();
                    alert("Item was deleted!!!")
                })
                .then(() =>
                    location.reload()
                )
                .catch(error => console.log(error))
        }


        deletBtn.addEventListener("click", deleteSkill);
        thElmBtn.append(deletBtn);
        trEl.append(thElm, thElmSec, thElmBtn);
        tBody.append(trEl);
        mainSkillsTable.append(tBody);

    });

    console.log(data);
}


document.getElementById("btn").addEventListener('click', () => {
    window.location.href = "add.html"
})
