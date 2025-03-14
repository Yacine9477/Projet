import "./assets/styles/style.scss";
import "./index.scss";

//afficher les plats
const platContainerElement = document.querySelector(".plat-container");

const createPlats = (plats) => {
  const platsDOM = plats.map((plat) => {
    const platDOM = document.createElement("div");
    platDOM.classList.add("plat");
    platDOM.innerHTML = `
   
            <img
              src="${plat.img}"
              alt="profile"
            />
            <h2>${plat.title}</h2>

            <p class="plat-author">${plat.author}</p>

            <p class="plat-content">
            ${plat.content}
            </p>
            <div class="plat-actions">
              <button class="btn btn-danger" data-id=${plat._id}>Supprimer</button>
            </div>`;

    return platDOM;
  });

  platContainerElement.innerHTML = "";
  platContainerElement.append(...platsDOM);
  const deleteBtnsPlat = platContainerElement.querySelectorAll(".btn-danger");

  deleteBtnsPlat.forEach((button) => {
    button.addEventListener("click", async (event) => {
      try {
        const target = event.target;
        const platId = target.dataset.id;
        const response = await fetch(`https://restapi.fr/api/plat/${platId}`, {
          method: "DELETE",
        });
        const body = await response.json();
        fetchPlat();
      } catch (e) {
        console.log("e : ", e);
      }
    });
  });
};

const fetchPlat = async () => {
  try {
    const response = await fetch("https://restapi.fr/api/plat");
    const plats = await response.json();
    console.log(plats);
    createPlats(plats);
  } catch (e) {
    console.log("e : ", e);
  }
};

fetchPlat();

//afficher les avis
const articleContainerElement = document.querySelector(".article-container");

const createArticles = (articles) => {
  const articlesDOM = articles.map((article) => {
    const articleDOM = document.createElement("div");
    articleDOM.classList.add("article");
    articleDOM.innerHTML = `
   

            <h2>${article.title}</h2>

            <p class="article-author">${article.author}</p>

            <p class="article-content">
            ${article.content}
            </p>
            <div class="article-actions">
              <button class="btn btn-danger" data-id=${article._id}>Supprimer</button>
            </div>`;

    return articleDOM;
  });

  articleContainerElement.innerHTML = "";
  articleContainerElement.append(...articlesDOM);
  const deleteBtns = articleContainerElement.querySelectorAll(".btn-danger");

  deleteBtns.forEach((button) => {
    button.addEventListener("click", async (event) => {
      try {
        const target = event.target;
        const articleId = target.dataset.id;
        const response = await fetch(
          `https://restapi.fr/api/avis/${articleId}`,
          {
            method: "DELETE",
          }
        );
        const body = await response.json();
        fetchArticle();
      } catch (e) {
        console.log("e : ", e);
      }
    });
  });
};

const fetchArticle = async () => {
  try {
    const response = await fetch("https://restapi.fr/api/avis");
    const articles = await response.json();
    console.log(articles);
    createArticles(articles);
  } catch (e) {
    console.log("e : ", e);
  }
};

fetchArticle();
