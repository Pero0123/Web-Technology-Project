var imagestr = [
    "<img id=\"tomato\" src=\"tomato images/tomato on vine.jpg\" alt=\"000000\">",
    "<img id=\"tomato\" src=\"tomato images/tomato on vine 2.jpg\" alt=\"1111111\">",
    "<img id=\"tomato\" src=\"tomato images/Cherry Tomatoes.jpg\" alt=\"222222\">"
];

var counter = 0;
document.getElementById("tomato").innerHTML=imagestr[counter];
document.getElementById("img1").style.borderWidth="5px";

function nextImage()
{
    document.getElementById("img1").style.borderWidth="0px";
    document.getElementById("img2").style.borderWidth="0px";
    document.getElementById("img3").style.borderWidth="0px";

    if (counter<2)
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
    document.getElementById("img1").style.borderWidth="0px";
    document.getElementById("img2").style.borderWidth="0px";
    document.getElementById("img3").style.borderWidth="0px";

    if (counter>0)
    {
        counter--;
    }
    else
    {
        counter=2;
    }
    document.getElementById("tomato").innerHTML=imagestr[counter];

    document.getElementById("img"+(counter+1)).style.borderWidth="5px";
}

function updateImage()
{
    document.getElementById("img1").style.borderWidth="0px";
    document.getElementById("img2").style.borderWidth="0px";
    document.getElementById("img3").style.borderWidth="0px";

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


