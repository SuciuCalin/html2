// Selectam elementele HTML
const name = document.getElementById("name");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

const form = document.getElementsByTagName("form")[0];

// mailto:ceva@gmail.com?subject=subiect&body=mesaj

const emailLink = "mailto:adresa@email.com";

form.addEventListener("submit", sendMsg);

function sendMsg(event) {
    event.preventDefault();

    const url = emailLink + "?subject=" + subject.value + "&body=" + `New message from ${name.value}` + message.value;

    console.log(url);
    window.location.href = url;
}