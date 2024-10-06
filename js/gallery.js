

function upDate(previewPic){
    console.log("Mouseover event triggered");
    console.log("PreviewPic Source:", previewPic.src);
    console.log("PreviewPic Alt:", previewPic.alt);

    // Change the background image of the div with id 'image' to the previewPic's src
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
    
    // Change the text of the div with id 'image' to the alt text of the previewPic
    document.getElementById("image").innerHTML = previewPic.alt;
       }
   
       function unDo(){
         // Restore the background image to the original empty background
    document.getElementById("image").style.backgroundImage = "url('')";
    
    // Restore the text to the original text
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
           
       }