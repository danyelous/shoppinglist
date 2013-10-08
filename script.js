// ShoppingList project by Ponto.


$(document).ready(function() {


var editedText = ""; //var for item edition
var editedHTMLRef = ""; //var for item edition

$('.item').focus(); //The item input box get the focus when the page loads
// $('.itemslist').sortable(); //Add sortable property to the list




// ******************** Input functions ********************


// To capture the ENTER key when adding items
$(document).keyup(function (e) {
    if ( $('.item').is(':focus') && (e.keyCode === 13) ) {
		if( inputEntryIsValid($('.item').val()) ){		//Evaluate the input text
			$('.itemslist').prepend('<li> <input class="checkbox" name="checkbox" type="checkbox"><span class="text-style">' + $('.item').val() +'</span><img alt="remove" src="remove-icon.png" class="remvoeimg"/></li>');		
		}
		$('.item').val(''); //Clean the input box
    }
	
 });


// To capture the ENTER key when editing items
$(document).keyup(function (e) {
    if ( $('.edititem').is(':focus') && (e.keyCode === 13) ) {
		if( inputEntryIsValid($('.edititem').val()) ){		//Evaluate the input text
			editedHTMLRef.html('<input class="checkbox" name="checkbox" type="checkbox"><span class="text-style">' + $('.edititem').val() + '</span><img alt="remove" src="remove-icon.png" class="remvoeimg"/>' );
			$('.item').focus(); //To get again the focus on	
		}
	}

});


// To capture the click outside the input key when editing items
$('.itemslist').on('focusout', '.edititem', function(){
		if( inputEntryIsValid($('.edititem').val()) ){		//Evaluate the input text
			editedHTMLRef.html('<input class="checkbox" name="checkbox" type="checkbox"><span class="text-style">' + $('.edititem').val() + '</span><img alt="remove" src="remove-icon.png" class="remvoeimg"/>' );
			$('.item').focus(); //To get again the focus on
		}
		
});


// to capture the deletion image click
$('.itemslist').on('click', 'img.remvoeimg', function(){
    $(this).parent('li').remove();
    return false;
});


// to capture the mouse enter event to display or not the deletion image button
$('.itemslist').on('mouseenter', 'li', function(){
	if( $(this).children('.checkbox').is(':checked') ){
		$(this).children('.remvoeimg').show();
	}

    return false;
});


// to capture the mouse leave event to hide or not the deletion image button
$('.itemslist').on('mouseleave', 'li', function(){
	if( $(this).children('.checkbox').is(':checked') ){
		$(this).children('.remvoeimg').hide();
	}
    return false;
});


// to capture if the checkbox has been checked or not
$('.itemslist').on('change', '.checkbox', function(){
	if( $(this).is(':checked') ){
		$(this).parent('li').children('.text-style').css("text-decoration", "line-through");
		$(this).parent('li').children('.remvoeimg').show();
	}
	else{
		$(this).parent('li').children('.text-style').css("text-decoration", "none");
		$(this).parent('li').children('.remvoeimg').hide();
	}

    return false;
});


// to capture the double click event to edit the item
$('.itemslist').on('dblclick', 'li', function(){
	if( !( $('.remvoeimg').is(':visible') )){
		editedText = $(this).text();
		editedHTMLRef = $(this);
		$(this).html('<input class="edititem" id="edititem" name="edititem" type="text" maxlength="50" size="73" value='+ editedText +'>')
		$('.edititem').focus();
	}

	
});

 
// ******************** End Input functions ********************





// ******************** Internal functions ********************

function inputEntryIsValid(inputValue){ // evaluates the input entry

		return ((inputValue.length > 0) && !(inputValue == ' '));
}

// ******************** End Internal functions ********************

});
