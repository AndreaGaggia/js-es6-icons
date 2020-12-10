$(document).ready(function () {
    // icone come da milestone 1
    //prototipo oggetto icona
    class Icona {
        constructor(name, prefix, type, family) {
            this.name = name;
            this.prefix = prefix;
            this.type = type;
            this.family = family;
        }
    }
    //array icone
    const icone = [
        new Icona('cat', 'fas', 'fa-cat', 'animals'),
        new Icona('crow', 'fas', 'fa-crow', 'animals'),
        new Icona('dog', 'fas', 'fa-dog', 'animals'),
        new Icona('dove', 'fas', 'fa-dove', 'animals'),
        new Icona('dragon', 'fas', 'fa-dragon', 'animals'),
        new Icona('horse', 'fas', 'fa-horse', 'animals'),
        new Icona('hippo', 'fas', 'fa-hippo', 'animals'),
        new Icona('fish', 'fas', 'fa-fish', 'animals'),
        new Icona('cheese', 'fas', 'fa-cheese', 'food'),
        new Icona('bacon', 'fas', 'fa-bacon', 'food'),
        new Icona('carrot', 'fas', 'fa-carrot', 'food'),
        new Icona('baby', 'fas', 'fa-baby', 'people'),
        new Icona('child', 'fas', 'fa-child', 'people'),
        new Icona('female', 'fas', 'fa-female', 'people'),
        new Icona('male', 'fas', 'fa-male', 'people')
    ];

    // colori come da milestone 2
    const blue = 'blue';
    const orange = 'orange';
    const purple = 'purple';

    //aggiungiamo dei colori come da milestone 2
    icone.map((icona) => { //non funziona se assegno il metodo a nuova variabile - forse perché ho usato class e costruttore??
        switch (icona.family) {
            case 'animals':
                icona.color = blue;
                break;
            case 'food':
                icona.color = orange;
                break;
            case 'people':
                icona.color = purple;
                break;
        }
    });

    //inseriamo le icone nel container come da milestone 2
    const iconSection = $('.container .icons');

    print2();

    

    //estrapoliamo i tipi di icone
    const tipiTemp = icone.map(obj => obj.family);
    const tipi = tipiTemp.filter((elem, pos) => tipiTemp.indexOf(elem) == pos); //soluzione per filtrare i duplicati
    console.log(tipi);
    
    

    //aggiungiamo i tipi alla select

    addToSelect();

    //al change mostriamo solo le icone filtrate

    const animals = icone.filter(el => el.family == 'animals');
    const food = icone.filter(el => el.family == 'food');
    const people = icone.filter(el => el.family == 'people');

    $('select#type').change(function () { 
        let optionSelected = $('select#type option:selected').text();
        switch (optionSelected) {
            case 'animals':
                $('.container .icons div').remove();
                print3(animals);
                break;
            case 'food':
                $('.container .icons div').remove();
                print3(food);
                break;
            case 'people':
                $('.container .icons div').remove();
                print3(people);
            break;
            case 'All':
                $('.container .icons div').remove();
                print2();
                break;
        }
    });



    //mostriamo come passare un parametro a change e contemporaneamente destrutturiamo



/* ---- FUNCTIONS ----*/


    function print2() {
        icone.forEach(element => {

            //destructuring e assegnazione markup
            const {name, prefix, type, color} = element;
            const markup = `<div>
                <i class="${prefix} ${type}" style="color:${color}"></i>
                <div class="title">${name.toUpperCase()}</div>
            </div>`;
            
            //appendiamo
            iconSection.append(markup); 
        });
    }

    function addToSelect() {
        tipi.forEach(element => {
            const select = $('select#type');
            const markup = `<option value="${element}">${element}</option>`;
            //appendiamo
            select.append(markup);
        });
    }


    function print3(arr) {
        arr.forEach(element => {

            //destructuring e assegnazione markup
            const {name, prefix, type, color} = element;
            const markup = `<div>
                <i class="${prefix} ${type}" style="color:${color}"></i>
                <div class="title">${name.toUpperCase()}</div>
            </div>`;
            
            //appendiamo
            iconSection.append(markup); 
        });
    }




});