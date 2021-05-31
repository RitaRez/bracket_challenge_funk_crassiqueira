var arrayAux = [];
var arrayE = [];
var i = 0;
var count = 0;
var m = []

$(document).ready(function(){
    let nav = $('#nav').css('height');
    $("#canvas").css('margin-top', nav/2);
    document.getElementById('rodada').innerHTML = "Oitavas de final - Duelo " + (count + 1) + "/8";
    round();
});

function round (){
    run(i);
}
function run (i){
    imageSetup(array[i], array[i+1]);
    soundSetup(array[i], array[i+1]);
}

function buttonClicked(btn){

    arrayAux.push(array[i+btn].id);
    arrayE.push(array[i+btn]);
    
    console.log(window.location.href);
    
    
    if (array.length == 2) {
        let temp = "https://ritarez.github.io/bracket_challenge_funk_crassiqueira/"
        // let address = window.location.href.split('').splice(0, window.location.href.length-10).join('')+'bracket?bracket='+arrayAux.join('-')
        let address = temp +'bracket?bracket='+arrayAux.join('-')
        address = address + '&name=' + document.getElementById('nome').value;

        window.location.href = address;

    }
    else{
        if(i < array.length - 2){
            i = i+2;
            count++;
        }   
        else{
            i = 0;
            count = 0;
            array = arrayE;
            arrayE = [];
        }
        round()
    }
    if(arrayAux.length < 8)
        document.getElementById('rodada').innerHTML = "Oitavas de final - Duelo " + (count + 1) + "/8";
    if(arrayAux.length > 7 && arrayAux.length < 12)
        document.getElementById('rodada').innerHTML = "Quartas de final - Duelo " + (count + 1) + "/4";
    else if(arrayAux.length > 11 && arrayAux.length < 14)
        document.getElementById('rodada').innerHTML = "Semi-final - Duelo " + (count + 1) + "/2";
    else if(arrayAux.length > 13)
        document.getElementById('rodada').innerHTML = "A grande final"

    
}
function imageSetup(obj1, obj2){
    $('#img1').attr('src', obj1.imagem);
    $('#img2').attr('src', obj2.imagem);

    $('#cardTitle1').html(obj1.nome);
    $('#cardTitle2').html(obj2.nome);

    $('#text1').html(obj1.texto);
    $('#text2').html(obj2.texto);

}


function soundSetup (obj1, obj2){
    soundManager.setup({
      // where to find flash audio SWFs, as needed
      url: '/path/to/swf-files/',

      onready: function() {

        soundManager.stopAll();
        if(m[obj1.id]){
            m[obj1.id].destruct();
            m[obj2.id].destruct();
        }
        m[obj1.id] =  soundManager.createSound({
            url: obj1.audio
        });
        m[obj2.id] = soundManager.createSound({
        url: obj2.audio
        });   
        $( "#card1" ).unbind();
        $( "#card2" ).unbind();

   
        $( "#card1" )
            .mouseover(function() {
                m[obj1.id].play();
            })
            .mouseout(function (){
                m[obj1.id].stop();
            });

        $( "#card2" )
            .mouseover(function() {
                m[obj2.id].play();
            })
            .mouseout(function (){
                m[obj2.id].stop();
            }); 
      }
    });
}

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

var array = [
    {
        "id": 0,
        "nome": "Jonathan da Nova Geração",
        "audio": "assets/audio/secretaria.mp3",
        "imagem": "assets/images/nova_geracao.jpg",
        "texto": "Dance potranca, dance com emoção, eu sou o jonathan da nova geração."
    }, 
    {
        "id": 1,
        "nome": "Glamurosa",
        "audio": "assets/audio/secretaria.mp3",
        "imagem": "assets/images/glamurosa.jpg",
        "texto": "Glamourosa, rainha do funk, poderosa, olhar de diamante, nos envolve, nos fascina, agita o salão, balança gostoso, requebrando até o chão"
    },
    {
        "id": 2,
        "nome": "Malha Funk",
        "audio": "assets/audio/secretaria.mp3",
        "imagem": "assets/images/malhafunk.jpeg",
        "texto": "Vira de ladinho, levanta a perninha, descendo e subindo, to perdendo a linha."
    },
    {
        "id": 3,
        "nome": "Pampam",
        "audio": "assets/audio/secretaria.mp3",
        "imagem": "assets/images/pampam.jpg",
        "texto": "Pam pam pam ram pam ti pam pam pam"
    },
    {
        "id": 4,
        "nome": "Eguinha Pocotó",
        "audio": "assets/audio/secretaria.mp3",
        "imagem": "assets/images/pocoto.jpg",
        "texto": "Vou mandando um beijinho... pra filhinha e pra vovó. Só não posso esquecer da minha egüinha pocotó!"
    },
    {
        "id": 5,
        "nome": "O Baile todo",
        "audio": "assets/audio/secretaria.mp3",
        "imagem": "assets/images/bailetodo.jpg",
        "texto": "Só as cachorras. As preparadas. As popozudas. O baile todo!"
    },
    {
        "id": 6,
        "nome": "Se ela dança eu danço",
        "audio": "assets/audio/secretaria.mp3",
        "imagem": "assets/images/leozinho.jpg",
        "texto": "Se ela dança eu danço. Se ela dança eu danço. Se ela dança eu danço. Falei com o DJ!"
    },
    {
        "id": 7,
        "nome": "Cerol na Mão",
        "audio": "assets/audio/secretaria.mp3",
        "imagem": "assets/images/cerol.jpg",
        "texto": "Quer dançar, quer dançar? O tigrão vai te ensinar."
    },
    {
        "id": 8,
        "nome": "Um morto muito louco",
        "audio": "assets/audio/secretaria.mp3",
        "imagem": "assets/images/morto.jpg",
        "texto": "Param param Pam pam pam pam Param param param param pam pam pam pam Hey!"
    },
    {
        "id": 9,
        "nome": "Creu",
        "audio": "assets/audio/secretaria.mp3",
        "imagem": "assets/images/creu.jpg",
        "texto": "creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu creu..!"
    },
    {
        "id": 11,
        "nome": "Tremendo Vacilão",
        "audio": "assets/audio/secretaria.mp3",
        "imagem": "assets/images/tirap.jpg",
        "texto": "Tirap Tchoron! Tirap Tchoron! Oh! Ah!"
    },
    {
        "id": 12,
        "nome": "Adultério",
        "audio": "assets/audio/secretaria.mp3",
        "imagem": "assets/images/catra.jpg",
        "texto": "Oi oi oi oi o bagulho tá sério, vai rolar o adultério!"
    }
]



    
    