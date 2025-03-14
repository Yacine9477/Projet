import"./style-DvmostcK.js";const a=document.querySelector(".article-container"),i=c=>{const n=c.map(t=>{const e=document.createElement("div");return e.classList.add("article"),e.innerHTML=`
    <img
              src="${t.img}"
              alt="profile"
            />

            <h2>${t.title}</h2>

            <p class="article-author">${t.author} - ${t.category}</p>

            <p class="article-content">
            ${t.content}
            </p>
            <div class="article-actions">
              <button class="btn btn-danger" data-id=${t._id}>Supprimer</button>
            </div>`,e});a.innerHTML="",a.append(...n),a.querySelectorAll(".btn-danger").forEach(t=>{t.addEventListener("click",async e=>{try{const r=e.target.dataset.id,p=await(await fetch(`https://restapi.fr/api/article/${r}`,{method:"DELETE"})).json();o()}catch(s){console.log("e : ",s)}})})},o=async()=>{try{const n=await(await fetch("https://restapi.fr/api/article")).json();console.log(n),i(n)}catch(c){console.log("e : ",c)}};o();
