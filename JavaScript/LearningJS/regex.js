// \需要转意
var reg = new RegExp("a(?=\\d)");
var strTest = "a9";
var a =reg.test(strTest);
console.log(a)
//print(a);

var reg = /a(?=\d)/
var strTest = "a9";
var a =reg.test(strTest);
console.log(a)

var str = "hostname BJ*POP";
reg = new RegExp(".*?BJ\\*POP.*?");
reg.test(str);

var str = "hostname BJ*POP";
reg = /.*?BJ\*POP.*?/;
reg.test(str);