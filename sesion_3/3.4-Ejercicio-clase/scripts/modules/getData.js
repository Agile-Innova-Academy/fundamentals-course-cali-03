import { showData } from "./showData.js";

export const getData = async (url) => {
    console.log(url)
  try {
    const data = await fetch(url);
    const  results = await data.json();
    console.log(results);
    showData(results)
  } catch (error) {
    console.log(error);
  }
};