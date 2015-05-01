'use strict';

describe('Prime', function() {

  it('first', function(){
    expect(nth(1)).toEqual(2);
  });

  it('second', function(){
    expect(nth(2)).toEqual(3);
  });

  it('sixth', function(){
    expect(nth(6)).toEqual(13);
  });

  it('big prime', function(){
    expect(nth(10001)).toEqual(104743);
  });

  it('weird case',function() {
    expect(function () {
      nth(0);
    }).toThrow(new Error("Prime is not possible"));
  });

});
