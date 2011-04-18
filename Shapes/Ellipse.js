No5.Seajax.Shapes.Ellipse = function(width, height) {
   this.div = document.createElement("div");
   this.width = width;
   this.height = height;
}

No5.Seajax.Shapes.Ellipse.prototype.attachTo = function(viewer, x, y) {
   var center = No5.Seajax.toWorldCoordinates(viewer, x, y);
   var extent = No5.Seajax.toWorldCoordinates(viewer, this.width, this.height);
   viewer.drawer.addOverlay(this.div, new Seadragon.Rect(center.x, center.y, extent.x, extent.y)); 

   var maxZoom = viewer.viewport.getMaxZoom();
   var paper = Raphael(this.div, this.width, this.height);

   this.ellipse = paper.ellipse(
      this.width / (2 * maxZoom), this.height / (2 * maxZoom),
      this.width / (2 * maxZoom), this.height / (2 * maxZoom));

   if (!this.color)
      this.color = "#ffffff";

   if (!this.stroke)
      thisl.stroke = "#ffffff";

   this.ellipse.attr({"stroke-width":"1px", "stroke":this.stroke, "fill":this.color, "fill-opacity":0.5});
   this.ellipse.node.style.cursor = "pointer";

   viewer.addEventListener("animation", function() {
      redraw(viewer.viewport.getZoom(true));
   });			
}

No5.Seajax.Shapes.Ellipse.prototype.redraw = function(zoom) {
   ellipse.scale(zoom, zoom, 0, 0); 
} 

No5.Seajax.Shapes.Ellipse.prototype.addEventListener = function(evt, listener) {
   Seadragon.Utils.addEvent(this.div, evt, Seadragon.Utils.stopEvent);
   this.img.addEventListener(evt, listener, false);
}

No5.Seajax.Shapes.Ellipse.prototype.setColor = function(color) {
   this.color = color;
   if (this.ellipse)
      this.ellipse.attr({"fill":color});
}

No5.Seajax.Shapes.Ellipse.prototype.setStroke = function(color) {
   this.stroke = color;
   if (this.ellipse)
      this.ellipse.attr({"stroke":color});
}
    			
/*
    c.node.onmouseover = function() {  
      this.style.cursor = "pointer";  
      c.attr({"fill":"#ffffff"});
    } 
    c.node.onmouseout = function() {  
      c.attr({"fill":"#ff0000"});
    }
    c.node.onclick = function() {
      showPopup(0.489,  0.497);
    }
*/