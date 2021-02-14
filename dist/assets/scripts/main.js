function getData(noticias) {
    var url = 'http://newsapi.org/v2/everything?' +
        `q=${noticias}&` +
        'from=2021-02-13&' +
        'sortBy=popularity&' +
        'apiKey=4c07073687474d41bd4f33f53add10a3';
    var req = new Request(url);
    fetch(req)
        .then(response => response.json())
        .then(info => {
        const templateSource = document.getElementById('news-template').innerHTML;
        const template = Handlebars.compile(templateSource);
        document.getElementById('news-template').innerHTML = template({
            news: info
        });
    });
}
function getValue() {
    var noticias = document.querySelector("#busqueda").value;
    console.log(noticias);
    getData(noticias);
}
