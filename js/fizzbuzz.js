/* The debug function is a modified version of one I read in OReilly Press's Javascript: THe Definitive Guide by David Flanagan */
function debug(msg) {
    var leadcollection = document.getElementsByClassName("lead");
    for (var i = 0, l = log.length; i < l; i++) {
        var pre = document.createElement("pre");
        var text = document.createTextNode(msg);
        pre.appendChild(text);
        leadcollection[i].appendChild(pre);
        break;
    }
}
function printnumber(N) {
    for (var count = 1; count <= N; count++) {
        if (count % 3 == 0 && count % 5 != 0)
           debug("Fuzz");
        else if (count % 5 == 0 && count % 3 != 0)
           debug("Buzz");
        else if (count % 15 == 0)
           debug("FizzBuzz")
        else
           debug(count.toString())
    }
}
