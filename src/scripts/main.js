window.addEventListener
(
    "DOMContentLoaded", 
    function()
    {
        const view = new View();
        const model = new Model();
        const controller = new Controller();

        view.addObserver(controller);
        model.addObserver(controller);


        view.notify("none","none","none")

        print("here")
    }
)