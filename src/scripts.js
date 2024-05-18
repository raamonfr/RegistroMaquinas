//redirecionamentos
function addmaqs() {
    window.location.href = "../pags/addmaqs.html"
}

function addimpres() {
    window.location.href = "../pags/addimpre.html"
}

function addinvestiinfor() {
    window.location.href = "../pags/addinvestiinfor.html"
}


//declaração de variáveis globais
let removerEspecificacoesBt = document.getElementById('removerespecificacoes')
let especificacoes = document.getElementById('especificacoes')
let btAddEspecificacoes = document.getElementById('addEspecificacoes')

removerEspecificacoesBt.style.display = 'none'
especificacoes.style.display = 'none'


//eventos e funcionalidades
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