var x ;
x= $(document);
x.ready(inicializarEventos);
function inicializarEventos(){
    var x;
    x = $('p');
    x.click(presioneParrafoDelDocumento);
    x=$('table2 p');
    x.click(presioneParrafoSegundaTabla());
};
function presioneParrafoDelDocumento(){
    alert('Se presionó un párrafo del documento');
};
function presioneParrafoSegundaTabla(){
    alert('Se presionó un párrafo de la segunda tabla');
};