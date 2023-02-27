
Webcam.attach("camara");
camara=document.getElementById("camara");
Webcam.set({
    width:350,
    heigth:300,
    image_format:"png",
    png_quality:90
})
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img src='"+ data_uri +"' id='foto'>"
    })
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/bpGi4jjN1/model.json",consola);
function consola(){
    console.log("modelo cargado");
}