import "../assets/styles/style.scss";
import "./Apropos.scss";

const form = document.querySelector("form");
const errorElement = document.querySelector("#errors");

let errors = [];

form.addEventListener("submit", async (event) => {
  //on récupère les inputs du formulaire
  event.preventDefault();

  const formData = new FormData(form);

  const entries = formData.entries(); //renvoie un objet itérable

  const objArticle = Object.fromEntries(entries);

  if (formIsValid(objArticle)) {
    try {
      const json = JSON.stringify(objArticle);

      const response = await fetch("https://restapi.fr/api/avis", {
        method: "POST",
        body: json,
        headers: {
          "Content-Type": "application/json",
        },
      });

      const body = await response.json();
      console.log(body);
    } catch (e) {
      console.error("e : ", e);
    }
  }
});

const formIsValid = (objAvis) => {
  if (!objAvis.author || !objAvis.content || !objAvis.title) {
    //On vérifie s'il ya un input qui n'est pas rempli
    errors.push("Vous devez renseigner tous les champs");
  } else {
    errors = [];
  }
  if (errors.length) {
    let errorHTML = "";
    errors.forEach((e) => {
      errorHTML += `<li>${e}</li>`;
    });
    errorElement.innerHTML = errorHTML;
    return false;
  } else {
    errorElement.innerHTML = "";
    return true;
  }
};
