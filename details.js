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

    <span class="raid-badge">x3</span>

    <img
    class="raid-image"
    src="images/molotov.webp">

</div>

    </div>

</div>

`;
