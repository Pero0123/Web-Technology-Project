/add images here 

var imagestr = [
    "<img id=\"tomato\" src=\"tomato images/tomato on vine.jpg\" alt=\"can't load image\">",
    "<img id=\"tomato\" src=\"tomato images/tomato on vine 2.jpg\" alt=\"can't load image\">",
    "<img id=\"tomato\" src=\"tomato images/Cherry Tomatoes.jpg\" alt=\"can't load image\">"
];

var counter = 0;

//set number of images here
const imagenumber = 3;

document.getElementById("tomato").innerHTML=imagestr[counter];
document.getElementById("img1").style.borderWidth="5px";

function nextImage()
{
    clearBorder();

    if (counter<(imagenumber-1))
    {
        counter++;
    }
    else
    {
        counter=0;
    }
    document.getElementById("tomato").innerHTML=imagestr[counter];

    document.getElementById("img"+(counter+1)).style.borderWidth="5px";
}

function prevImage()
{
    clearBorder();

    if (counter>0)
    {
        counter--;
    }
    else
    {
        counter=(imagenumber-1);
    }
    document.getElementById("tomato").innerHTML=imagestr[counter];

    document.getElementById("img"+(counter+1)).style.borderWidth="5px";
}

function updateImage()
{
    clearBorder();
    document.getElementById("tomato").innerHTML=imagestr[counter];
    document.getElementById("img"+(counter+1)).style.borderWidth="5px";
}

function selectImg1()
{
    counter = 0;
    updateImage();
}

function selectImg2()
{
    counter = 1;
    updateImage();
}

function selectImg3()
{
    counter = 2;
    updateImage();
}

function clearBorder()
{
    document.getElementById("img1").style.borderWidth="0px";
    document.getElementById("img2").style.borderWidth="0px";
    document.getElementById("img3").style.borderWidth="0px";
}


