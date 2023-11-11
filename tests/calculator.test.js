import { CalculatorState, HandleKeyPress } from "../src/calculator.js"

describe('CalculatorState', () => {
    let calculator;
  
    beforeEach(() => {
      calculator = new CalculatorState();
    });
  
    it('should initialize with default values', () => {
      expect(calculator.screen).toBe(0);
      expect(calculator.first_number).toBeNull();
      expect(calculator.op).toBeNull();
      expect(calculator.start_new_number).toBe(true);
    });
  
    it('should calculate addition', () => {
      calculator.screen = 5;
      calculator.first_number = 3;
      calculator.op = '+';
  
      calculator.calculate();
  
      expect(calculator.screen).toBe(8);
    });
  
    it('should calculate subtraction', () => {
      calculator.screen = 5;
      calculator.first_number = 3;
      calculator.op = '-';
  
      calculator.calculate();
  
      expect(calculator.screen).toBe(2);
    });
  
    it('should calculate multiplication', () => {
      calculator.screen = 5;
      calculator.first_number = 3;
      calculator.op = '*';
  
      calculator.calculate();
  
      expect(calculator.screen).toBe(15);
    });
  
    it('should calculate division', () => {
      calculator.screen = 6;
      calculator.first_number = 2;
      calculator.op = '/';
  
      calculator.calculate();
  
      expect(calculator.screen).toBe(3);
    });
  });

describe('HandleKeyPress', () => {
    let calculator;
  
    beforeEach(() => {
      calculator = new CalculatorState();
    });
  
    it('should add digits to the screen', () => {
      HandleKeyPress(calculator, '1');
      expect(calculator.screen).toBe('1');
  
      HandleKeyPress(calculator, '5');
      expect(calculator.screen).toBe('15');
    });
  
    it('should reset start_new_number when adding digits', () => {
      HandleKeyPress(calculator, '1');
      expect(calculator.start_new_number).toBe(false);
  
      HandleKeyPress(calculator, '5');
      expect(calculator.start_new_number).toBe(false);
    });
  
    it('should set the operator and store the current screen value as the first_number', () => {
      HandleKeyPress(calculator, '5');
      HandleKeyPress(calculator, '+');
  
      expect(calculator.op).toBe('+');
      expect(calculator.first_number).toBe(5);
      expect(calculator.screen).toBe("");
      expect(calculator.start_new_number).toBe(true);
    });
  
    it('should calculate the result when pressing "="', () => {
      calculator.screen = 5;
      calculator.first_number = 3;
      calculator.op = '+';
  
      HandleKeyPress(calculator, '=');
  
      expect(calculator.screen).toBe(8);
    });
  });