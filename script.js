function AJAX_JSON_Req( url )
{
    var AJAX_req = new XMLHttpRequest();
    AJAX_req.open( "GET", url, true );
    AJAX_req.setRequestHeader("Content-type", "application/json");
 
    AJAX_req.onreadystatechange = function()
    {
        if( AJAX_req.readyState == 4 && AJAX_req.status == 200 )
        {
            var jsonData = JSON.parse( AJAX_req.responseText );
            document.write( jsonData.title );
            document.write( "<br />" );
            document.write( jsonData.address.streetAddress + " " + jsonData.address.city );
        }
    };
    AJAX_req.send();
}
 
AJAX_JSON_Req( 'data.json' );
