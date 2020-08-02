class Quiz {
    questions = [
        {
            text: "Estou tão feliz hoje. Como é bom a sua presença aqui! Preciso que você pense em um número de 0 a 1000 e eu tentarei adivinhar com 10 perguntas, tudo bem?",
            img: "question/1.png",
            voice: "question/1.mp3"
        },
        {
            text: "Ahhhhhh, então você irá brincar comigo? Tudo bem, então pense em um número de 0 a 1000 e eu darei o meu máximo para adivinhar!",
            img: "question/2.png",
            voice: "question/2.mp3"
        },
        {
            text: "Humnn. Eu estive estudando o dia inteiro e acredito ser capaz de ler seus pensamentos! Pense em um número de 0 a 1000 e eu irei te fazer algumas perguntas!",
            img: "question/3.png",
            voice: "question/3.mp3"
        },
        {
            text: "Você já deve saber o que eu quero né?! Mas no momento iremos só jogar um jogo, ok? Pense em um número de 0 a 1000 e com algumas perguntas eu irei te falar em qual você pensou!",
            img: "question/4.png",
            voice: "question/4.mp3"
        },
        {
            text: "V-você gostaria de participar de um jogo? Espero muito que sim! Eu preciso que você pense em um número de 0 a 1000 e então eu tentarei adivinhar em qual você pensou, ok?",
            img: "question/5.png",
            voice: "question/5.mp3"
        }
    ]

    right = [
        {
            text: "Ahhh que bom que eu acertei! Vamos jogar novamente?",
            img: "right/1.png",
            voice: "right/1.mp3"
        },
        {
            text: "Parabéns!!! Quase pensei que não iria acertar, mas consegui! Posso tentar mais uma vez?",
            img: "right/2.gif",
            voice: "right/2.mp3"
        },
        {
            text: "Ok ok... Eu consegui acertar o número que você estava imaginando! Quer ver novamente minhas habilidades?",
            img: 'right/3.png',
            voice: "right/3.mp3"
        },
        {
            text: "Ownnnt! Estou tão feliz comigo mesma! Vamos jogar novamente para saber se não foi sorte?",
            img: "right/4.png",
            voice: "right/4.mp3"
        }
    ]

    wrong = [
        {
            text: "Não!!!! Você só pode estar de sacanagem comigo né?! Me dê mais uma chance para você ver como eu realmente consigo!",
            img: "wrong/1.png",
            voice: "wrong/1.mp3"
        },
        {
            text: "Eu estou tão decepcionada comigo mesma.... Posso tentar novamente? Prometo tentar não te decepcionar dessa vez...",
            img: "wrong/2.png",
            voice: "wrong/2.mp3"
        },
        {
            text: "Eu sinto muito muito mesmo. Eu sou uma completa decepção! Posso tentar uma última vez?",
            img: "wrong/3.png",
            voice: "wrong/3.mp3"
        },
        {
            text: "Hihihi, quem diria que eu iria errar né?! Mas ok ok.... Vamos tentar novamente?",
            img: "wrong/4.png",
            voice: "wrong/4.mp3"
        }
    ]

    asking = [
        "asking/1.png",
        "asking/2.png",
        "asking/3.png",
        "asking/4.png"
    ]

    constructor() {
        this.currentAsking = 0;
    }

    getAsking() {
        const imagePath = this.asking[this.currentAsking];
        this.currentAsking++;
        if (this.currentAsking === this.asking.length) {
            this.currentAsking = 0;
        }
        return imagePath;
    }

    getQuestions() {
        return this.questions;
    }

    getRightMessages() {
        return this.right;
    }

    getWrongMessages(){
        return this.wrong;
    }
}