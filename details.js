const details = document.getElementById("details");
const params = new URLSearchParams(window.location.search);
let selectedName = params.get("structure");
if (!selectedName) {
    try { selectedName = JSON.parse(localStorage.getItem("selectedStructure"))?.name; }
    catch (_) { selectedName = null; }
}
const structure = structures.find(item => item.name === selectedName);
function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
}
const container = element("div", "details-container");
const back = element("a", "details-back", "← All structures");
back.href = "index.html";
container.appendChild(back);
details.appendChild(container);
if (!structure) {
    container.appendChild(element("h1", "", "Select a structure"));
    container.appendChild(element("p", "", "Return to the calculator and choose a structure."));
} else {
    const image = element("img", "structure-image");
    image.src = structure.image;
    image.alt = structure.name;
    image.addEventListener("error", () => { image.hidden = true; image.style.display = "none"; });
    container.appendChild(image);
    container.appendChild(element("h1", "", structure.name));
    const data = raidData[structure.name];
    if (!data) {
        container.appendChild(element("p", "raid-unavailable", "Raid cost data is not available for this structure yet."));
    } else {
        container.appendChild(element("div", "hp-badge", data.hp + " HP"));
        if (Array.isArray(data.bestMethod) && data.bestMethod.length) {
            container.appendChild(element("h2", "recommended-title", "Recommended raid method"));
            const method = element("div", "best-box raid-method-list");
            const names = {"molotov.webp":"Molotov","satchel.webp":"Satchel Charge","rocket.webp":"Rocket","c4.webp":"C4","beancan.webp":"Beancan Grenade","explosive-ammo.webp":"Explosive Ammo"};
            data.bestMethod.forEach((item, index) => {
                if (index) method.appendChild(element("span", "plus", "+"));
                const name = names[item.image] || item.image.replace(/\.[^.]+$/, "").replace(/-/g, " ");
                const tile = element("div", "raid-item raid-method-tile");
                const icon = element("img", "raid-image");
                icon.src = "images/" + item.image;
                icon.alt = name;
                tile.appendChild(icon);
                tile.appendChild(element("span", "", "×" + item.quantity));
                tile.appendChild(element("span", "raid-method-name", name));
                method.appendChild(tile);
            });
            container.appendChild(method);
        } else {
            container.appendChild(element("p", "raid-unavailable", "Raid method data is not available yet."));
        }
    }
}
