var numSquares=6;
var color;
var pickedColor;

var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
//Buttons
var resetButton=document.querySelector("#reset");
var modeButton=document.querySelectorAll(".mode");

init();

function init()
{
	setupModeButton();
	setupSquares();
	reset();
}

function setupModeButton()
{
for(var i=0;i<modeButton.length;i++)
{
	modeButton[i].addEventListener("click",function()
	{
         modeButton[0].classList.remove("selected");
         modeButton[1].classList.remove("selected");
         this.classList.add("selected");
         this.textContent=== "Easy" ? numSquares=3 : numSquares=6;
  
         reset();
	});
}
}


function setupSquares()
{
    for(var i=0;i<squares.length;i++)
  {
	squares[i].addEventListener("click",function()
	{
		
		var clickedColor =this.style.background;

		if(clickedColor === pickedColor)
		{
			//alert("Correct");
            messageDisplay.textContent="Correct!";
            changeColors(clickedColor);
            h1.style.background=clickedColor;
            resetButton.textContent="Play Again?";
        }
		 else
		 {
		 	this.style.background='#232323';
		 	messageDisplay.textContent="Try Again!";                                                                                                                                          
		 }
	} );
}
 }


function reset()
{
	color=genRandomColor(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
    resetButton.textContent="New Colors";
    messageDisplay.textContent="";
	for(var i=0;i<squares.length;i++)
	{
		if(color[i])
		{
		squares[i].style.display="block";
		squares[i].style.background=color[i];
	    }
	    else 
	    	squares[i].style.display="none";
	}
   h1.style.background='steelblue';
}



//Reset Button
resetButton.addEventListener("click",function()
{
     reset();

});




function changeColors(colors)
	{
		for(var i=0;i<squares.length;i++)
		{
			squares[i].style.background=colors;
		}
	}



function pickColor()
{
	var random=Math.floor(Math.random()*color.length);
	return color[random];
}



function randomColor()
{
	var r=Math.floor(Math.random()*256);

	var g=Math.floor(Math.random()*256);

	var b=Math.floor(Math.random()*256);

	return "rgb(" + r +", " + g +", "+ b+ ")";
}


function genRandomColor(num)
{
	var arr=[];

	for(var i=0;i<num;i++)
	{
      arr.push(randomColor());
	}

   return arr;
}