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
   this.width = maxX - minX;
   this.height = maxY - minY;

   // Create Polygon
   this.div = document.createElement("div");
   var paper = Raphael(this.div, this.width, this.height);

   var maxZoom = viewer.viewport.getMaxZoom();
   var firstPoint = (points[0].x - minX) / maxZoom + " " + (points[0].y - minY) / maxZoom;

   var svgFormattedPath = "M" + firstPoint;
   for (var i=1, len = points.length; i<len; ++i) {
      svgFormattedPath += "L" + (points[i].x - minX) / maxZoom + " " + (points[i].y - minY) / maxZoom;
   }
   svgFormattedPath += "L" + firstPoint;

   this.path = paper.path(svgFormattedPath);
   this.path.node.style.cursor = "pointer";
}

No5.Seajax.Shapes.Polygon.prototype.attachTo = function(viewer, x, y) {
   var anchor = No5.Seajax.toWorldCoordinates(viewer, this.origin.x, this.origin.y);
   var extent = No5.Seajax.toWorldCoordinates(viewer, this.width, this.height);
   viewer.drawer.addOverlay(this.div, new Seadragon.Rect(anchor.x, anchor.y, extent.x, extent.y)); 

   var p = this.path;
   viewer.addEventListener("animation", function() { 
      var zoom = viewer.viewport.getZoom(true);
      p.scale(zoom, zoom, 0, 0);
   });
}

No5.Seajax.Shapes.Polygon.prototype.getNode = function() {
   return this.path.node;
}

No5.Seajax.Shapes.Polygon.prototype.redraw = function(viewer) { 
   var zoom = viewer.viewport.getZoom(true);
   this.path.scale(zoom, zoom, 0, 0); 
} 

No5.Seajax.Shapes.Polygon.prototype.addEventListener = function(evt, listener) {
   Seadragon.Utils.addEvent(this.div, evt, Seadragon.Utils.stopEvent);
   this.div.addEventListener(evt, listener, false);
}
