const jogador1 = document.getElementById('jogador1')
const jogador2 = document.getElementById('jogador2')
let turnPlayer = ''

const startBtn = document.getElementById('startBtn')
const btns = document.querySelectorAll('.grid-itens')
let victory = []

const item1 = document.getElementById('item-1')
const item2 = document.getElementById('item-2')
const item3 = document.getElementById('item-3')
const item4 = document.getElementById('item-4')
const item5 = document.getElementById('item-5')
const item6 = document.getElementById('item-6')
const item7 = document.getElementById('item-7')
const item8 = document.getElementById('item-8')
const item9 = document.getElementById('item-9')

let victory = 
{item4 + item5 + item6},
{item7 + item8 + item9},
{item1 + item4 + item7},
{item2 + item5 + item8},
{item3 + item6 + item9},
{item1 + item5 + item9},
{item7 + item5 + item3}

console.log(victory)

startBtn.addEventListener('click', ()=>{
    turnPlayer = 'jogador1'    

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (turnPlayer === 'jogador1') {
            btn.style.cursor = 'default'
            btn.innerText = 'X'
            turnPlayer = 'jogador2'
           }else{
            btn.style.cursor = 'default'
            btn.innerText = 'O'
            turnPlayer = 'jogador1'
           }
        })
    });
})

