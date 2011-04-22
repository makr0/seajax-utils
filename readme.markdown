no.5 Seajax Utils
=====

A utility library for the [Seadragon AJAX viewer] (http://expression.microsoft.com/en-us/gg413362.aspx). The library acts as a bridge between Seadragon AJAX and the [Raphael] (http://raphaeljs.com) JavaScript vector drawing library, so that  Raphael drawing elements can be used as overlays.

Code Example
-----
Note that the coordinate system for no.5 Seajax Utils is the original image's pixel coordinates! 

     function addOverlays() {
        var marker = new No5.Seajax.Shapes.Marker("pushpin-icon.png");
        marker.attachTo(viewer, 2000, 1750);

        var ellipse = new No5.Seajax.Shapes.Ellipse(1500, 500);    
        ellipse.attachTo(viewer, 20, 800);

        var points = new Array();
        points[0] = new Seadragon.Point(900, 900);
        points[1] = new Seadragon.Point(500, 100);
        points[2] = new Seadragon.Point(600, 600);
        points[3] = new Seadragon.Point(100, 500);
        var polygon = new No5.Seajax.Shapes.Polygon(points);
        polygon.attachTo(viewer);

        // Needed due to Seadragon AJAX FF bug
        setTimeout(function() { ellipse.redraw(viewer); }, 500);
     }

Todos
-----
* Currently, only Marker, Ellipse and Polygon are implemented. All else is yet to come...
* Prepare this to work with the [Closure Compiler] (http://code.google.com/closure/compiler/)

