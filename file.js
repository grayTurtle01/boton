function loadButton(){
    boton = document.querySelector('button')

    boton.style.background = 'black'
    boton.style.color = 'white'

    WIDTH = window.innerWidth
    HEIGHT = window.innerHeight

    margin_left = (WIDTH * 0.5)/2
    margin_top = (HEIGHT * 0.5)/2

    font_size = WIDTH * 0.10

    boton.style.width = WIDTH * 0.5 + 'px'
    boton.style.height = HEIGHT * 0.5 + 'px'

    boton.style.marginLeft = margin_left + 'px'
    boton.style.marginTop = margin_top + 'px'

    boton.style.fontSize = font_size + 'px'

}

window.onload = loadButton
window.onresize = loadButton

boton = document.querySelector('button')

function toogleButton() {

    if(boton.style.color == 'white'){
        
      boton.style.background = 'white'
      boton.style.color = 'black'
    }
    else{
         
      boton.style.background = 'black'
      boton.style.color = 'white'
    }
}

boton.onclick = toogleButton

