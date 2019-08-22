const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

//--------------------------------------------------------------------------------------------------------
console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ");

entrepreneurs.forEach(entrepreneur => {
  if (entrepreneur.year >= 1970 && entrepreneur.year <= 1979) {
    console.log(entrepreneur);
  }
});

//--------------------------------------------------------------------------------------------------------
console.log("Sors une array qui contient le prénom et le nom des entrepreneurs ")

const noms = []

entrepreneurs.forEach(entrepreneur => {

  noms.push(entrepreneur.first + " " + entrepreneur.last);
  //console.log("Prénom : " + entrepreneur.first + ", Nom : " + entrepreneur.last); //Affiche directement la lise des noms et prénoms mais par dans un array

});

console.log(noms)

//--------------------------------------------------------------------------------------------------------
console.log("Quel âge aurait chaque inventeur aujourd'hui ?")

entrepreneurs.forEach(entrepreneur => {

  age = 2019 - entrepreneur.year 
  console.log(entrepreneur.first + " " + entrepreneur.last + " aurait " + age + " ans aujourd'hui !" )

});

//--------------------------------------------------------------------------------------------------------
console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille.")
last = []
  
entrepreneurs.forEach(entrepreneur => {

  last.push(entrepreneur.last + " " + entrepreneur.first + ", " + entrepreneur.year)

});

console.log(last.sort())