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
   str += matrix[0] + ',';
   str += matrix[1] + ',';
   str += matrix[2] + ',';
   str += matrix[3] + ',';
   str += matrix[4] + ',';
   str += matrix[5] + ',';
   str += matrix[6] + ',';
   str += matrix[7] + ',';
   str += matrix[8] + ',';
   str += matrix[9] + ',';
   str += matrix[10] + ',';
   str += matrix[11] + ',';
   str += matrix[12] + ',';
   str += matrix[13] + ',';
   str += matrix[14] + ',';
   str += matrix[15];

   return 'matrix3d(' + str + ')';

}

module.exports = generateCSSString;