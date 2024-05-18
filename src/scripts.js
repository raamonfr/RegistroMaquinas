function addmaqs() {
    window.location.href = "../pags/addmaqs.html"
}

function addimpres() {
    window.location.href = "../pags/addimpre.html"
}

function addinvesti() {
    window.location.href = "../pags/addinvesti.html"
}

let removerEspecificacoesBt = document.getElementById('removerespecificacoes')
removerEspecificacoesBt.style.display = 'none'


let especificacoes = document.getElementById('especificacoes')
especificacoes.style.display = 'none'

let btAddEspecificacoes = document.getElementById('addEspecificacoes')

btAddEspecificacoes.addEventListener('click', (event) => {
    btAddEspecificacoes.style.display = 'none'
    especificacoes.style.display = 'flex'
    removerEspecificacoesBt.style.display = 'block'
})

removerEspecificacoesBt.addEventListener('click', (event) => {
    let processador = document.getElementById('idprocessador')
    let enderecoIP = document.getElementById('idenderecoip')
    let enderecoMAC = document.getElementById('idenderecomac')
    let ssd = document.getElementById('idssd')

    processador.value = ''
    enderecoIP.value = ''
    enderecoMAC.value = ''
    ssd.value = ''

    btAddEspecificacoes.style.display = 'flex'
    especificacoes.style.display = 'none'
    removerEspecificacoesBt.style.display = 'none'
})