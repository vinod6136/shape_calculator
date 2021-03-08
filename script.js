
function checkShapeValue() {
    event.preventDefault();
    var ele = document.getElementsByName('shape');
    console.log(ele)
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            var shapeValue = ele[i].value;
            console.log(shapeValue, "shape")
            switch (shapeValue) {
                case "Rectangle":
                    return areaOfRect();
                case "Circle":
                    return areaOfCircle();
                case "Square":
                    return areaOfSquare();
                case "Ellipse":
                    return areaOfEllips();
            }

            // if (ele[i].value == "Circle") {
            //     document.getElementById('circl').style.display = "block";
            // }
            // else if (ele[i].value == "Rectangle") {
            //     document.getElementById('recta').style.display = "block";

            // }
            // if (ele[i].value == "Square") {
            //     alert("Square")
            // }
            // if (ele[i].value == "Ellipse") {
            //     alert("Ellipse")
            // }
        }
    }
}

function areaOfCircle() {
    alert('circ');
}
function areaOfRect() {
    alert('rect');
}
function areaOfSquare() {
    alert('squa');
}
function areaOfEllips() {
    alert('ellips');
}