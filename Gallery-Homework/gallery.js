function upDate(previewPic){
    let src = previewPic.getAttribute( "src" );
    document.querySelector('#image').style.backgroundImage = "url('" + src + "')";
    document.querySelector('#image').innerHTML = previewPic.alt;
}

function unDo(){
    let text = "Hover over an image below to display here.";
    document.querySelector('#image').style.backgroundImage = "url('')";
    document.querySelector('#image').innerHTML= text;
}