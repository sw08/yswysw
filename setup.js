window.onload = () => {
    var url
    var sources = {}
    var source = document.body.innerHTML
    var request = new XMLHttpRequest()
    function getHeader() {
        function editHTML() {
            document.body.innerHTML = "<div id='wrapper'>\n" + sources['header'] + "\n<div id='container'>\n" + source + "</div>\n</div>"
        }
        var request = new XMLHttpRequest()
        url = 'header.html'
        request.open('GET', url, true);
        request.onload = function () {
            sources['header'] = request.responseText
        }
        request.onloadend = editHTML
        request.send();
    }
    url = 'footer.html'
    request.open('GET', url, true)
    request.onload = function () {
        sources['footer'] = request.responseText
    }
    request.onloadend = getHeader
    request.send();
}