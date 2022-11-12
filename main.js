canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color="red";
width_of_line=1;

 document.getElementById("color").value=color;
 document.getElementById("width").value=width_of_line;

var mouse_event="empty";
console.log(mouse_event);

canvas.addEventListener("mousedown", My_mousedown);

function My_mousedown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;

    console.log(color);
    console.log(width_of_line);

    mouse_event="Mousedown";
    console.log(mouse_event);

}

    canvas.addEventListener("mouseup" , My_mouseup);

    function My_mouseup(e){

        mouse_event="Mouseup";
        console.log(mouse_event);

    }

    canvas.addEventListener("mouseleave" , My_mouseleave);

    function My_mouseleave(e){

        mouse_event="Mouseleave";
        console.log(mouse_event);

    }

     var Last_position_mouse_X , Last_position_mouse_Y;


    canvas.addEventListener("mousemove" , My_mousemove);
    function My_mousemove(e){

        current_position_of_mouse_X = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_Y = e.clientY - canvas.offsetTop;

        if (mouse_event == "Mousedown"){
            ctx.beginPath();
            ctx.strokeStyle = color; 
            ctx.lineWidth = width_of_line;

            console.log("Last position of X and Y Coordinates = ");
            console.log("X = " + Last_position_mouse_X + "Y = " + Last_position_mouse_Y);
            ctx.moveTo(Last_position_mouse_X , Last_position_mouse_Y);

            console.log("Current position of X and Y coordinates = ");
            console.log("X = " + current_position_of_mouse_X + "Y =" + current_position_of_mouse_Y);
            ctx.lineTo(current_position_of_mouse_X, current_position_of_mouse_Y);
            ctx.stroke();
        
        }

        Last_position_mouse_X = current_position_of_mouse_X;
        Last_position_mouse_Y = current_position_of_mouse_Y;
        
    }

    function clearCanvas(){

     ctx.clearRect(0,0,900,600);

    }


    width_of_screen = screen.width;
    new_canvas_height = screen.height - 300;
    new_canvas_width = screen.width - 100 ;

    if(width_of_screen < 992){
        document.getElementById("myCanvas").width = new_canvas_width;
       document.getElementById("myCanvas").height = new_canvas_height;
        document.body.style.overflow = "hidden";
    }

    canvas.addEventListener("touchstart" , my_touchstart );

    function my_touchstart(e){

     color = document.getElementById("color").value;
     width_of_line = document.getElementById("width").value;
     
     Last_position_mouse_X = e.touches[0].clientX - canvas.offsetLeft;
     Last_position_mouse_Y = e.touches[0].clientY - canvas.offsetTop;
     
     console.log("Touchstart");
    }

    canvas.addEventListener("touchmove", my_touchmove);

    function my_touchmove(e){
        current_position_mouse_X = e.touches[0].clientX - canvas.offsetLeft;    
     current_position_mouse_Y = e.touches[0].clientY - canvas.offsetTop;

     ctx.beginPath();
     ctx.strokeStyle = color;
     ctx.lineWidth = width_of_line;
     ctx.moveTo(Last_position_mouse_X, Last_position_mouse_Y);
     ctx.lineTo(current_position_mouse_X, current_position_mouse_Y);
     ctx.stroke();

     Last_position_mouse_X = current_position_mouse_X;
     Last_position_mouse_Y = current_position_mouse_Y;
}