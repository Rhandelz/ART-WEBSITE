let btn = document.getElementById("btn-explore");
const main = document.querySelector(".head-line");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
let transition_orig =
  " scaleX(1) scaleX(1.5) scaleX(2.5) scaleX(2.5) scaleX(1.5) scaleX(1)  scaleX(0)";
let transform = "scaleY(0.8) scaleY(0.6) scaleY(0.2) scaleY(0)";

btn.addEventListener("click", (event) => {
  /* main.style.display = "none"; */
  one.style.transform = transition_orig;
  two.style.transform = transition_orig;
  three.style.transform = transition_orig;
  four.style.transform = transition_orig;
  five.style.transform = transition_orig;
  let gg = five;
  gone(gg);
});

function gone(gg) {
  if ((gg.style.transform = transition_orig)) {
    main.style.transform = "scale(0)";
    main.style.opacity = 0;
    console.log("happened");
  }
}

/* This Script for NAV*/

let divlogo = document.querySelector(".logo_div");
const ul = document.querySelector("ul");
const nav = document.querySelector(".nav_head");

let back =
  "linear-gradient(to left,rgb(197, 197, 197), white,rgb(197, 197, 197))";
let haftback =
  "linear-gradient(to left,rgb(197, 197, 197), white, rgb(197, 197, 197))";
ul.addEventListener("mouseover", (e) => {
  divlogo.style.borderRadius = "20px";
  nav.style.background = "transparent";
  divlogo.style.background = back;
});

ul.addEventListener("mouseout", (e) => {
  divlogo.style.borderRadius = "0px";
  divlogo.style.background = "transparent";
  nav.style.background = back;
});

/*Script for Art sample*/

let art = document.querySelector("#div_artsmpl");
let plus = document.getElementById("btn_imgsmpl");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

plus.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("c");
  if (plus.innerText != "+") {
    art.style.height = "0%";
    plus.innerText = "+";
    left.style.transform = "scale(0)";
    right.style.transform = "scale(0)";
    /* right.style.right = "0%";
    left.style.left = "0%"; */
  } else {
    art.style.height = "80%";
    plus.innerText = "-";
    left.style.transform = "  scale(1.1) scale(1) ";
    right.style.transform = "scale(1.1) scale(1)";
    /*  right.style.right = "-25%";
    left.style.left = "-25%"; */
  }
});
/*NEXTING*/
let art_sec = document.querySelector(".art");
let art_smpl = document.querySelector("#div_artsmpl");
let concon = document.querySelector(".contain_art");
let con_art = document.querySelectorAll(".contain_art > img");
let arrnum = 0;

let cons = art_sec.clientWidth;
/* const size = art_sec[0].clientWidth; */
/* concon.style.transform = "translateX(" + -cons * arrnum + "px)"; */

left.addEventListener("click", (e) => {
  e.stopPropagation();
  /*  console.log(arrnum); */
  /*   arrnum++;
  concon.style.transform = "translateX(" + -320 * arrnum + "px)";
  console.log("R" + -320 * arrnum);
  console.log(con_art.length);
  console.log(arrnum); */

  if (arrnum >= con_art.length - 1) {
    concon.style.transform = "translateX(0px)";
    arrnum = 0;
  } else {
    arrnum++;
    concon.style.transform = "translateX(" + -320 * arrnum + "px)";
    console.log("R" + -320 * arrnum);
    console.log(con_art.length);
    console.log(arrnum);
  }
});

right.addEventListener("click", (e) => {
  e.stopPropagation();
  let lngth = con_art.length - 1;
  if (arrnum <= 0) {
    concon.style.transform = "translateX(" + -320 * lngth + "px";
    arrnum = con_art.length - 1;
  } else {
    arrnum--;
    concon.style.transform = "translateX(" + -320 * arrnum + "px";
  }

  console.log("L" + -320 * lngth);
  console.log(arrnum);
});
