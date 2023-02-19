


BASE_URL = 'https://melon-potent-period.glitch.me';


fetch(BASE_URL)
    .then((response) => response.json())
    .then((result) => {
        console.log(result);
        data = result; //susigrazinam kintamaji
        // drawCards(result); // paleidziame funkcija i fetch duomen pasiemimui
    })
    .catch((error) => console.error(error));



document.getElementById("btn").addEventListener('click', () => {
    window.location.href = "add.html"
})