var model = undefined; 
var identifiedObjects = [];
const webcam = document.querySelector(".webcam");
const camView = document.querySelector("#cam-view");

function getUserMediaSupported() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

if (getUserMediaSupported()) {
    document.querySelector(".enable-webcam").addEventListener('click', enableWebcam);
} else {
    // tell user to get a webcam
}

function enableWebcam(event) {
    if (!model) {
        return; 
    } 

    document.querySelector(".enable-webcam").style.display = "none";

    const constraints = {
        video: true,
    };

    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        webcam.srcObject = stream;
        webcam.addEventListener('loadeddata', predictWebcam);
    });
}
  
function predictWebcam() {
    model.detect(webcam).then((predictions) => {
        for (object of identifiedObjects) {
            camView.remove(object);
        }
        identifiedObjects.splice(0);

        for (let c = 0; c < predictions.length; c++) {
            if (predictions[c].score > 0.66) {
                console.log(predictions);
                const div = document.createElement("div");
                const p = document.createElement("p");

                p.innerText = predictions[c].class  + ' - with ' + Math.round(parseFloat(predictions[c].score) * 100) + '% confidence.';
                p.classList.add("confidence-box");
    
                div.appendChild(p);
                div.classList.add("identified-object");

                const highlighter = document.createElement("div"); 
                highlighter.classList.add("highlighter");

                div.appendChild(highlighter);

                'left: ' + predictions[c].bbox[0] + 'px; top: '
                + (predictions[c].bbox[1] - 20) + 'px; width: ' 
                + (predictions[c].bbox[2] + 20) + 'px; height: '
                + predictions[c].bbox[3] + 'px;';

                identifiedObjects.push(div);
                camView.appendChild(div);

            }
        }
    });
}

cocoSsd.load().then(function (loadedModel) {
    model = loadedModel;
});