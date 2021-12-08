function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} hora.`
    if (hora >= 5 && hora < 12){
        //Bom dia
        img.src = '/images/manha.png'
    }else if( hora >= 12 && hora <=17){
        //Boa tarde
        img.src = '/images/tarde.png'
    } else{
        //boa noite
        img.src = '/images/noite.png'

    }
    
}

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
  if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verfique os dados')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >=0 && idade <  10){
                //criança
                img.setAttribute('src','/images/bebehomem.jpg' )
            }else if(idade >=10 && idade <=18){
                //jovem
                img.setAttribute('src','/images/jovemhomem.jpg' )
            }else if(idade >=18 && idade <=50){
                //adulto
                img.setAttribute('src','/images/adultohomem.jpg' )
            }else{
                //idoso
                img.setAttribute('src','/images/homemvelho.jpg' )
            }
            
        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src','/images/bebemulher.jpg' )
            }else if(idade >=10 && idade <=18){
                //jovem
                img.setAttribute('src','/images/jovemmulher.jpg' )
            }else if(idade >=18 && idade <=50){
                //adulto
                img.setAttribute('src','/images/adultomulher.jpg' )
            }else{
                //idoso
                img.setAttribute('src','/images/mulhervelha.png' )
            }  
    }
    res.style.textAling = 'center'
    res.innerHTML = `Um(a) ${gênero} com ${idade} anos.`
    res.appendChild(img)
}

}