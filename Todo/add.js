const input = document.getElementById('input')
const btn = document.getElementById('btn')
const todoblock = document.querySelector('.todo-block')



btn.addEventListener('click' , function(e){
    
    console.log(e.target.tagName);
  
  if(input.value === ``){
    alert(`xahis edirik soz yazin`)
  }
  else{
    let p = document.createElement('p')
    p.textContent = input.value;
    todoblock.appendChild(p)
    let span  =document.createElement('span')
    span.className = 'fa-solid fa-xmark'
   
    p.appendChild(span)
  }
  input.value = ``
})
todoblock.addEventListener('click' , function(e){
    if(e.target.tagName === 'P'){
        e.target.classList.toggle('active')
    }
    else if(e.target.tagName === 'SPAN'){
            e.target.parentElement.remove()
        }
})




