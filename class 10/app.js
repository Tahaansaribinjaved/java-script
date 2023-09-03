var minites = 0
        var second = 0
        var milisecond = 0
        var getmin = document.getElementById('min')
        var getsec = document.getElementById('sec')
        var getmili = document.getElementById('msec')
        
        function start() {
            Interval = setInterval(function () {
                milisecond++
                getmili.innerHTML = milisecond
                if (milisecond >= 100) {
                    second++
                    getsec.innerHTML = second
                    milisecond = 0
        
                }
                else if (second >= 60) {
                    minites++
                    getmin.innerHTML = minites
                    second = 0
                }
        
            }, 10
            )
            document.getElementById('sss').disabled = true
        }
        var Interval;
        function stop() {
            clearInterval(Interval)
            document.getElementById('sss').disabled = false
        }
        function reset (){
            minites = 0
            second = 0 
             milisecond = 0
             getmili.innerHTML = milisecond
             getsec.innerHTML = second
             getmin.innerHTML = minites
        }