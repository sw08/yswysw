window.onload = function () {
    var url
    var header;
    var footer;
    var source = document.body.innerHTML
    var request = new XMLHttpRequest()
    request.open('GET', 'header.html', true)
    request.onload = function () {
        header = request.responseText
    }
    request.onloadend = function () {
        var request = new XMLHttpRequest()
        request.open('GET', 'footer.html', true)
        request.onload = function () {
            footer = request.responseText
        }
        request.onloadend = function () {
            document.body.innerHTML = "<div id='wrapper'>\n" + header + "\n<div id='container'>\n" + source + "</div>\n" + footer + "\n</div>"
        }
        request.send()
    }
    request.send()
}