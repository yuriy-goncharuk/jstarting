class Controller  extends Observable
{
    constructor() 
    {
        super();
    }

    notify(obj, event, data) 
    {
        alert("cont" + data)
    }
}
