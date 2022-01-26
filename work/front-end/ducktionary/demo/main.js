// async/await

async function getDefinition( word ) {
    try{
        const response = await fetch( `https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=232361ea-ec4c-43bf-9848-f50161c69d2d` );
        const data = await response.json();

        const main = document.getElementById('main');

        // console.log( data.length );
        // console.log( data[0]['hwi']['hw'] );
        // console.log( data[0]['shortdef'][0] );

        if (data.length >= 1) {
            // console.log( data[0] );
            // console.log( typeof data[0]);
            if ( typeof data[0] == "string") {
                main.innerHTML = `<p>Did you mean "${data[0]}"?</p>`;
            } else {
                // console.log( data[0]['hwi']['prs'][0]['ipa']);
                // console.log( data[0]['fl']);
                main.innerHTML = `<h2>${data[0]['hwi']['hw']}<p>(${data[0]['fl']})</p></h2>
                <p>\\ ${data[0]['hwi']['prs'][0]['ipa']} \\</p>
                <p>${data[0]['shortdef'][0]}</p>`;
            }
        } else {
            // console.log("no data");
            main.innerHTML = `<p>"Sorry, that's not a word."</p>`;
        }

    } catch( error ) {
        console.log( `🤕 ${error}` );
    }
}
getDefinition( 'duck' );
// getDefinition( 'duc' );
// getDefinition( '657687' );
// getDefinition( 'avuncular' );

var form = document.querySelector("#form");
form.addEventListener("submit", function(e){
	e.preventDefault();
    var submitbtn = document.querySelector(".searchbar");
    // console.log( submitbtn.value );
    getDefinition( submitbtn.value );
});
