
import {get_search_handler, get_track_div_m, get_iframe_alt_text} from './layout.js';

$(document).ready(function(){
    $("#learn").click(function() {
        console.log(location.origin + "/learn/1");
        location.href = location.origin + "/learn/1";
    });
    $("#quiz").click(function() {
       location.href = location.origin + "/quiz/1";
    });
});