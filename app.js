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