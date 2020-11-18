    function termoRandom(string) {
        if (string.indexOf("|") != -1) {
            var nomeString = string.split("|");
            var nomes = nomeString[1];
            var nome = nomes.split(",");
            var number = Math.floor(Math.random() * nome.length);
            var nomeFinal = nome[number];
            return (nomeString[0] + nomeFinal + nomeString[2]);
        } else {
            return string;
        }
    }
    Lobibox.notify.DEFAULTS = $.extend({}, Lobibox.notify.DEFAULTS, {
        pauseDelayOnHover: false,
        continueDelayOnInactiveTab: false,
        showAfterPrevious: false,
        rounded: false,
        delayIndicator: true,
        sound: false,
        icon: true,
        img: "./images/check-notificacao-branco.png",
        showClass: 'fadeIn',
        hideClass: 'fadeOut',
        size: 'mini',
        closable: false,
        position: 'bottom right',
        delay: 7000, // 7000
        onClickUrl: 'https://app.monetizze.com.br/checkout/DEU90604',
        width: 300
    });

    setTimeout(function () {
        Lobibox.notify("info", {
            title: termoRandom('|11,12,13,14,15,18,43,22,54| pessoas compraram nos últimos 30 minutos'),
            msg: 'Clique e Garanta o Seu Também!'
        });
    }, 5000);

    setTimeout(function () {
        Lobibox.notify("info", {
            title: termoRandom('|Bruna,Joana,Samantha,Marta,Maria,Luana,Bianca,Lí­via,Suzana,Suelen,Millena,Sheyla| acabou de comprar !'),
            msg: 'Ultimas Vagas. Compre Agora!'
        });
    }, 25000);

    setTimeout(function () {
        Lobibox.notify("info", {
            title: termoRandom('|Roberta,Mariana,Priscila,Jéssica,Camila,Natália,Soraya,Fernanda,Joelma,Ana Paula,Gabrielle| comprou a Apostila na promoção!'),
            msg: 'Aproveite, a Oferta está Terminando!'
        });
    }, 50000);

    setTimeout(function () {
        Lobibox.notify("info", {
            title: termoRandom('|Fabri­cia,Paloma,Juliana,Ivonete,Carla,Renata,Beatriz,Emanuele,Cibelly,Victória,Sophia,Hilda| de Maringá/PR comprou!'),
            msg: 'Vai acabar! Clique e Compre Agora Mesmo!'
        });
    }, 75000);

    setTimeout(function () {
        Lobibox.notify("info", {
            title: termoRandom('|Sarah,Viviane,Ana,Carol,Maria Júlia,Monalysa,Isabel,Isabela,Lorena,Jeniffer,Amanda,Lara| comprou agora na Promoção!'),
            msg: 'Clique e Garanta seu Desconto Especial'
        });
    }, 90000);

    setTimeout(function () {
        Lobibox.notify("info", {
            title: termoRandom('|Helena,Alice,Laura,Maria Eduarda,Valentina,Letí­cia,Rebeca,Cecília,Vitória,Aline,Giovana,Lui­za| de Natal/RN comprou o Bolo de Sucessos !'),
            msg: 'Vai acabar! Clique e Compre Agora Mesmo!'
        });
    }, 120000);

    setTimeout(function () {
        Lobibox.notify("info", {
            title: termoRandom('|Jéssica,Vanessa,Melissa,Rafaela,Nicole,Milena,Isabella,Emily,LaÃ­s,Taí­s,Bárbara,Sabrina,Raquel| acabou de comprar !'),
            msg: 'Clique e Garanta o Seu Também!'
        });
    }, 150000);

    setTimeout(function () {
        Lobibox.notify("info", {
            title: termoRandom('|Maria Clara,Patrí­cia,Brenda,Eduarda,Adriana,Débora,Caroline,Alana,Ana Júlia,Raí­ssa,Isis,Emilly| comprou o Ebook na promoção!'),
            msg: 'A Oferta Encerrará em Alguns Minutos...'
        });
    }, 190000);