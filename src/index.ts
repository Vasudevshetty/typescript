console.log("hello world");
let age: number = 20;
if (age < 50) age += 10;

let vasu = "vasu";

let numbers: number[] = [1, 2, 3];

let user: [number, string] = [41, "vasu"];

const small = 1,
  medium = 2,
  large = 3;

// for more optmised code in js
const enum Size {
  Small,
  Medium,
  Large,
}

let mySize: Size = Size.Large;

// taxYear?: number => for parameters that we dont need, but having a default value serves this better.
function calcTax(income: number, taxYear: number = 2022): number {
  if (income < 50_000 && taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

const student: {
  name: string;
  age: number;
  isAdult: (age: number) => boolean;
} = {
  name: "vasu",
  age: 10,
  isAdult: (age: number) => (age > 18 ? true : false),
};

// better way of doing the above is

type student = {
  name: string;
  age: number;
  isAdult: (age: number) => boolean;
};

const visu: student = { name: "vasu", age: 10, isAdult: (age) => age > 18 };

function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

type Draggable = {
  drag: () => void;
};

type Resizeable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = { drag: () => {}, resize: () => {} };

type Quantity = 50 | 51;
let quantity: Quantity = 50;
