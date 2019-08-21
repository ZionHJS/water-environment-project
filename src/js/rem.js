!(function (doc, win) {
    //拿到html标签的dom元素对象
    var docEle = doc.documentElement,
        evt = "onorientationchange" in window ? "orientationchange" : "resize",
        fn = function () {
            //拿到当前屏幕的尺寸
            var width = docEle.clientWidth;
            width = width < 320 ? 320 : width;
            width = width > 640 ? 640 : width;
            width && (docEle.style.fontSize = 100 * (width / 640) + "px");

            //使用setTimeout 就可以让屏幕内像素实现动态变化 并且rem随时=100px
            setTimeout(function () {
                var width = docEle.clientWidth;
                width = width < 320 ? 320 : width;
                width = width > 640 ? 640 : width;
                width && (docEle.style.fontSize = 100 * (width / 640) + "px");
            }, 333);
        };

    win.addEventListener(evt, fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false);

}(document, window));