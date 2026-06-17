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

<div class="card">

<img src="${structure.image}" alt="${structure.name}">

<div class="card-name">

${structure.name}

</div>

</div>

`;
