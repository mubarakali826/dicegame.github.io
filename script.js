if(sessionStorage.getItem('isReloaded')){


    function randomNumber(){
        var a=Math.random();
        var b=a*7;
        var c=Math.floor(b);
        if( c==0){
            c=c+1
        }
        return c;
    }
var Rand1= randomNumber();
var Rand2= randomNumber();
    document.querySelectorAll(" img")[0].setAttribute("src","images/dice"+Rand1+".png");
    document.querySelectorAll(" img")[1].setAttribute("src","images/dice"+Rand2+".png");
    if(Rand1>Rand2){
        document.querySelector(".upper h1").textContent="🚩 Player 1 Wins";
    }
    else if(Rand1<Rand2){
        document.querySelector(".upper h1").textContent="Player 2 Wins 🚩";
    }
    else{
        document.querySelector(".upper h1").textContent="!Draw";
    }

}
else{
    sessionStorage.setItem('isReloaded','true');
}