function startAd(){
setTimeout(function(){
document.getElementById('thumb-2').style.transform="scale(0.7) translate(35px, -126px) rotate(26deg)";
document.getElementById('thumb-1').style.transform="scale(0.7) translate(18px, -70px) rotate(23deg)";
document.getElementById('thumb-2').style.transition="all 0.5s ease";
document.getElementById('thumb-1').style.transition="all 0.5s ease";
},300)

setTimeout(function(){
    document.getElementById('bg').style.transform="translateY(-250px)";
    document.getElementById('bg').style.transition="all 0.9s linear";
    },600)
    
    setTimeout(function(){
        document.getElementById('notification').style.transform="scale(0.7)";
        document.getElementById('notification').style.transition="all 0.5s linear";
        },1000)
        
        setTimeout(function(){
            document.getElementById('paper').style.transform=" translateX(0px)";
            document.getElementById('paper').style.transition="all 0.2s linear";
            },2400)
            setTimeout(function(){
                document.getElementById('copy-1').style.opacity="0";
                document.getElementById('copy-1').style.transition="all 0.2s linear";
                },2800)
                

            setTimeout(function(){
                document.getElementById('nav').style.opacity="0";
                document.getElementById('logo').style.opacity="1";
                document.getElementById('logo').style.transition="all 0.2s linear";
        document.getElementById('wraper').style.transform="scale(0.7)";
            document.getElementById('wraper').style.transition="all 0.3s linear";
                document.getElementById('top').style.opacity="1";
                document.getElementById('top').style.transition="all 0.2s linear";
                document.getElementById('bottom').style.opacity="1";
                document.getElementById('bottom').style.transition="all 0.2s linear";
                document.getElementById('cta').style.opacity="1";
                document.getElementById('cta').style.transition="all 0.3s linear";
                document.getElementById('terms').style.opacity="1";
                document.getElementById('terms').style.transition="all 0.3s linear";
                },3500)
                setTimeout(function(){
                    document.getElementById('wraper').style.transform=" scale(0.5) translateX(-125px)";
                    document.getElementById('wraper').style.transition="all 0.2s linear";
        document.getElementById('copy-2').style.transform="scale(0.8)";
        document.getElementById('copy-2').style.opacity="1";
        document.getElementById('copy-2').style.transition="all 0.4s linear";
                    },4500)
                    setTimeout(function(){
            document.getElementById('cta').style.transform="scale(0.9)";
            document.getElementById('cta').style.transition="all 0.4s linear";
                        },5500)
                        setTimeout(function(){
                            document.getElementById('cta').style.transform="scale(0.8)";
                            document.getElementById('cta').style.transition="all 0.4s linear";
                                        },5900)

        }
console.log(startAd)

window.load=startAd();