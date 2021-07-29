class Cnn {

    _descriptions = [
        'A empresa de número 1 é caracterizada pela energia do princípio, o poder da vontade, habilidade, confiança, razão e justiça.É um bom número para trabalhos em preparação.Alcançará o objetivo aquele que perseverar com honestidade, já que a energia condutora deste destino exige que este seja justo.O número 1 é indicado para empresas de contabilidade, imobiliárias e financiadoras de crédito.',
        'A empresa regida pela energia do número 2, é uma empresa que está sob a influência da luta por uma causa ou um ideal, que bem pode ser relacionada ao seu sucesso.Pesquisar e estudar o caminho que pretende percorrer fará a diferença para o alcance dos seus sonhos, que pode levar tempo, mas este será alcançado.O número 2 também pode ser um número atraente de energias perseverantes que de qualquer forma levam o homem ao sucesso.A sua interpretação também pode ser a mesma do número 11.',
        'A empresa que é representada pelo número 3 é caracterizada pela energia da fecundidade, da comunicação, da felicidade e do amor.Alcançará o objetivo de sucesso aquele que entender que o sonho possível pode ser mais facilmente criado se cultivado na sua retidão de espírito, ou seja, a empresa deverá seguir com o propósito pelo qual se faz guiado o seu destino, respeitando o seu público e mantendo a comunicação com a empresa, acessível.O número 3 é indicado para empresas relacionadas à publicidade, comunicação e criação.',
        'A empresa de número 4 é representada pelo Imperador, aquele que realiza, estabiliza e protege.Por ser de natureza imperativa pode alcançar os 4 cantos do mundo, desde que, em perfeita ordem e organização científica.É um número que atrai energias de difícil adequação para a maioria das pessoas, portanto não é indicada para negócios.',
        'A empresa de número 5 está sob a inspiração, a inteligência, e a numero 5acumulação.Sua energia canalizada é importante para a evolução, mas como tende a acumular objetos, pessoas, e papéis, deve manter-se regrada e bem disciplinada.O número 5 é um número indicado para empresas de turismo, entretenimento e lazer.',
        'A empresa de número 6 é inspirada pela energia da beleza e da atração.Sua energia pode ser acolhedora pois favorece que o bem e o mal se equilibrem, seu ambiente empresarial busca sempre o bem estar, a harmonia e a receptividade materna e a beleza exterior.É um número indicado para empresas que oferecem refeição e moradia, do tipo, restaurantes, lanchonetes,padarias, pousadas e hotéis, mas também pode ser um número bastante atrativo para salões de beleza, spa e estética.',
        'A empresa regida pela energia do número 7 tende a ser mais introspectiva.O número 7 atrai energias de fundo emocional e contemplativo do ser interior, oferece isolamento, quietude  melancolia e constante  análise de pensamentos.Não é um bom número para empresas, por ser de difícil adequação.',
        'A empresa de número 8 é regida por energias ativas de competição e movimentação de dinheiro.É um bom número para atrair boas oportunidades de negócio, com grandes benefícios financeiros. Pode ser utilizada por empresas que disputam um espaço concorrido no mercado como, sites de leilão e corretoras de valores.',
        'A empresa de número 9 passa por períodos de encerramentos constantes.Para poder crescer e alcançar o sucesso precisa aprender a lidar com a mudança brusca de ambiente, situação financeira e abalos de ordem física,  como acidentes.A prudência máxima passa a ser definitiva para a empresa que está sob este número.O número 9 atrai energias de difícil adequação para o ser humano que não sabe encarar os encerramentos de planos e projetos como um propósito para um novo começo, por isso não é um número indicado para os negócios.',
        'A empresa de número 11 é uma empresa que luta e ultrapassa seus obstáculos com a força de um leão.É bem sucedida por que é regida pelas energias da liberdade e da coragem, que a faz tornar-se forte e confiante.A empresa de número 11 passa por cima das dificuldades e supera seus limites, é um número indicado para as empresas que almejam o sucesso e a prosperidade'
    ]

    _letters = [
        ['a', 'j', 's'],
        ['b', 'k', 't'],
        ['c', 'l', 'u'],
        ['d', 'm', 'v'],
        ['e', 'n', 'w'],
        ['f', 'o', 'x'],
        ['g', 'p', 'y'],
        ['h', 'q', 'z'],
        ['i', 'r']
    ]

    constructor() {}

    getNumber(name) {

        if (!name) { return -1 };

        let stringNumbers = this._getStringNumbers(name);
        let number = this._reduceStringNumbers(stringNumbers);

        return number;

    }

    _getStringNumbers(string) {

        if (!string) { return '' };

        let stringLetters = string
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^\w\s]/gi, '')
            .replace('_', '')
            .split('');

        for (let i = 0; i < stringLetters.length; i++) {

            const letter = stringLetters[i];

            if (!this._isNumber(letter)) {

                for (let j = 0; j < this._letters.length; j++) {

                    if (this._letters[j].indexOf(letter) != -1) {
                        stringLetters[i] = j + 1;
                    }

                }

            }

        }

        return stringLetters.join('');
    }

    _isNumber(string) {

        return !isNaN(string);

    }

    _reduceStringNumbers(stringNumbers) {

        if (!stringNumbers || isNaN(stringNumbers)) { return };

        let numbers = stringNumbers.split('');
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += Number(numbers[i]);

        }

        numbers = sum.toString().split('');
        if (sum != 11 && numbers.length > 1) { 
            sum = this._reduceStringNumbers(numbers.join('')); 
        }

        return sum;

    }

}

module.exports = Cnn;