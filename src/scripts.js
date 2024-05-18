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

function addproconmaq() {
    window.location.href = "../pags/addproconmaq.html"
}

function addnotes() {
    window.location.href = "../pags/addnotes.html"
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
    let dns = document.getElementById('iddns')
    let mascara = document.getElementById('idmascara')
    let gateway = document.getElementById('idgateway')

    if (processador) processador.value = '';
    if (enderecoIP) enderecoIP.value = '';
    if (enderecoMAC) enderecoMAC.value = '';
    if (ssd) ssd.value = '';
    if (dns) dns.value = '';
    if (mascara) mascara.value = '';
    if (gateway) gateway.value = '';

    btAddEspecificacoes.style.display = 'flex'
    especificacoes.style.display = 'none'
    removerEspecificacoesBt.style.display = 'none'
})