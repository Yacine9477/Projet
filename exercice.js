// Exercice 1

const age = [12, 15, 23, 25, 18, 8, 30, 16, 22, 17, 29, 19, 20];

//1 Utilisez la méthode adaptées pour trouver les majeurs (+ de 18 ans)
//2 Calculez l'age moyen
//3 Calculer la somme des ages

console.log("Exercice 1 :");

function IsMajor (tab) {
    let tab2 = [];

    for (let i = 0; i <= tab.length; i++)
    {
        if(tab[i] >= 18)
        {
            tab2.push(tab[i]);
            
        }
    }
    
    return tab2;
}

function AverageAge (tab) {
    let ageMoyen = 0;
    
    for(let i = 0; i <= tab.length - 1; i++)
    {
        ageMoyen += tab[i];
    }

    ageMoyen = ageMoyen / tab.length;
    ageMoyen = ageMoyen.toFixed(2);

    return ageMoyen;
}

function SommeAge (tab) {
    let ageSomme = 0;
    
    for(let i = 0; i <= tab.length - 1; i++)
    {
        ageSomme += tab[i];
    }

    return ageSomme;
}


console.log("\nles majeurs sont : ",IsMajor(age), "\n\nl'age moyen est de ", AverageAge(age), "\n\nLa somme des ages est de ", SommeAge(age));



// Exercice 2

const word = ["Angular", "Typescript", "Python", "Go", "Rust", "Php", "Java", "C#", "C++", "ReactJS", "MySQL"];

//1 Trouvez les mots de plus de 4 lettres.
//2 Comptez le nombre total de lettres
//3 Afficher chaque mot
//4 Afficher les mots commençant par la lettre P

console.log("\nExercice 2\n");

function MoreFourLetter (tab) {
    let tab2 = [];

    
    
    for(let i = 0; i < tab.length; i++)
    {


        if(tab[i].length > 4)
        {
            tab2.push(tab[i]);
        }
    }

    return tab2;
}

function TotalLetter (tab) {
    let total = 0;

    for(let i = 0; i < tab.length; i++)
    {
        total += tab[i].length;
    }

    return total;
}

function DisplayWord(tab) {
    for(let i = 0; i <tab.length; i++)
    {
        console.log(tab[i]);
    }
}

function ThereIsP(tab) {
    console.log("\n");
    for(let i = 0; i < tab.length; i++)
    {
        if(tab[i].match("P"))
        {
            console.log(tab[i]);
        }
    }
}



console.log("Les mots de plus de quatre lettres : ",MoreFourLetter(word),"\n");
console.log("Le nombres total de lettres est de : ", TotalLetter(word), "\n");
DisplayWord(word);
ThereIsP(word);


// Exercice 3

const articles = [
    { name: "Pull", price: 35, stock: 90 },
    { name: "Chaussettes", price: 5, stock: 950 },
    { name: "Bonnet", price: 25, stock: 100 },
    { name: "Sweat", price: 45, stock: 50 },
    { name: "Jean", price: 95, stock: 20 },
    { name: "Jogging", price: 48.5, stock: 230 },
    { name: "T-shirt", price: 15, stock: 150 },
    { name: "Cardigan", price: 75, stock: 9 },
    { name: "Veste", price: 235, stock: 800 }
];

//1 Afficher les articles en rupture de stock (moins de 30 unités)
//2 Valeur totale du stock
//3 Afficher les produits à moins de 30€

console.log("\nExercice 3\n");

function Stock(tab) {
    console.log("Articles en rupture de stock :");
    for(let i = 0; i < tab.length; i++)
    {
        if(tab[i].stock < 30)
        {
            console.log(tab[i].name);
        }
    }

    let totale = 0;

    for(let i = 0; i < tab.length; i++)
    {
        totale += (tab[i].price * tab[i].stock);
    }

    console.log("\nla valeur totale du stock est de : ", totale,"€");

    console.log("\nLes produits à moins de 30€ :");

    for(let i = 0; i <tab.length; i++)
    {
        if(tab[i].price < 30)
        {
            console.log(tab[i].name);
        }
    }
}

Stock(articles);

// Exercice 4

const weather = [
    { day: "Lundi", temperature: 20, rain: true },
    { day: "Mardi", temperature: 25, rain: true },
    { day: "Mercredi", temperature: 35, rain: false },
    { day: "Jeudi", temperature: 30, rain: true },
    { day: "Vendredi", temperature: 20, rain: false },
    { day: "Samedi", temperature: 30, rain: false },
    { day: "Dimanche", temperature: 10, rain: true },
]

//1 Lister les jours de pluie
//2 Température moyenne des jours sans pluies
//3 Afficher les jours et les températures quand ces dernières sont au dessus de 20
//4 Afficher le type de jours (semaine ou weekend)

console.log("\nExercice 4\n");

function Climate (tab) {
    console.log("Les jours de pluies :")
    for(let i = 0; i < tab.length; i++)
    {
        if(tab[i].rain)
        {
            console.log(tab[i].day);
        }
    }

    let moyTemp = 0;
    let count = 0;

    for(let i = 0; i < tab.length; i++)
    {
        if(!tab[i].rain)
        {
            moyTemp += tab[i].temperature;
            count++;
        }
    }

    moyTemp = moyTemp / count;
    moyTemp = moyTemp.toFixed(0);

    console.log("\nLa température moyenne des jours sans pluie est de :", moyTemp,"\n");

    for(let i = 0; i < tab.length; i++)
    {
        if(tab[i].temperature > 20)
        {
            console.log("le ", tab[i].day, "la température est de", tab[i].temperature);
        }
    }
    for(let i = 0; i < tab.length; i++)
    {
        switch(tab[i].day)
        {
            case "Lundi":
            case "Mardi":
            case "Mercredi":
            case "Jeudi":
            case "Vendredi":
                console.log(tab[i].day, "semaine");
                break;
            default:
                console.log(tab[i].day, "week-end");
        }
    }
    
}

Climate(weather);



// Exercice 5

const marks = [
    { name: "Alice", notes: [12, 17, 9, 14, 19, 6, 10, 11] },
    { name: "Alain", notes: [2, 17, 19, 4, 19, 16, 0, 1] },
    { name: "Oussama", notes: [1, 17, 19, 14, 19, 16, 13, 20] },
    { name: "Sabrina", notes: [11, 7, 9, 4, 19, 16, 1, 11] },
    { name: "Nawelle", notes: [3, 1, 9, 14, 19, 16, 0, 1] },
    { name: "Julien", notes: [1, 7, 9, 4, 13, 6, 10, 15] },
    { name: "Brice", notes: [18, 19, 14, 13, 9, 16, 20, 17] },
];

//1 Calculer la moyenne de chaque élève
//2 Trouver les élèves ayant au moins une note > 15
//3 Afficher les noms des élèves
//4 Trouver les élèves qui ont la moyenne

console.log("\nExercice 5\n");

function Student(tab) {
    let tab2 = [];
    let tab3 = [];
    for(let i = 0; i < tab.length; i++)
    {
        let average = 0;
        let supNote = false;

        for(let j = 0; j < tab[i].notes.length; j++)
        {
            average += tab[i].notes[j]
            if(tab[i].notes[j] > 15)
            {
                supNote = true;
            }
        }
        average = average / 8;
        average = average.toFixed(2);
        console.log(tab[i].name, "à une moyenne de", average);

        if(average >= 10)
        {
            tab3.push(tab[i].name);
        }

        if(supNote)
        {
            tab2.push(tab[i].name);
        }
    }

    console.log("Elève ayant au moins une note au-dessus de 15 :", tab2);

    console.log("\nLe nom de chaque élève de la classe :");
    for(let i = 0; i < tab.length; i++)
    {
        console.log(tab[i].name);
    }

    console.log("Elève qui ont la moyenne :", tab3);
}

Student(marks);


// Exercice 6 

const movies = [
    { name: "Lord Of The Ring", duration: 178, categories: ["Fantasy", "Adventure"] },
    { name: "The Shawshank Redemption", duration: 142, categories: ["Drama"] },
    { name: "The Dark Knight", duration: 152, categories: ["Action", "Crime", "Drama"] },
    { name: "Inception", duration: 148, categories: ["Action", "Sci-Fi", "Thriller"] },
    { name: "Forrest Gump", duration: 142, categories: ["Drama", "Romance"] },
    { name: "The Lord of the Rings: The Fellowship of the Ring", duration: 178, categories: ["Fantasy", "Adventure"] },
    { name: "Interstellar", duration: 169, categories: ["Adventure", "Drama", "Sci-Fi"] },
    { name: "The Matrix", duration: 136, categories: ["Action", "Sci-Fi"] },
    { name: "Pulp Fiction", duration: 154, categories: ["Crime", "Drama"] },
    { name: "The Lion King", duration: 88, categories: ["Animation", "Adventure", "Drama"] },
    { name: "Gladiator", duration: 155, categories: ["Action", "Drama", "Adventure"] }
]


//1 Afficher les films de plus de 2h
//2 Afficher uniquement les films de drama

console.log("\nExercice 6\n");

function movieInfo (tab) {

    console.log("Les films de plus de 2h :")

    for(let i = 0; i < tab.length; i++)
    {
        if(tab[i].duration > 120)
        {
            console.log(tab[i].name);
        }
    }

    console.log("\nFilm qui sont dans la catégories drama :");
    
    for(let i = 0; i < tab.length; i++)
    {
        for(let j = 0; j < tab[i].categories.length; j++)
        {
            if(tab[i].categories[j].match("Drama"))
            {
                console.log(tab[i].name);
            }
        }
    }
}

movieInfo(movies);


// Exercice 7
// Choisir un mot de plus de 4 lettres et compter les voyelles dans ce mot.

console.log("\nExercice 7\n");

function NbVoyelle(word) {
    
    let count = 0;

    for(let i = 0; i < word.length; i++)
    {
        if(word[i].match(/[aeiouyAEIOUY]/))
        {
            count++;
        }
    }

    return count;
}



console.log("Le nombre de voyelle est de",NbVoyelle("bouteille"));


// Exercice 8
// Faire la table de multiplication de 6

console.log("\nExercice 8\n");

function TableSix()
{
    for(let i = 0; i <= 10; i++)
    {
        console.log(6 * i);
    }
}

TableSix();

// Exercice 9
// Faire un compte à rebours de 30 à 0

console.log("\nExercice 9\n");

function Countdown() {
    let count = 30;

    while(count >= 0)
    {
        console.log(count);
        count--;
    }
}

Countdown();