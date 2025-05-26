function include(){
    return new Promise((resolve)=>{
        function includeHTML() {
            var z, i, elmnt, file, xhttp;
            /* Loop through a collection of all HTML elements: */
            z = document.getElementsByTagName("*");
            for (i = 0; i < z.length; i++) {
                elmnt = z[i];
                /*search for elements with a certain atrribute:*/
                file = elmnt.getAttribute("w3-include-html");
                if (file) {
                /* Make an HTTP request using the attribute value as the file name: */
                xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                    }
                }
                xhttp.open("GET", file, true);
                xhttp.send();
                /* Exit the function: */
                return;
                }
            }
        }
        resolve(includeHTML());
    });    
} //include()
function pathSite(){
   return new Promise(()=>{
    function goToFunctin(){
         if(window.location.href=="https://amir248.github.io/who-is-faster-PHP-or-JS/"){
        document.querySelector('body > script:nth-child(2)').setAttribute("src","public/1mainScript.js")
    }
    }
    resolve(goToFunctin());
   });
}
async function main(){
    await include();
    await pathSite();
}
main();