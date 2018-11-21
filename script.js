var body = "";
var css = "";
var js = "";

var page = "";
var designWindow = null;

function openWin() {
	if(designWindow != null) 
		designWindow.close();
   
    designWindow = window.open("", "Design Window", "width=800,height=600");
   
    var headerinfo = "<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script><meta charset=\"UTF-8\"><meta name=\"google\" content=\"notranslate\"><meta http-equiv=\"Content-Language\" content=\"en\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" /><link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" integrity=\"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u\" crossorigin=\"anonymous\" />";   
   
    page += "<html>";
    page += "<head>";
    page += headerinfo;
    page += "<script>";
    page += js;
    page += "</script>";

    page += "<style>";
    page += css;
    page += "</style>";

    page += "</head>";

    if (onload !== null)
        page += "<body onload=" + onload + ">";
    else 
        page += "<body>";

    page += body;
    page += "</body>";

    page += "</html>";
    
    // Set page to empty for when the 
    // user opens the page again or
    // else it will duplicate existing items.
    designWindow.document.write(page);
    page = "";
}

function addButton() {
    body += "<button>" + $("#btn").val() + "</button>";
}

function addHeader(size) {
	var text = $("#h" + size).val();
	body += "<h" + size + ">" + text + "</h" + size + ">";
}

function addHeaderColor(size) {
    css += "h" + size + " { color: " + $("#headerColor" + size).val() + "}";
}

function addBodyBackgroundColor() {
    css += "body { background-color: " + $("#bg").val() + "}";
}

function addParagraphColor() {
    css += "p { color: " + $("#paragraphColor").val() + "}";
}

function addParagraphSize() {
    css += "p { font-size: " + $("#paragraphSize").val() + "}";
}

function addParagraph() {
    body += "<p>" + $("#paragraph").val() + "</p>";
}

function addImage() {
    body += "<img src=\"" + $("#img").val() + "\"></img>";
}

function addAlert() {
    js += "function alertjs() { alert(\"" + $("#alert").val() + "\"); }";
    body += "<button onclick=\"alertjs()\">" + $("#alertbtn").val() + "</button>";
}

function addLink() {
    body += "<a href=\"" + $("#linkurl").val() + "\">" + $("#linktext").val() + "</a>";
}

function closeWindow() {
    designWindow.close();
}

function clearWindow() {
    body = "";
    css = "";
	js = "";
	
    page = "";

    if (designWindow != null)
        designWindow.close();

    designWindow = null;
}
