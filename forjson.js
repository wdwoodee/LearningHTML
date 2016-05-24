/**
 * Created by Administrator on 2016-03-29.
 */
var data=[{name:"a",age:12},{name:"b",age:11},{name:"c",age:13},{name:"d",age:14}];
for(var o in data){
    alert(o);
    alert(data[o]);
    alert("text:"+data[o].name+" value:"+data[o].age );
}