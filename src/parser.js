import fs from "fs"

export const parse = (filePath) => {
    const file = fs.readFileSync(filePath, "utf8");
    const data = file.split(" ") 
    return data
}