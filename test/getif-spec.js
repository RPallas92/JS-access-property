'use strict';

var expect = require('chai').expect;
var getIf = require('../lib/getIf');


describe('getIf', function() {

    before(function() {
        this.testObject = {
            a: {
                b: {
                    c: {
                        d: true
                    }
                }
            }
        }
    });

    it('will return the property if it exists in the object', function() {
        var path = 'a.b.c.d';
        var result = getIf(this.testObject, path);
        expect(result).to.be.true;
    });

    it('will return null if the property does not exists in the object and it has no defaultValue', function() {
        var path = 'a.b.c.d.e.e';
        var result = getIf(this.testObject, path);
        expect(result).to.be.null;
    });

    it('will return the defaultValue if the property does not exists in the object and it has defaultValue', function() {
        var path = 'a.b.c.d.e.e';
        var defaultValue = 'hack';
        var result = getIf(this.testObject, path, defaultValue)
        expect(result).to.be.equal(defaultValue);
    });

})