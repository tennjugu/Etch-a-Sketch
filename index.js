let sizeOfBox = 5
const container = document.querySelector('.container')
const createGrid = (numberOfGrids) => {
    for (let i = 0; i < numberOfGrids; i++){
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0; j < numberOfGrids; j++) {
            const widthAndHeight = 960 / sizeOfBox
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`
            //adding moouse listener to change background color
            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'black'
            })
            row.appendChild(gridBox)
        }
        container.appendChild(row)
    }
}

createGrid(sizeOfBox)