/**
 * Namespace declarations
 */
No5 = {};
No5.Seajax = {};
No5.Seajax.Shapes = {};

/**
 * Translates from Seajax viewer coordinate 
 * system to image coordinate system 
 */
No5.Seajax.toImageCoordinates = function(viewer, viewerX, viewerY) {
   var dimension = No5.Seajax.Dimension(viewer);
   return new Seadragon.Point(viewerX * dimension, viewerY * dimension);
}

/**
 * Translates from image coordinate system to
 * Seajax viewer coordinate system 
 */
No5.Seajax.toWorldCoordinates = function(viewer, imageX, imageY) {
   var dimension = No5.Seajax.Dimension(viewer);
   return new Seadragon.Point(imageX / dimension, imageY / dimension);
}

/**
 * The 'dimension' of the Seajax viewer, i.e. either
 * width or height of the image, depending on which
 * value is greater
 */
No5.Seajax.Dimension = function(viewer) {
   if (viewer.source.width > viewer.source.height) {
      return viewer.source.width;
   } else {
      return viewer.source.height;
   }
}