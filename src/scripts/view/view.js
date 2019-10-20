class View extends Observable
{
    constructor() 
    {
        super()

        const send_button = document.getElementById('button');
        const input_field = document.getElementById('input');

        send_button.addEventListener("click",function(event){this.notifyAll(event, inp.value);}.bind(this))
        input_field.addEventListener("keyup",function(event){this.notifyAll(event, inp.value);}.bind(this))

        // this.box = document.getElementById('messages');
        // this.myAudio = new Audio;
        // this.myAudio.src = "click.mp3";
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