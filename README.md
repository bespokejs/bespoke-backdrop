[![Build Status](https://secure.travis-ci.org/markdalgleish/bespoke-backdrop.png?branch=master)](https://travis-ci.org/markdalgleish/bespoke-backdrop) [![Coverage Status](https://coveralls.io/repos/markdalgleish/bespoke-backdrop/badge.png)](https://coveralls.io/r/markdalgleish/bespoke-backdrop)

# bespoke-backdrop

Backdrop elements for [Bespoke.js](http://markdalgleish.com/projects/bespoke.js)

Automatically generate background elements that can be styled and animated indepedently of your slide content.

Classes specified in `data-bespoke-backdrop` attributes will be added to the list of [classes](#classes) that are provided by default.

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/markdalgleish/bespoke-backdrop/master/dist/bespoke-backdrop.min.js
[max]: https://raw.github.com/markdalgleish/bespoke-backdrop/master/dist/bespoke-backdrop.js

## Usage

```js
var bespoke = require('bespoke'),
  backdrop = require('bespoke-backdrop');

bespoke.from('#presentation', [
  backdrop()
]);
```

Then add `data-bespoke-backdrop` attributes to your slides.

```html
<article>

  <section>
    No backdrop
  </section>

  <section data-bespoke-backdrop="special">
    Special backdrop
  </section>

  <section data-bespoke-backdrop="super special">
    Super special backdrop
  </section>

</article>
```

 > Not using CommonJS? View the full [Bespoke.js plugin documentation](https://github.com/markdalgleish/bespoke.js/#plugins).

## Classes

The following classes are provided on the backdrop elements:

<table>
   <tr>
    <td><b>bespoke-backdrop</b></td>
    <td>Every backdrop element</td>
   </tr>
   <tr>
    <td><b>bespoke-backdrop-active</b></td>
    <td>The active backdrop</td>
   </tr>
   <tr>
    <td><b>bespoke-backdrop-inactive</b></td>
    <td>All inactive backdrops</td>
   </tr>
   <tr>
    <td><b>bespoke-backdrop-before</b></td>
    <td>All backdrops before the active backdrop</td>
   </tr>
   <tr>
    <td><b>bespoke-backdrop-after</b></td>
    <td>All backdrops after the active backdrop</td>
   </tr>
</table>

## Package managers

### npm

```bash
$ npm install bespoke-backdrop
```

### Bower

```bash
$ bower install bespoke-backdrop
```

## Credits

This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
