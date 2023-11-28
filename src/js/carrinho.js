

$(document).ready(function () {


    // Variáveis
    // Valores dos Produtos
    let valorMouseRed = 120;
    let valorMouseHyper = 345;
    let valorTecladoHyper = 269.99;
    let valorTecladoHusky = 189.99;
    let valorHeadsetHyper = 169.99;
    let valorHeadsetHyper2 = 269.99;
    let valorMicrofoneHyper = 649.99;
    let valorMicrofoneKrom = 219.99;



    // Carregar HTML dinâmico ------------------------------------------------------------------------

    criaTabela();
    valorProdutos();


    // Adicionar Produtos ao Carrinho
    function adicionaAoCarrinho(produto) {
        let produtoStorage = Number(localStorage.getItem(produto));
        let qtd = Number($('input.' + produto).val());

        localStorage.setItem(produto, produtoStorage + qtd);

        ppp = localStorage.getItem(produto);
        console.log(produto + ' ee ' + ppp);

        alert("Produto adicionado ao carrinho")
        location.reload("index.html")
    }

    $('button.mouseRed').click(function () {
        adicionaAoCarrinho('mouseRed');
    });

    $('button.mouseHyper').click(function () {
        adicionaAoCarrinho('mouseHyper');
    });

    $('button.tecladoHyper').click(function () {
        adicionaAoCarrinho('tecladoHyper');
    });

    $('button.tecladoHusky').click(function () {
        adicionaAoCarrinho('tecladoHusky');
    });

    $('button.headsetHyper').click(function () {
        adicionaAoCarrinho('headsetHyper');
    });

    $('button.headsetHyper2').click(function () {
        adicionaAoCarrinho('headsetHyper2');
    });

    $('button.microfoneHyper').click(function () {
        adicionaAoCarrinho('microfoneHyper');
    });

    $('button.microfoneKrom').click(function () {
        adicionaAoCarrinho('microfoneKrom');
    });


    // Remover um Produto do Carrinho
    function removeProduto(produto) {
        localStorage.removeItem(produto);
        criaTabela();
        location.reload();
    }

    $('.removeMouseRed').click(function () {
        removeProduto('mouseRed');
    })
    $('.removeMouseHyper').click(function () {
        removeProduto('mouseHyper');
    })
    $('.removeTecladoHyper').click(function () {
        removeProduto('tecladoHyper');
    })

    $('.removeTecladoHusky').click(function () {
        removeProduto('tecladoHusky');
    })
    $('.removeHeadsetHyper').click(function () {
        removeProduto('headsetHyper');
    })
    $('.removeHeadsetHyper2').click(function () {
        removeProduto('headsetHyper2');
    })

    $('.removeMicrofoneHyper').click(function () {
        removeProduto('microfoneHyper');
    })
    $('.removeMicrofoneKrom').click(function () {
        removeProduto('microfoneKrom');
    })



    // Criar a Tabela
    function criaTabela() {
        // Carregar Tabela de Carrinho
        try {
            let tabelaDoCarrinho = document.getElementById('tabelaCarrinho');

            var mouseRed = localStorage.getItem('mouseRed');
            var mouseHyper = localStorage.getItem('mouseHyper');
            var tecladoHyper = localStorage.getItem('tecladoHyper');
            var tecladoHusky = localStorage.getItem('tecladoHusky');
            var headsetHyper = localStorage.getItem('headsetHyper');
            var headsetHyper2 = localStorage.getItem('headsetHyper2');
            var microfoneHyper = localStorage.getItem('microfoneHyper');
            var microfoneKrom = localStorage.getItem('microfoneKrom');

            var totalMouseRed = mouseRed * valorMouseRed;
            var totalMouseHyper = mouseHyper * valorMouseHyper;
            var totalTecladoHyper = tecladoHyper * valorTecladoHyper;
            var totalTecladoHusky = tecladoHusky * valorTecladoHusky;
            var totalHeadsetHyper = headsetHyper * valorHeadsetHyper;
            var totalHeadsetHyper2 = headsetHyper2 * valorHeadsetHyper2;
            var totalMicrofoneHyper = microfoneHyper * valorMicrofoneHyper;
            var totalMicrofoneKrom = microfoneKrom * valorMicrofoneKrom;

            var totalAPagar = totalMouseRed +
            totalMouseHyper +
                totalTecladoHyper +
                totalTecladoHusky +
                totalHeadsetHyper +
                totalHeadsetHyper2 +
                totalMicrofoneHyper +
                totalMicrofoneKrom;

            totalAPagar = totalAPagar < 0 ? 0 : totalAPagar;

            // Montar a Tabela

            // Cabeçalho
            tabelaDoCarrinho.innerHTML = `
                <tr> 
                    <th>Produto</th>
                    <th>Valor</th>
                    <th>Quantidade</th>
                    <th>Remover do Carrinho</th>
                    <th>Total</th>
                </tr>            
            `;

            // MouseRed
            if (mouseRed != null && mouseRed > 0) {
                tabelaDoCarrinho.innerHTML += `
                    <tr> 
                        <td>Mouse Gamer Red Dragon</td>
                        <td class="valorMouseRed"></td>
                        <td>${mouseRed}</td>
                        <td class="text-center removeMouseRed"><i class="fa-solid fa-trash text-danger"></i></td>
                        <td>R$${totalMouseRed.toFixed(2)}</td>
                    </tr>            
                `;
            }

            // MouseHyper
            if (mouseHyper != null && mouseHyper > 0) {
                tabelaDoCarrinho.innerHTML += `
                                <tr> 
                                    <td>Mouse Gamer HyperX s/fio</td>
                                    <td class="valorMouseHyper"></td>
                                    <td>${mouseHyper}</td>
                                    <td class="text-center removeMouseHyper"><i class="fa-solid fa-trash text-danger"></i></td>
                                    <td>R$${totalMouseHyper.toFixed(2)}</td>
                                </tr>            
                            `;
            }

                  // TecladoHyper
                  if (tecladoHyper != null && tecladoHyper > 0) {
                    tabelaDoCarrinho.innerHTML += `
                                    <tr> 
                                        <td>Teclado Gamer Alloy HyperX</td>
                                        <td class="valorTecladoHyper"></td>
                                        <td>${tecladoHyper}</td>
                                        <td class="text-center removeTecladoHyper"><i class="fa-solid fa-trash text-danger"></i></td>
                                        <td>R$${totalTecladoHyper.toFixed(2)}</td>
                                    </tr>            
                                `;
                }



                  // TecladoHusky
                  if (tecladoHusky != null && tecladoHusky > 0) {
                    tabelaDoCarrinho.innerHTML += `
                                    <tr> 
                                        <td>Teclado Mecânico Husky Gaming</td>
                                        <td class="valorTecladoHusky"></td>
                                        <td>${tecladoHusky}</td>
                                        <td class="text-center removeTecladoHusky"><i class="fa-solid fa-trash text-danger"></i></td>
                                        <td>R$${totalTecladoHusky.toFixed(2)}</td>
                                    </tr>            
                                `;
                }

                
                  // HeadsetHyper
                  if (headsetHyper != null && headsetHyper > 0) {
                    tabelaDoCarrinho.innerHTML += `
                                    <tr> 
                                        <td>Headset Hyperx Cloud Stinger2</td>
                                        <td class="valorHeadsetHyper"></td>
                                        <td>${headsetHyper}</td>
                                        <td class="text-center removeHeadsetHyper"><i class="fa-solid fa-trash text-danger"></i></td>
                                        <td>R$${totalHeadsetHyper.toFixed(2)}</td>
                                    </tr>            
                                `;
                }

                  // HeadsetHyper2
                  if (headsetHyper2 != null && headsetHyper2 > 0) {
                    tabelaDoCarrinho.innerHTML += `
                                    <tr> 
                                        <td>Headset Hyperx Cloud II</td>
                                        <td class="valorHeadsetHyper2"></td>
                                        <td>${headsetHyper2}</td>
                                        <td class="text-center removeHeadsetHyper2"><i class="fa-solid fa-trash text-danger"></i></td>
                                        <td>R$${totalHeadsetHyper2.toFixed(2)}</td>
                                    </tr>            
                                `;
                }

                      // microfoneHyper
                      if (microfoneHyper != null && microfoneHyper > 0) {
                        tabelaDoCarrinho.innerHTML += `
                                        <tr> 
                                            <td>Microfone Gamer HyperX QuadCast</td>
                                            <td class="valorMicrofoneHyper"></td>
                                            <td>${microfoneHyper}</td>
                                            <td class="text-center removeMicrofoneHyper"><i class="fa-solid fa-trash text-danger"></i></td>
                                            <td>R$${totalMicrofoneHyper.toFixed(2)}</td>
                                        </tr>            
                                    `;
                    }

                          // microfoneKrom
                  if (microfoneKrom != null && microfoneKrom > 0) {
                    tabelaDoCarrinho.innerHTML += `
                                    <tr> 
                                        <td>Microfone Krom Nox Kapsule</td>
                                        <td class="valorMicrofoneKrom"></td>
                                        <td>${microfoneKrom}</td>
                                        <td class="text-center removeMicrofoneKrom"><i class="fa-solid fa-trash text-danger"></i></td>
                                        <td>R$${totalMicrofoneKrom.toFixed(2)}</td>
                                    </tr>            
                                `;
                }

            // Total Final
            tabelaDoCarrinho.innerHTML += `
                <tr>
                    <th colspan="4">Total a Pagar</th>
                    <td>R$${totalAPagar.toFixed(2)}</td>
                </tr>
            `;

            valorProdutos();
        } catch (erro) {
            console.log('ERROOOOOOO');
            console.log(erro)
        }
    }


    // Colocar Valor do Produto onde for Preciso
    function valorProdutos() {
        $('.valorMouseRed').html('R$' + valorMouseRed.toFixed(2))
        $('.valorMouseHyper').html('R$' + valorMouseHyper.toFixed(2))
        $('.valorTecladoHyper').html('R$' + valorTecladoHyper.toFixed(2))
        $('.valorTecladoHusky').html('R$' + valorTecladoHusky.toFixed(2))
        $('.valorHeadsetHyper').html('R$' + valorHeadsetHyper.toFixed(2))
        $('.valorHeadsetHyper2').html('R$' + valorHeadsetHyper2.toFixed(2))
        $('.valorMicrofoneHyper').html('R$' + valorMicrofoneHyper.toFixed(2))
        $('.valorMicrofoneKrom').html('R$' + valorMicrofoneKrom.toFixed(2))
    }

});