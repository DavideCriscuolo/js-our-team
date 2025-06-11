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

function addClasses(tag, ...classes) {
  tag.classList.add(...classes);
}

for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];
  console.log(member);
  const { name, role, email, img } = member;
  console.log(name, role, email, img);

  const divEl = document.createElement("div");
  console.log(divEl);
  addClasses(divEl, "col");
  addClasses(rowEl, "row-cols-1", "row-cols-sm-3", "row-cols-md-3");

  const markup = ` <div class="card d-flex flex-row">
                <div class="upcard">
                    <div class="card-img"><img clas="img-fluid" src="${img}" alt=""></div>
                </div>
                <div class="dowcard">
                    <div class="title_card">
                        <h1>
                            ${name}</h1>
                    </div>
                    <div id="cardbd" class="card-body ">
                        <h4>${role}</h4>
                        <email>${email}</email>
                    </div>
                </div>
            </div>`;
  divEl.innerHTML = markup;
  rowEl.appendChild(divEl);
  // const cardEl = document.querySelectorAll(".card");
  // addClasses(cardEl, "m-3");
}
