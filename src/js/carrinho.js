
$(document).ready(function () {


    // Variáveis
    // Valores dos Produtos tela HOME
    let valorMouseRed = 120;
    let valorMouseHyper = 345;
    let valorTecladoHyper = 269.99;
    let valorTecladoHusky = 189.99;
    let valorHeadsetHyper = 169.99;
    let valorHeadsetHyper2 = 269.99;
    let valorMicrofoneHyper = 649.99;
    let valorMicrofoneKrom = 219.99;

    //TECLADOS VALORES
    let valorTecladoBrx = 129.99;
    let valorTecladoMulti = 29.99;
    let valorTecladoLogitech = 941.06;
    let valorTecladoCooler = 998.88;
    let valorTecladoViper = 200.00;
    let valorTecladoAoc = 279.90;

    //MOUSE VALORES
    let valorMouseAoc = 149.99;
    let valorMouseLogitech = 249.99;
    let valorMouseLogitechRosa = 779.99;
    let valorMouseFallen = 399.99;
    let valorMouseSteel = 199.99;
    let valorMouseCorsair = 399.80;
    let valorMouseAcer = 109.99;
    let valorMouseBenQ = 479.90;

    //PROCESSADORES VALORES
    let valorProcessadorAmd7 = 1247.99;
    let valorProcessadorAmd5 = 806.22;
    let valorProcessadorI5 = 668.88;
    let valorProcessadorI9 = 2428.99;
    let valorProcessadorAmd9 = 5222.32;
    let valorProcessadorI7 = 1719.48;
    let valorProcessadorI5Ger10 = 1129.40;
    let valorProcessadorAmd3 = 439.90;


    //MONITORES VALORES

    let valorMonitorUltragear = 1473.67;
    let valorMonitorSamsung = 519.99;
    let valorMonitorConcordia = 999.90;
    let valorMonitorAsus = 999.99;
    let valorMonitorAoc = 999.99;
    let valorMonitorAcer = 849.99;
    let valorMonitorHusky = 1899.99;
    let valorMonitorLg = 520.91;




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
        location.reload()
    }

    //BUTTONS HOME
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

    //BUTTONS TECLADO
    $('button.tecladoBrx').click(function () {
        adicionaAoCarrinho('tecladoBrx');
    })

    $('button.tecladoMulti').click(function () {
        adicionaAoCarrinho('tecladoMulti');
    })

    $('button.tecladoLogitech').click(function () {
        adicionaAoCarrinho('tecladoLogitech');
    })

    $('button.tecladoCooler').click(function () {
        adicionaAoCarrinho('tecladoCooler');
    })

    $('button.tecladoViper').click(function () {
        adicionaAoCarrinho('tecladoViper');
    })

    $('button.tecladoAoc').click(function () {
        adicionaAoCarrinho('tecladoAoc');
    })

    //BUTTON MOUSES

    $('button.mouseAoc').click(function () {
        adicionaAoCarrinho('mouseAoc');
    })

    $('button.mouseLogitech').click(function () {
        adicionaAoCarrinho('mouseLogitech');
    })

    $('button.mouseLogitechRosa').click(function () {
        adicionaAoCarrinho('mouseLogitechRosa');
    })

    $('button.mouseFallen').click(function () {
        adicionaAoCarrinho('mouseFallen');
    })

    $('button.mouseSteel').click(function () {
        adicionaAoCarrinho('mouseSteel');
    })

    $('button.mouseCorsair').click(function () {
        adicionaAoCarrinho('mouseCorsair');
    })

    $('button.mouseAcer').click(function () {
        adicionaAoCarrinho('mouseAcer');
    })

    $('button.mouseBenQ').click(function () {
        adicionaAoCarrinho('mouseBenQ');
    })

        //BUTTONS PROCESSADORES

    $('button.processadorAmd7').click(function(){
        adicionaAoCarrinho('processadorAmd7');
    })

    $('button.processadorAmd5').click(function(){
        adicionaAoCarrinho('processadorAmd5');
    })

    $('button.processadorI5').click(function(){
        adicionaAoCarrinho('processadorI5');
    })

    $('button.processadorI9').click(function(){
        adicionaAoCarrinho('processadorI9');
    })

    $('button.processadorAmd9').click(function(){
        adicionaAoCarrinho('processadorAmd9');
    })

    $('button.processadorI7').click(function(){
        adicionaAoCarrinho('processadorI7');
    })

    $('button.processadorI5Ger10').click(function(){
        adicionaAoCarrinho('processadorI5Ger10');
    })

    $('button.processadorAmd3').click(function(){
        adicionaAoCarrinho('processadorAmd3');
    })

    //BUTTONS MONITORES

    $('button.monitorUltragear').click(function(){
        adicionaAoCarrinho('monitorUltragear');
    })

    $('button.monitorSamsung').click(function(){
        adicionaAoCarrinho('monitorSamsung');
    })

    $('button.monitorConcordia').click(function(){
        adicionaAoCarrinho('monitorConcordia');
    })

    $('button.monitorAsus').click(function(){
        adicionaAoCarrinho('monitorAsus');
    })

    $('button.monitorAoc').click(function(){
        adicionaAoCarrinho('monitorAoc');
    })

    $('button.monitorAcer').click(function(){
        adicionaAoCarrinho('monitorAcer');
    })

    $('button.monitorHusky').click(function(){
        adicionaAoCarrinho('monitorHusky');
    })

    $('button.monitorLg').click(function(){
        adicionaAoCarrinho('monitorLg');
    })





    // Remover um Produto do Carrinho
    function removeProduto(produto) {
        localStorage.removeItem(produto);
        criaTabela();
        location.reload();
    }

    //REMOVER ITENS HOME

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

    //REMOVE ITENS TECLADO

    $('.removeTecladoBrx').click(function () {
        removeProduto('tecladoBrx');
    })

    $('.removeTecladoMulti').click(function () {
        removeProduto('tecladoMulti');
    })

    $('.removeTecladoLogitech').click(function () {
        removeProduto('tecladoLogitech');
    })

    $('.removeTecladoCooler').click(function () {
        removeProduto('tecladoCooler');
    })

    $('.removeTecladoViper').click(function () {
        removeProduto('tecladoViper');
    })

    $('.removeTecladoAoc').click(function () {
        removeProduto('tecladoAoc');
    })


    //REMOVE MOUSES

    $('.removeMouseAoc').click(function () {
        removeProduto('mouseAoc');
    })

    $('.removeMouseLogitech').click(function () {
        removeProduto('mouseLogitech');
    })

    $('.removeMouseLogitechRosa').click(function () {
        removeProduto('mouseLogitechRosa');
    })

    $('.removeMouseFallen').click(function () {
        removeProduto('mouseFallen');
    })

    $('.removeMouseSteel').click(function () {
        removeProduto('mouseSteel');
    })

    $('.removeMouseCorsair').click(function () {
        removeProduto('mouseCorsair');
    })

    $('.removeMouseAcer').click(function () {
        removeProduto('mouseAcer');
    })

    $('.removeMouseBenQ').click(function () {
        removeProduto('mouseBenQ');
    })

    //REMOVE PROCESSADORES

    $('.removeProcessadorAmd7').click(function () {
        removeProduto('processadorAmd7');
    })

    $('.removeProcessadorAmd5').click(function () {
        removeProduto('processadorAmd5');
    })

    $('.removeProcessadorI5').click(function () {
        removeProduto('processadorI5');
    })

    $('.removeProcessadorI9').click(function () {
        removeProduto('processadorI9');
    })

    $('.removeProcessadorAmd9').click(function () {
        removeProduto('processadorAmd9');
    })

    
    $('.removeProcessadorI7').click(function () {
        removeProduto('processadorI7');
    })

    
    $('.removeProcessadorI5Ger10').click(function () {
        removeProduto('processadorI5Ger10');
    })

    
    $('.removeProcessadorAmd3').click(function () {
        removeProduto('processadorAmd3');
    })

    //REMOVE MONITORES

    $('.removeMonitorUltragear').click(function () {
        removeProduto('monitorUltragear');
    })

    $('.removeMonitorSamsung').click(function () {
        removeProduto('monitorSamsung');
    })

    $('.removeMonitorConcordia').click(function () {
        removeProduto('monitorConcordia');
    })

    $('.removeMonitorAsus').click(function () {
        removeProduto('monitorAsus');
    })

    $('.removeMonitorAoc').click(function () {
        removeProduto('monitorAoc');
    })

    $('.removeMonitorAcer').click(function () {
        removeProduto('monitorAcer');
    })

    $('.removeMonitorHusky').click(function () {
        removeProduto('monitorHusky');
    })

    
    $('.removeMonitorLg').click(function () {
        removeProduto('monitorLg');
    })




    // Criar a Tabela
    function criaTabela() {
        // Carregar Tabela de Carrinho
        try {
            let tabelaDoCarrinho = document.getElementById('tabelaCarrinho');

            //PASSAR NOMES, QUANTIDADE E VALORES TOTAL PRA TABELA NA ABA HOME

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


            //PASSAR NOMES ,QUANTIDADE E VALORES TOTAL PRA TABELA NA ABA TECLADO

            var tecladoBrx = localStorage.getItem('tecladoBrx');
            var tecladoMulti = localStorage.getItem('tecladoMulti');
            var tecladoLogitech = localStorage.getItem('tecladoLogitech');
            var tecladoCooler = localStorage.getItem('tecladoCooler');
            var tecladoViper = localStorage.getItem('tecladoViper');
            var tecladoAoc = localStorage.getItem('tecladoAoc');

            var totalTecladoBrx = tecladoBrx * valorTecladoBrx;
            var totalTecladoMulti = tecladoMulti * valorTecladoMulti;
            var totalTecladoLogitech = tecladoLogitech * valorTecladoLogitech;
            var totalTecladoCooler = tecladoCooler * valorTecladoCooler;
            var totalTecladoViper = tecladoViper * valorTecladoViper;
            var totalTecladoAoc = tecladoAoc * valorTecladoAoc;

            //PASSAR NOMES ,QUANTIDADE E VALORES TOTAL PRA TABELA NA ABA MOUSE

            var mouseAoc = localStorage.getItem('mouseAoc')
            var mouseLogitech = localStorage.getItem('mouseLogitech');
            var mouseLogitechRosa = localStorage.getItem('mouseLogitechRosa');
            var mouseFallen = localStorage.getItem('mouseFallen');
            var mouseSteel = localStorage.getItem('mouseSteel');
            var mouseCorsair = localStorage.getItem('mouseCorsair');
            var mouseAcer = localStorage.getItem('mouseAcer');
            var mouseBenQ = localStorage.getItem('mouseBenQ');

            var totalMouseAoc = mouseAoc * valorMouseAoc;
            var totalMouseLogitech = mouseLogitech * valorMouseLogitech;
            var totalMouseLogitechRosa = mouseLogitechRosa * valorMouseLogitechRosa;
            var totalMouseFallen = mouseFallen * valorMouseFallen;
            var totalMouseSteel = mouseSteel * valorMouseSteel;
            var totalMouseCorsair = mouseCorsair * valorMouseCorsair;
            var totalMouseAcer = mouseAcer * valorMouseAcer;
            var totalMouseBenQ = mouseBenQ * valorMouseBenQ;

              //PASSAR NOMES ,QUANTIDADE E VALORES TOTAL PRA TABELA NA ABA PROCESSSADORES

            var processadorAmd7 = localStorage.getItem('processadorAmd7');
            var processadorAmd5 = localStorage.getItem('processadorAmd5');
            var processadorI5 = localStorage.getItem('processadorI5');
            var processadorI9 = localStorage.getItem('processadorI9');
            var processadorAmd9 = localStorage.getItem('processadorAmd9');
            var processadorI7 = localStorage.getItem('processadorI7');
            var processadorI5Ger10 = localStorage.getItem('processadorI5Ger10');
            var processadorAmd3 = localStorage.getItem('processadorAmd3');

            var totalProcessadorAmd7 = processadorAmd7 * valorProcessadorAmd7;
            var totalProcessadorAmd5 = processadorAmd5 * valorProcessadorAmd5;
            var totalProcessadorI5 = processadorI5 * valorProcessadorI5;
            var totalProcessadorI9 = processadorI9 * valorProcessadorI9;
            var totalProcessadorAmd9 = processadorAmd9 * valorProcessadorAmd9;
            var totalProcessadorI7 = processadorI7 * valorProcessadorI7;
            var totalProcessadorI5Ger10 = processadorI5Ger10 * valorProcessadorI5Ger10;
            var totalProcessadorAmd3 = processadorAmd3 * valorProcessadorAmd3;
            
              //PASSAR NOMES ,QUANTIDADE E VALORES TOTAL PRA TABELA NA ABA MONITORES

            var monitorUltragear = localStorage.getItem('monitorUltragear');
            var monitorSamsung = localStorage.getItem('monitorSamsung');
            var monitorConcordia = localStorage.getItem('monitorConcordia');
            var monitorAsus = localStorage.getItem('monitorAsus');
            var monitorAoc = localStorage.getItem('monitorAoc');
            var monitorAcer = localStorage.getItem('monitorAcer');
            var monitorHusky = localStorage.getItem('monitorHusky');
            var monitorLg = localStorage.getItem('monitorLg');

            var totalMonitorUltragear = monitorUltragear * valorMonitorUltragear;
            var totalMonitorSamsung = monitorSamsung * valorMonitorSamsung;
            var totalMonitorConcordia = monitorConcordia * valorMonitorConcordia;
            var totalMonitorAsus = monitorAsus * valorMonitorAsus;
            var totalMonitorAoc = monitorAoc * valorMonitorAoc;
            var totalMonitorAcer = monitorAcer * valorMonitorAcer;
            var totalMonitorHusky = monitorHusky * valorMonitorHusky;
            var totalMonitorLg = monitorLg * valorMonitorLg;





            let  totalCarrinho = totalMouseRed +
                totalMouseHyper +
                totalTecladoHyper +
                totalTecladoHusky +
                totalHeadsetHyper +
                totalHeadsetHyper2 +
                totalMicrofoneHyper +
                totalMicrofoneKrom +
                // teclados 
                totalTecladoBrx +
                totalTecladoMulti +
                totalTecladoLogitech +
                totalTecladoCooler +
                totalTecladoViper +
                totalTecladoAoc +
                //MOUSES
                totalMouseAoc +
                totalMouseLogitech +
                totalMouseLogitechRosa +
                totalMouseFallen +
                totalMouseSteel +
                totalMouseCorsair +
                totalMouseAcer +
                totalMouseBenQ + 
                //PROCESSADORES
                totalProcessadorAmd7 + 
                totalProcessadorAmd5 + 
                totalProcessadorI5 + 
                totalProcessadorI9 + 
                totalProcessadorAmd9 + 
                totalProcessadorI7 + 
                totalProcessadorI5Ger10 + 
                totalProcessadorAmd3 +
                //MONITORES
                totalMonitorUltragear +
                totalMonitorSamsung +
                totalMonitorConcordia + 
                totalMonitorAsus +
                totalMonitorAoc +
                totalMonitorAcer +
                totalMonitorHusky +
                totalMonitorLg;

                totalCarrinho = totalCarrinho < 0 ? 0 : totalCarrinho;

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

            //MONTAR TABELA COM PRODUTOS DA ABA HOME

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
            //////////////////////////////////////////////////
            //MONTAR TABELA COM PRODUTOS DA ABA TECLADOS

            //tecladoBrx
            if (tecladoBrx != null && tecladoBrx > 0) {
                tabelaDoCarrinho.innerHTML += `
                                    <tr> 
                                        <td>Teclado mecanico gamer BRX</td>
                                        <td class="valorTecladoBrx"></td>
                                        <td>${tecladoBrx}</td>
                                        <td class="text-center removeTecladoBrx"><i class="fa-solid fa-trash text-danger"></i></td>
                                        <td>R$${totalTecladoBrx.toFixed(2)}</td>
                                    </tr>            
                                `;
            }

            //teclado multi
            if (tecladoMulti != null && tecladoMulti > 0) {
                tabelaDoCarrinho.innerHTML += `
                                    <tr> 
                                        <td>Teclado gamer multimidia</td>
                                        <td class="valorTecladoMulti"></td>
                                        <td>${tecladoMulti}</td>
                                        <td class="text-center removeTecladoMulti"><i class="fa-solid fa-trash text-danger"></i></td>
                                        <td>R$${totalTecladoMulti.toFixed(2)}</td>
                                    </tr>            
                                `;
            }

            //teclado Logitech
            if (tecladoLogitech != null && tecladoLogitech > 0) {
                tabelaDoCarrinho.innerHTML += `
                                    <tr> 
                                        <td>Teclado logitech MX KEYS</td>
                                        <td class="valorTecladoLogitech"></td>
                                        <td>${tecladoLogitech}</td>
                                        <td class="text-center removeTecladoLogitech"><i class="fa-solid fa-trash text-danger"></i></td>
                                        <td>R$${totalTecladoLogitech.toFixed(2)}</td>
                                    </tr>            
                                `;
            }

            //Teclado cooler
            if (tecladoCooler != null && tecladoCooler > 0) {
                tabelaDoCarrinho.innerHTML += `
                                    <tr> 
                                        <td>Teclado mecanico Cooler Master</td>
                                        <td class="valorTecladoCooler"></td>
                                        <td>${tecladoCooler}</td>
                                        <td class="text-center removeTecladoCooler"><i class="fa-solid fa-trash text-danger"></i></td>
                                        <td>R$${totalTecladoCooler.toFixed(2)}</td>
                                    </tr>            
                                `;
            }


            //Teclado Viper
            if (tecladoViper != null && tecladoViper > 0) {
                tabelaDoCarrinho.innerHTML += `
                                            <tr> 
                                                <td>Teclado mecanico PATRIOT VIPER</td>
                                                <td class="valorTecladoViper"></td>
                                                <td>${tecladoViper}</td>
                                                <td class="text-center removeTecladoViper"><i class="fa-solid fa-trash text-danger"></i></td>
                                                <td>R$${totalTecladoViper.toFixed(2)}</td>
                                            </tr>            
                                        `;
            }

            //Teclado Aoc
            if (tecladoAoc != null && tecladoAoc > 0) {
                tabelaDoCarrinho.innerHTML += `
                                                        <tr> 
                                                            <td>Teclado mecanico AOC</td>
                                                            <td class="valorTecladoAoc"></td>
                                                            <td>${tecladoAoc}</td>
                                                            <td class="text-center removeTecladoAoc"><i class="fa-solid fa-trash text-danger"></i></td>
                                                            <td>R$${totalTecladoAoc.toFixed(2)}</td>
                                                        </tr>            
                                                    `;
            }



            ////////////////////////////////////////////////////////////////////////
            // MONTAR TABELA COM PRODUTOS DA TELA MOUSE

            //mouseAoc
            if (mouseAoc != null && mouseAoc > 0) {
                tabelaDoCarrinho.innerHTML += `
                                                        <tr> 
                                                            <td>Mouse Gamer AOC</td>
                                                            <td class="valorMouseAoc"></td>
                                                            <td>${mouseAoc}</td>
                                                            <td class="text-center removeMouseAoc"><i class="fa-solid fa-trash text-danger"></i></td>
                                                            <td>R$${totalMouseAoc.toFixed(2)}</td>
                                                        </tr>            
                                                    `;
            }

            //mouseLogitech
            if (mouseLogitech != null && mouseLogitech > 0) {
                tabelaDoCarrinho.innerHTML += `
                                                                <tr> 
                                                                    <td>Mouse Gamer Logitech</td>
                                                                    <td class="valorMouseLogitech"></td>
                                                                    <td>${mouseLogitech}</td>
                                                                    <td class="text-center removeMouseLogitech"><i class="fa-solid fa-trash text-danger"></i></td>
                                                                    <td>R$${totalMouseLogitech.toFixed(2)}</td>
                                                                </tr>            
                                                            `;
            }

            //mouseLogitechRosa
            if (mouseLogitechRosa != null && mouseLogitechRosa > 0) {
                tabelaDoCarrinho.innerHTML += `
                                                                <tr> 
                                                                    <td>Mouse Gamer Logitech Sem fio</td>
                                                                    <td class="valorMouseLogitechRosa"></td>
                                                                    <td>${mouseLogitechRosa}</td>
                                                                    <td class="text-center removeMouseLogitechRosa"><i class="fa-solid fa-trash text-danger"></i></td>
                                                                    <td>R$${totalMouseLogitechRosa.toFixed(2)}</td>
                                                                </tr>            
                                                            `;
            }
            
            //mouseFallen
            if (mouseFallen != null && mouseFallen > 0) {
                tabelaDoCarrinho.innerHTML += `
                                                                <tr> 
                                                                    <td>Mouse Gamer Fallen</td>
                                                                    <td class="valorMouseFallen"></td>
                                                                    <td>${mouseFallen}</td>
                                                                    <td class="text-center removeMouseFallen"><i class="fa-solid fa-trash text-danger"></i></td>
                                                                    <td>R$${totalMouseFallen.toFixed(2)}</td>
                                                                </tr>            
                                                            `;
            }

            //mouseSteel
            if (mouseSteel != null && mouseSteel > 0) {
                tabelaDoCarrinho.innerHTML += `
                                                                <tr> 
                                                                    <td>Mouse Gamer SteelSeries</td>
                                                                    <td class="valorMouseSteel"></td>
                                                                    <td>${mouseSteel}</td>
                                                                    <td class="text-center removeMouseSteel"><i class="fa-solid fa-trash text-danger"></i></td>
                                                                    <td>R$${totalMouseSteel.toFixed(2)}</td>
                                                                </tr>            
                                                            `;
            }


            //mouseCorsair
            if (mouseCorsair != null && mouseCorsair > 0) {
                tabelaDoCarrinho.innerHTML += `
                                                                <tr> 
                                                                    <td>Mouse Gamer Corsair</td>
                                                                    <td class="valorMouseCorsair"></td>
                                                                    <td>${mouseCorsair}</td>
                                                                    <td class="text-center removeMouseCorsair"><i class="fa-solid fa-trash text-danger"></i></td>
                                                                    <td>R$${totalMouseCorsair.toFixed(2)}</td>
                                                                </tr>            
                                                            `;
            }

            //mouseAcer
            if (mouseAcer != null && mouseAcer > 0) {
                tabelaDoCarrinho.innerHTML += `
                                                                <tr> 
                                                                    <td>Mouse Gamer Acer</td>
                                                                    <td class="valorMouseAcer"></td>
                                                                    <td>${mouseAcer}</td>
                                                                    <td class="text-center removeMouseAcer"><i class="fa-solid fa-trash text-danger"></i></td>
                                                                    <td>R$${totalMouseAcer.toFixed(2)}</td>
                                                                </tr>            
                                                            `;
            }

            //mouseBenQ
            if (mouseBenQ != null && mouseBenQ > 0) {
                tabelaDoCarrinho.innerHTML += `
                                                                <tr> 
                                                                    <td>Mouse Gamer BenQ </td>
                                                                    <td class="valorMouseBenQ"></td>
                                                                    <td>${mouseBenQ}</td>
                                                                    <td class="text-center removeMouseBenQ"><i class="fa-solid fa-trash text-danger"></i></td>
                                                                    <td>R$${totalMouseBenQ.toFixed(2)}</td>
                                                                </tr>            
                                                            `;
            }
            

                //MONTAR TABELA COM PRODUTOS DA TELA PROCESSADORES

            //ProcessadorAmd7
            if (processadorAmd7 != null && processadorAmd7 > 0) {
                tabelaDoCarrinho.innerHTML += `
                                                                <tr> 
                                                                    <td>Processador AMD Ryzen 7 </td>
                                                                    <td class="valorProcessadorAmd7"></td>
                                                                    <td>${processadorAmd7}</td>
                                                                    <td class="text-center removeProcessadorAmd7"><i class="fa-solid fa-trash text-danger"></i></td>
                                                                    <td>R$${totalProcessadorAmd7.toFixed(2)}</td>
                                                                </tr>            
                                                            `;
            }

            
      //ProcessadorAmd5
      if (processadorAmd5 != null && processadorAmd5 > 0) {
        tabelaDoCarrinho.innerHTML += `
                                                        <tr> 
                                                            <td>Processador AMD Ryzen 5 </td>
                                                            <td class="valorProcessadorAmd5"></td>
                                                            <td>${processadorAmd5}</td>
                                                            <td class="text-center removeProcessadorAmd5"><i class="fa-solid fa-trash text-danger"></i></td>
                                                            <td>R$${totalProcessadorAmd5.toFixed(2)}</td>
                                                        </tr>            
                                                    `;
    }

          //ProcessadorI5
          if (processadorI5 != null && processadorI5 > 0) {
            tabelaDoCarrinho.innerHTML += `
                                                            <tr> 
                                                                <td>Processador Intel Core i5</td>
                                                                <td class="valorProcessadorI5"></td>
                                                                <td>${processadorI5}</td>
                                                                <td class="text-center removeProcessadorI5"><i class="fa-solid fa-trash text-danger"></i></td>
                                                                <td>R$${totalProcessadorI5.toFixed(2)}</td>
                                                            </tr>            
                                                        `;
        }

            //ProcessadorI9
            if (processadorI9 != null && processadorI9 > 0) {
                tabelaDoCarrinho.innerHTML += `
                                                                <tr> 
                                                                    <td>Processador Intel Core i9</td>
                                                                    <td class="valorProcessadorI9"></td>
                                                                    <td>${processadorI9}</td>
                                                                    <td class="text-center removeProcessadorI9"><i class="fa-solid fa-trash text-danger"></i></td>
                                                                    <td>R$${totalProcessadorI9.toFixed(2)}</td>
                                                                </tr>            
                                                            `;
            }
          
      //ProcessadorAmd9
      if (processadorAmd9 != null && processadorAmd9 > 0) {
        tabelaDoCarrinho.innerHTML += `
                                                        <tr> 
                                                            <td>Processador AMD Ryzen 9 </td>
                                                            <td class="valorProcessadorAmd9"></td>
                                                            <td>${processadorAmd9}</td>
                                                            <td class="text-center removeProcessadorAmd9"><i class="fa-solid fa-trash text-danger"></i></td>
                                                            <td>R$${totalProcessadorAmd9.toFixed(2)}</td>
                                                        </tr>            
                                                    `;
    }

            //ProcessadorI7
            if (processadorI7 != null && processadorI7 > 0) {
                tabelaDoCarrinho.innerHTML += `
                                                                <tr> 
                                                                    <td>Processador Intel Core i7</td>
                                                                    <td class="valorProcessadorI7"></td>
                                                                    <td>${processadorI7}</td>
                                                                    <td class="text-center removeProcessadorI7"><i class="fa-solid fa-trash text-danger"></i></td>
                                                                    <td>R$${totalProcessadorI7.toFixed(2)}</td>
                                                                </tr>            
                                                            `;
            }

            //ProcessadorI5 Geração 10
            if (processadorI5Ger10 != null && processadorI5Ger10 > 0) {
                tabelaDoCarrinho.innerHTML += `
                                                                <tr> 
                                                                    <td>Processador Intel Core i5 10ºGeração</td>
                                                                    <td class="valorProcessadorI5Ger10"></td>
                                                                    <td>${processadorI5Ger10}</td>
                                                                    <td class="text-center removeProcessadorI5Ger10"><i class="fa-solid fa-trash text-danger"></i></td>
                                                                    <td>R$${totalProcessadorI5Ger10.toFixed(2)}</td>
                                                                </tr>            
                                                            `;
            }

            //ProcessadorAmd3
            if (processadorAmd3 != null && processadorAmd3 > 0) {
                tabelaDoCarrinho.innerHTML += `
                                                                <tr> 
                                                                    <td>Processador AMD Ryzen 3 </td>
                                                                    <td class="valorProcessadorAmd3"></td>
                                                                    <td>${processadorAmd3}</td>
                                                                    <td class="text-center removeProcessadorAmd3"><i class="fa-solid fa-trash text-danger"></i></td>
                                                                    <td>R$${totalProcessadorAmd3.toFixed(2)}</td>
                                                                </tr>            
                                                            `;
            }       
            
            //  //MONTAR TABELA COM PRODUTOS DA TELA PROCESSADORES

             //Monitor Ultragear
             if (monitorUltragear != null && monitorUltragear > 0) {
                tabelaDoCarrinho.innerHTML += `
                                                                <tr> 
                                                                    <td>Monitor Gamer LG UltraGear </td>
                                                                    <td class="valorMonitorUltragear"></td>
                                                                    <td>${monitorUltragear}</td>
                                                                    <td class="text-center removeMonitorUltragear"><i class="fa-solid fa-trash text-danger"></i></td>
                                                                    <td>R$${totalMonitorUltragear.toFixed(2)}</td>
                                                                </tr>            
                                                            `;
            }       

             //Monitor Samsung
             if (monitorSamsung != null && monitorSamsung > 0) {
                tabelaDoCarrinho.innerHTML += `
                                                                <tr> 
                                                                    <td>Monitor Gamer Samsung </td>
                                                                    <td class="valorMonitorSamsung"></td>
                                                                    <td>${monitorSamsung}</td>
                                                                    <td class="text-center removeMonitorSamsung"><i class="fa-solid fa-trash text-danger"></i></td>
                                                                    <td>R$${totalMonitorSamsung.toFixed(2)}</td>
                                                                </tr>            
                                                            `;
            }                
                       
             //Monitor Concordia
             if (monitorConcordia != null && monitorConcordia > 0) {
                tabelaDoCarrinho.innerHTML += `
                                                                <tr> 
                                                                    <td>Monitor Concórdia Gamer  </td>
                                                                    <td class="valorMonitorConcordia"></td>
                                                                    <td>${monitorConcordia}</td>
                                                                    <td class="text-center removeMonitorConcordia"><i class="fa-solid fa-trash text-danger"></i></td>
                                                                    <td>R$${totalMonitorConcordia.toFixed(2)}</td>
                                                                </tr>            
                                                            `;
            }                
                      
             //Monitor ASUS
             if (monitorAsus != null && monitorAsus > 0) {
                tabelaDoCarrinho.innerHTML += `
                                                                <tr> 
                                                                    <td>Monitor Gamer Asus  </td>
                                                                    <td class="valorMonitorAsus"></td>
                                                                    <td>${monitorAsus}</td>
                                                                    <td class="text-center removeMonitorAsus"><i class="fa-solid fa-trash text-danger"></i></td>
                                                                    <td>R$${totalMonitorAsus.toFixed(2)}</td>
                                                                </tr>            
                                                            `;
            }    

             //Monitor Aoc
             if (monitorAoc != null && monitorAoc > 0) {
                tabelaDoCarrinho.innerHTML += `
                                                                <tr> 
                                                                    <td>Monitor Gamer AOC </td>
                                                                    <td class="valorMonitorAoc"></td>
                                                                    <td>${monitorAoc}</td>
                                                                    <td class="text-center removeMonitorAoc"><i class="fa-solid fa-trash text-danger"></i></td>
                                                                    <td>R$${totalMonitorAoc.toFixed(2)}</td>
                                                                </tr>            
                                                            `;
            }              
            
             //Monitor Acer
             if (monitorAcer != null && monitorAcer > 0) {
                tabelaDoCarrinho.innerHTML += `
                                                                <tr> 
                                                                    <td>Monitor Gamer Acer</td>
                                                                    <td class="valorMonitorAcer"></td>
                                                                    <td>${monitorAcer}</td>
                                                                    <td class="text-center removeMonitorAcer"><i class="fa-solid fa-trash text-danger"></i></td>
                                                                    <td>R$${totalMonitorAcer.toFixed(2)}</td>
                                                                </tr>            
                                                            `;
            }                          

             //Monitor Husky
             if (monitorHusky != null && monitorHusky > 0) {
                tabelaDoCarrinho.innerHTML += `
                                                                <tr> 
                                                                    <td>Monitor Gamer Husky </td>
                                                                    <td class="valorMonitorHusky"></td>
                                                                    <td>${monitorHusky}</td>
                                                                    <td class="text-center removeMonitorHusky"><i class="fa-solid fa-trash text-danger"></i></td>
                                                                    <td>R$${totalMonitorHusky.toFixed(2)}</td>
                                                                </tr>            
                                                            `;
            }     

             //Monitor Lg
             if (monitorLg != null && monitorLg > 0) {
                tabelaDoCarrinho.innerHTML += `
                                                                <tr> 
                                                                    <td>Monitor LG  </td>
                                                                    <td class="valorMonitorLg"></td>
                                                                    <td>${monitorLg}</td>
                                                                    <td class="text-center removeMonitorLg"><i class="fa-solid fa-trash text-danger"></i></td>
                                                                    <td>R$${totalMonitorLg.toFixed(2)}</td>
                                                                </tr>            
                                                            `;
            }     



            // Total Final
            tabelaDoCarrinho.innerHTML += `
                <tr>
                    <th colspan="4">Total a Pagar</th>
                    <td>R$${ totalCarrinho.toFixed(2)}</td>
                </tr>
            `;

            valorProdutos();
        } catch (erro) {
            console.log("ERROOOOOOO");
            console.log(erro);
        }
    }


    // Colocar Valor do Produto onde for Preciso
    function valorProdutos() {

       
        //PASSAR OS VALORES DOS PRODUTOS NA TABELA DA ABA HOME

        $('.valorMouseRed').html('R$' + valorMouseRed.toFixed(2))
        $('.valorMouseHyper').html('R$' + valorMouseHyper.toFixed(2))
        $('.valorTecladoHyper').html('R$' + valorTecladoHyper.toFixed(2))
        $('.valorTecladoHusky').html('R$' + valorTecladoHusky.toFixed(2))
        $('.valorHeadsetHyper').html('R$' + valorHeadsetHyper.toFixed(2))
        $('.valorHeadsetHyper2').html('R$' + valorHeadsetHyper2.toFixed(2))
        $('.valorMicrofoneHyper').html('R$' + valorMicrofoneHyper.toFixed(2))
        $('.valorMicrofoneKrom').html('R$' + valorMicrofoneKrom.toFixed(2))

        //PASSAR OS VALORES DOS PRODUTOS NA TABELA DA ABA TECLADOS
        $('.valorTecladoBrx').html('R$' + valorTecladoBrx.toFixed(2))
        $('.valorTecladoMulti').html('R$' + valorTecladoMulti.toFixed(2))
        $('.valorTecladoLogitech').html('R$' + valorTecladoLogitech.toFixed(2))
        $('.valorTecladoCooler').html('R$' + valorTecladoCooler.toFixed(2))
        $('.valorTecladoViper').html('R$' + valorTecladoViper.toFixed(2))
        $('.valorTecladoAoc').html('R$' + valorTecladoAoc.toFixed(2))

        //PASSAR OS VALORES DOS PRODUTOS NA TABELA DA ABA TECLADOS
        $('.valorMouseAoc').html('R$' + valorMouseAoc.toFixed(2))
        $('.valorMouseLogitech').html('R$' + valorMouseLogitech.toFixed(2))
        $('.valorMouseLogitechRosa').html('R$' + valorMouseLogitechRosa.toFixed(2))
        $('.valorMouseFallen').html('R$' + valorMouseFallen.toFixed(2))
        $('.valorMouseSteel').html('R$' + valorMouseSteel.toFixed(2))
        $('.valorMouseCorsair').html('R$' + valorMouseCorsair.toFixed(2))
        $('.valorMouseAcer').html('R$' + valorMouseAcer.toFixed(2))
        $('.valorMouseBenQ').html('R$' + valorMouseBenQ.toFixed(2))
        
        //PASSAR OS VALORES DOS PRODUTOS NA TABELA DA ABA PROCESSADORES
        $('valorProcessadorAmd7').html('R$' + valorProcessadorAmd7.toFixed(2))
        $('valorProcessadorAmd5').html('R$' + valorProcessadorAmd5.toFixed(2))
        $('valorProcessadorI5').html('R$' + valorProcessadorI5.toFixed(2))
        $('valorProcessadorI9').html('R$' + valorProcessadorI9.toFixed(2))
        $('valorProcessadorAmd9').html('R$' + valorProcessadorAmd9.toFixed(2))
        $('valorProcessadorI7').html('R$' + valorProcessadorI7.toFixed(2))
        $('valorProcessadorI5Ger10').html('R$' + valorProcessadorI5Ger10.toFixed(2))
        $('valorProcessadorAmd3').html('R$' + valorProcessadorAmd3.toFixed(2))
        

        //  //PASSAR OS VALORES DOS PRODUTOS NA TABELA DA ABA MONITORES
         $('valorMonitorUltragear').html('R$' + valorMonitorUltragear.toFixed(2))
         $('valorMonitorSamsung').html('R$' + valorMonitorSamsung.toFixed(2))
         $('valorMonitorConcordia').html('R$' + valorMonitorConcordia.toFixed(2))
         $('valorMonitorAsus').html('R$' + valorMonitorAsus.toFixed(2))
         $('valorMonitorAoc').html('R$' + valorMonitorAoc.toFixed(2))
         $('valorMonitorAcer').html('R$' + valorMonitorAcer.toFixed(2))
         $('valorMonitorHusky').html('R$' + valorMonitorHusky.toFixed(2))
         $('valorMonitorLg').html('R$' + valorMonitorLg.toFixed(2))
        
    }





});