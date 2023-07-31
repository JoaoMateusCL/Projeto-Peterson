let produtos =
[
    computadores=
    [
        intel1={nome: "intel1",quantidade: 45, especificacoes:["processador i5","8 giga de rem","etc tô com preguiça"],preco:1650.99,descricao: "um notebook"},
        amd1={nome: "amd1",quantidade: 96, especificacoes:["batata","repolho","dark souls"],preco:1350.99,descricao: "um notebook"}
    ],
    celulares=
    [
        sansung1={nome: "sansung1",quantidade: 32, especificacoes:["repolho","beterraba","sua mãe"],preco: 1229.87,descricao: "definitivamente um celular"},
        iphone1={nome: "iphone1",quantidade: 9, especificacoes:["não sei","não sei 2","eu odeio o IFPA"],preco: 14000,descricao:"definitivamente um celular mais caro do que deveria"}
    ]
]
function mostrarProdutos()
{
    for (let categoria of produtos) 
    {
        for (let produto in categoria) 
        {
            document.write(`${categoria[produto].nome}:${categoria[produto].quantidade} <br>`)
        }
    }
}

function mostrarEstoqueTodo() 
{
    let somaQuantidades = 0
    for (let categoria of produtos) 
    {
        for (let produto in categoria)
        {
            somaQuantidades += categoria[produto].quantidade;
        }
    }
    return window.alert(`A soma de todos os item do estoque foi: ${somaQuantidades}`)
}

function adicionarQuantidadeProduto() 
{
    let usuarioProduto = window.prompt("Informe o nome do produto a ser atualizado:")
  
    let produtoEncontrado = false
  
    for (let categoria of produtos) 
    {
        for (let produto of categoria) 
        {
            if(produto.nome == usuarioProduto) 
            {
                let quantidadeSomar = Number(window.prompt("Informe a quantidade que deve ser adicionada ao estoque?"))
                produto.quantidade += quantidadeSomar
                window.alert(`Foram adicionadas ${quantidadeSomar} unidades ao produto: ${produto.nome}\nQuantidade atual: ${produto.quantidade}`);
                produtoEncontrado = true
                break
            }
        }
        if(produtoEncontrado) 
        {
            break
        }
    }
  
    if(!produtoEncontrado)
    {
        window.alert("Produto não foi encontrado")
    }
}

function subtrairQuantidadeProduto() 
{
    let usuarioProduto = window.prompt("Informe o nome do produto a ser atualizado:")
  
    let produtoEncontrado = false
  
    for (let categoria of produtos) 
    {
        for (let produto of categoria) 
        {
            if(produto.nome == usuarioProduto) 
            {
                let quantidadeSub = Number(window.prompt("Informe a quantidade que deve ser retira do estoque?"))
                if(quantidadeSub <= produto.quantidade)
                {
                    produto.quantidade -= quantidadeSub
                    window.alert(`Foram retiradas ${quantidadeSub} unidades ao produto ${produto.nome}\nQuantidade atual: ${produto.quantidade}`)
                    break
                }
                else
                {
                    window.alert("Impossivel realizar essa atualização")
                    break
                }
                produtoEncontrado = true
                break
            }
        }
        if(produtoEncontrado) 
        {
            break
        }
    }
  
    if(!produtoEncontrado)
    {
        window.alert("Produto não foi encontrado")
    }
}