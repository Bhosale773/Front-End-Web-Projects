var colors=[];
var num;
var wincolor,selectedcolor;
var hardbt = document.querySelector("#hardbt");
var easybt = document.querySelector("#easybt");
var squares = document.querySelectorAll(".square");
var rgb = document.querySelector("#rgb_code");
var msg = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#bt1");

if(hardbt.className==="selected")
{
    num=6;
    generatecolors(6);
}

reset.addEventListener("click",function()
{
    this.textContent="NEW COLORS";
    msg.textContent="";
    if(hardbt.className==="selected")
    {
        num=6;
        generatecolors(6);
    }
    else if(easybt.className==="selected")
    {
        num=3;
        generatecolors(3);
        for(var i=3;i<6;i++)
        {
            squares[i].style.backgroundColor="#232323";
        }
    }
});

hardbt.addEventListener("click",function()
{
    hardbt.classList.add("selected");
    easybt.classList.remove("selected");
    num=6;
    generatecolors(6);
});

easybt.addEventListener("click",function()
{
    easybt.classList.add("selected");
    hardbt.classList.remove("selected");
    num=3;
    generatecolors(3);
});

for(var i=0;i<num;i++)
{
    squares[i].addEventListener("click",function()
    {
        selectedcolor=this.style.backgroundColor;
        if(selectedcolor===wincolor)
        {
            msg.textContent="Correct";
            reset.textContent="PLAY AGAIN?";
            for(var i=0;i<num;i++)
            {
                squares[i].style.backgroundColor=wincolor;
            }
            h1.style.backgroundColor=wincolor;
        }
        else
        {
            msg.textContent="Try Again";
            this.style.backgroundColor="#232323";
        }
    });
}

function generatecolors(num)
{
    colors=[];
    h1.style.backgroundColor="steelblue";
    for(var i=0;i<num;i++)
    {
        colors.push(newcolor());
        squares[i].style.backgroundColor=colors[i];
    }
    wincolor=colors[Math.floor(Math.random()*6)];
    if(num===3)
    {
        for(var i=3;i<6;i++)
        {
            squares[i].style.backgroundColor="#232323";
        }
        wincolor=colors[Math.floor(Math.random()*3)];
    }
    rgb.textContent=wincolor;
}

function newcolor()
{
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}