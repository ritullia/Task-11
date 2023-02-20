console.log("Veikia")

BASE_URL = 'https://melon-potent-period.glitch.me';

async function sendData() {

    const skill = document.getElementById("skill-input").value;

    const dataToSend = {
        skill: skill,
    };

    const response = await fetch(BASE_URL + '/' + 'skills', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
    });

    if (response.ok === true) {
        alert('Skill successfully added!!!');
        window.location.href = "./index.html"
    } else {
        alert('ERROR')
    }
}


document.getElementById("btn-add").addEventListener('click', sendData)
document.getElementById("btn-view").addEventListener('click', () => {
    window.location.href = "./index.html"
})