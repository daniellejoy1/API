const baseURL = 'https://api.covid19api.com/summary'

let infoContainer = document.querySelector('.infoContainer')


async function newConfirmed(i){
    const response = await fetch(baseURL);
    const json = await response.json();
    console.log(json.Countries[i].NewConfirmed);
    let result = await json.Countries[i].NewConfirmed; 
   return result; 
}
newConfirmed(181);
// function newConfirmed(i) {
//     fetch(baseURL)
//     .then(res => res.json())
//     .then(data => {
//         let results = (data.Countries[i].NewConfirmed)
//         return results
//     })
//     return results
    
// }


function unitedStates(){
    let uSNewCases = newConfirmed(181)
    let USA = document.createElement('h1'); 
    USA.className = 'Case Info';
    USA.innerText = 'United States';
    let USNumbers = document.createElement('h2');
    USNumbers.className = 'Case Info';
    USNumbers.innerText = ("New Confirmed Cases", `${uSNewCases}`);

    infoContainer.appendChild(USA);
    infoContainer.appendChild(USNumbers);
}
function unitedKingdom() { 
    let uKNewCases = newConfirmed([180])
    let UK = document.createElement('h1'); 
    UK.className = ('Case Info');
    UK.innerText = 'United Kingdom';

    infoContainer.appendChild(UK);
}

function brazil(){
    newConfirmed(23)
}

function spain(){
    newConfirmed(160)
}

function italy(){
    newConfirmed(82)
}

function southAfrica(){
    newConfirmed(158)
}

function china(){
    newConfirmed(35)
}


