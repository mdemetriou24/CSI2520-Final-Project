$(document).ready(function () {

    //Drag n Drop
    function dragStart(ev) {
        ev.dataTransfer.effectAllowed = 'move';
        ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
        ev.dataTransfer.setDragImage(ev.target, 0, 0);

        return true;
    }

    
    //add event for the first Insert Header button
    document.getElementsByClassName("InserHeader")[0].addEventListener("click", InsertheaderFirst);

    //add event for the second Insert Header button
    document.getElementsByClassName("InserHeader")[1].addEventListener("click", InsertheaderSecond);

    //Function to inserr first header text
    function InsertheaderFirst(index) {
        document.getElementById("header").innerHTML = document.getElementsByClassName("headerText")[0].value;
    }

    //Function to inserr second header text
    function InsertheaderSecond(index) {
        document.getElementById("header").innerHTML = document.getElementsByClassName("headerText")[1].value;
    }

    //Apply Background back color which is selected by user in color text type
    document.getElementById("btnApplyToBackground").addEventListener("click", function () {
        //fetch the color and set it to body
        document.getElementsByTagName("body")[0].style.backgroundColor = document.getElementById("colorType").value;
    });


    //add double click event on the p tag and hide the tag
    document.body.addEventListener('dblclick', ({ target }) => {
        // Only continue on `<p>` elements:
        if (!target.matches('p')) {
            return;
        }

        //hide the control of p tag
        target.style.display = "none"
    });

    //add click evet on p tag and set it to color as yellow
    document.body.addEventListener('click', ({ target }) => {
        // Only continue on `<p>` elements:
        if (!target.matches('p')) {
            return;
        }

        //firstly reset all the color of p tag
        var length = document.getElementsByTagName("p").length;
        for (var i = 0; i < length; i++) {
            document.getElementsByTagName("p")[i].style.color = "";
        }

        //the p tag which clickd set back color as yello
        target.style.color = 'yellow';
    });

    //all paragraph button click to show all the p tag in browser
    document.getElementById("btnShowAllParagraphs").addEventListener("click", ({ target }) => {
        //check the length of p tag and 
        var length = document.getElementsByTagName("p").length;
        for (var i = 0; i < length; i++) {
            document.getElementsByTagName("p")[i].style.display = "block";
        }
    });
   
});

