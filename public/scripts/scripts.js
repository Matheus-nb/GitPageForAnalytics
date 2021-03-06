function Avaliar(estrela) {
    var url = window.location;
    url = url.toString()
    url = url.split("/views/Avaliacao.html");
    url = url[0];

    var s1 = document.getElementById("s1").src;
    var s2 = document.getElementById("s2").src;
    var s3 = document.getElementById("s3").src;
    var s4 = document.getElementById("s4").src;
    var s5 = document.getElementById("s5").src;
    var avaliacao = 0;

    if (estrela == 5) {
        if (s5 == url + "/public/assets/star0.png") {
            document.getElementById("s1").src = "../public/assets/star1.png";
            document.getElementById("s2").src = "../public/assets/star1.png";
            document.getElementById("s3").src = "../public/assets/star1.png";
            document.getElementById("s4").src = "../public/assets/star1.png";
            document.getElementById("s5").src = "../public/assets/star1.png";
            avaliacao = 5;
        } else {
            document.getElementById("s1").src = "../public/assets/star1.png";
            document.getElementById("s2").src = "../public/assets/star1.png";
            document.getElementById("s3").src = "../public/assets/star1.png";
            document.getElementById("s4").src = "../public/assets/star1.png";
            document.getElementById("s5").src = "../public/assets/star0.png";
            avaliacao = 4;
        }
    }

    //ESTRELA 4
    if (estrela == 4) {
        if (s4 == url + "/public/assets/star0.png") {
            document.getElementById("s1").src = "../public/assets/star1.png";
            document.getElementById("s2").src = "../public/assets/star1.png";
            document.getElementById("s3").src = "../public/assets/star1.png";
            document.getElementById("s4").src = "../public/assets/star1.png";
            document.getElementById("s5").src = "../public/assets/star0.png";
            avaliacao = 4;
        } else {
            document.getElementById("s1").src = "../public/assets/star1.png";
            document.getElementById("s2").src = "../public/assets/star1.png";
            document.getElementById("s3").src = "../public/assets/star1.png";
            document.getElementById("s4").src = "../public/assets/star0.png";
            document.getElementById("s5").src = "../public/assets/star0.png";
            avaliacao = 3;
        }
    }

    //ESTRELA 3
    if (estrela == 3) {
        if (s3 == url + "/public/assets/star0.png") {
            document.getElementById("s1").src = "../public/assets/star1.png";
            document.getElementById("s2").src = "../public/assets/star1.png";
            document.getElementById("s3").src = "../public/assets/star1.png";
            document.getElementById("s4").src = "../public/assets/star0.png";
            document.getElementById("s5").src = "../public/assets/star0.png";
            avaliacao = 3;
        } else {
            document.getElementById("s1").src = "../public/assets/star1.png";
            document.getElementById("s2").src = "../public/assets/star1.png";
            document.getElementById("s3").src = "../public/assets/star0.png";
            document.getElementById("s4").src = "../public/assets/star0.png";
            document.getElementById("s5").src = "../public/assets/star0.png";
            avaliacao = 2;
        }
    }

    //ESTRELA 2
    if (estrela == 2) {
        if (s2 == url + "/public/assets/star0.png") {
            document.getElementById("s1").src = "../public/assets/star1.png";
            document.getElementById("s2").src = "../public/assets/star1.png";
            document.getElementById("s3").src = "../public/assets/star0.png";
            document.getElementById("s4").src = "../public/assets/star0.png";
            document.getElementById("s5").src = "../public/assets/star0.png";
            avaliacao = 2;
        } else {
            document.getElementById("s1").src = "../public/assets/star1.png";
            document.getElementById("s2").src = "../public/assets/star0.png";
            document.getElementById("s3").src = "../public/assets/star0.png";
            document.getElementById("s4").src = "../public/assets/star0.png";
            document.getElementById("s5").src = "../public/assets/star0.png";
            avaliacao = 1;
        }
    }

    //ESTRELA 1
    if (estrela == 1) {
        if (s1 == url + "/public/assets/star0.png") {
            document.getElementById("s1").src = "../public/assets/star1.png";
            document.getElementById("s2").src = "../public/assets/star0.png";
            document.getElementById("s3").src = "../public/assets/star0.png";
            document.getElementById("s4").src = "../public/assets/star0.png";
            document.getElementById("s5").src = "../public/assets/star0.png";
            avaliacao = 1;
        } else {
            document.getElementById("s1").src = "../public/assets/star0.png";
            document.getElementById("s2").src = "../public/assets/star0.png";
            document.getElementById("s3").src = "../public/assets/star0.png";
            document.getElementById("s4").src = "../public/assets/star0.png";
            document.getElementById("s5").src = "../public/assets/star0.png";
            avaliacao = 0;
        }
    }



}

function checkFields(event) {

    const ValuesToCheck = [
        "title",
        "image",
        "category",
        "description",
        "link",
    ]

    const isEmpty = ValuesToCheck.find(function (value) {

        const checkIfIsString = typeof event.target[value].value === "string"
        const checkIfIsEmpty = !event.target[value].value.trim()

        if (checkIfIsString && checkIfIsEmpty) {
            return true
        }
    })

    if (isEmpty) {
        event.preventDefault()
        alert("Por favor, preencha todos os campos")
    }

}

function checkFields2(event) {

    const ValuesToCheck = [
        "title",
        "category",
        "description",
        "link",
    ]

    const isEmpty = ValuesToCheck.find(function (value) {

        const checkIfIsString = typeof event.target[value].value === "string"
        const checkIfIsEmpty = !event.target[value].value.trim()

        if (checkIfIsString && checkIfIsEmpty) {
            return true
        }
    })

    if (isEmpty) {
        event.preventDefault()
        alert("Por favor, preencha todos os campos")
    }

}

function sendClickHits(Label) {
    ga('send', 'event', 'Go to', 'click', Label)
}

function sendVideosHits(Label) {
    ga('send', 'event', 'Video', 'play', Label)
}

