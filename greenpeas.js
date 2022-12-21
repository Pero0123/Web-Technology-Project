//add images here 

var imagestr = [
    "<img id=\"tomato\" src=\"tomato images/peas1.jfif\" alt=\"can't load image\">",
    "<img id=\"tomato\" src=\"tomato images/peas2.jfif\" alt=\"can't load image\">",
    "<img id=\"tomato\" src=\"tomato images/peas 3.jfif\" alt=\"can't load image\">",
    "<img id=\"tomato\" src=\"tomato images/peas 4.jfif\" alt=\"can't load image\">"
    

];

var counter = 0;

//set number of images here
const imagenumber = 4;

updateImage();

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
   updateImage();
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
    updateImage();
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

function selectImg4()
{
    counter = 3;
    updateImage();
}

function clearBorder()
{
    document.getElementById("img1").style.borderWidth="0px";
    document.getElementById("img2").style.borderWidth="0px";
    document.getElementById("img3").style.borderWidth="0px";
    document.getElementById("img4").style.borderWidth="0px";
}


