const categories = Object.fromEntries(["doors","walls","floors","foundations","windows","hatches","external","misc"].map(id => [id, document.getElementById(id)]));
const search = document.getElementById("searchInput");
const buttons = Array.from(document.querySelectorAll("[data-category]"));
const resultCount = document.getElementById("resultCount");
const empty = document.getElementById("emptyResults");
const reset = document.getElementById("resetFilters");
const requested = new URLSearchParams(window.location.search).get("category");
let selected = Object.prototype.hasOwnProperty.call(categories, requested) ? requested : "all";
function createCard(item) {
  const card = document.createElement("a");
  card.className = "card";
  card.href = "details.html?structure=" + encodeURIComponent(item.name);
  const img = document.createElement("img");
  img.src = item.image;
  img.alt = "";
  img.loading = "lazy";
  img.decoding = "async";
  const name = document.createElement("div");
  name.className = "card-name";
  name.textContent = item.name;
  card.appendChild(img);
  card.appendChild(name);
  return card;
}
const cards = structures.filter(item => categories[item.category]).map(item => {
  const card = createCard(item);
  categories[item.category].appendChild(card);
  return {item, card};
});
function renderFilters() {
  const term = search.value.trim().toLowerCase();
  const counts = Object.fromEntries(Object.keys(categories).map(id => [id,0]));
  let total = 0;
  cards.forEach(({item,card}) => {
    const visible = (selected === "all" || selected === item.category) && item.name.toLowerCase().includes(term);
    card.hidden = !visible;
    if (visible) { counts[item.category]++; total++; }
  });
  Object.entries(categories).forEach(([id,container]) => { if (container) container.closest("section").hidden = counts[id] === 0; });
  buttons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.category === selected)));
  resultCount.textContent = total + (total === 1 ? " structure" : " structures");
  empty.hidden = total !== 0;
}
search.addEventListener("input", renderFilters);
buttons.forEach(button => button.addEventListener("click", () => { selected = button.dataset.category; renderFilters(); }));
reset.addEventListener("click", () => { selected = "all"; search.value = ""; renderFilters(); });
renderFilters();