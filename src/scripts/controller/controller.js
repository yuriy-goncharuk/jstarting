class Controller  extends Observable
{
    constructor() 
    {
        super();
    }

    notify(obj, event, data) 
    {
        if(event=="user_wants_to_send")
        {
            if(this.checkData(data))
            {
                this.notifyAll("data_ok_lets_send_it", data)
            }
        }
    }

    checkData(data)
    {
        if(data!="")
            return true;
    }
}
