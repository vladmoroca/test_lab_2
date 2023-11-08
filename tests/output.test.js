import fs from "fs"
import { writeOutput } from "../src/output.js";

jest.mock("fs");

describe("writeOutput function", () => {
    it('should write the expected data to a file', () => {
        const test_result = 12348
        const expectedData = '12348';

        writeOutput(test_result);
        expect(fs.writeFileSync).toHaveBeenCalledWith('output.txt', expectedData, 'utf-8');
      });
});