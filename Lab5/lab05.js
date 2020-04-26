//1. 获取url中名为name的参数。在URL输入框输入url，点击同行submit按钮后，其中的参数名为name的参数值需要出现在Argument value输入框内。
//如果没有名为name的参数，那么可以在Argument value输入框出现任何值。
//请仅在showWindowHref函数内写代码。

//提示：url指代 （若干字符串）?（参数名1）=（参数1值）&（参数2）=（参数2值）...  这样的字符串。具体可以上网查找。例如：hjsdghgbj?name=666666&group=876。
//url、url_submit、url_result指代对应id的三个对象，其中url和url_result可以通过url.value或者url_result.value获得值。
//字符数组处理可以使用相关函数
let url = document.getElementById("url");
let url_submit = document.getElementById("url_submit");
let url_result = document.getElementById("url-result");
url_submit.addEventListener('click',showWindowHref);
function showWindowHref(){
    let s1=url.value;
    let count1=s1.indexOf("name=");
    if (count1>-1){
        let count2=s1.indexOf("&",count1);
        url_result.value=s1.substring(count1+5,count2);
    }
    else {
        url_result.value="can not found"
    }
}
//2. 每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
//注意：你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
//与设置时间相关的函数可以上网查找。

//提示：mul为html中id为"mul"的元素对象，可直接通过mul.value获得其内的输入值。
let mul = document.getElementById("mul");
let time=window.setInterval(timeTest,5000);
let count=0;
function timeTest(){
    if (count==10||(new Date().getSeconds()==0&&count!=0)){
        clearInterval(time);
    }
    else {
        mul.value=Math.pow(2,count);
        count++;
    }
}
//3. 判断输入框most里出现最多的字符，并统计出来。统计出是信息在most_result输入框内以"The most character is:" + index + " times:" + max的形式显示。
//如果多个出现数量一样则选择一个即可。
//请仅在arrSameStr函数内写代码。

//提示：most、result、most_submit的解释及其.value与上面类似。
let most = document.getElementById("most");
let result = document.getElementById("most-result");
let most_submit = document.getElementById("most_submit");
most_submit.addEventListener('click',arrSameStr);
function arrSameStr(){
    let s1=most.value;
    let array1=[s1.charAt(0)];
    let array2=[1];

    for (let i=1;i<s1.length;i++){
        let length=array1.length;
        for (let j=0;j<length;j++){
            if (array1[j]==s1.charAt(i)){
                array2[j]+=1;
                break;
            }
            if (j==length-1&&array1[array1.length-1]!=s1.charAt(i)) {
                array1.length += 1;
                array2.length += 1;
                array1[array1.length - 1] = s1.charAt(i);
                array2[array2.length - 1] = 1;
            }
        }
    }

    let max=array2[0],maxcount=0;
    for (let k=1;k<array2.length;k++){
        if (array2[k]>max){
            max=array2[k];
            maxcount=k;
        }
    }
    result.value="The most character is: "+array1[maxcount]+" times: "+max;
}
