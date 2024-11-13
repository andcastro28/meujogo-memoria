const emojs = [
    " 🚗 ",
    " 🚗 ",
    " 🚚 ",
    " 🚚 ",
    " 🚧 ",
    " 🚧 ",
    " 🚨 ",
    " 🚨 ",
    " 🚀 ",
    " 🚀 ",
    " ⛵️ ",
    " ⛵️ ",
    " 🚴 ",
    " 🚴 ",
    " 😍 ",
    " 😍 "
];
let Cartaberta = [];

let pesosemojs = emojs.sort(()=>(Math.random()>0.5 ? 1:-1));

for(let i=0; i< emojs.length; i++ )
{
   let cadaCarta=document.createElement("div");
   cadaCarta.className="item";
   cadaCarta.innerHTML=pesosemojs[i];
   cadaCarta.onclick = vcClicou;
   document.querySelector(".game").appendChild(cadaCarta);
}



function vcClicou() 
{
    if(Cartaberta.length < 2)
    {
        this.classList.add("viraCarta");
        Cartaberta.push(this);
    }
  
    if(Cartaberta.length == 2)
    {
       setTimeout(verificaiguais, 500);
    }
}

function verificaiguais()
{
    if(Cartaberta[0].innerHTML === Cartaberta[1].innerHTML)
    {
        Cartaberta[0].classList.add("cartaIgual");
        Cartaberta[1].classList.add("cartaIgual");
    }
    else
    {
        Cartaberta[0].classList.remove("viraCarta");
        Cartaberta[1].classList.remove("viraCarta");
       
        

    }
    Cartaberta=[];

    if(document.querySelectorAll(".cartaIgual").length === emojs.length)
        {
           alert("Fim do jogo!!!!");
        }

}