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

<p>HP: 200</p>

<h2>Recommended</h2>

<div class="method-box">

<p>Total:</p>

<div class="raid-item">
🧨 x2
</div>

<div class="raid-item">
💥 x31
</div>

</div>

<h2>Best Option</h2>

<div class="method-box">

<div class="raid-item">
🧨 x2
</div>

+

<div class="raid-item">
💥 x31
</div>

</div>

</div>

`;
