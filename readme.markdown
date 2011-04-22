no.5 Seajax Utils
=====

A utility library for the [Seadragon AJAX viewer] (http://expression.microsoft.com/en-us/gg413362.aspx). The library acts as a bridge between Seadragon AJAX and the [Raphael] (http://raphaeljs.com) JavaScript vector drawing library, so that  Raphael drawing elements can be used as overlays.

Code Example
-----
     function addOverlays() {
        var marker = new No5.Seajax.Shapes.Marker("pushpin-icon.png");
        marker.attachTo(viewer, 2000, 1750);

        var ellipse = new No5.Seajax.Shapes.Ellipse(1500, 500);    
        ellipse.attachTo(viewer, 20, 800);

        // Needed due to Seadragon AJAX FF bug
        setTimeout(function() { ellipse.redraw(viewer); }, 500);
     }

Todos
-----
* Currently, only Marker and Ellipse are implemented. All else is yet to come...

