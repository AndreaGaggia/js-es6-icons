$(document).ready(function () {
// Qui le icone che abbiamo definito nella milestone 1

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



// definiamo dei colori per le icone (blue, orange, purple)

    const blue = 'blue';
    const orange = 'orange';
    const purple = 'purple';




//aggiungiamo dei colori usando una funzione
    icone.map((obj) => { //non funziona se assegno il metodo a nuova variabile - forse perché ho usato class e costruttore??
        switch (obj.family) {
            case 'animals':
                obj.color = blue;
                break;
            case 'food':
                obj.color = orange;
                break;
            case 'people':
                obj.color = purple;
                break;
        }
    });


//inseriamo le icone colorate nel container


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







});


/* ---- FUNCTIONS ----*/
//1. Funzione milestone 1
//2. funzione per assegnare un colore ad un icona
// tip: possiamo invocare qui dentro un'altra funzione (2) oppure usare map 


//3. funzione per ottenere da un array
// tip: possiamo usarla nella funzione precedente oppure usare map senza creare questa funzione.