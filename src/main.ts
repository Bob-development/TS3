//TASK : 
// Write function which will recieve data
// Write function which will append data on the screen

import './style.css'

const dataHTML = document.querySelector(".data") as HTMLElement;
const getDataBtn = document.querySelector(".get-data") as HTMLButtonElement;
const spinner = document.querySelector(".spinner") as HTMLElement;

const peopleURL = "https://swapi.dev/api/people/";


setEventsToButton(getDataBtn, peopleURL);


async function getData(url: string) {
  const arr: [] = [];

  const data = await fetch(url);
  const parseData = await data.json();

  await parseData.results.forEach(element => {    
    arr.push(element.name);
  });

  arr.forEach((el)=>{
    const item = document.createElement('div');
    item.textContent = `Name: ${el}`;   

    spinner.style.display = 'none'
    render(dataHTML, item);
  })
}


function render(node: HTMLElement, elementHTML: HTMLElement) {
  return node.append(elementHTML);
}


function setEventsToButton(btn: HTMLButtonElement, url: string) {
  return btn.addEventListener("click", ()=>{
    [...dataHTML.children].forEach(child => child.remove());
    spinner.style.display = 'flex';
    
    getData(url);
  })
}