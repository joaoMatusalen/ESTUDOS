document.getElementById('lightBtn').addEventListener('click', () => {
    document.body.style.color = '#212529'
    document.body.style.backgroundColor = '#f1f5f9'
})

document.getElementById('darkBtn').addEventListener('click', () => {
    document.body.style.color = '#f1f5f9'
    document.body.style.backgroundColor = '#212529'
})

document.getElementById('switchBtn').addEventListener('click', () => {
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
})