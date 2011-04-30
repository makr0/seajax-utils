No5.Seajax.Shapes.Polygon = function(points) {
   // Get polygon bounding box
   var minX = points[0].x;
   var maxX = minX;
   var minY = points[0].y;
   var maxY = minY;

   for (var i=1, len = points.length; i<len; ++i) {
      if (points[i].x < minX)
         minX = points[i].x;

      if (points[i].x > maxX)
         maxX = points[i].x;

      if (points[i].y < minY)
         minY = points[i].y;

      if (points[i].y > maxY)
         maxY = points[i].y;
   }

   this.origin = new Seadragon.Point(minX, minY);

   // Bounding box width and height at maximum zoom
   this.width = maxX - minX;
   this.height = maxY - minY;

   // Bounding box width and height at zoom level 1
   var maxZoom = viewer.viewport.getMaxZoom();
   this.normWidth = 2 * this.width / maxZoom;
   this.normHeight = 2 * this.height / maxZoom

   // Create Polygon
   this.div = document.createElement("div");
   this.paper = Raphael(this.div);

   // NOTE! There seems to be a factor of 2 required. Might be because of the way
   // Zoom levels are defined in Seajax. But frankly I don't know -> investigate!!
   var firstPoint = 2 * (points[0].x - minX) / maxZoom + " " + 2 * (points[0].y - minY) / maxZoom;

   var svgFormattedPath = "M" + firstPoint;
   for (var i=1, len = points.length; i<len; ++i) {
      svgFormattedPath += "L" + 2 * (points[i].x - minX) / maxZoom + " " + 2 * (points[i].y - minY) / maxZoom;
   }
   svgFormattedPath += "L" + firstPoint;

   this.path = this.paper.path(svgFormattedPath);
   this.paper.setSize(this.normWidth, this.normHeight);
}

No5.Seajax.Shapes.Polygon.prototype.attachTo = function(viewer) {
   var anchor = No5.Seajax.toWorldCoordinates(viewer, this.origin.x, this.origin.y);
   viewer.drawer.addOverlay(this.div, new Seadragon.Rect(anchor.x, anchor.y, 0, 0)); 

   var canvas = this.paper;
   var p = this.path;
   var w = this.normWidth;
   var h = this.normHeight;
   viewer.addEventListener("animation", function() { 
      var zoom = viewer.viewport.getZoom(true);
      canvas.setSize(w * zoom, h * zoom);
      p.scale(zoom, zoom, 0, 0);
   });
}

No5.Seajax.Shapes.Polygon.prototype.getElement = function() {
   return this.path;
}

No5.Seajax.Shapes.Polygon.prototype.redraw = function(viewer) {
   var zoom = viewer.viewport.getZoom(true);
   this.paper.setSize(this.normWidth * zoom, this.normHeight * zoom);
   this.path.scale(zoom, zoom, 0, 0); 
} 

No5.Seajax.Shapes.Polygon.prototype.addEventListener = function(evt, listener) {
   Seadragon.Utils.addEvent(this.div, evt, Seadragon.Utils.stopEvent);
   this.div.addEventListener(evt, listener, false);
}
