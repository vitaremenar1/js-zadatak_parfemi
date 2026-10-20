import { parfumes } from "./data.js";

console.log(parfumes);

const list = document.querySelector('#list');
const count = document.querySelector('#count');
const empty = document.querySelector('#empty')
const loading = document.querySelector('#loading');

//popis klasa za muške parfeme
const CHEAP = ["ring-3","ring-blue-500",];


//izrada kartica za parfeme
function createCard(parfume) {
    const card = document.createElement("article"); //<artile></article>
    card.className = "rounded-lg bg-blue-300 p-4 shadow";
    card.dataset.id = parfume.id;

    const brand = document.createElement("h2");
    brand.className = "text-xl font-semibold pb-2";
    brand.textContent = parfume.brand;

    const image = document.createElement("img");
    image.src = parfume.image;
    image.alt = parfume.name;
    image.className = "mb-3 w-full rounded-2xl";

    const name = document.createElement("h2");
    name.className = "font-bold text-xl pb-2";
    name.textContent = parfume.name;

    const description = document.createElement("p");
    description.textContent = parfume.description;

    const price = document.createElement ("p");
    price.className = "font-bold text-l p-1";
    price.textContent = `${parfume.price} EUR`;

    const link = document.createElement("a");
    link.href = parfume.url;
    link.className = "text-blue-900 underline";
    link.textContent = "Više o parfemu";

    card.append(brand, image, name, description, price, link);

    if (parfume.price < 100 ) {
        card.classList.add(...CHEAP);
    }
    return card;
}   
function render(items) {
    list.innerHTML = "";

    const fragment = document.createDocumentFragment();
    for (const item of items) {
        fragment.append(createCard(item));
    }

    list.append(fragment);

    count.textContent = `Prikazano parfema: ${items.length}`;

    empty.classList.toggle("hidden", items.length > 0);
}

const m = parfumes
    .filter(parfume => parfume.category === "muškarci")
    .sort((a, b) => a.name.localeCompare(b.name));

//render(parfumes);
render(m);
loading.remove