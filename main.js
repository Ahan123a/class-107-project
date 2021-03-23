Webcam.set({
    height:350,
    width:300,
    image_format:'png',
    png_quality:90

});

camera=document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot() {

    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src ="'+data_uri+'"/>'
        console.log("8")
    });

}

console.log("ml5 version:",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/CUxvAo7nA/model.json",modelLoaded);

function modelLoaded() {

console.log('Your Model has been loaded Successfully');


}

function speak() {
    var synth = window.speechSynthesis;
    speak_prediction_1 ="The First Prediction is  "+ prediction_1
    speak_prediction_2 = "The Second Prediction is"+ prediction_2
    var utterThis = new speechSynthesisUtterance(speak_prediction_1 + speak_prediction_2);
    synth.speak(utterThis);

}


