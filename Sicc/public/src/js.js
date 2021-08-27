//Animação dos cards durante clique (utilizando Jquery)
$(document).ready(function() {
    $(".card-home").click(function(event) {
        event.preventDefault();
        var link = $(this).attr("href");
        $(this).addClass("animate__animated animate__flipOutX animate__faster");
        setTimeout(function() {
            $(".card").addClass("animate__animated animate__fadeOut animate__faster");
            $(".rounded-start").addClass("animate__animated animate__fadeOutRight animate__faster");
            $(".menu-lateral").addClass("animate__animated animate__slideOutLeft animate__faster");
            setTimeout(function() {
                window.location.href = link;
            }, 400);
        }, 200);
    });
});

//Validação do formulário com Javascript

function novoChamado() {
    let tombo = document.getElementById("tombo").value;
    let tipoProblema = document.getElementById("tipoProblema").value;
    let descricao = document.getElementById("descricao").value;

    if (tombo == "") {
        document.getElementById("mensagemChamado").innerHTML = "Digite um número de tombamento.";
    } else if (tipoProblema == 0) {
        document.getElementById("mensagemChamado").innerHTML = "Selecione um tipo de problema.";
    } else if (descricao == "") {
        document.getElementById("mensagemChamado").innerHTML = "Descreva o problema";
    } else {
        if (descricao.length < 10) {
            document.getElementById("mensagemChamado").innerHTML = "Descreva o problema mais detalhadamente.";
        } else {
            if (tombo.length != 6) {
                document.getElementById("mensagemChamado").innerHTML = "O tombamento precisa ter 6 dígitos.";
            } else {
                document.getElementById("mensagemChamado").innerHTML = "Chamado incluído no sistema!";
            }

        }
    }
    $("#mensagemChamado").removeClass("d-none");
}