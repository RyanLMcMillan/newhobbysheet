let vxerror = true
while (vxerror === true) {
    let PageANS = prompt('Music, Traveling, Hunting, Reading; What sounds the most appealing out of these four?')

    if (PageANS === 'Music') {
        alert('You are in the right place so far!')
        let MANS = prompt('Who is your favorite band or artist')

        alert('No way! I love to listen to ' + MANS + ' as well!')
        vxerror = false;
    }
    else if (PageANS === 'Traveling') {
        alert('Id fly over to Bishals page! It can be accessed via the TOC!')
        vxerror = false;
    }
    else if (PageANS === 'Hunting') {
        alert('Tracks lead back to Jons page! It can be accessed via the TOC!')
        vxerror = false;
    }
    else if (PageANS === 'Reading') {
        alert('Cant process late fees here, check you Coles page! it can be accessed via the TOC!')
        vxerror = false;
    }
    else {
        alert('Whoopsie daisy there was an error!')
        vxerror = true;
    }
}
vxerror = false

let isvalid = false;

let VAL;
while (!isvalid) 
{
    PageANS = prompt('How many Electric Triangles would you rate my page out of 5?')
    VAL = parseInt(PageANS);
    isvalid = !isNaN(VAL) && VAL >= 1 && VAL <= 5;
}
 for(let i =0; i <VAL; i++)
{
var element = document.createElement("img");
element.setAttribute("src",  "Electric_Triangle.jpg")
element.setAttribute("height", "100");
element.setAttribute("width", "100");
element.setAttribute("alt", "ET");
document.getElementById("images").appendChild(element);
}
