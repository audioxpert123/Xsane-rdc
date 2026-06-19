const categories = {
    doors: document.getElementById("doors"),
    walls: document.getElementById("walls"),
    floors: document.getElementById("floors"),
    foundations: document.getElementById("foundations"),
    windows: document.getElementById("windows"),
    hatches: document.getElementById("hatches"),
    external: document.getElementById("external"),
    misc: document.getElementById("misc")
};

function createCard(item) {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="card-name">${item.name}</div>
    `;

    card.addEventListener("click", () => {

        localStorage.setItem(
            "selectedStructure",
            JSON.stringify(item)
        );

        window.location.href = "details.html";

    });

    return card;
}

structures.forEach(item => {

    const container = categories[item.category];

    if(container){
        container.appendChild(createCard(item));
    }

});
