// Highlisht syntaxe
SyntaxHighlighter.all()
function  algo1(){
    var n = parseInt(prompt("Entrez la valeur de n:"));
    var x = 0;
    var i = 1;
    while(n > 1)
    {
        if(n * i >4)
        {
            x = x + 2*n;
        }
        else
        {
            x = x + n;
        }
        n = n -2;
        i = i +1;
    }
    alert("La valeur de x est :" + x);
}

function  algo2(){
    var x_sol = 0;
    var y_sol = 0;
    var benefice_max = 0;
    for(var x = 0; x < 50; x++)
    {
        for(var y = 0; y < 50; y++)
        {
            if(x+y <= 50 && 6*x + 4*y <= 240 && 500*x +400*y >= benefice_max)
            {
                x_sol = x;
                y_sol = y;
                benefice_max = 500*x +400*y;
            }
        }
    }
    alert("La valeur de x_sol est :" + x_sol);
    alert("La valeur de y_sol est :" + y_sol);
    alert("La valeur de benefice_max est :" + benefice_max);

}
