//Home page
let buttons = document.querySelectorAll(`.gundam`); //document.querySelectorAll the elements

for(let i = 0; i < buttons.length; i++){
    let button = buttons[i]; //This will loop for all the values in the switch rendering everything functionable

    button.addEventListener(`click`, function(e){ //When clicked it starts a function

        switch(e.target.id){ //e.target.id checks for the Id 
            case 'gundam1':
                window.location.href= "Gundam1.html";
                break;
            case 'gundam2':
                window.location.href= "Gundam2.html";
                break;
            case 'gundam3':
                window.location.href= "Gundam3.html";
                break;
        }
    });
};

//Gundam 1

//This takes the gundam name from the HTMLs
let gundam = document.querySelector(`#gundam-name`);

//This is the value that will change the gundam names
let gundam1names = [];
let gundam2names = [];
let gundam3names = [];

//For Gundam1.html
if(window.location.href.includes("Gundam1.html")){

    gundam1names = [{
        gundam: `RX-78-2 Gundam`
    }, {
        gundam: `RX-77-2 Guncannon`
    }, {
        gundam: `RX-75-4 Guntank`
    }, {
        gundam: `RGM-79 GM`
    }];
}

//For Gundam2.html
else if(window.location.href.includes("Gundam2.html")){

    gundam2names = [{
        gundam: `ASW-G-08 Gundam Barbatos`
    }, {
        gundam: `ASW-G-11 Gundam Gusion Rebake`
    }, {
        gundam: `ASW-G-64 Gundam Flauros (Ryusei-Go)`
    }];
}

//For Gundam3.html
else if(window.location.href.includes("Gundam3.html")){
    
    gundam3names = [{
        gundam: `XVX-016 Gundam Aerial`
    }, {
        gundam: `XGF-E3 Gundnode`
    }];
};

//This is to not display the name prior to the pressing of generating a gundam
const gundamName = document.querySelector(`#gundam-name`);
gundamName.style.display = `none`;

document.querySelector(`#gundam-button`).addEventListener(`click`, function(){

    switch(gundamName.style.display){
        case `block`:
            gundamName.style.display = `block`;
            break;
        case `none`:
            gundamName.style.display = `block`;
            break;
    }
});

//This makes the generate gundam button work
document.querySelector(`#gundam-button`).addEventListener(`click`, function(){

    //This generates a random Gundam everything you do press generate a gundam
    switch(true){
        //This generates for Gundam1.html
        case (gundam1names.length > 0):
            let random1 = Math.floor(Math.random() * gundam1names.length);
            gundam.innerText = gundam1names[random1].gundam;
            break;
        //This generates for Gundam2.html
        case (gundam2names.length > 0):
            let random2 = Math.floor(Math.random() * gundam2names.length);
            gundam.innerText = gundam2names[random2].gundam;
            break;
        //This generates for Gundam3.html
        case (gundam3names.length > 0):
            let random3 = Math.floor(Math.random() * gundam3names.length);
            gundam.innerText = gundam3names[random3].gundam;
            break;
    }

});

//This makes the font awesome work and go back to the main page
document.querySelector(`#font1`).addEventListener(`click`, function(){

    const goBack = window.location.href="GundamGenerator.html";
    console.log(goBack);
});