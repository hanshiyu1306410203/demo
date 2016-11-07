/**
 * Created by Administrator on 2016/11/7 0007.
 */
function extractlinks() {
    var links = document.all.tags("A")
    var total = links.length
    var win2 = window.open("", "", "menubar,scrollbars,toolbar")
    win2.document.write("<font size='2'>一共有" + total + "个连接</font><br>")
    for (i = 0; i < total; i++) {
        win2.document.write("<font size='2'>" + links[i].outerHTML + "</font><br>")
    }
}

