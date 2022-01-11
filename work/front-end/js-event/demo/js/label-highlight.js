window.addEventListener('load', (event) => {
    var style = document.createElement('style');
    style.innerHTML = '.label-highlight { font-family: "Lucida Console", Monaco, monospace; color: blueviolet; } .label-missing { background: red; }';
    document.head.appendChild(style);
});

function highlightLabel( thisfield ) {
    var fieldLabel = getLabelsForInputElement( thisfield );
    if( fieldLabel.length ) {
        fieldLabel[0].classList.toggle('label-highlight');
    } else {
        thisfield.classList.toggle('label-missing');
    }
}

// There is a labels property in the HTML5 standard which points to labels which are associated to an input element.
// So you could use something like this (support for native labels property but with a fallback for retrieving labels in case the browser doesn't support it)...
// https://stackoverflow.com/a/15061155/2762464
var getLabelsForInputElement = function(element) {
    var labels = [];
    var id = element.id;

    if (element.labels) {
        return element.labels;
    }

    id && Array.prototype.push
        .apply(labels, document.querySelector("label[for='" + id + "']"));

    while (element = element.parentNode) {
        if (element.tagName.toLowerCase() == "label") {
            labels.push(element);
        }  
    }

    return labels;
};