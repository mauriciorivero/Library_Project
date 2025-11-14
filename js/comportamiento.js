let libros = [];

document.getElementById('botonGuardarLibro').onclick = function(){
    const titulo = document.getElementById('titulo').value;
    const isbn  = document.getElementById('isbn').value;
    const autor = document.getElementById('autor').value;
    const ano = document.getElementById('year').value;
    const numeroPaginas = document.getElementById('numeroPaginas').value;
    const esDisponible = document.getElementById('disponible').value;
    
    const libro = new Libro(titulo, isbn, autor, ano, numeroPaginas, esDisponible);
    alert(libro.title+" "+libro.author);
    libros.push(libro);

}
    