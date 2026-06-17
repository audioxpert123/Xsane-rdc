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

<img class="structure-image"
src="${structure.image}"
alt="${structure.name}">

<h1>${structure.name}</h1>

<p class="hp">HP: 200</p>

<h2>Recommended</h2>

<div class="summary-box">

<span>Total:</span>

<div class="raid-item">
🧨 x2
</div>

<div class="raid-item">
💥 x31
</div>

</div>

<div class="best-box">

<div class="structure-mini">

<img class="mini-structure"
src="${structure.image}">

<span>x1</span>

</div>

<div class="best-text">

Best<br>Option:

</div>

<div class="raid-item">
🧨 x2
</div>

<span class="plus">+</span>

<div class="raid-item">
💥 x31
</div>

</div>

</div>

`;
