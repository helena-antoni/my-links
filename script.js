function toggleMode(){
    const html = document.documentElement;

    html.classList.toggle('light');   
}


function discord(disc){
    var r = document.createRange();
    r.selectNode(document.getElementById(disc));  

    navigator.clipboard.writeText(r)
      .then(() => {
        console.log('Text successfully copied to clipboard');
      })
      .catch(err => {
        console.error('Unable to copy text to clipboard', err);
      });
}

function portfolio(){
    alert("Em desenvolvimento, por enquanto veja meu GitHub! ")
}  
 
