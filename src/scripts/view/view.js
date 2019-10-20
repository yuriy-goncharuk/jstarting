class View extends Observable
{
    constructor() 
    {
        super()

        const send_button = document.getElementById('button');
        this.input_field = document.getElementById('input');
        this.messagesBox = document.getElementById('messages');

        send_button.addEventListener(
            "click",function(event)
            {
                this.notifyAll("user_wants_to_send", this.input_field.value);
            }.bind(this))

        this.input_field.addEventListener(
            "keyup",function(event)
            {
                if (event.keyCode === 13) 
                {
                    this.notifyAll("user_wants_to_send", this.input_field.value);
                }
            }.bind(this))
    }
    putMessageIntoDoc(mess) 
    {
        this.messagesBox.appendChild(this.messageInDiv(mess));
        this.input_field.value = "";
    }
    smart_scroll(container, interval)
    {
       container.scrollTop = interval; 
    }
    messageInDiv(message)
    {
        const bubble = document.createElement('div')
        bubble.className = "bubble"
        const content = document.createElement('div')
        content.className = "message_content"
        const info = document.createElement('div')
        info.className = "message_info"
        content.innerHTML = message.content
        info.innerHTML = message.date
        bubble.appendChild(content);
        bubble.appendChild(info);
        return bubble
    }

    notify(obj, event, data) 
    {
        if(event == "view_take_this")
        {
            this.putMessageIntoDoc(data)
        }
    }
}