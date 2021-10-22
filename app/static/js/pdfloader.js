var myState = {
    pdf: null,
    currentPage: 1,
    zoom: 1
}

pdfjsLib.getDocument('../../documents/Certificate for Adobe Color Essential Training 2016.pdf').then((pdf) => {

    myState.pdf = pdf;
    render();

});

function render() {
    myState.pdf.getPage(myState.currentPage).then((page) => {
  
        var canvas = document.getElementById("pdf_renderer");
        var ctx = canvas.getContext('2d');

        var viewport = page.getViewport(myState.zoom);

        canvas.width = viewport.width;
        canvas.height = viewport.height;
  
        page.render({
            canvasContext: ctx,
            viewport: viewport
        });
    });
}


<div id="my_pdf_viewer">
    <div id="canvas_container">
        <canvas id="pdf_renderer"></canvas>
    </div>

    <div id="navigation_controls">
        <button id="go_previous">Previous</button>
        <input id="current_page" value="1" type="number" />
        <button id="go_next">Next</button>
    </div>

    <div id="zoom_controls">
        <button id="zoom_in">+</button>
        <button id="zoom_out">-</button>
    </div>
</div>