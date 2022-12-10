const board = document.querySelector('#board')
const colors= ['#004953', '#C3B091', '#FD5E53', '#6E5160']
const SQUARES_NUMBER = 1500

for(let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
        setColor(square))

     square.addEventListener('mouseleave', () => 
        remuveColor(square))

    board.append(square)
}

function setColor (element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function remuveColor (element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = `0 0 2px black`
}


function getRandomColor () {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
