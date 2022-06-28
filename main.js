function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifycanvas);
    synth=window.speechSynthesis;
}
function draw()
{
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }

}
function preload()
{
    classifier=ml5.imageClassifier("DoodleNet");
}
function classifycanvas()
{
    classifier.classify(canvas,gotresults);
}
function gotresults(error,results)
{
if(error)
{
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("label").innerHTML="Lable: "+results[0].label;
    document.getElementById("confidence").innerHTML="Confidence: "+Math.round(results[0].confidence*100)+"%";
    saythis=new SpeechSynthesisUtterance(results[0].label);
    synth.speak(saythis);

}
}
function clearcanvas()
{
    background("white");
}