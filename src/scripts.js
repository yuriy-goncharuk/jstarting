
window.addEventListener(
    "DOMContentLoaded", function()
    {
        let con =  new Controller();
    }
)

class Controller 
{
    constructor() 
    {
        let viv = new View()
        let mod = new Model()
        var butt = document.getElementById('button');
        var inp = document.getElementById('input');
        butt.addEventListener
        (
            "click", function(event)
            {
                if(inp.value!="")
                {
                    viv.putMessage(inp.value, "yuriy")
                    inp.value = "";
                }
            }
        )
        inp.addEventListener
        (
            "keyup", function(event) 
            {
                if(inp.value!="")
                {
                    if (event.keyCode === 13) 
                    {
                        viv.putMessage(inp.value, "yuriy")
                        inp.value = "";
                    }
                }
            }
        )
    }
}

class View
{
    constructor() 
    {
        this.box = document.getElementById('messages');
        this.myAudio = new Audio;
        this.myAudio.src = "click.mp3";
    }

    putMessage(mess, sender) 
    {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;
        let bubble = document.createElement('div');
        let content = document.createElement('div');
        let info = document.createElement('div');
        content.innerHTML = mess;
        info.innerHTML = sender + " " + dateTime;
        bubble.className = "bubble";
        content.className = "message_content";
        info.className = "message_info";
        bubble.appendChild(content);
        bubble.appendChild(info);
        this.box.appendChild(bubble);
        this.myAudio.play();

        let intervall = this.box.scrollHeight
        setInterval(this.smart_scroll(this.box,intervall), 1000);
    }
    smart_scroll(container, interval)
    {
       container.scrollTop = interval; 
    }
}

class Model
{
    constructor() 
    {
        this.box = document.getElementById('messages');
    }
}