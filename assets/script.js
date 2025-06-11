/* Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
(trovate l’array del team all’interno della cartella in allegato)*/

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png",
  },
];

const rowEl = document.querySelector(".row");
const formEl = document.querySelector("form");

function addClasses(tag, ...classes) {
  console.log(tag);
  tag.classList.add(...classes);
}

function createCard(array) {
  for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    console.log(member);
    const { name, role, email, img } = member;
    console.log(name, role, email, img);

    const divEl = document.createElement("div");
    console.log(divEl);
    addClasses(divEl, "col");
    addClasses(
      rowEl,
      "row-cols-1",
      "row-cols-md-1",
      "row-cols-lg-2",
      "row-cols-xxl-3"
    );

    const markup = ` <div class="col card d-flex flex-row">
                  <div class="upcard">
                      <div class="card-img"><img clas="img-fluid" src="${img}" alt=""></div>
                  </div>
                  <div class="dowcard card-body">
                      <div class="title_card text-white">
                          <h1>
                              ${name.toUpperCase()}</h1>
                      </div>
                      <div class="desc text-white">
                          <h4>${role}</h4>
                          <email>${email}</email>
                      </div>
                  </div>
              </div>`;
    divEl.innerHTML = markup;
    rowEl.appendChild(divEl);
    const cardEls = document.querySelectorAll(".card");

    console.log(cardEls[0].classList);
    console.log(cardEls);

    for (const key in cardEls) {
      const cardEl = cardEls[key];
      if (cardEl.classList) {
        console.log(cardEl);
        addClasses(cardEl, "m-3");
      }
    }
  }
}
createCard(teamMembers);
inputArray = [];
const btnAddEl = document.getElementById("btnAdd");
const btnSub = document.getElementById("btnSub");
const inputNameValue = document.getElementById("name");
const inputRoleValue = document.getElementById("role");
const inputEmailValue = document.getElementById("email");
const inputImgValue = document.getElementById("image");
btnAddEl.addEventListener("click", function () {
  formEl.classList.remove("d-none");
  formEl.classList.add("d-block");
  console.log("object");
});

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  inputArray.push(
    inputNameValue.value,
    inputRoleValue.value,
    inputEmailValue.value,
    inputImgValue.value
  );
  const [nome, role, email, img] = inputArray;

  const newMember = {
    name: nome,
    role: role,
    email: email,
    img: img,
  };
  teamMembers.push(newMember);
  console.log(teamMembers);
  createCard(teamMembers);
});

// Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla pagina
// devo fare un array vuoto, prendere i valori dell input e psuharli nell array , prendere i valori dell'array e salvarli in una variabile, prendere le varibili e creare un nuovo ogetto da pushare all'interno teamMembers
