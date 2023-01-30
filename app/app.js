const columnOne = document.querySelectorAll('.column-um > div')
const columnDois = document.querySelectorAll('.column-dois > div')
const columnTres = document.querySelectorAll('.column-tres > div')
const columnQuatro = document.querySelectorAll('.column-quatro > div')
const columnCinco = document.querySelectorAll('.column-cinco > div')
const alert = document.querySelector('.alert')

const contagem = document.getElementById('contagem')

let max = 20
let countMax = 0
let contador = 0
contagem.innerText = contador
columnOne.forEach(element =>{
  element.addEventListener('click', ()=>{
    
    if(element.dataset.verification == undefined || element.dataset.verification == 'undefined'){
      if(element.dataset.value == undefined || element.dataset.value == 'undefined'){
        element.dataset.value = true
        if(contador < 20){
        element.classList.add('cor')
        contador++
        element.dataset.verification = 'true'
      }
        
      }
      contagem.innerText = contador
      console.log(contador)

      if(contador == 20){
       alert.innerText = "⛔️Aviso: Quantidade máxima alcançada⛔️"
      }
    }else{
      element.classList.remove('cor')
      element.dataset.verification = undefined
      if(element.dataset.value == true || element.dataset.value == 'true'){
        element.dataset.value = 'undefined'
        contador--
        contagem.innerText = contador

      }
      if(contador < 1){
        alert.innerText = ""
      }
    }


    
  })
})
columnDois.forEach(element =>{
  element.addEventListener('click', ()=>{
    
    if(element.dataset.verification == undefined || element.dataset.verification == 'undefined'){
      if(element.dataset.value == undefined || element.dataset.value == 'undefined'){
        element.dataset.value = true
        if(contador < 20){
        element.classList.add('cor')
        contador++
        element.dataset.verification = 'true'
      }
        
      }
      contagem.innerText = contador
      console.log(contador)

      if(contador == 20){
       alert.innerText = "⛔️Aviso: Quantidade máxima alcançada⛔️"
      }
    }else{
      element.classList.remove('cor')
      element.dataset.verification = undefined
      if(element.dataset.value == true || element.dataset.value == 'true'){
        element.dataset.value = 'undefined'
        contador--
        contagem.innerText = contador

      }
      if(contador < 1){
        alert.innerText = ""
      }
    }


    
  })
})
columnTres.forEach(element =>{
  element.addEventListener('click', ()=>{
    
    if(element.dataset.verification == undefined || element.dataset.verification == 'undefined'){
      if(element.dataset.value == undefined || element.dataset.value == 'undefined'){
        element.dataset.value = true
        if(contador < 20){
        element.classList.add('cor')
        contador++
        element.dataset.verification = 'true'
      }
        
      }
      contagem.innerText = contador
      console.log(contador)

      if(contador == 20){
       alert.innerText = "⛔️Aviso: Quantidade máxima alcançada⛔️"
      }
    }else{
      element.classList.remove('cor')
      element.dataset.verification = undefined
      if(element.dataset.value == true || element.dataset.value == 'true'){
        element.dataset.value = 'undefined'
        contador--
        contagem.innerText = contador

      }
      if(contador < 1){
        alert.innerText = ""
      }
    }


    
  })
})
columnQuatro.forEach(element =>{
  element.addEventListener('click', ()=>{
    
    if(element.dataset.verification == undefined || element.dataset.verification == 'undefined'){
      if(element.dataset.value == undefined || element.dataset.value == 'undefined'){
        element.dataset.value = true
        if(contador < 20){
        element.classList.add('cor')
        contador++
        element.dataset.verification = 'true'
      }
        
      }
      contagem.innerText = contador
      console.log(contador)

      if(contador == 20){
       alert.innerText = "⛔️Aviso: Quantidade máxima alcançada⛔️"
      }
    }else{
      element.classList.remove('cor')
      element.dataset.verification = undefined
      if(element.dataset.value == true || element.dataset.value == 'true'){
        element.dataset.value = 'undefined'
        contador--
        contagem.innerText = contador

      }
      if(contador < 1){
        alert.innerText = ""
      }
    }


    
  })
})
columnCinco.forEach(element =>{
  element.addEventListener('click', ()=>{
    
    if(element.dataset.verification == undefined || element.dataset.verification == 'undefined'){
      if(element.dataset.value == undefined || element.dataset.value == 'undefined'){
        element.dataset.value = true
        if(contador < 20){
        element.classList.add('cor')
        contador++
        element.dataset.verification = 'true'
      }
        
      }
      contagem.innerText = contador
      console.log(contador)

      if(contador == 20){
       alert.innerText = "⛔️Aviso: Quantidade máxima alcançada⛔️"
      }
    }else{
      element.classList.remove('cor')
      element.dataset.verification = undefined
      if(element.dataset.value == true || element.dataset.value == 'true'){
        element.dataset.value = 'undefined'
        contador--
        contagem.innerText = contador

      }
      if(contador < 1){
        alert.innerText = ""
      }
    }


    
  })
})

