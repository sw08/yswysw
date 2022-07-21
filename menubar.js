
window.onload = () => {
    var url
    var sources = {}
    var sources = {header: null, footer: null}
    var source = document.getElementsByTagName('body')[0].innerHTML
    var request = new XMLHttpRequest()
    url = 'https://yswysw.kro.kr/footer.html'
    request.open('GET', url, true)
    request.onload = function () {
        sources['footer'] = request2.responseText
    }
    request.send();
    var request2 = new XMLHttpRequest()
    url = 'https://yswysw.kro.kr/header.html'
    request2.open('GET', url, true);
    request2.onload = function () {
        sources['header'] = request2.responseText
    }
    request2.send();
    document.getElementsByTagName('body')[0].innerHTML = sources.header + '\n' + source + '\n' + sources.footer     
}