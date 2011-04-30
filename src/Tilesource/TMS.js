/**
 * A tilesource implementation for TMS (as supported by OpenLayers). 
 */
No5.Seajax.Tilesource.OSM = function(baseurl, width, height, format) {
   if (!format)
      format = "jpg";

   var tmsTileSource = new Seadragon.TileSource(width, height, 256, 0);
   tmsTileSource.getTileUrl = function(zoom, xTile, yTile) {
      return baseurl + zoom + "/" + xTile + "/" + yTile + "." + format;
   }
   return tmsTileSource;
}

