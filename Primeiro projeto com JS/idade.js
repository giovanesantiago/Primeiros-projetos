function calcular() {
    //data
    var dataatual = new Date()
    var anoatual = dataatual.getUTCFullYear()

    //calculo de idade
    var txtid = window.document.getElementById('data')
    var anoid = Number(txtid.value)
    var idade = anoatual - anoid
    //validação idade 
    if (idade == anoatual) {
        window.alert('PREENCHA A CAIXA - Ano de Nascimento')
    }else if (idade > 130 || idade <= 0) {
        window.alert('Ano de nascimento invalido!')
    }

    //local de saida no documento
    var res = window.document.getElementById('res')
    
    //Limpar info
    var clear = window.document.getElementById('apagar')
    clear.innerHTML = ''

    //imagem
    var img = window.document.getElementById('img')

    // entrada de checkbox
    var fem = document.getElementById('fem')
    var mas = document.getElementById('masc')

    //body
    var teste = window.document.getElementById('teste')

    //Saida
    if (fem.checked && mas.checked){
        window.alert('Duas opções de sexo, marque so uma opção!')
    }else if (fem.checked) {
        res.innerHTML = `Dectamos uma Mulher com ${idade} anos`
        img.innerHTML = '<img src="image/marge_simpson_rep.jpg" alt="mulher">'
        teste.style.backgroundColor= 'pink'
    }else if (mas.checked) {
        res.innerHTML = `Dectamos um Homem com ${idade} anos`
        img.innerHTML = `<img src="image/homer-simpson.jpg" alt="homem">`
        teste.style.backgroundColor= '#35A6F2'
    }else {
        window.alert('Nenhuma opção de sexo marcada!')
    }
}