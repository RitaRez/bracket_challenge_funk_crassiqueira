
var bracket = []


window.onload = function(){
    let link = "https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&text="+encodeURIComponent(window.location.href)
    let url = new URL(window.location.href);
    let nome = url.searchParams.get("name");
    let aux = url.searchParams.get("bracket").split('-');

    if(nome && nome != '')
        document.getElementById('title').innerHTML = nome + "'s bracket";

    array.map((element) => {
        bracket.push(element);
    })
    aux.map((id) => {
        bracket.push(get(id));
    })
    render();
};

function get(i){
    return array[i];
}

function render (){
    for(let i = 1; i < 6; i++){
        let elementId = 'col'+i;
        let element = document.getElementById(elementId);
        for (let j= 0; j < Math.pow(2, 5-i); j++) {

            let card = document.createElement('DIV');
            card.setAttribute( 'class', 'el'+i);
            card.id='c'+i+'l'+j;
            card.innerHTML = '<p class="z-depth-5 elementText">'+ bracket[j].nome +"</p>"
            element.appendChild(card);
        }
        bracket.splice(0, Math.pow(2, 5-i));
    }
}

function shareTwitter(){
    let link = "https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&text=" +
    "My modãos bracket: " +
    encodeURIComponent(window.location.href)
    window.open(link);
}

function shareTumblr(){
            window.open('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=bracketChallenge&caption='
            +'my bracket' +'&content='
            + encodeURIComponent(window.location.href) +'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
}

var array = [
    {
        "id": 0,
        "nome": "Jonathan da Nova Geração",
        "audio": "assets/audio/jonathan.mp3",
        "imagem": "assets/images/nova_geracao.jpg",
        "texto": "Dance potranca, dance com emoção, eu sou o jonathan da nova geração."
    }, 
    {
        "id": 1,
        "nome": "Glamurosa",
        "audio": "assets/audio/glamurosa.mp3",
        "imagem": "assets/images/glamurosa.jpg",
        "texto": "Glamourosa, rainha do funk, poderosa, olhar de diamante, nos envolve, nos fascina, agita o salão, balança gostoso, requebrando até o chão"
    },
    {
        "id": 2,
        "nome": "Malha Funk",
        "audio": "assets/audio/malhafunk.mp3",
        "imagem": "assets/images/malhafunk.jpeg",
        "texto": "Vira de ladinho, levanta a perninha, descendo e subindo, to perdendo a linha."
    },
    {
        "id": 3,
        "nome": "Pampam",
        "audio": "assets/audio/pampam.mp3",
        "imagem": "assets/images/pampam.jpg",
        "texto": "Pam pam pam ram pam ti pam pam pam"
    },
    {
        "id": 4,
        "nome": "Eguinha Pocotó",
        "audio": "assets/audio/pocoto.mp3",
        "imagem": "assets/images/pocoto.jpg",
        "texto": "Vou mandando um beijinho... pra filhinha e pra vovó. Só não posso esquecer da minha egüinha pocotó!"
    },
    {
        "id": 5,
        "nome": "O Baile todo",
        "audio": "assets/audio/bailetodo.mp3",
        "imagem": "assets/images/bailetodo.jpg",
        "texto": "Só as cachorras. As preparadas. As popozudas. O baile todo!"
    },
    {
        "id": 6,
        "nome": "Se ela dança eu danço",
        "audio": "assets/audio/danca.mp3",
        "imagem": "assets/images/leozinho.jpg",
        "texto": "Se ela dança eu danço. Se ela dança eu danço. Se ela dança eu danço. Falei com o DJ!"
    },
    {
        "id": 7,
        "nome": "Larguei meu Marido e virei Puta",
        "audio": "assets/audio/late.mp3",
        "imagem": "assets/images/late.jpg",
        "texto": "Segura esse chifre quero ver tu se fuder!!"
    },
    {
        "id": 8,
        "nome": "Um morto muito louco",
        "audio": "assets/audio/morto.mp3",
        "imagem": "assets/images/morto.jpg",
        "texto": "Param param Pam pam pam pam Param param param param pam pam pam pam Hey!"
    },
    {
        "id": 9,
        "nome": "Creu",
        "audio": "assets/audio/creu.mp3",
        "imagem": "assets/images/creu.jpg",
        "texto": "creu creu creu creu  creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu..!"
    },
    {
        "id": 10,
        "nome": "Rap das Armas",
        "audio": "assets/audio/armas.mp3",
        "imagem": "assets/images/armas.jpg",
        "texto": "Parapapapapapapapapa parapapapapapapapapa papara-papara-papara-claque-bum"
    },
    {
        "id": 11,
        "nome": "Tremendo Vacilão",
        "audio": "assets/audio/tirap.mp3",
        "imagem": "assets/images/tirap.jpg",
        "texto": "Tirap Tchoron! Tirap Tchoron! Oh! Ah!"
    },
    {
        "id": 12,
        "nome": "Adultério",
        "audio": "assets/audio/catra.mp3",
        "imagem": "assets/images/catra.jpg",
        "texto": "Oi oi oi oi o bagulho tá sério, vai rolar o adultério!"
    },
    {
        "id": 13,
        "nome": "Cerol na Mão",
        "audio": "assets/audio/cerol.mp3",
        "imagem": "assets/images/cerol.jpg",
        "texto": "Quer dançar, quer dançar? O tigrão vai te ensinar."
    },
    {
        "id": 14,
        "nome": "Dança da Motinha",
        "audio": "assets/audio/motinha.mp3",
        "imagem": "assets/images/motinha.jpg",
        "texto": "Dança da motinha, dança da motinha. As popozudas perde a linha!"
    },
    {
        "id": 15,
        "nome": "Rap da Felicidade",
        "audio": "assets/audio/feliz.mp3",
        "imagem": "assets/images/feliz.jpg",
        "texto": "Eu só quero é ser feliz, andar tranquilamente na favela onde eu nasci!"
    }]
