class Observable 
{
    constructor() 
    {
        this.observers = [];
    }
    
    addObserver(obj)
    {
        this.observers.push(obj)
    }

    delObserver(obj)
    {
        this.observers.splice(this.observers.indexOf(obj));
    }

    notifyAll(e, data) 
    {
        for (var observer in this.observers)
        {
            observer.on(this, e, data);
        }
    }
}