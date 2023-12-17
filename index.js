const titleWords = {
    name: ['Gary', 'Elliot', 'Karen', 'Stacey', 'Bob', 'Mary'],
    articleOrPrep: ['the', 'of'],
    adjective: ['Destroyer', 'Hectic', 'Lazy', 'Steeze', 'Lard'],
    place: ['Tarth', 'Dragonsmere', 'Egguhfahm', 'Maffra', 'Sovereign Hill', 'Franga']
}

const generateRandomNumber = (num) => {
    return Math.floor(Math.random() * num);
}

const titleGenerator = () => {
    
    let nameId = generateRandomNumber(titleWords.name.length);
    let articleOrPrepId = generateRandomNumber(titleWords.articleOrPrep.length);
    let adjectiveId = generateRandomNumber(titleWords.adjective.length);
    let placeId = generateRandomNumber(titleWords.place.length);
    
    for (let i = 0; i < titleWords.name.length; i++) {
        if (nameId == i) {
            personalTitle.push(titleWords.name[i]);
        }        
    }

    for (let j = 0; j < titleWords.articleOrPrep.length; j++) {
        if (articleOrPrepId == j) {
            personalTitle.push(titleWords.articleOrPrep[j]);
        }      
    }

    if (articleOrPrepId == 0) {
        for (let k = 0; k < titleWords.adjective.length; k++) {
            if (adjectiveId == k) {
                personalTitle.push(titleWords.adjective[k]);
            }      
        }
    } else {
        for (let l = 0; l < titleWords.place.length; l++) {
            if (placeId == l) {
                personalTitle.push(titleWords.place[l]);
            }      
        }
    }
}
    
let personalTitle = [];

let personalTitleGreeting = () => {
    const formatted = personalTitle.join(' ');
    console.log(`Greetings ${formatted} you outlandish devil`);
}

titleGenerator();

personalTitleGreeting();



