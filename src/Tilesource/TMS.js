/**
 * A tilesource implementation for TMS (as supported by OpenLayers). 
 */
No5.Seajax.Tilesource.TMS = function(baseurl, width, height) {
   // Compute number of zoomlevels in tileset
   var max;
   if (width > height) {
      max = Math.ceil(width / 256);
   } else {
      max = Math.ceil(height / 256);
   }
   var levels = Math.ceil(Math.log(max)/Math.log(2));

   // Number of y tiles at highest zoom level
   var h = Math.ceil(height / 256);

   var ts = new Seadragon.TileSource(width, height, 256, 0);
   ts.getTileUrl = function(zoom, x, y) {
      // Convert from Deep Zoom definition to TMS definition
      var z = zoom - 8;
      
      // Number of y tiles at this zoom level
      var yTiles = Math.ceil(h / Math.pow(2, levels - z)) - 1;

      return baseurl + z + "/" + x + "/" +  (yTiles - y) + ".jpg";
   }
   return ts;
}

