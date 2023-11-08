import { parse } from "./src/parser.js"
import { CalculatorState } from "./src/calculator.js";
import { HandleKeyPress } from "./src/calculator.js";
import { writeOutput } from "./src/output.js";

(() => {
    const pathToFile = "./input.txt";
    const data = parse(pathToFile);
    const calculator = new CalculatorState
    for(const key of data){
        HandleKeyPress(calculator,key)
    }
    writeOutput(calculator.screen)
  })()