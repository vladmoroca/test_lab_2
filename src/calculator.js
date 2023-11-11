
export class CalculatorState {
    constructor() {
        this.screen = 0;
        this.first_number = null;
        this.op = null;
        this.start_new_number = true;

    }

    operations = {
        "+": (a, b) => Math.floor(+a + +b),
        "-": (a, b) =>  Math.floor(+a - +b),
        "*": (a, b) =>  Math.floor(+a * +b),
        "/": (a, b) =>  Math.floor(+a / +b),
    };

    calculate(){
        if(this.op){
            this.screen = this.operations[this.op](this.screen, this.first_number)
        }
        return this.screen
    }
}

export const HandleKeyPress = (calc, key) => {
    if (key >= "0" && key <= "9"){
        if(calc.start_new_number) calc.screen = ""
        calc.screen += key
        calc.start_new_number = false
    }
    if (calc.operations[key]){
        calc.op = key
        calc.start_new_number = true
        calc.first_number = +calc.screen
        calc.screen = ""
    }
    if(key === "="){
       calc.calculate()
    }
}