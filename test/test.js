var assert = require('assert');
var ref = require('../code');

var sinon = require('sinon');

describe('code.js', function(){
    describe('addOne Behavioural Tests', function(){
        it('should return 2 when given 1', function(){
            assert.equal(ref.addOne(1), 2);
        } )
    });
    describe('addTwo Behavioural Tests', function(){
        it('should return 3 when given 1', function(){
            assert.equal(ref.addTwo(1), 2);
        } )
    });
    describe('addSix Behavioural Tests', function(){
        afterEach(function(){
            ref.addOne.restore();
            ref.addTwo.restore();
        })
        it('should return 7 when given 1', function(){
            sinon.stub(ref, 'addOne').onCall(0).returns(2);
            sinon.stub(ref, 'addTwo').onCall(0).returns(4);
            assert.equal(ref.addSix(1), 7);
        } )
    });
});
