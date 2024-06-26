function verificar(){
    var res = window.document.getElementById('res')
    var data = new Date()
    var conta = data.getFullYear()
    var ano = window.document.getElementById('ano')
    var masc = window.document.getElementById('masc')
    var femi = window.document.getElementById('femi')

    switch (femi){
        case femi:
           res = conta - ano
           res.innerHTML = `É uma mulher com ${res} anos.` 
           break

           case masc:
            res = conta - ano
            res.innerHTML = `É um homem com ${res} anos.`
            break
    }
    
}