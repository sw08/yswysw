window.onload = () => {
    var result = null
    var source = document.getElementsByTagName('body')[0].innerHTML
    var xmlhttp = new XMLHttpRequest()
    xmlhttp.open("GET", "header.html", false)
    xmlhttp.send()
    var header = xmlhttp.responseText
    xmlhttp.open("GET", "footer.html", false)
    xmlhttp.send()
    var footer = xmlhttp.responseText
    // var fr = new FileReader()
    // var readText = fr.readAsText(new File(["header.html"], 'header.html'))
    // console.log(readText)
    source = source.replace('<body>', '<body>\n' + header + '\n').replace('</body>', '\n' + footer + '\n</body>')
}