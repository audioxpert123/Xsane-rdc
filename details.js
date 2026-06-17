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

<h2>Recommended</h2>

<div class="best-box">

<h3 class="recommended-title">
🏆 Recommended Raid Method
</h3>

<div class="structure-mini">

<img class="mini-structure"
src="${structure.image}">

<span>x1</span>

</div>

<div class="best-text">

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
