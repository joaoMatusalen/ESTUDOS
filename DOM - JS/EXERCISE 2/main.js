function createLabel(text, htmlFor){
  const label = document.createElement('label')
  label.innerText = text 
  label.htmlFor = htmlFor

  return label
}

function createInput(id, name, value, type='text', placeholder=''){
  const input = document.createElement('input')
  input.id = id
  input.name = name
  input.value = value
  input.type = type
  input.placeholder = placeholder

  return input
}

const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0

addTechBtn.addEventListener('click', ev => {
  const techs = document.getElementById('techs')

  const newRow = document.createElement('li')
  const rowIndex = inputRows
  inputRows++

  newRow.id = 'inputRow-' + rowIndex
  newRow.className = 'inputRow'

  const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
  const techNameInput = createInput('inputRow-' + rowIndex, 'techName', '')

  const techExpLabel = createLabel(' Experiência: ')
  const radioId1 = 'TechId-' + rowIndex + '.1'
  const techExpRadioLabel1 = createLabel ('0 - 2 anos', radioId1)
  const techExpRadioInput1 = createInput(radioId1, 'techName-' + rowIndex, '0 - 2 anos', 'radio')
  const radioId2 = 'TechId-' + rowIndex + '.2'
  const techExpRadioLabel2 = createLabel ('3 - 4 anos', radioId2)
  const techExpRadioInput2 = createInput(radioId2, 'techName-' + rowIndex, '3 - 4 anos', 'radio')
  const radioId3 = 'TechId-' + rowIndex + '.3'
  const techExpRadioLabel3 = createLabel ('5+ anos', radioId3)
  const techExpRadioInput3 = createInput(radioId3, 'techName-' + rowIndex, '5+ anos', 'radio')

  const removeTechBtn = document.createElement('button')
  removeTechBtn.type = 'button'
  removeTechBtn.innerText = 'remover'
  removeTechBtn.addEventListener('click', () => {
    newRow.remove(rowIndex)
  })


  newRow.append(techNameLabel, techNameInput, techExpLabel, techExpRadioInput1, techExpRadioLabel1, techExpRadioInput2, techExpRadioLabel2, techExpRadioInput3, techExpRadioLabel3, removeTechBtn)

  techs.appendChild(newRow)
})

form.addEventListener('submit', ev => {
  ev.preventDefault()
 
  const fullname = document.getElementById('fullname')
  const techsRow = document.querySelectorAll('.inputRow')

  let technologies = []
  techsRow.forEach(row =>{
    const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value 
    const techInput = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
    technologies.push({name: techName, exp: techInput})
  })

  newDev = {fullname: fullname.value, technologies: technologies}
  developers.push(newDev)

  alert('Dev cadastrado')

  fullname.value = ''
  techsRow.forEach(row => {
    row.remove()
  })

  console.log(developers)
})
