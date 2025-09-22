import "./style.css";

const btn = document.querySelector("button");
const rect = document.querySelector("rectangle");
const listDo = document.querySelector("#listDo");
const listDone = document.querySelector("#listDone");
const input = document.querySelector("input");

btn.addEventListener("click", () => {
  event.preventDefault();
  let text = document.getElementById("texte").value; // je récupère le texte du formulaire
  input.value = ""; //Pour effacer ce qui a été écris dans l'input
  const list = document.createElement("li");
  const paragraphe = document.createElement("p"); // Pour afficher le paragraphe

  const rectangle = document.createElement("div");
  const rectangleClass = document.createAttribute("class"); // Pour afficher le rectangle
  rectangleClass.value = "rectangle";
  rectangle.setAttributeNode(rectangleClass);

  const barre1 = document.createElement("div");
  const barre2 = document.createElement("div");
  const barre1Class = document.createAttribute("class"); // Pour afficher les barres de la croix
  const barre2Class = document.createAttribute("class");
  barre1Class.value = "barre1";
  barre2Class.value = "barre2";
  barre1.setAttributeNode(barre1Class);
  barre2.setAttributeNode(barre2Class);

  listDo.appendChild(list);

  paragraphe.textContent = text; // j'affecte la valeur du texte au paragraphe
  list.appendChild(rectangle);
  list.appendChild(paragraphe);

  rectangle.appendChild(barre1);
  rectangle.appendChild(barre2);

  rectangle.addEventListener("click", () => {
    const listItem = event.target.closest("li");
    let textDone = listItem.querySelector("p").innerText;

    const list2 = document.createElement("li");
    const para = document.createElement("p");

    para.textContent = textDone;

    listDone.appendChild(list2);
    list2.appendChild(para);

    list.remove();
  });
});
