import Title from "./components/title";
import Image from "./components/image";
import Button from "./components/button";
import warning from "./templates/warning.html";
import "./styles/warning.css";
import fraseTxt from "./files/frase.txt";
import descricao from "./files/descricao.json";

const title = new Title();
const image = new Image();
const button = new Button();

title.create("Primeira página");
image.insertImage();
button.create();

// Babel Spread
const obj = { a: 1, b: 2, c: 3, d: 4, e: 99 };
let { a, b, ...teste } = obj;

console.log(a, b, teste);

// Import de HTML
const body = document.querySelector("body");
body.innerHTML += warning;

// Import arquivo de texto
const frase = fraseTxt;
console.log(frase);
console.log(frase.toUpperCase());

// Import JSON
const pessoa = descricao;
console.log(pessoa);
