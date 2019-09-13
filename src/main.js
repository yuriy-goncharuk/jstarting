window.addEventListener(
    "DOMContentLoaded",
    function()
    {
        const main = document.getElementById(elementid= "main");
        for(let i = 0; i< 20;i++)
        {
            const id = setTimeout(() => 
            {
                const el = document.createElement("div");
                el.className = "number";
                el.innerHTML =formatAnswer(i+1);
                main.appendChild(el);

                el.addEventListener(
                    "click", 
                    function()
                    {
                        let res =  prompt("entry new value");
                        el.textContent = formatAnswer(res);
                    }
                )
            }, 33*i);
        }
    }
)
function formatAnswer(a)
{
    return "This is my " + a + " !!!!!!!!!!";
}