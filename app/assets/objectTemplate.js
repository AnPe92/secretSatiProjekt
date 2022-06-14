export const machines = [
    {
        miner:
            [
                { value: 60, label: "Mk1" },
                { value: 120, label: "Mk2" },
                { value: 240, label: "Mk3" }

            ],
        label: "miner"
    },
    {
        smelter: [],
        label: "smelter"
    },
    {
        constructor: [],
        label: "constructor"
    }
]


export const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const oreNode = {
    impure:
    {
        modifier: 0.5,
    },
    normal:
    {
        modifier: 1,
    },
    pure:
    {
        modifier: 2,
    }
}

//implementerar efter overclock färdig
const overclockStats = {
    powershards: [0, 1, 2, 3]
}

//let overclock = valuefrominput;

0.5 * 90 / 100 * 60


function miningSpeed(purityModifier, overclock, minerValue) {

    return purityModifier * overclock / 100 * minerValue

}

//omvänd funktion

// if (cIn > sOut) {
//     cIn / sOut
//     }
//     if cIn == sOut {
//     cIn / sOut
//     } else {
//     sOut / cIn
//     }

// dropdown => machines => version av maskin  => puritymod => overclock <= output