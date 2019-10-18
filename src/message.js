class Message
{
    constructor(date, content)
    {
        this.date = date;
        this.content = content;
    }
    getDocMessage()
    {
        const bubble = document.createElement('div')
        bubble.className = "bubble"
        const content = document.createElement('div')
        content.className = "message_content"
        const info = document.createElement('div')
        info.className = "message_info"
        content.innerHTML = text
        info.innerHTML = date
        return bubble
    }
}