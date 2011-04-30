/**
 * A tilesource implementation for OpenStreetMap. 
 *
 * Note 1. Zoomlevels. Deep Zoom and OSM define zoom levels differently. In  Deep 
 * Zoom, level 0 equals an image of 1x1 pixels. In OSM, level 0 equals an image of
 * 256x256 levels (see http://gasi.ch/blog/inside-deep-zoom-2). I.e. there is a 
 * difference of log2(256)=8 levels.
 *
 * Note 2. Image dimension. According to the OSM Wiki 
 * (http://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#Zoom_levels)
 * the highest Mapnik zoom level has 256.144x256.144 tiles, with a 256x256
 * pixel size. I.e. the Deep Zoom image dimension is 65.572.864x65.572.864
 * pixels.
 */
No5.Seajax.Tilesource.OSM = function() {
   var osmTileSource = new Seadragon.TileSource(65572864, 65572864, 256, 0);
   osmTileSource.getTileUrl = function(zoom, xTile, yTile) {
      return "http://tile.openstreetmap.org/" + (zoom - 8) + "/" + xTile + "/" + yTile + ".png";
   }
   return osmTileSource;
}

