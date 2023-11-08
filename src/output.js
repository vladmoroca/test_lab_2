import fs from "fs";

export const writeOutput = (result) =>{
    if(typeof result === "number"){
        const resultString = result.toString();
        fs.writeFileSync("output.txt", resultString, "utf-8");
    } else {
        throw new Error("invalid result")
    }
}