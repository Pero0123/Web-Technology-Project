var imagestr = [
    "<img id=\"tomato\" src=\"tomato images/tomato on vine.jpg\" alt=\"000000\">",
    "<img id=\"tomato\" src=\"tomato images/tomato on vine 2.jpg\" alt=\"1111111\">",
    "<img id=\"tomato\" src=\"tomato images/Cherry Tomatoes.jpg\" style=\"background-image\" alt=\"222222\">"
];

var counter = 0;
document.getElementById("tomato").innerHTML=imagestr[counter];

function nextImage()
{
    if (counter<2)
    {
        counter++;
    }
    else
    {
        counter=0;
    }
    document.getElementById("tomato").innerHTML=imagestr[counter];
}

function prevImage()
{
    if (counter>0)
    {
        counter--;
    }
    else
    {
        counter=2;
    }
    document.getElementById("tomato").innerHTML=imagestr[counter];
}