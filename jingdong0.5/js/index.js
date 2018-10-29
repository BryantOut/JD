aboutTime();
headerEvent();
mySlider();

function aboutTime() {
    //预订总的时间
    time = 1 * 60 * 60; //坑

    //获取时间显示的标签
    spans = document.querySelectorAll(".timer>span");

    //设置当前时间
    setTime();

    var timeId = setInterval(function () {
        if (time == 0) {
            clearInterval(timeId);
            return;
        }

        time--;
        setTime();

    }, 1000);
}

function setTime() {
    //时
    var hour = parseInt(time / 60 / 60);
    //分
    var min = parseInt(time / 60 - hour * 60);
    //秒
    var sec = parseInt(time - hour * 60 * 60 - min * 60);

    // console.log(hour,min,sec);

    hour0 = parseInt(hour / 10);
    hour1 = parseInt(hour % 10);

    min0 = parseInt(min / 10);
    min1 = parseInt(min % 10);

    sec0 = parseInt(sec / 10);
    sec1 = parseInt(sec % 10);

    //赋值
    spans[0].innerText = hour0;
    spans[1].innerText = hour1;
    spans[3].innerText = min0;
    spans[4].innerText = min1;
    spans[6].innerText = sec0;
    spans[7].innerText = sec1;
}


function headerEvent() {
    /* 1  给header加rgba=>完全透明
    2  滚动条事件
    3
        a  还没有滚动的时候，透明度  a=0
        b  滚动到某一个值的时候，轮播图的高度  a=>0.9
        c  获取页面被卷去的高度  scrollTop */

    //获取头部标签
    var header = document.querySelector(".header");
    //获取轮播图的高度
    var height = document.querySelector(".swiper-container img").offsetHeight;

    window.onscroll = function () {
        // scrollTop 存在兼容 window.pageYOffset
        //document.body.scrollTop
        //document.documentElement.scrollTop

        // scrollTop 兼容写法
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || this.document.body.scrollTop;

        //透明度
        //  0 / x = 0
        //  scrollTop/height = 1
        //  scrollTop + 100 /height >1    1.9  2  5
        var temp = scrollTop / height;

        if (temp > 0.9) {
            temp = 0.9;
        } else {
            temp = 0;
        }

        //赋值
        header.style.backgroundColor = "rgba(201,21,35," + temp + ")";
    }
}

function mySlider() {
    //获取存放所有图片的大ul
    imgBoxUl = document.querySelector(".imgBox");
    //获取索引器的li标签
    indexer_lis = $(".indexer li");

    //设置轮播图的索引
    index = 1;

    //显示第一张图片
    imgBoxUl.style.transform = "translateX(-" + index + "0%)";

    //开启定时器
    var timeId = slideChange();

    /* 过渡结束事件，让它来处理瞬间切换

    当页面失去焦点的时候
    定时器会一直执行
    index++
    transitionend不会被执行
        但是，等待页面重新获得焦点的时候，重新被执行了

    正常情况，页面没有失去焦点
        页面失去焦点(缩小)
        1  定时器，还是一样会执行 index++
        2  过渡结束事件，不会被执行
    页面重新获得焦点
    1  定时器，继续执行
    2  过渡结束事件，会被执行 */

    imgBoxUl.addEventListener("transitionend", function () {
        //自动轮播 index++
        if (index >= 9) {
            index = 1;
            //移除过渡
            imgBoxUl.style.transition = "none";
            //显示第一张图片
            imgBoxUl.style.transform = "translateX(-" + index + "0%)";
        } else if (index <= 0) {
            index = 8;
            //移除过渡
            imgBoxUl.style.transition = "none";
            //显示第一张图片
            imgBoxUl.style.transform = "translateX(-" + index + "0%)";
        }

        var liIndex = index-1;
        activeLi(liIndex);
    });

    //绑定滑动事件
    myTool(imgBoxUl).swipe(function (direction) {
        //滑动的时候先清除定时器
        clearInterval(timeId);
        if (direction == "left") {
            index++;
        } else if (direction == "right") {
            index--;
        }

        //改变轮播图的位置
        //添加过渡
        imgBoxUl.style.transition = "transform .3s";
        //显示第一张图片
        imgBoxUl.style.transform = "translateX(-" + index + "0%)";

        //重新开启定时器
        timeId = slideChange();
    });
}

//封装定时器
function slideChange() {
    return setInterval(function () {
        index++;
        //添加过渡
        imgBoxUl.style.transition = "transform .3s";
        imgBoxUl.style.transform = "translateX(-" + index + "0%)";
    }, 5000);
}

//排他
function activeLi(tmpIndex) {
    // indexer_lis
    for (var i = 0; i < indexer_lis.length; i++) {
        var li = indexer_lis[i];
        li.classList.remove("active");
    }
    indexer_lis[tmpIndex].classList.add("active");
}