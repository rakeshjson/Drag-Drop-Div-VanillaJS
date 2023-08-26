dragElement(document.getElementById("main-container"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    document.getElementById("heading").onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e.preventDefault();

        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function colorChanger(e) {
    let color_id = e.target.id
    document.getElementById('heading').style.backgroundColor = color_id

}

let cur_val = 0
function rotate() {

    if (cur_val == 1) {
        document.querySelector('#main-container').style.transform = "rotate(90deg)"
    }
    else if (cur_val == 2) {
        document.querySelector('#main-container').style.transform = "rotate(180deg)"
    }
    else if (cur_val == 3) {
        document.querySelector('#main-container').style.transform = "rotate(270deg)"
    }
    else  {
        document.querySelector('#main-container').style.transform = "rotate(360deg)"
    }

    if (cur_val == 4) { cur_val = 0 }
    cur_val++
}
