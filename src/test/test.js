var mocha = require('mocha');
var chai = require('chai');
var assert = chai.assert;
var app =  require('../app');
 



describe('App', () => {

  it('App should return hello', () => {
  
    assert.equal(app.app(),'hello')

  });
});