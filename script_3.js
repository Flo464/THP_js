var n = parseInt(prompt("Bonjour, entrez votre chiffre."));

//écrit dans le document
    for (var i = 1; i <= n; i++) {
        var col = i;
        for(var j = 1; j <= n - col; j++) {
            document.write('&nbsp ');
        }
        for(var j = 1; j <= col; j++) {
            document.write('#');
        }
        document.write('<br/>');
    }

//écrit dans la console
    var staircase = "",
      space = "  ",
      hash = "#";
    for (var i = n; i > 0; i--) {
      staircase += space.repeat(i - 1).concat(hash.repeat(n - (i - 1))) + "\n";
    }
console.log(staircase);
