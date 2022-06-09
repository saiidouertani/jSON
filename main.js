let header = document.querySelector("header");
let section = document.querySelector("section");
let request = new XMLHttpRequest();
request.open(
  "GET",
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);
request.send();
request.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let result = JSON.parse(request.responseText);
    console.log(result.members);
    let h1 = document.createElement("h1");

    h1.textContent = result.squadName;
    let p = document.createElement("p");

    p.textContent =
      "Hometown : " + result.homeTown + " formed : " + result.formed;
    header.appendChild(h1);
    header.appendChild(p);
    for (i = 0; i < result.members.length; i++) {
      let article = document.createElement("article");
      let h2 = document.createElement("h2");
      h2.innerText = result.members[i].name;
      let p = document.createElement("p");
      p.innerText = `secretIdentity:${result.members[i].secretIdentity}/n Age:${result.members[i].age}`;
      article.appendChild(h2);
      article.appendChild(p);
      section.appendChild(article);
    }
  }
};
