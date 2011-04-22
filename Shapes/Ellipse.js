No5.Seajax.Shapes.Ellipse = function(width, height) {
   this.width = width;
   this.height = height;  
   this.div = document.createElement("div");

   var paper = Raphael(this.div, width, height);
   var maxZoom = viewer.viewport.getMaxZoom();
   this.ellipse = paper.ellipse(
      width / (2 * maxZoom), height / (2 * maxZoom),
      width / (2 * maxZoom), height / (2 * maxZoom));
   this.ellipse.node.style.cursor = "pointer";
}

No5.Seajax.Shapes.Ellipse.prototype.attachTo = function(viewer, x, y) {
   var center = No5.Seajax.toWorldCoordinates(viewer, x, y);
   var extent = No5.Seajax.toWorldCoordinates(viewer, this.width, this.height);
   viewer.drawer.addOverlay(this.div, new Seadragon.Rect(center.x, center.y, extent.x, extent.y)); 

   var e = this.ellipse;
   viewer.addEventListener("animation", function() { 
      var zoom = viewer.viewport.getZoom(true);
      e.scale(zoom, zoom, 0, 0);
   });
}

No5.Seajax.Shapes.Ellipse.prototype.getNode = function() {
   return this.ellipse.node;
}

No5.Seajax.Shapes.Ellipse.prototype.redraw = function(viewer) { 
   var zoom = viewer.viewport.getZoom(true);
   this.ellipse.scale(zoom, zoom, 0, 0); 
} 

No5.Seajax.Shapes.Ellipse.prototype.addEventListener = function(evt, listener) {
   Seadragon.Utils.addEvent(this.div, evt, Seadragon.Utils.stopEvent);
   this.img.addEventListener(evt, listener, false);
}