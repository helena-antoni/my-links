function toggleMode(){
    const html = document.documentElement;

    html.classList.toggle('light');   
}


function discord(disc){
    var r = document.createRange();
    r.selectNode(document.getElementById(disc));

    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);

    try {
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        console.log('Texto copiado com sucesso. ' + r);
        alert("Nickname copiado, cole no seu Discord")
    } catch (err) {
        console.log('Não foi possível copiar!');
    }
}

function portifolio(){
    alert("Em desenvolvimento, por enquanto veja meu GitHub! ")
}


