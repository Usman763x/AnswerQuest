function modify_scr(val) {
    var scr = document.getElementById('scr').value;
    var new_scr = parseInt(scr,10) + val;
    
    
    
    document.getElementById('scr').value = new_scr;
    return new_scr;
}