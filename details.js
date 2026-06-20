const structure =
JSON.parse(
localStorage.getItem(
"selectedStructure"
)
);

const raidInfo =
raidData[structure.name];

const details =
document.getElementById(
"details"
);

details.innerHTML = `

<div class="details-container">

    <h1>${structure.name}</h1>

    <div class="hp-badge">
        HP: ${raidInfo.hp}
    </div>

    <div class="best-box">

        <div class="target-box">

            <div class="target-title">
                TARGET
            </div>

            <div class="raid-item">

                <span class="qty-badge">x1</span>

                <img
                class="mini-structure"
                src="${structure.image}">

            </div>

        </div>

        <div class="raid-arrow">»</div>

        <div class="raid-item">

            <span class="raid-badge">
                x${raidInfo.bestMethod[0].quantity}
            </span>

            <img
            class="raid-image"
            src="images/${raidInfo.bestMethod[0].image}">

        </div>

    </div>

</div>

`;
