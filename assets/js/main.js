// Creo la lista della spesa

const list=[
    'Pane',
    'Latte',
    'Snack',
    'Verdura',
    'Frutta'
]

const listEl= document.querySelector('ul')

let i = 0
while ( i<list.length){
    let liElement = list[i] 
    console.log(liElement);

    //Stampo elemeenti in pagina
    
    liElement = `<li>${liElement}</li>`
    listEl.innerHTML += liElement
    i++
}