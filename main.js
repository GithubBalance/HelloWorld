function Primaid(Lines) {
    for (var presentLine = 1; presentLine <= Lines; presentLine++) {
        var printLine = "";
        for (var spaces = Lines - presentLine; spaces > 0; spaces--) {
            printLine += " ";
        }
        for (var stars = 1; stars <= (presentLine * 2) - 1; stars++) {
            printLine += "*";
        }
        console.log(printLine);
    }
}
var num = process.argv[2];
if (!num) {
}
else {
    Primaid(parseInt(num));
}
