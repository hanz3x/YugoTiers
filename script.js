/* =========================================================
   YUGOTIERS
   ========================================================= */


/* =========================================================
   PLAYER DATA
   ========================================================= */

const players = [

    {
        name: "hanz3x",
        uuid: "",

        tiers: {
            uhc: "RHT1",
            crystal: "HT1",
            sword: "HT1",
            axe: "HT1",
            nethpot: "HT1",
            diapot: "HT1",
            ogv: "HT1",
            mace: "HT1",
            smp: "HT1",
            diasmp: "LT5"
        },

        peakTiers: {
            diasmp: "LT2"
        },

        retired: false
    },


    {
        name: "NikoFull",
        uuid: "",

        tiers: {
            uhc: "HT2",
            crystal: "HT2",
            sword: "HT1",
            axe: "HT2",
            nethpot: "HT1",
            diapot: "HT2",
            ogv: "HT1",
            mace: "HT2",
            smp: "HT1",
            diasmp: "HT2"
        },

        peakTiers: {},

        retired: false
    },


    {
        name: "frostyloll_",
        uuid: "",

        tiers: {
            uhc: "HT2",
            crystal: "HT2",
            sword: "HT2",
            axe: "HT2",
            nethpot: "HT2",
            diapot: "HT3",
            ogv: "HT2",
            mace: "HT3",
            smp: "HT2",
            diasmp: "HT3"
        },

        peakTiers: {},

        retired: false
    },


    {
        name: "Markotheminicat",
        uuid: "",

        tiers: {
            uhc: "HT3",
            crystal: "HT3",
            sword: "HT3",
            axe: "HT3",
            nethpot: "HT3",
            diapot: "HT4",
            ogv: "HT3",
            mace: "HT4",
            smp: "HT3",
            diasmp: "HT4"
        },

        peakTiers: {},

        retired: false
    },


    {
        name: "macrouser",
        uuid: "",

        tiers: {
            uhc: "HT4",
            crystal: "HT4",
            sword: "HT4",
            axe: "HT4",
            nethpot: "HT4",
            diapot: "HT5",
            ogv: "HT4",
            mace: "HT5",
            smp: "HT4",
            diasmp: "HT5"
        },

        peakTiers: {},

        retired: false
    },


    {
        name: "ItsM1ha",
        uuid: "",

        tiers: {
            uhc: "LT4",
            crystal: "LT4",
            sword: "LT4",
            axe: "LT4",
            nethpot: "LT4",
            diapot: "LT5",
            ogv: "LT4",
            mace: "LT5",
            smp: "LT4",
            diasmp: "LT5"
        },

        peakTiers: {},

        retired: false
    },


    {
        name: "7HokageSigmic",
        uuid: "",

        tiers: {
            uhc: "LT5",
            crystal: "N/A",
            sword: "LT5",
            axe: "N/A",
            nethpot: "N/A",
            diapot: "N/A",
            ogv: "N/A",
            mace: "N/A",
            smp: "N/A",
            diasmp: "N/A"
        },

        peakTiers: {},

        retired: false
    }

];


/* =========================================================
   KIT NAMES
   ========================================================= */

const kitNames = {

    uhc: "UHC",
    crystal: "CRYSTAL",
    sword: "SWORD",
    axe: "AXE",
    nethpot: "NETHPOT",
    diapot: "DIAPOT",
    ogv: "OGV",
    mace: "MACE",
    smp: "SMP",
    diasmp: "DIASMP"

};


/* =========================================================
   KIT ICONS
   ========================================================= */

const kitIcons = {

    uhc: "img/Uhc.svg",
    crystal: "img/Crystals.svg",
    sword: "img/Sword.svg",
    axe: "img/Axe.svg",
    nethpot: "img/Nethpot.svg",
    diapot: "img/Diamondpot.svg",
    ogv: "img/ogv.svg",
    mace: "img/Mace.svg",
    smp: "img/Smp.svg",
    diasmp: "img/diasmp.png"

};


/* =========================================================
   TIER POINT VALUES
   ========================================================= */

const tierPoints = {

    HT1: 50,
    LT1: 40,

    HT2: 30,
    LT2: 20,

    HT3: 10,
    LT3: 5,

    HT4: 4,
    LT4: 3,

    HT5: 2,
    LT5: 1

};


/* =========================================================
   TIER ORDER
   ========================================================= */

const tierOrder = [

    "HT1",
    "LT1",

    "HT2",
    "LT2",

    "HT3",
    "LT3",

    "HT4",
    "LT4",

    "HT5",
    "LT5"

];


/* =========================================================
   GET PEAK TIER
   ========================================================= */

function getPeakTier(player, kit) {

    if (!player || !kit) {
        return "N/A";
    }

    const currentTier =
        player.tiers?.[kit] || "N/A";

    const peakTier =
        player.peakTiers?.[kit];

    if (
        peakTier &&
        peakTier !== "N/A"
    ) {
        return peakTier;
    }

    return currentTier;
}


/* =========================================================
   CALCULATE OVERALL POINTS
   ========================================================= */

function getOverallPoints(player) {

    if (!player || !player.tiers) {
        return 0;
    }

    let total = 0;

    Object.keys(kitNames).forEach(
        kit => {

            const peakTier =
                getPeakTier(
                    player,
                    kit
                );

            total +=
                tierPoints[peakTier] || 0;

        }
    );

    return total;
}


/* =========================================================
   TITLE DATA
   ========================================================= */

const titleData = [

    {
        name: "Combat Grandmaster",
        minimumPoints: 400,
        icon: "img/combat_grandmaster.webp",
        description: "Obtained 400+ total points."
    },

    {
        name: "Combat Master",
        minimumPoints: 250,
        icon: "img/combat_master.webp",
        description: "Obtained 250+ total points."
    },

    {
        name: "Combat Ace",
        minimumPoints: 100,
        icon: "img/combat_ace.svg",
        description: "Obtained 100+ total points."
    },

    {
        name: "Combat Specialist",
        minimumPoints: 50,
        icon: "img/combat_specialist.svg",
        description: "Obtained 50+ total points."
    },

    {
        name: "Combat Cadet",
        minimumPoints: 20,
        icon: "img/combat_cadet.svg",
        description: "Obtained 20+ total points."
    },

    {
        name: "Combat Novice",
        minimumPoints: 10,
        icon: "img/combat_novice.svg",
        description: "Obtained 10+ total points."
    },

    {
        name: "Rookie",
        minimumPoints: 0,
        icon: "img/rookie.svg",
        description: "Starting rank for players with less than 10 points."
    }

];


/* =========================================================
   GET PLAYER TITLE
   ========================================================= */

function getPlayerTitle(player) {

    const points =
        getOverallPoints(player);

    return titleData.find(
        title =>
            points >= title.minimumPoints
    ) || titleData[
        titleData.length - 1
    ];
}


/* =========================================================
   ELEMENTS
   ========================================================= */

const container =
    document.getElementById(
        "tierlist-container"
    );

const title =
    document.getElementById(
        "tierlist-title"
    );

const description =
    document.getElementById(
        "tierlist-description"
    );

const kitButtons =
    document.querySelectorAll(
        ".kit-button"
    );

const searchInput =
    document.getElementById(
        "player-search"
    );

const profileOverlay =
    document.getElementById(
        "profile-overlay"
    );

const profileContent =
    document.getElementById(
        "profile-content"
    );

const profileClose =
    document.getElementById(
        "profile-close"
    );


/* =========================================================
   SEARCH RESULTS
   ========================================================= */

let searchResults =
    document.getElementById(
        "search-results"
    );


if (!searchResults) {

    searchResults =
        document.createElement(
            "div"
        );

    searchResults.id =
        "search-results";

    searchResults.className =
        "search-results";

    document
        .querySelector(
            ".header-searchbar"
        )
        .appendChild(
            searchResults
        );
}


/* =========================================================
   CURRENT KIT
   ========================================================= */

let currentKit =
    "overall";


/* =========================================================
   SKIN URL
   ========================================================= */

function getSkinUrl(
    player,
    size = 300
) {

    const identifier =
        player.uuid &&
        player.uuid.trim() !== ""
            ? player.uuid
            : player.name;

    return `https://mc-heads.net/body/${encodeURIComponent(
        identifier
    )}/${size}`;
}


/* =========================================================
   TIER CLASS
   ========================================================= */

function getTierClass(tier) {

    if (
        !tier ||
        tier === "N/A"
    ) {
        return "na";
    }

    if (
        isRetiredTier(tier)
    ) {
        return "retired";
    }

    return `tier-${tier.toLowerCase()}`;
}


/* =========================================================
   TIER NUMBER
   ========================================================= */

function getTierNumber(tier) {

    if (
        !tier ||
        tier === "N/A"
    ) {
        return null;
    }

    return parseInt(
        tier
            .replace("HT", "")
            .replace("LT", "")
            .replace("RHT", "")
            .replace("RLT", "")
    );
}


/* =========================================================
   RETIRED CHECK
   ========================================================= */

function isRetiredTier(tier) {

    if (!tier) {
        return false;
    }

    return tier
        .toUpperCase()
        .startsWith("R");
}


/* =========================================================
   GET CURRENT TIER
   ========================================================= */

function getCurrentTier(
    player,
    kit
) {

    if (
        !kit ||
        kit === "overall"
    ) {
        return "N/A";
    }

    const tier =
        player.tiers?.[kit] || "N/A";

    if (
        player.retired &&
        tier !== "N/A"
    ) {

        if (
            !isRetiredTier(tier)
        ) {

            return `R${tier}`;

        }

    }

    return tier;
}


/* =========================================================
   GET RAW CURRENT TIER
   ========================================================= */

function getRawCurrentTier(
    player,
    kit
) {

    return player.tiers?.[kit] || "N/A";
}


/* =========================================================
   DISPLAY TIERLIST
   ========================================================= */

function displayTierlist(kit) {

    container.innerHTML =
        "";

    currentKit =
        kit;


    if (
        kit === "overall"
    ) {

        title.textContent =
            "OVERALL";

        description.textContent =
            "Overall rankings based on tier points.";

        displayOverall();

        return;
    }


    title.textContent =
        `${kitNames[kit]} TIERLIST`;

    description.textContent =
        `Current ${kitNames[kit]} rankings.`;

    displayKitTierlist(
        kit
    );
}


/* =========================================================
   SUB-TIERLIST
   ========================================================= */

function displayKitTierlist(kit) {

    const tierlist =
        document.createElement(
            "div"
        );

    tierlist.className =
        "kit-tierlist";


    const tiers = [
    {
        number: 1,
        name: "TIER 1"
    },
    {
        number: 2,
        name: "TIER 2"
    },
    {
        number: 3,
        name: "TIER 3"
    },
    {
        number: 4,
        name: "TIER 4"
    },
    {
        number: 5,
        name: "TIER 5"
    }
];


    tiers.forEach(
        tier => {

            const column =
                document.createElement(
                    "div"
                );

            column.className =
                "tier-column";


            const header =
                document.createElement(
                    "div"
                );

            header.className =
                "tier-column-header";

            header.textContent =
                tier.name;


            const playerContainer =
                document.createElement(
                    "div"
                );

            playerContainer.className =
                "tier-column-players";


            players
                .filter(
                    player => {

                        const playerTier =
                            getRawCurrentTier(
                                player,
                                kit
                            );

                        return (
                            playerTier &&
                            playerTier !== "N/A" &&
                            getTierNumber(
                                playerTier
                            ) ===
                            tier.number
                        );

                    }
                )
                .sort(
                    (a, b) => {

                        const aTier =
                            tierOrder.indexOf(
                                getRawCurrentTier(
                                    a,
                                    kit
                                )
                            );

                        const bTier =
                            tierOrder.indexOf(
                                getRawCurrentTier(
                                    b,
                                    kit
                                )
                            );

                        return (
                            aTier -
                            bTier
                        );

                    }
                )
                .forEach(
                    player => {

                        playerContainer.appendChild(
                            createPlayerCard(
                                player,
                                kit
                            )
                        );

                    }
                );


            column.appendChild(
                header
            );

            column.appendChild(
                playerContainer
            );

            tierlist.appendChild(
                column
            );

        }
    );


    container.appendChild(
        tierlist
    );
}


/* =========================================================
   PLAYER CARD
   ========================================================= */

function createPlayerCard(
    player,
    kit
) {

    const tier =
        getCurrentTier(
            player,
            kit
        );


    const card =
        document.createElement(
            "div"
        );

    card.className =
        "player-card";


    if (
        tier !== "N/A"
    ) {

        card.classList.add(
            getTierClass(
                tier
            )
        );

    }


    const name =
        document.createElement(
            "div"
        );

    name.className =
        "player-name";

    name.textContent =
        player.name;


    card.appendChild(
        name
    );


    card.addEventListener(
        "click",
        () => {

            openProfile(
                player
            );

        }
    );


    return card;
}


/* =========================================================
   OVERALL KIT ORDER
   ========================================================= */

function sortOverallKits(player) {

    return Object.entries(
        kitNames
    )
    .map(
        ([kit, name]) => {

            const currentTier =
                getCurrentTier(
                    player,
                    kit
                );

            return {
                kit,
                name,
                tier: currentTier
            };

        }
    )
    .sort(
        (a, b) => {

            const aTier =
                a.tier || "N/A";

            const bTier =
                b.tier || "N/A";


            const aNA =
                aTier === "N/A";

            const bNA =
                bTier === "N/A";


            if (
                aNA &&
                !bNA
            ) {
                return 1;
            }

            if (
                bNA &&
                !aNA
            ) {
                return -1;
            }


            const aRetired =
                isRetiredTier(
                    aTier
                );

            const bRetired =
                isRetiredTier(
                    bTier
                );


            if (
                aRetired &&
                !bRetired
            ) {
                return 1;
            }

            if (
                bRetired &&
                !aRetired
            ) {
                return -1;
            }


            const aNormal =
                aTier.replace(
                    /^R/,
                    ""
                );

            const bNormal =
                bTier.replace(
                    /^R/,
                    ""
                );


            const aIndex =
                tierOrder.indexOf(
                    aNormal
                );

            const bIndex =
                tierOrder.indexOf(
                    bNormal
                );


            if (
                aIndex === -1 &&
                bIndex === -1
            ) {
                return 0;
            }

            if (
                aIndex === -1
            ) {
                return 1;
            }

            if (
                bIndex === -1
            ) {
                return -1;
            }


            return (
                aIndex -
                bIndex
            );

        }
    );
}


/* =========================================================
   CREATE PEAK TIER POPUP
   ========================================================= */

function createPeakPopup(
    box,
    kit,
    peakTier
) {

    const currentTier =
        getCurrentTier(
            currentProfilePlayer,
            kit
        );

    if (
        !peakTier ||
        peakTier === "N/A" ||
        peakTier === currentTier
    ) {
        return;
    }


    const popup =
        document.createElement(
            "div"
        );

    popup.className =
        "peak-tier-popup";

    popup.innerHTML = `
        <span class="peak-tier-label">
            Peak Tier
        </span>
        <span class="peak-tier-value ${getTierClass(peakTier)}">
            ${peakTier}
        </span>
    `;


    document.body.appendChild(
        popup
    );


    function positionPopup() {

        const rect =
            box.getBoundingClientRect();


        const popupRect =
            popup.getBoundingClientRect();


        let left =
            rect.left +
            (
                rect.width / 2
            ) -
            (
                popupRect.width / 2
            );


        let top =
            rect.top -
            popupRect.height -
            10;


        const padding = 10;


        if (
            left < padding
        ) {
            left = padding;
        }


        if (
            left +
            popupRect.width +
            padding >
            window.innerWidth
        ) {

            left =
                window.innerWidth -
                popupRect.width -
                padding;

        }


        if (
            top < padding
        ) {

            top =
                rect.bottom +
                10;

        }


        popup.style.left =
            `${left}px`;

        popup.style.top =
            `${top}px`;
    }


    requestAnimationFrame(
        positionPopup
    );


    function removePopup() {

        if (
            popup &&
            popup.parentNode
        ) {

            popup.remove();

        }

        box.removeEventListener(
            "mouseleave",
            removePopup
        );

        window.removeEventListener(
            "scroll",
            positionPopup
        );

        window.removeEventListener(
            "resize",
            positionPopup
        );

    }


    box.addEventListener(
        "mouseleave",
        removePopup
    );


    window.addEventListener(
        "scroll",
        positionPopup,
        {
            passive: true
        }
    );

    window.addEventListener(
        "resize",
        positionPopup
    );

}


/* =========================================================
   CURRENT PROFILE PLAYER
   ========================================================= */

let currentProfilePlayer =
    null;


/* =========================================================
   CREATE TIER POINTS POPUP
   ========================================================= */

function createTierPointsPopup(
    box,
    tier
) {

    if (
        !tier ||
        tier === "N/A"
    ) {
        return;
    }


    const normalTier =
        tier.replace(
            /^R/,
            ""
        );


    const points =
        tierPoints[
            normalTier
        ];


    if (
        points === undefined
    ) {
        return;
    }


    let pointsPopup =
        null;


    box.addEventListener(
        "mouseenter",
        () => {

            if (
                pointsPopup
            ) {

                pointsPopup.remove();

                pointsPopup =
                    null;

            }


            pointsPopup =
                document.createElement(
                    "div"
                );

            pointsPopup.className =
                "tier-points-popup";

            pointsPopup.textContent =
                `${points} points`;


            document.body.appendChild(
                pointsPopup
            );


            const rect =
                box.getBoundingClientRect();


            const popupRect =
                pointsPopup.getBoundingClientRect();


            let left =
                rect.left +
                (
                    rect.width / 2
                ) -
                (
                    popupRect.width / 2
                );


            let top =
                rect.top -
                popupRect.height -
                9;


            const padding =
                10;


            if (
                left < padding
            ) {

                left =
                    padding;

            }


            if (
                left +
                popupRect.width +
                padding >
                window.innerWidth
            ) {

                left =
                    window.innerWidth -
                    popupRect.width -
                    padding;

            }


            if (
                top < padding
            ) {

                top =
                    rect.bottom +
                    9;

            }


            pointsPopup.style.left =
                `${left}px`;

            pointsPopup.style.top =
                `${top}px`;


            requestAnimationFrame(
                () => {

                    if (
                        pointsPopup
                    ) {

                        pointsPopup.classList.add(
                            "visible"
                        );

                    }

                }
            );

        }
    );


    box.addEventListener(
        "mouseleave",
        () => {

            if (
                pointsPopup
            ) {

                pointsPopup.classList.remove(
                    "visible"
                );


                const popupToRemove =
                    pointsPopup;


                setTimeout(
                    () => {

                        if (
                            popupToRemove &&
                            popupToRemove.parentNode
                        ) {

                            popupToRemove.remove();

                        }

                    },
                    100
                );


                pointsPopup =
                    null;

            }

        }
    );

}


/* =========================================================
   OVERALL
   ========================================================= */

function displayOverall() {

    const overallList =
        document.createElement(
            "div"
        );

    overallList.className =
        "overall-list";


    const sortedPlayers =
        [...players].sort(
            (a, b) =>
                getOverallPoints(b) -
                getOverallPoints(a)
        );


    sortedPlayers.forEach(
        (player, index) => {

            const row =
                document.createElement(
                    "div"
                );

            row.className =
                "overall-player";


            row.addEventListener(
                "click",
                () => {

                    openProfile(
                        player
                    );

                }
            );


            /* ==========================
               RANK
               ========================== */

            const rank =
                document.createElement(
                    "div"
                );

            rank.className =
                "overall-rank";

            rank.textContent =
                `#${index + 1}`;


            /* ==========================
               CHARACTER
               ========================== */

            const characterContainer =
                document.createElement(
                    "div"
                );

            characterContainer.className =
                "overall-character-container";


            const skin =
                document.createElement(
                    "img"
                );

            skin.className =
                "overall-skin";

            skin.src =
                getSkinUrl(
                    player,
                    300
                );

            skin.alt =
                `${player.name} Minecraft skin`;


            characterContainer.appendChild(
                skin
            );


            /* ==========================
               PLAYER INFO
               ========================== */

            const info =
                document.createElement(
                    "div"
                );

            info.className =
                "overall-info";


            const name =
                document.createElement(
                    "div"
                );

            name.className =
                "overall-player-name";

            name.textContent =
                player.name;


            const points =
                document.createElement(
                    "div"
                );

            points.className =
                "overall-points";

            points.textContent =
                `${getOverallPoints(player)} POINTS`;


            /* ==========================
               PLAYER TITLE
               ========================== */

            const playerTitle =
                getPlayerTitle(
                    player
                );


            const titleElement =
                document.createElement(
                    "div"
                );

            titleElement.className =
                "overall-player-title";


            const titleIcon =
                document.createElement(
                    "img"
                );

            titleIcon.src =
                playerTitle.icon;

            titleIcon.alt =
                playerTitle.name;


            const titleText =
                document.createElement(
                    "span"
                );

            titleText.textContent =
                playerTitle.name;


            titleElement.appendChild(
                titleIcon
            );

            titleElement.appendChild(
                titleText
            );


            info.appendChild(
                name
            );

            info.appendChild(
                points
            );

            info.appendChild(
                titleElement
            );


            /* ==========================
               TIERS
               ========================== */

            const tiers =
                document.createElement(
                    "div"
                );

            tiers.className =
                "overall-tiers";


            const sortedKits =
                sortOverallKits(
                    player
                );


            sortedKits.forEach(
                ({
                    kit,
                    tier
                }) => {

                    const tierBox =
                        document.createElement(
                            "div"
                        );

                    tierBox.className =
                        "overall-tier";


                    /*
                     * RETIRED CLASS
                     */

                    if (
                        isRetiredTier(
                            tier
                        )
                    ) {

                        tierBox.classList.add(
                            "retired-tier"
                        );

                    }


                    /*
                     * ICON
                     */

                    if (
                        kitIcons[kit]
                    ) {

                        const icon =
                            document.createElement(
                                "img"
                            );

                        icon.src =
                            kitIcons[kit];

                        icon.alt =
                            kitNames[kit];


                        if (
                            isRetiredTier(
                                tier
                            )
                        ) {

                            icon.classList.add(
                                "retired-kit-icon"
                            );

                        }


                        tierBox.appendChild(
                            icon
                        );

                    }


                    /*
                     * TIER TEXT
                     */

                    const tierText =
                        document.createElement(
                            "div"
                        );

                    tierText.className =
                        "overall-tier-value";

                    tierText.textContent =
                        tier;


                    if (
                        tier === "N/A"
                    ) {

                        tierText.classList.add(
                            "tier-na"
                        );

                    } else {

                        tierText.classList.add(
                            getTierClass(
                                tier
                            )
                        );

                    }


                    tierBox.appendChild(
                        tierText
                    );


                    /*
                     * TIER POINTS HOVER
                     *
                     * Hovering anywhere on the
                     * entire kit box shows points.
                     */



                    tiers.appendChild(
                        tierBox
                    );

                }
            );


            /* ==========================
               BUILD ROW
               ========================== */

            row.appendChild(
                rank
            );

            row.appendChild(
                characterContainer
            );

            row.appendChild(
                info
            );

            row.appendChild(
                tiers
            );


            overallList.appendChild(
                row
            );

        }
    );


    container.appendChild(
        overallList
    );
}


/* =========================================================
   PROFILE TIER SORTING
   ========================================================= */

function sortProfileTiers(
    player
) {

    return Object.entries(
        kitNames
    )
    .map(
        ([kit]) => {

            return [
                kit,
                getCurrentTier(
                    player,
                    kit
                )
            ];

        }
    )
    .sort(
        ([, tierA], [, tierB]) => {

            const a =
                tierA || "N/A";

            const b =
                tierB || "N/A";


            const aNA =
                a === "N/A";

            const bNA =
                b === "N/A";


            if (
                aNA &&
                !bNA
            ) {
                return 1;
            }

            if (
                bNA &&
                !aNA
            ) {
                return -1;
            }


            const aRetired =
                isRetiredTier(a);

            const bRetired =
                isRetiredTier(b);


            if (
                aRetired &&
                !bRetired
            ) {
                return 1;
            }

            if (
                bRetired &&
                !aRetired
            ) {
                return -1;
            }


            const aNormal =
                a.replace(
                    /^R/,
                    ""
                );

            const bNormal =
                b.replace(
                    /^R/,
                    ""
                );


            const aIndex =
                tierOrder.indexOf(
                    aNormal
                );

            const bIndex =
                tierOrder.indexOf(
                    bNormal
                );


            if (
                aIndex === -1 &&
                bIndex === -1
            ) {
                return 0;
            }

            if (
                aIndex === -1
            ) {
                return 1;
            }

            if (
                bIndex === -1
            ) {
                return -1;
            }


            return (
                aIndex -
                bIndex
            );

        }
    );
}


/* =========================================================
   PROFILE
   ========================================================= */

function openProfile(
    player
) {

    currentProfilePlayer =
        player;


    profileContent.innerHTML =
        "";


    /* =====================================================
       PROFILE WRAPPER
       ===================================================== */

    const profile =
        document.createElement(
            "div"
        );

    profile.className =
        "profile-layout";


    /* =====================================================
       TOP SECTION
       ===================================================== */

    const top =
        document.createElement(
            "div"
        );

    top.className =
        "profile-top";


    /* =====================================================
       LEFT SIDE
       ===================================================== */

    const information =
        document.createElement(
            "div"
        );

    information.className =
        "profile-information";


    /* NAME */

    const name =
        document.createElement(
            "h2"
        );

    name.className =
        "profile-name";

    name.textContent =
        player.name;


    /* POINTS */

    const points =
        document.createElement(
            "div"
        );

    points.className =
        "profile-points";

    points.textContent =
        `${getOverallPoints(player)} Overall Points`;


    /* =====================================================
       PLACEMENT
       ===================================================== */

    const sortedPlayers =
        [...players].sort(
            (a, b) =>
                getOverallPoints(b) -
                getOverallPoints(a)
        );


    const placement =
        sortedPlayers.findIndex(
            p =>
                p.name ===
                player.name
        ) + 1;


    const placementElement =
        document.createElement(
            "div"
        );

    placementElement.className =
        "profile-placement";

    placementElement.textContent =
        `#${placement} Overall`;


    /* =====================================================
       TITLE
       ===================================================== */

    const playerTitle =
        getPlayerTitle(
            player
        );


    const titleBox =
        document.createElement(
            "div"
        );

    titleBox.className =
        "profile-title";


    const titleIcon =
        document.createElement(
            "img"
        );

    titleIcon.src =
        playerTitle.icon;

    titleIcon.alt =
        playerTitle.name;


    const titleInformation =
        document.createElement(
            "div"
        );


    const titleName =
        document.createElement(
            "div"
        );

    titleName.className =
        "profile-title-name";

    titleName.textContent =
        playerTitle.name;


    const titleDescription =
        document.createElement(
            "div"
        );

    titleDescription.className =
        "profile-title-description";

    titleDescription.textContent =
        playerTitle.description;


    titleInformation.appendChild(
        titleName
    );

    titleInformation.appendChild(
        titleDescription
    );


    titleBox.appendChild(
        titleIcon
    );

    titleBox.appendChild(
        titleInformation
    );


    /* LEFT CONTENT */

    information.appendChild(
        name
    );

    information.appendChild(
        points
    );

    information.appendChild(
        placementElement
    );

    information.appendChild(
        titleBox
    );


    /* =====================================================
       RIGHT SIDE - SKIN
       ===================================================== */

    const skinContainer =
        document.createElement(
            "div"
        );

    skinContainer.className =
        "profile-skin-container";


    const skin =
        document.createElement(
            "img"
        );

    skin.className =
        "profile-skin";

    skin.src =
        getSkinUrl(
            player,
            500
        );

    skin.alt =
        `${player.name} Minecraft skin`;


    skinContainer.appendChild(
        skin
    );


    /* =====================================================
       BUILD TOP
       ===================================================== */

    top.appendChild(
        information
    );

    top.appendChild(
        skinContainer
    );


    profile.appendChild(
        top
    );


    /* =====================================================
       TIERS SECTION
       ===================================================== */

    const tiersSection =
        document.createElement(
            "div"
        );

    tiersSection.className =
        "profile-tier-section";


    const tiersTitle =
        document.createElement(
            "h3"
        );

    tiersTitle.textContent =
        "TIERS";


    tiersSection.appendChild(
        tiersTitle
    );


    /* =====================================================
   TIER ROW
   ===================================================== */

const tierRow =
    document.createElement(
        "div"
    );

tierRow.className =
    "profile-tier-row";


const sortedTiers =
    sortProfileTiers(
        player
    );


sortedTiers.forEach(
    ([kit, tier]) => {

        const box =
            document.createElement(
                "div"
            );

        box.className =
            "profile-tier-box";


        /*
         * RETIRED CLASS
         */

        if (
            isRetiredTier(
                tier
            )
        ) {

            box.classList.add(
                "retired-tier"
            );

        }


        /* ICON */

        if (
            kitIcons[kit]
        ) {

            const icon =
                document.createElement(
                    "img"
                );

            icon.src =
                kitIcons[kit];

            icon.alt =
                kitNames[kit];

            icon.className =
                "profile-tier-icon";


            if (
                isRetiredTier(
                    tier
                )
            ) {

                icon.classList.add(
                    "retired-kit-icon"
                );

            }


            box.appendChild(
                icon
            );

        }


        /* TIER */

        const tierText =
            document.createElement(
                "div"
            );

        tierText.className =
            "profile-tier-value";

        tierText.textContent =
            tier;


        if (
            tier === "N/A"
        ) {

            tierText.classList.add(
                "tier-na"
            );

        } else {

            tierText.classList.add(
                getTierClass(
                    tier
                )
            );

        }


        box.appendChild(
            tierText
        );


        /* =================================================
           TIER POINTS / PEAK TIER POPUP
           ================================================= */

        const peakTier =
            player.peakTiers?.[kit];

        const hasPeak =
            peakTier &&
            peakTier !== "N/A" &&
            peakTier !== tier;


        /*
         * Don't make a popup for N/A.
         */

        if (
            tier !== "N/A"
        ) {

            let tierPopup = null;


            box.addEventListener(
                "mouseenter",
                () => {

                    /*
                     * Remove old popup.
                     */

                    if (
                        tierPopup
                    ) {

                        tierPopup.remove();

                        tierPopup =
                            null;

                    }


                    /*
                     * Create popup.
                     */

                    tierPopup =
                        document.createElement(
                            "div"
                        );

                    tierPopup.className =
                        "peak-tier-popup";


                    /*
                     * =========================================
                     * PEAK TIER
                     * =========================================
                     */

                    if (
                        hasPeak
                    ) {

                        const peakLabel =
                            document.createElement(
                                "div"
                            );

                        peakLabel.className =
                            "peak-tier-popup-label";

                        peakLabel.textContent =
                            `Peak Tier: ${peakTier}`;


                        /*
                         * Use the actual peak tier color.
                         */

                        const peakClass =
                            getTierClass(
                                peakTier
                            );


                        peakLabel.classList.add(
                            peakClass
                        );


                        /*
                         * Peak points.
                         */

                        const peakPoints =
                            document.createElement(
                                "div"
                            );

                        peakPoints.className =
                            "peak-tier-popup-points";

                        peakPoints.textContent =
                            `${tierPoints[peakTier] || 0} points`;

                        peakPoints.classList.add(
                            peakClass
                        );


                        tierPopup.appendChild(
                            peakLabel
                        );

                        tierPopup.appendChild(
                            peakPoints
                        );

                    }


                    /*
                     * =========================================
                     * NORMAL TIER
                     * =========================================
                     *
                     * If there is no peak tier, simply show:
                     *
                     * HT1
                     * 60 points
                     *
                     * Retired tiers also work here:
                     *
                     * RHT1
                     * 60 points
                     */

                    else {

                        const normalTier =
                            document.createElement(
                                "div"
                            );

                        normalTier.className =
                            "peak-tier-popup-label";

                        normalTier.textContent =
                            tier;


                        /*
                         * For retired tiers, use the
                         * retired color.
                         */

                        normalTier.classList.add(
                            getTierClass(
                                tier
                            )
                        );


                        const normalPoints =
                            document.createElement(
                                "div"
                            );

                        normalPoints.className =
                            "peak-tier-popup-points";

                        /*
                         * RHT1/RLT1 should use the
                         * underlying normal tier for points.
                         */

                        const pointsTier =
                            tier.replace(
                                /^R/,
                                ""
                            );


                        normalPoints.textContent =
                            `${tierPoints[pointsTier] || 0} points`;

                        normalPoints.classList.add(
                            getTierClass(
                                tier
                            )
                        );


                        tierPopup.appendChild(
                            normalTier
                        );

                        tierPopup.appendChild(
                            normalPoints
                        );

                    }


                    /*
                     * Add popup to BODY so it cannot
                     * be clipped by the profile box.
                     */

                    document.body.appendChild(
                        tierPopup
                    );


                    /*
                     * Position popup.
                     */

                    const rect =
                        box.getBoundingClientRect();


                    const popupRect =
                        tierPopup.getBoundingClientRect();


                    let left =
                        rect.left +
                        (
                            rect.width / 2
                        ) -
                        (
                            popupRect.width / 2
                        );


                    let top =
                        rect.top -
                        popupRect.height -
                        9;


                    const padding =
                        10;


                    /*
                     * Keep inside screen horizontally.
                     */

                    if (
                        left < padding
                    ) {

                        left =
                            padding;

                    }


                    if (
                        left +
                        popupRect.width +
                        padding >
                        window.innerWidth
                    ) {

                        left =
                            window.innerWidth -
                            popupRect.width -
                            padding;

                    }


                    /*
                     * If there isn't enough room
                     * above, put it underneath.
                     */

                    if (
                        top < padding
                    ) {

                        top =
                            rect.bottom +
                            9;

                    }


                    tierPopup.style.left =
                        `${left}px`;

                    tierPopup.style.top =
                        `${top}px`;


                    /*
                     * Fade in.
                     */

                    requestAnimationFrame(
                        () => {

                            if (
                                tierPopup
                            ) {

                                tierPopup.classList.add(
                                    "visible"
                                );

                            }

                        }
                    );

                }
            );


            box.addEventListener(
                "mouseleave",
                () => {

                    if (
                        tierPopup
                    ) {

                        tierPopup.classList.remove(
                            "visible"
                        );


                        const popupToRemove =
                            tierPopup;


                        setTimeout(
                            () => {

                                if (
                                    popupToRemove &&
                                    popupToRemove.parentNode
                                ) {

                                    popupToRemove.remove();

                                }

                            },
                            120
                        );


                        tierPopup =
                            null;

                    }

                }
            );

        }


        tierRow.appendChild(
            box
        );

    }
);


tiersSection.appendChild(
    tierRow
);

profile.appendChild(
    tiersSection
);



    tiersSection.appendChild(
        tierRow
    );

    profile.appendChild(
        tiersSection
    );


    /* =====================================================
       ADD PROFILE
       ===================================================== */

    profileContent.appendChild(
        profile
    );


    profileOverlay.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";
}

/* =========================================================
   INFORMATION POPUP
   ========================================================= */

const infoButton = document.getElementById("info-button");
const infoOverlay = document.getElementById("info-overlay");
const infoClose = document.getElementById("info-close");


/* Open */

if (infoButton && infoOverlay) {

    infoButton.addEventListener("click", () => {

        infoOverlay.classList.add("active");

    });

}


/* Close with X */

if (infoClose && infoOverlay) {

    infoClose.addEventListener("click", () => {

        infoOverlay.classList.remove("active");

    });

}


/* Close by clicking outside the box */

if (infoOverlay) {

    infoOverlay.addEventListener("click", (event) => {

        if (event.target === infoOverlay) {

            infoOverlay.classList.remove("active");

        }

    });

}


/* Close with ESC */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        if (infoOverlay) {

            infoOverlay.classList.remove("active");

        }

    }

});

/* =========================================================
   CLOSE PROFILE
   ========================================================= */

function closeProfile() {

    profileOverlay.classList.remove(
        "active"
    );

    currentProfilePlayer =
        null;


    document
        .querySelectorAll(
            ".peak-tier-popup"
        )
        .forEach(
            popup => popup.remove()
        );


    document
        .querySelectorAll(
            ".tier-points-popup"
        )
        .forEach(
            popup => popup.remove()
        );


    document.body.style.overflow =
        "";
}


profileClose.addEventListener(
    "click",
    closeProfile
);


profileOverlay.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            profileOverlay
        ) {

            closeProfile();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Escape"
        ) {

            closeProfile();

        }

    }
);


/* =========================================================
   KIT BUTTONS
   ========================================================= */

kitButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                kitButtons.forEach(
                    btn => {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                displayTierlist(
                    button.dataset.kit
                );

            }
        );

    }
);


/* =========================================================
   SEARCH
   ========================================================= */

searchInput.addEventListener(
    "input",
    () => {

        const search =
            searchInput.value
                .toLowerCase()
                .trim();


        searchResults.innerHTML =
            "";


        if (!search) {

            searchResults.style.display =
                "none";

            return;

        }


        const matches =
            players.filter(
                player =>
                    player.name
                        .toLowerCase()
                        .includes(
                            search
                        )
            );


        if (
            matches.length === 0
        ) {

            searchResults.style.display =
                "none";

            return;

        }


        matches.forEach(
            player => {

                const result =
                    document.createElement(
                        "div"
                    );

                result.className =
                    "search-result";

                result.textContent =
                    player.name;


                result.addEventListener(
                    "click",
                    () => {

                        searchInput.value =
                            "";

                        searchResults.style.display =
                            "none";


                        openProfile(
                            player
                        );

                    }
                );


                searchResults.appendChild(
                    result
                );

            }
        );


        searchResults.style.display =
            "block";

    }
);


/* =========================================================
   CLOSE SEARCH
   ========================================================= */

document.addEventListener(
    "click",
    event => {

        if (
            !event.target.closest(
                ".header-searchbar"
            )
        ) {

            searchResults.style.display =
                "none";

        }

    }
);


/* =========================================================
   START
   ========================================================= */

displayTierlist(
    "overall"
);
