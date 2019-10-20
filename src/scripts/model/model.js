class Model extends Observable
{
    constructor() 
    {
        super()
        this.messages = [] //db in array lol
    }
    addMessage(content)
    {
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date+' '+time;
        this.messages.push(new Message(dateTime, content));
    }
    sendLastMessage()
    {
        this.notifyAll("view_take_this", this.messages[this.messages.length-1])
    }
    notify(obj, event, data) 
    {
        if(event == "data_ok_lets_send_it")
        {
            this.addMessage(data);
            this.sendLastMessage();
        }
    }
}