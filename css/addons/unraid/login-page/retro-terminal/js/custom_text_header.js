
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre> |__   __|                                 | |      | |
    | | _____      ___ __  _ __   ___  _ __| |_ __ _| |
    | |/ _ \ \ /\ / / '_ \| '_ \ / _ \| '__| __/ _` | |
    | | (_) \ V  V /| | | | |_) | (_) | |  | || (_| | |
    |_|\___/ \_/\_/ |_| |_| .__/ \___/|_|   \__\__,_|_|
                          | |                          
                          |_|                          </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
