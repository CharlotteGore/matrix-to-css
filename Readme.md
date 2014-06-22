# Matrix To CSS

  Converts [gl-matrix(1)](https://www.npmjs.org/package/gl-matrix) mat4 objects into strings that can be applied
  as values for css `transform` properties on elements.

## Why would you want such a thing?

  Because if you move elements using...

  ```css
    transform: matrix3d( ... )
  ```

  Instead of 

  ```css
    position: absolute;
    top : 10px;
    left: 10px;
  ```

  .. the translation of the element is done entirely in the GPU and the browser does not repaint, meaning you get
  significantly better performance when animating objects.

## Installation

Browserify/NPM

```sh
    $ npm install --save matrix-to-css
```

```js
  var matrixToCSS = require('matrix-to-css');
```

Component

```sh
    $ component install charlottegore/matrix-to-css
```

```js
  var parse = require('matrix-to-css');
```

## API and Example Usage


```js
    // dependencies..
    var mat4 = require('gl-matrix').mat4;
    var vec3 = require('gl-matrix').vec3;
    var matrixToCSS = require('matrix-to-css');

    // create a mat4 to be out translation matrix
    var translationMatrix = mat4.create();

    // we need an origin matrix, so create another identity matrix..
    var origin = mat4.create();

    // we need a translation vector
    var translationVector = vec3.fromValues(10, 10, 0);

    // apply the translation to the matrix
    mat4.translate(translationMatrix, origin, translationVector);

    // did you know jQuery will automatically find the right 'transform' for you?
    $('#my-element').css('transform', matrixToCSS(translationMatrix));
```

That's basically it. It assumes you can make your own matrix using the gl-matrix library.

## License

  MIT
