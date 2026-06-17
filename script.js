const doorsContainer = document.getElementById("doors");
const wallsContainer = document.getElementById("walls");

function createCard(item) {

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="card-name">${item.name}</div>
    `;

    return card;
}

structures.forEach(item => {

    const card = createCard(item);

    if(item.category === "doors"){
        doorsContainer.appendChild(card);
    }

    if(item.category === "walls"){
        wallsContainer.appendChild(card);
    }

});
