// myTool(dom).swipe(function (direction) {
//     console.log(direction);
// });

function myTool(dom) {
    var obj = {
        // callback为回调函数--作为一个参数
        swipe: function (callback) {
            //1、按下的时间
            var startTime;
            //2、按下的坐标
            var startX, startY;
            //3、按下
            dom.addEventListener("touchstart", function (e) {
                //1、判断手指的个数
                if (e.touches.length > 1) {
                    return;
                }
                //2、记录按下的时间
                startTime = Date.now();

                //3、记录按下的坐标
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;

            });

            //离开
            dom.addEventListener("touchend", function (e) {
                //1、判断手指的个数
                if (e.changedTouches.length > 1) {
                    return;
                }
                //2、计算时间
                var endTime = Date.now();

                //判断
                if (endTime - startTime > 800) {
                    return;
                }

                //3、距离和方向
                var endX = e.changedTouches[0].clientX;
                var endY = e.changedTouches[0].clientY;

                //滑动的方向
                var direction;
                if (Math.abs(endX - startX) > 5) {
                    // 在水平方向上发生了移动
                    direction = endX > startX ? "right" : "left";
                } else if (Math.abs(endY - startY)) {
                    // 在垂直方向上发生了移动
                    direction = endY > startY ? "down" : "up";
                } else {
                    //没有发生移动
                    return;
                }

                //触发滑动的回调函数
                callback && callback(direction);
            });
        }
    }
    return obj;
}