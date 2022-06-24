export default class Machines {
    constructor(id, title, input, output, madeOf, model) {
        this.id = id;
        this.title = title;
        this.input = input;
        this.output = output;
        this.madeOf = madeOf; // alla components för att bygga maskinen {ironplate: 4, screw: 12}? 
        this.model = model; //ex mk1
    }
}

/*
Miner
Smelter
Constructor
*/