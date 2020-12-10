$(document).ready(function () {
// Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family 
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
        new Icona('fish', 'fas', 'fa-fish', 'animals')
    ];


// Selezioniamo il container icons

    const iconSection = $('.container .icons');

//inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)

    icone.forEach(element => {

        //destructuring
        const {name, prefix, type} = element;
        const markup = `<div>
            <i class="${prefix} ${type}"></i>
            <div class="title">${name.toUpperCase()}</div>
        </div>`;
        
        //appendiamo
        iconSection.append(markup); 
    });




});


/* ---- FUNCTIONS ----*/
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
// tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
// tip: il template literal ci puo aiutare con il markup