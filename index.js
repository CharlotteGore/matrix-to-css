/*

   Converts gl-matrix mat4 objects into strings that can be applied as matrix3d transforms.

   Usage:

   var mat4 = require('gl-matrix').mat4;
   var matrixToCSS = require('matrix-to-css');

   var translationMatrix = ... // make your translation matrix.. 

   $('#moving-thing').css({
      'transform' : matrixToCSS(translationMatrix);
   });

*/

function generateCSSString(matrix ){
   var str = '';
   str += matrix[0].toFixed(20) + ',';
   str += matrix[1].toFixed(20) + ',';
   str += matrix[2].toFixed(20) + ',';
   str += matrix[3].toFixed(20) + ',';
   str += matrix[4].toFixed(20) + ',';
   str += matrix[5].toFixed(20) + ',';
   str += matrix[6].toFixed(20) + ',';
   str += matrix[7].toFixed(20) + ',';
   str += matrix[8].toFixed(20) + ',';
   str += matrix[9].toFixed(20) + ',';
   str += matrix[10].toFixed(20) + ',';
   str += matrix[11].toFixed(20) + ',';
   str += matrix[12].toFixed(20) + ',';
   str += matrix[13].toFixed(20) + ',';
   str += matrix[14].toFixed(20) + ',';
   str += matrix[15].toFixed(20);

   return 'matrix3d(' + str + ')';

}

module.exports = generateCSSString;