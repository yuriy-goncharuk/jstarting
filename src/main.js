window.addEventListener
(
    "DOMContentLoaded", 
    function()
    {
        const viv = new View()
        const mod = new Model(viv)

        
        new Controller(viv,mod);
    }
)