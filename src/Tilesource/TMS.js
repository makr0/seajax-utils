/**
 * A tilesource implementation for TMS (as supported by OpenLayers). 
 */
No5.Seajax.Tilesource.TMS = function(baseurl, width, height) {
   var ts = new Seadragon.TileSource(width, height, 256, 0);
   ts.getTileUrl = function(zoom, xTile, yTile) {
      var h = Math.pow(2, zoom - 10) - 1;
      return baseurl + (zoom - 8) + "/" + xTile + "/" +  (h - yTile) + ".jpg";
   }
   return ts;
}

