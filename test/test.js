var assert = require('assert');
var Cnn = require('../src/Cnn')

describe('CNN', function () {

    let cnn = new Cnn();

    describe('_isNumber', function () {

        it('number is undefined', function () {
            assert.strictEqual(cnn._isNumber(), false);
        });

        it('number is "a"', function () {
            assert.strictEqual(cnn._isNumber("a"), false);
        });

        it('number is "1"', function () {
            assert.strictEqual(cnn._isNumber("1"), true);
        });

        it('number is 1', function () {
            assert.strictEqual(cnn._isNumber(1), true);
        });

    });

    describe('_getStringNumbers', function () {

        it('string is undefined', function () {
            assert.strictEqual(cnn._getStringNumbers(), "");
        });

        it('string is ""', function () {
            assert.strictEqual(cnn._getStringNumbers(""), "");
        });

        it('string is "abc"', function () {
            assert.strictEqual(cnn._getStringNumbers("abc"), "123");
        });

        it('string is "AbC987"', function () {
            assert.strictEqual(cnn._getStringNumbers("AbC987"), "123987");
        });

        it('string is "A@b$c"', function () {
            assert.strictEqual(cnn._getStringNumbers("a@b$c"), "123");
        });

        it('string is "áàãâêéèíìîôóòõôúùüû"', function () {
            assert.strictEqual(cnn._getStringNumbers('áàãâêéèíìîôóòõôúùüû'), "1111555999666663333");
        });

        it('string is "!@#$%¨&*()_+=-§¹²³£¢¬`´{[ª^~}]º<,>.:;?:/°/*-+\\|', function () {
            assert.strictEqual(cnn._getStringNumbers('!@#$%¨&*()_+=-§¹²³£¢¬`´{[ª^~}]º<,>.:;?:/°/*\\-+|'), '');
        });

    });

    describe('_reduceStringNumbers', function () {

        it('string is undefined', function () {
            assert.strictEqual(cnn._reduceStringNumbers(), undefined);
        });

        it('string is "abc"', function () {
            assert.strictEqual(cnn._reduceStringNumbers('abc'), undefined);
        });

        it('string is "12"', function () {
            assert.strictEqual(cnn._reduceStringNumbers('12'), 3);
        });

        it('string is "123"', function () {
            assert.strictEqual(cnn._reduceStringNumbers('123'), 6);
        });

        it('string is "123456789"', function () {
            assert.strictEqual(cnn._reduceStringNumbers('123456789'), 9);
        });

    });

    describe('getNumber', function () {

        it('string is undefined', function () {
            assert.strictEqual(cnn.getNumber(), -1);
        });

        it('string is "LG"', function () {
            assert.strictEqual(cnn.getNumber('LG'), 1);
        });

        it('string is "LG99"', function () {
            assert.strictEqual(cnn.getNumber('LG99'), 1);
        });

        it('string is "LG@99"', function () {
            assert.strictEqual(cnn.getNumber('LG99'), 1);
        });

        it('string is "Dinaa"', function () {
            assert.strictEqual(cnn.getNumber('Dinaa'), 2);
        });

        it('string is "Eletrolupe"', function () {
            assert.strictEqual(cnn.getNumber('Eletrolupe'), 3);
        });

        it('string is "Pedro"', function () {
            assert.strictEqual(cnn.getNumber('Pedro'), 4);
        });

        it('string is "Sorte"', function () {
            assert.strictEqual(cnn.getNumber('Sorte'), 5);
        });

        it('string is "Maria"', function () {
            assert.strictEqual(cnn.getNumber('Maria'), 6);
        });

        it('string is "Tiago"', function () {
            assert.strictEqual(cnn.getNumber('Tiago'), 7);
        });

        it('string is "Sumitomo"', function () {
            assert.strictEqual(cnn.getNumber('Sumitomo'), 8);
        });

        it('string is "Voto"', function () {
            assert.strictEqual(cnn.getNumber('Voto'), 9);
        });

        it('string is "Gv"', function () {
            assert.strictEqual(cnn.getNumber('Gv'), 11);
        });

        it('string is "José"', function () {
            assert.strictEqual(cnn.getNumber('Jósê'), 4);
        });

        it('string is "Álisson"', function () {
            assert.strictEqual(cnn.getNumber('Álissôn'), 8);
        });

        it('string is "Manhã"', function () {
            assert.strictEqual(cnn.getNumber('Mànhã'), 1);
        });

        it('string is "LonginusNeo"', function () {
            assert.strictEqual(cnn.getNumber('LonginusNeo'), 1);
        });

    });

});