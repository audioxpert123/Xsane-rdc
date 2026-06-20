const structure =
JSON.parse(
localStorage.getItem(
"selectedStructure"
)
);

document.getElementById("details").innerHTML =
`<h1>${structure.name}</h1>`;
