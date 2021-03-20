const baseURL = 'https://api.covid19api.com/summary'

let infoContainer = document.querySelector('.infoContainer')


// async function newConfirmed(i){
//     unitedStates(result)
//    return result; 
// }
// newConfirmed(181);

function unitedStates(){
    while (infoContainer.firstChild){
        infoContainer.removeChild(infoContainer.firstChild)
    }
    // const response = await fetch(baseURL);
    // console.log(baseURL);
    // const json = await response.json();
    // console.log(json.Countries[181].NewConfirmed);
    // 
    // return result;
    // let uSNewCases = newConfirmed(181)
    fetch(baseURL)
    .then(function(result) {
        return result.json()
    }) .then(function(result){
        console.log(result.Countries[181].NewConfirmed) 
        let uSresult = result.Countries[181].NewConfirmed; 
    let USA = document.createElement('h1'); 
    USA.className = 'Case Info';
    USA.innerText = 'New Confirmed Cases in United States';
    let USNumbers = document.createElement('h2');
    USNumbers.className = 'caseInfo';
    console.log(result.Countries[181].NewConfirmed)
    USNumbers.innerText = ("New Confirmed Cases", `${uSresult}`);

    infoContainer.appendChild(USA);
    infoContainer.appendChild(USNumbers);
})
}

function unitedKingdom() { 
    while (infoContainer.firstChild){
        infoContainer.removeChild(infoContainer.firstChild)
    }
    fetch(baseURL)
    .then(function(result) {
        return result.json()
    }) .then(function(result){
        console.log(result.Countries[180].NewConfirmed) 
        let uKresult = result.Countries[180].NewConfirmed; 
    let UK = document.createElement('h1'); 
    UK.className = 'Case Info';
    UK.innerText = 'New Confirmed Cases in United Kingdom';
    let UKNumbers = document.createElement('h2');
    UKNumbers.className = 'caseInfo';
    console.log(result.Countries[180].NewConfirmed)
    UKNumbers.innerText = (`${uKresult}`);

    infoContainer.appendChild(UK);
    infoContainer.appendChild(UKNumbers);
})
}

function brazil(){
    while (infoContainer.firstChild){
        infoContainer.removeChild(infoContainer.firstChild)
    }
    fetch(baseURL)
    .then(function(result) {
        return result.json()
    }) .then(function(result){
        console.log(result.Countries[23].NewConfirmed) 
        let brazilResult = result.Countries[23].NewConfirmed; 
    let Brazil = document.createElement('h1'); 
    Brazil.className = 'Case Info';
    Brazil.innerText = 'New Confirmed Cases in Brazil';
    let brazilNumbers = document.createElement('h2');
    brazilNumbers.className = 'caseInfo';
    console.log(result.Countries[23].NewConfirmed)
    brazilNumbers.innerText = (`${brazilResult}`);

    infoContainer.appendChild(Brazil);
    infoContainer.appendChild(brazilNumbers);
})
}

function spain(){
    while (infoContainer.firstChild){
        infoContainer.removeChild(infoContainer.firstChild)
    }
    fetch(baseURL)
    .then(function(result) {
        return result.json()
    }) .then(function(result){
        console.log(result.Countries[160].NewConfirmed) 
        let spainResult = result.Countries[160].NewConfirmed; 
    let Spain = document.createElement('h1'); 
    Spain.className = 'Case Info';
    Spain.innerText = 'New Confirmed Cases in Spain';
    let spainNumbers = document.createElement('h2');
    spainNumbers.className = 'caseInfo';
    console.log(result.Countries[160].NewConfirmed)
    spainNumbers.innerText = (`${spainResult}`);

    infoContainer.appendChild(Spain);
    infoContainer.appendChild(spainNumbers);
})
}

function italy(){
    while (infoContainer.firstChild){
        infoContainer.removeChild(infoContainer.firstChild)
    }
    fetch(baseURL)
    .then(function(result) {
        return result.json()
    }) .then(function(result){
        console.log(result.Countries[82].NewConfirmed) 
        let italyResult = result.Countries[82].NewConfirmed; 
    let Italy = document.createElement('h1'); 
    Italy.className = 'Case Info';
    Italy.innerText = 'New Confirmed Cases in Italy';
    let italyNumbers = document.createElement('h2');
    italyNumbers.className = 'caseInfo';
    console.log(result.Countries[82].NewConfirmed)
    italyNumbers.innerText = (`${italyResult}`);

    infoContainer.appendChild(Italy);
    infoContainer.appendChild(italyNumbers);
})

}

function southAfrica(){
    while (infoContainer.firstChild){
        infoContainer.removeChild(infoContainer.firstChild)
    }
    fetch(baseURL)
    .then(function(result) {
        return result.json()
    }) .then(function(result){
        console.log(result.Countries[158].NewConfirmed) 
        let southAfricaResult = result.Countries[158].NewConfirmed; 
    let southAfrica = document.createElement('h1'); 
    southAfrica.className = 'Case Info';
    southAfrica.innerText = 'New Confirmed Cases in South Africa';
    let southAfricaNumbers = document.createElement('h2');
    southAfricaNumbers.className = 'caseInfo';
    console.log(result.Countries[158].NewConfirmed)
    southAfricaNumbers.innerText = (`${southAfricaResult}`);

    infoContainer.appendChild(southAfrica);
    infoContainer.appendChild(southAfricaNumbers);
})
}

function china(){
    while (infoContainer.firstChild){
        infoContainer.removeChild(infoContainer.firstChild)
    }
    fetch(baseURL)
    .then(function(result) {
        return result.json()
    }) .then(function(result){
        console.log(result.Countries[35].NewConfirmed) 
        let chinaResult = result.Countries[35].NewConfirmed; 
    let China = document.createElement('h1'); 
    China.className = 'Case Info';
    China.innerText = 'New Confirmed Cases in China';
    let chinaNumbers = document.createElement('h2');
    chinaNumbers.className = 'caseInfo';
    console.log(result.Countries[35].NewConfirmed)
    chinaNumbers.innerText = (`${chinaResult}`);

    infoContainer.appendChild(China);
    infoContainer.appendChild(chinaNumbers);
})
}


