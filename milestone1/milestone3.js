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

    //estrapoliamo i tipi di icone
    

    //aggiungiamo i tipi alla select

    // function addToSelect() {
    //     const select = $('select#type');
    //     const tipi
    //     const markup = `<option value="">${tipi}</option>`
    // }





    //al change mostriamo solo le icone filtrate
    //mostriamo come passare un parametro a change e contemporaneamente destrutturiamo



/* ---- FUNCTIONS ----*/

});