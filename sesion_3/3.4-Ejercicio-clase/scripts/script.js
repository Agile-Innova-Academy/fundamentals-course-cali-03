import { url } from "./constant.js";
import { getData } from "./modules/getData.js";

document.addEventListener("DOMContentLoaded", async function () {
  console.log("...", url);
   for(let i=0; i<20; i++){
     await getData(url+i);
  }
});
