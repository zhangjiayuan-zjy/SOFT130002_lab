/*
1.
背景：
    每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；
    或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
注意：
    你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
要求：
    ①要求使用JS闭包的方式使得计数实现局部私有，不可以在全局区域声明计数变量。
    ②使用console.log打印计数即可，到达一分钟提前停止也需要console.log相应的提示语句。
*/

function testTime(){
    let count = 0;
    let testTime2 = function () {
        if (count == 10) {
            console.log("到达10次")
            clearInterval(time);
        }
        else if (new Date().getSeconds() == 0 && count != 0){
            console.log("到达整分")
            clearInterval(time);
        }else {
            console.log(Math.pow(2, count));
            count++;
        }
    };
    let time=setInterval(testTime2,5000);
}

// testTime();

/*
2.
要求：
    ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。
    ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。
    ③邮箱字符串的正则匹配的理解需写入lab文档。
    ④telephone与mail均是字符串。
*/
///^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/
function testMail(telephone,mail) {
    let boolean1=/^1[3-9]\d{9}$/.test(telephone);
    let boolean2=/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(mail);
    if (boolean1&&boolean2){
        console.log("telephone and mail are right");
    }else if (boolean1==true&&boolean2==false){
        console.log("The telephone is right and the mail is wrong");
    }else if (boolean1==false&&boolean2==true){
        console.log("The telephone is wrong and the mail is right");
    }else {
        console.log("they are wrong");
    }

}

/*
3.
要求：
    ①输入一段全英文语句，要求使用正则表达式找到相邻的重复单词放入一个Set，如果集合中元素超过10个，则按照首字母顺序取前10个于集合。
    ②使用console.log打印即可，将该集合打印出来。
    ③例如：输入"Is is the iS is cost of of gasoline going up up"，输出：Set { 'Is is', 'iS is', 'of of', 'up up' }。
    ④对该函数中用的正则匹配的理解需写入lab文档。
    ⑤str为字符串。
*/
function testRedundancy(str) {
    var pattern=/\b(\w+)\b\s+\1\b/gi;
    let matches;
    let set =new Set();

    while (1>0){
        matches=pattern.exec(str);
        if (matches!==null){
                set.add(matches[0]);
            pattern.lastIndex-=matches[1].length;
        }
        else break;
    }
    let array=[...set];
    array.sort();
    let array1=new Array();

    if (set.size>10){
        for (let i=0;i<10;i++){
            array1[i]=array[i]
        }
        set=[...array1];
    }
    else {
        set=[...array];
    }
    console.log(set);
}



/*
4.
背景：
    旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。
    现在给出应该输入的一段文字、以及实际被输入的文字，请你使用Set列出肯定坏掉的那些键。
    例如：输入7_This_is_a_test和_hs_s_a_es    输出：Set { '7', 'T', 'I' }
要求：
    ①需要使用Set。
    ②只能使用一次循环。
    ③使用console.log打印即可，将该集合打印出来。
    ④wantInput和actualInput为字符串。
注意：
    ①注意联系生活，并注意观察我给的上述例子。
*/
function testKeyBoard(wantInput, actualInput) {

    let set=new Set();
    let array1=Array.from(wantInput.toUpperCase());
    let array2=Array.from(actualInput.toUpperCase());
    let set1=new Set(array1);
    let set2=new Set(array2);
    let array3=[...set1];
    for (let i=0;i<array3.length;i++){
        if (!set2.has(array3[i])){
            set.add(array3[i]);
        }
    }
    console.log(set);
}


/*
5.
背景：
    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。
要求：
    ①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。
    比如输入是“  hello  world!  ”，输出应该是“world! hello”。
    ②请使用Array。
    ③使用console.log打印即可，将该数组打印出来。
    ④只能显式使用一次循环。
    ⑤str为字符串。
*/
function testSpecialReverse(str) {
    let array=str.trim().split(/\s+/);
    let s="";
    for (let i=(array.length);i--;i<0){
        s+=array[i]+" ";
    }
    console.log(s);
}


/*
6.
背景：
    给定一个整数数组和一个值，找出相加为该值的两个元素下标并保存在一个数组中。
    例如给定 [2, 7, 11, 15]和9,
    打印结果为[0,1]
要求：
    ①使用Map。
    ②只能显式使用一次循环。
    ③使用console.log打印即可，将满足条件的数组打印出来。
    ④nums为数字数组，如[1,2,3,4],target为数字,如5，那么输出为
    [ 0, 3 ]
    [ 1, 2 ]
*/

function twoSum(nums, target) {
    let map = new Map();
    let dif;
    let array=new Array(),count=0;
    for(let i = 0;i < nums.length; i++){
        dif = target - nums[i];
        if(map.has(dif)){
            array[count]=Array.of(i,map.get(dif));
            count+=1;
        }
        map.set(nums[i],i)
    }
    console.log(array);
}



/*
7.
背景：
    打印最长的包含不同字符串的子字符串长度。
要求：
    ①使用Map。
    ②例如：输入"abbbbb",输出1，输入"bbbbb",输出2；
    ③只能显式使用一次循环。
    ④使用console.log打印即可。
    ⑤str为字符串。
*/
function lengthOfLongestSubstring(str) {

    let s="",char,index;
    let count=0;
    let map=new Map();

    for (let i = 0; i < str.length; i++) {
        char = str.charAt(i);
        index = s.indexOf(char);
        if (index === -1) {
            s += char;
            count = count < s.length ? s.length : count;

        } else {
            s = s.substr(index + 1) + char;
        }
        map.set(s,count);
    }
    console.log(map.get(s));
}

/*
8.
背景：
    该部分只是为了让你们自己动动手更好地感受不同继承方式。
要求：
    ①借助构造函数、原型链、和Object.create分别编写DevelopingCountry、PoorCountry、DevelopedCountry以实现对Country的继承，
    并在三者分别添加sayHi、saySad、sayHappy函数分别打印"Hi,i am a developing country."、"I am a sad poor country."、"I am a Happy developed country."
    ②请调用他们并打印相关语句即可。
*/
//Object.creat
function Country() {
    this.name = "国家";
}
var DevelopingCountry=Object.create(Country);
DevelopingCountry.sayHi=function () {
    console.log("Hi,i am a developing country.");
}



var PoorCountry=Object.create(Country,);
PoorCountry.saySad=function () {
    console.log("I am a sad poor country.")
}
var DevelopedCountry=Object.create(Country);
DevelopedCountry.sayHappy=function () {
    console.log("I am a Happy developed country.")
}




//原型链
function Country1() {
    this.name = "国家";
}
function DevelopingCountry1() {

}
DevelopingCountry1.prototype=new Country1();
DevelopingCountry1.prototype.sayHi=function () {
    console.log("Hi,i am a developing country.")
}


function PoorCountry1 (){

}
PoorCountry1.prototype=new Country1();
PoorCountry1.prototype.saySad= function () {
    console.log("I am a sad poor country.")
}


function DevelopedCountry1() {

}
DevelopedCountry1.prototype=new Country1();
DevelopedCountry1.prototype.sayHappy= function () {
    console.log("Hi,i am a developing country.");
}



//构造函数
function Country2() {
    this.name = "国家";
}
function DevelopingCountry2() {
    Country2.call(this);
}
DevelopingCountry2.prototype.sayHi=function sayHi() {
    console.log("Hi,i am a developing country.");
}
function PoorCountry2() {
    Country2.call(this);

}
PoorCountry2.prototype.saySad= function () {
    console.log("I am a sad poor country.")
}
function DevelopedCountry2() {
    Country2.call(this);
}
DevelopedCountry2.prototype.sayHappy=function () {
    console.log("I am a Happy developed country.")
}


function test() {
    //1.
    testTime();
    //2.
    testMail("15315636607","1932010044@fudan.com");
    //3.
    testRedundancy("Is is  up  up the iS is Is is cost    of  of gasoline going ");
    //4.
    testKeyBoard("7_This_is_a_test","_hs_s_a_es" );
    //5.
    testSpecialReverse("  hello    world!  ");
    //6.
    twoSum([2, 7, 0,9,11,15,1,8,],9);
    //7.
    lengthOfLongestSubstring("abefghbegbb");
    //8.为方便测试，将相同的类分别命名为0，1，2
    //8.1Object.creat
    DevelopingCountry.sayHi();
    DevelopedCountry.sayHappy();
    PoorCountry.saySad();

    //8.2原型链
    let developing1=new DevelopingCountry1();
    developing1.sayHi();
    let developed1=new DevelopedCountry1();
    developed1.sayHappy();
    let poor1=new PoorCountry1();
    poor1.saySad();

    //8.3借用构造函数
    let developing2=new DevelopingCountry2();
    developing2.sayHi();
    let developed2=new DevelopedCountry2();
    developed2.sayHappy();
    let poor2=new PoorCountry2();
    poor2.saySad();
}
test();





