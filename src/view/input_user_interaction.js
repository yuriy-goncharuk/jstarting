class View
{
    constructor() 
    {
        const button = document.getElementById('button');
        const inp = document.getElementById('input');

        button.addEventListener("click",function()
            {
                if(inp.value!="")
                {
                    this.putMessage(inp.value, "yuriy")

                    inp.value = "";
                }
            }.bind(this)
        )
        inp.addEventListener("keyup", function(event) 
            {
                if(inp.value!="")
                {
                    if (event.keyCode === 13) 
                    {
                        this.putMessage(inp.value, "yuriy")
                        inp.value = "";
                    }
                }
            }.bind(this)
        )
        this.box = document.getElementById('messages');
        this.myAudio = new Audio;
        this.myAudio.src = "click.mp3";
    }
    putMessage(mess) 
    {
        bubble = 
        this.box.appendChild(bubble);
        this.myAudio.play();
        this.smart_scroll(this.box,intervall);
    }
    smart_scroll(container, interval)
    {
       container.scrollTop = interval; 
    }
}