const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
var contain=document.querySelector(".flex-container");
var count=0;
window.ondblclick=function () {
    if (count==0){
    for (let i=0;i<4;i++){
        var item=document.createElement("div");
        item.className="item item"+i;

        var h3=document.createElement("h3");
        h3.innerText="Genre: "+works[i].tips;
        item.appendChild(h3);

        var inner1=document.createElement("div");
        inner1.className="inner-box";

        var h31=document.createElement("h3");
        h31.innerText=works[i].author;
        h31.style.display="inline";

        var h5=document.createElement("h5");
        h5.innerText="lifetime: "+works[i].lifetime;
        h5.style.display="inline";
        h5.style.marginLeft="1em";

        inner1.appendChild(h31);
        inner1.appendChild(h5);

        var inner2=document.createElement("div");
        inner2.className="inner-box";

        var h32=document.createElement("h3");
        h32.innerText="Popular Photos";
        inner2.appendChild(h32);


        for (let j=0;j<works[i].photos.length;j++){
            var img=document.createElement("img");
            img.src="./imgs/"+works[i].photos[j];
            img.className="photo";
            inner2.appendChild(img);
        }

        var button=document.createElement("button");
        button.innerText="Visit";
        item.appendChild(inner1);
        item.appendChild(inner2);
        item.appendChild(button);

        contain.appendChild(item);
    }
    count++;
    }
}