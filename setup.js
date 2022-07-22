window.onload = function () {
    var url
    var header;
    var source = document.body.innerHTML
    var request = new XMLHttpRequest()
    request.open('GET', 'header.html', true)
    request.onload = function () {
        header = request.responseText
    }
    request.onloadend = function () {
        document.body.innerHTML = "<div id='wrapper'>\n" + header + "\n<div id='container'>\n" + source + "</div>\n</div>"
    }
    request.send()
}