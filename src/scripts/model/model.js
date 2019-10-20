class Model extends Observable
{
    constructor() 
    {
        super()
        
        this.messages = [] //db in array
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
        this.view.sendMessage(this.messages[this.messages.length-1].getDocMessage())
    }
}