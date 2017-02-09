function doClick(e) {
    alert($.label.text);
}

// $.label.addEventListener('click', doClick);

$.label.addEventListener('click',function(e){
	doClick(e);
});

$.index.open();
