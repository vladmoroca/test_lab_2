import fs from "fs";

export const writeOutput = (result) =>{
    const resultString = result.toString();
    fs.writeFileSync("output.txt", resultString, "utf-8");
}