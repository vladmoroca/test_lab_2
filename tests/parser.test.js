import fs from "fs"
import { parse } from "../src/parser.js";

jest.mock("fs");

describe("read input.txt function", () => {
    const pathToFile = "../input.txt";
  
    it("reads and parses valid input file correctly", () => {
      const mockData = "8 + 5 - 3 =";
      fs.readFileSync.mockReturnValueOnce(mockData);
  
      const result = parse(pathToFile);
      expect(result).toEqual(["8","+","5","-","3","="])
    })
});