// Your code goes here
const funLogo = document.querySelector(".logo-heading");
funLogo.addEventListener("mouseover", () => {
  console.log(`Mouse over fun bus`)
});

const keypress = document.querySelector("html")
keypress.addEventListener("keydown", (event) => {
  console.log(`Pressed:`)
  event.stopPropagation();
});

const scroll = document.querySelector(".content-pick")
scroll.addEventListener("wheel", () => {
  console.log(`Scroll Pressed:`);
});

const dr = document.querySelector(".intro")
dr.addEventListener("dragover", () => {
  console.log(`intro drag:`);
});

const ld = document.querySelector(".content-destination img")
ld.addEventListener("load", () => {
  console.log(`loaded image:`);
});

const copied = document.querySelector("html")
copied.addEventListener("copy", () => {
  console.log(`copied html:`);
});

const dblc = document.querySelector("img")
dblc.addEventListener("dblclick", () => {
  console.log(`dblclicked:`);
});

const paste = document.querySelector("html");
paste.addEventListener("paste", () => {
    console.log(`something was pasted`);
});

const cut = document.querySelector("html");
cut.addEventListener("cut", () => {
    console.log(`html was cut`);
});

const menu = document.querySelector("html");
menu.addEventListener("contextmenu", () => {
    console.log(`right clicked`);
});

const homeLink = document.querySelector("nav a");
homeLink.addEventListener("click", event => {
  event.preventDefault();
  console.log(`You are gonna stay here with us in the FUN BUS!`)
});

// const rs = document.querySelector("html")
// rs.addEventListener("resize", () => {
//   console.log(`resizing html:`);
// });








// const scrolling = document.querySelector(".intro img");
// scrolling.addEventListener("wheel", () => {
//     console.log(`Scroll button pressed`);
// });