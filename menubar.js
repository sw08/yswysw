window.onload = () => {
    var url
    var sources = {}
    var source = document.getElementsByTagName('body')[0].innerHTML
    var request = new XMLHttpRequest()
    function getHeader() {
        function editHTML() {
            document.getElementsByTagName('body')[0].innerHTML = sources['header'] + '\n' + source + '\n' + sources['footer']
        }
        var request = new XMLHttpRequest()
        url = 'https://yswysw.kro.kr/header.html'
        request.open('GET', url, true);
        request.onload = function () {
            sources['header'] = request.responseText
        }
        request.onloadend = editHTML
        request.send();
    }
    url = 'https://yswysw.kro.kr/footer.html'
    request.open('GET', url, true)
    request.onload = function () {
        sources['footer'] = request.responseText
    }
    request.onloadend = getHeader
    request.send();
}