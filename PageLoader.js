var t1 = gsap.timeline();

function time(){
    var a = 0;
    setInterval(() => {
        a = a + Math.floor(Math.random()*20)
        if(a<100){
            document.querySelector("#loader h1").innerHTML = a+"%"
        }
        else
        {
            a = 100;
            document.querySelector("#loader h1").innerHTML = a+"%"
        }
    }, 100);
}

t1.to("#loader h1",
{
    delay:0.5,
    duration:1,
    onStart:time()
})

t1.to("#loader",
{
    top:"-100vh",
    delay:0.5,
    duration:1,
    opacity:0.7
})