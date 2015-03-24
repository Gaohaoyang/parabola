/*$(document).ready(function() {
    $('.ball').click(function() {
    	$(this).animate({left:"700px",top:"500px"}, 1000);
    });
});*/
window.onload = function() {
    var oBall = document.getElementById('ball');
    oBall.onclick = function() {
        parabola(this, 30, 1); // 10m/s, 1000ms
    };
};

var timer = null;

function parabola(ball, v, t) {
	clearInterval(timer);//先关定时器，保证再次点击按钮的时候不会开多个定时器

    timer = setInterval((function() {
        console.log(ball.offsetLeft + "----------" + v * t);
        console.log(ball.offsetTop + "-----top-----");
        if (ball.offsetLeft >= v * t) {
            clearInterval(timer);
        } else {
            ball.style.left = ball.offsetLeft + v + "px";
            ball.style.top = ball.offsetTop +(0.5*9.8*30*(2*Math.sqrt((2*ball.offsetTop)/2)+30))+"px";
        }
    }), 30);

}

/*
 * 0.5*g*t^2
 * 
 * t2^2-t2^1
 * =(t2+t1)(t2-t1)
 * 
 * t2-t1=30
 * t2 = t1+30
 * so (2*t1+30)*30
 *
 * t1 = sqrt(2*offsetTop/0.98)
 * 
 */
