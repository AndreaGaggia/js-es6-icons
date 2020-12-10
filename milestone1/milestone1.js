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
        new Icona('fish', 'fas', 'fa-fish', 'animals'),
        new Icona('cheese', 'fas', 'fa-cheese', 'food'),
        new Icona('bacon', 'fas', 'fa-bacon', 'food'),
        new Icona('carrot', 'fas', 'fa-carrot', 'food'),
        new Icona('baby', 'fas', 'fa-baby', 'people'),
        new Icona('child', 'fas', 'fa-child', 'people'),
        new Icona('female', 'fas', 'fa-female', 'people'),
        new Icona('male', 'fas', 'fa-male', 'people')
    ];


// Selezioniamo il container icons

    const iconSection = $('.container .icons');

//inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)


    print();





    //funzione
    function print() {
        icone.forEach(element => {
    
            //destructuring e assegnazione markup
            const {name, prefix, type} = element;
            const markup = `<div>
                <i class="${prefix} ${type}"></i>
                <div class="title">${name.toUpperCase()}</div>
            </div>`;
            
            //appendiamo
            iconSection.append(markup); 
        });
    }





});


/* ---- FUNCTIONS ----*/
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
// tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
// tip: il template literal ci puo aiutare con il markup