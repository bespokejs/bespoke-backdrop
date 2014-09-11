Function.prototype.bind = Function.prototype.bind || require('function-bind');

var bespoke = require('bespoke');
var backdrop = require('../../lib-instrumented/bespoke-backdrop.js');

describe("bespoke-backdrop", function() {

  describe("given a presentation with 2 backdrops specified", function() {

    var deck,

      createDeck = function() {
        var parent = document.createElement('article');
        parent.innerHTML = [
          '<section data-bespoke-backdrop="backdrop-1a backdrop-1b"></section>',
          '<section></section>',
          '<section data-bespoke-backdrop="backdrop-2a backdrop-2b"></section>',
          '<section></section>'
        ].join('');

        deck = bespoke.from(parent, [
          backdrop()
        ]);
      };

    beforeEach(createDeck);

    it("should add backdrop elements to the presentation", function() {
      expect(deck.parent.querySelectorAll('.bespoke-backdrop').length).toBe(2);
    });

    it("should add a 'bespoke-backdrop-active' class to the active backdrop", function() {
      expect(deck.parent.querySelectorAll('.bespoke-backdrop')[0].classList.contains('bespoke-backdrop-active')).toBe(true);
    });

    it("should add a 'bespoke-backdrop-inactive' class to the inactive backdrop", function() {
      expect(deck.parent.querySelectorAll('.bespoke-backdrop')[1].classList.contains('bespoke-backdrop-inactive')).toBe(true);
    });

    it("should add the specified classes to the backdrop elements", function() {
      expect(deck.parent.querySelectorAll('.bespoke-backdrop')[0].classList.contains('backdrop-1a')).toBe(true);
      expect(deck.parent.querySelectorAll('.bespoke-backdrop')[0].classList.contains('backdrop-1b')).toBe(true);
      expect(deck.parent.querySelectorAll('.bespoke-backdrop')[1].classList.contains('backdrop-2a')).toBe(true);
      expect(deck.parent.querySelectorAll('.bespoke-backdrop')[1].classList.contains('backdrop-2b')).toBe(true);
    });

    it("should add a 'bespoke-backdrop-after' class to the second backdrop", function() {
      expect(deck.parent.querySelectorAll('.bespoke-backdrop')[1].classList.contains('bespoke-backdrop-after')).toBe(true);
    });

    describe("when the second slide with a backdrop is activated", function() {

      beforeEach(function() {
        deck.slide(2);
      });

      it("should add a 'bespoke-backdrop-before' class to the first backdrop", function() {
        expect(deck.parent.querySelectorAll('.bespoke-backdrop')[0].classList.contains('bespoke-backdrop-before')).toBe(true);
      });

      it("should remove the 'bespoke-backdrop-after' class from the second backdrop", function() {
        expect(deck.parent.querySelectorAll('.bespoke-backdrop')[1].classList.contains('bespoke-backdrop-after')).toBe(false);
      });

      it("should add a 'bespoke-backdrop-active' class to the active backdrop", function() {
        expect(deck.parent.querySelectorAll('.bespoke-backdrop')[1].classList.contains('bespoke-backdrop-active')).toBe(true);
      });

      it("should add a 'bespoke-backdrop-inactive' class to the inactive backdrop", function() {
        expect(deck.parent.querySelectorAll('.bespoke-backdrop')[0].classList.contains('bespoke-backdrop-inactive')).toBe(true);
      });

    });

    describe("when the last slide without a backdrop is activated", function() {

      beforeEach(function() {
        deck.slide(3);
      });

      it("should add a 'bespoke-backdrop-before' class to all backdrops", function() {
        expect(deck.parent.querySelectorAll('.bespoke-backdrop')[0].classList.contains('bespoke-backdrop-before')).toBe(true);
        expect(deck.parent.querySelectorAll('.bespoke-backdrop')[1].classList.contains('bespoke-backdrop-before')).toBe(true);
      });

      it("should remove the 'bespoke-backdrop-after' class from all backdrops", function() {
        expect(deck.parent.querySelectorAll('.bespoke-backdrop')[0].classList.contains('bespoke-backdrop-after')).toBe(false);
        expect(deck.parent.querySelectorAll('.bespoke-backdrop')[1].classList.contains('bespoke-backdrop-after')).toBe(false);
      });

    });

  });

});
