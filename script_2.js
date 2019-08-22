var n = parseInt(prompt("Bonjour, entrez votre chiffre."));
var fact = 1;

if (n <= 0){
	console.log("ERREUR : Entrez un nombre positif non nul")
}

else {

	for (var i=1 ; i<=n ; i++){

        fact=fact*i;

    }

	console.log("le résultat est " + fact);
}



