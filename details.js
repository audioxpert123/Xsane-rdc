const structure =
JSON.parse(
localStorage.getItem(
"selectedStructure"
)
);

const details =
document.getElementById(
"details"
);

details.innerHTML = `

<div class="details-container">

    <h1>${structure.name}</h1>

    <div class="hp-badge">
        HP: 200
    </div>

    <div class="best-box">

        <div class="structure-mini">
            <span class="qty-badge">x1</span>

            <img
            class="mini-structure"
            src="${structure.image}">
        </div>

        <div class="raid-item">
    🧨 x3
</div>

        <span class="plus">+</span>

        <div class="raid-item">
            💥 x31
        </div>

    </div>

</div>

`;
