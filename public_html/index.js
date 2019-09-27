$(document).ready(function () {
    $("button").click(function () {
        var f = $("#f").val();
        var a = $("#a").val();
        var b = $("#b").val();
        var tol = $("#tol").val();
        raiz(f, a, b, tol);
    });
});


function raiz(f, a, b, tol) {
    var i = 0;
    a = Number(a);
    b = Number(b);
    while (Math.abs(b-a) > tol) {
        i++;
        var x = (a+b)/2;
        var f_a = eval(funcao(a, f));
        var f_x = eval(funcao(x, f));
        if(f_a*f_x<0){
            b = x;
        } else {
            a = x;
        }
    }
    $("#resultado").text((a+b)/2);
    $("#iteracao").text(i);
}

function funcao(x, f){
    var letra_x = "x";
    var sen_x = "sen(x)";
    var cos_x = "cos(x)";
    var tan_x = "tan(x)";
    var letra_e = "e";
    var replace_e = "Math.E";
    var replace_cos = "Math.cos(" + x + ")";
    var replace_sin = "Math.sin(" + x + ")";
    var replace_tan = "Math.tan(" + x + ")";
    var replace_x = x;
    var letra_acento = "^";
    var replace_acento = "**";
    f = replace_all(f, sen_x, replace_sin);
    f = replace_all(f, cos_x, replace_cos);
    f = replace_all(f, tan_x, replace_tan);
    f = replace_all(f, letra_e, replace_e);
    f = replace_all(f, letra_x, replace_x);
    f = replace_all(f, letra_acento, replace_acento);
    return f;
}

function replace_all(string, find, replace) {
    while (string.indexOf(find) >= 0)
        string = string.replace(find, replace);
    return string;
}