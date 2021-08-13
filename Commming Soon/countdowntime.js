function commingsoonpage() {
    // Set the date we're counting down to
    var countDownDate = new Date("july 26, 2021 10:34:00").getTime();


    // Update the count down every 1 second
    var x = setInterval(() => {

        // Get todays date and time
        var now = new Date().getTime();//current time

        // Find the distance between now and the count down date
        var distance = countDownDate - now;//msec...876352434345678099875643234567

        //alert(distance)


        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);


        document.getElementById('demo1').innerHTML = days + "days ";
        document.getElementById('demo2').innerHTML = hours + "hrs ";
        document.getElementById('demo3').innerHTML = minutes + "mins ";
        document.getElementById('demo4').innerHTML = seconds + "secs ";

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);//stop setInterval functanility
            document.getElementById("demo1").innerHTML = "s";
            document.getElementById("demo2").innerHTML = "0";
            document.getElementById("demo3").innerHTML = "0";
            document.getElementById("demo4").innerHTML = "n";
        }

    }, 1000);
}


