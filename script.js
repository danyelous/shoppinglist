// ShoppingList project by Ponto.


$(document).ready(function() {


var editedText = ""; //var for item edition
var editedHTMLRef = ""; //var for item edition

$('.item').focus(); //The item input box get the focus when the page loads



// ******************** Input functions ********************


// To capture the ENTER key when adding items
$(document).keyup(function (e) {
    if ( $('.item').is(':focus') && (e.keyCode === 13) ) {
		var inputData = $('.item').val().trim();
		if( inputEntryIsValid(inputData) ){		//Evaluate the input text
			var liData = '<li> <input class="checkbox" name="checkbox" type="checkbox"><span class="text-style">' + inputData +'</span></li>';
			$(liData).prependTo('.itemslist').hide().slideDown(); 
		}
		
		$('.item').val(''); //Clean the input box
    }
	
 });


// To capture the ENTER key when editing items
$(document).keyup(function (e) {
    if ( $('.edititem').is(':focus') && (e.keyCode === 13) ) {
	var inputData = $('.edititem').val().trim();
		if( inputEntryIsValid(inputData) ){		//Evaluate the input text
			editedHTMLRef.html('<input class="checkbox" name="checkbox" type="checkbox"><span class="text-style">' + inputData + '</span>' ); //add new item text value
			$('.item').focus(); //To get again the focus on	
		}else{
			editedHTMLRef.html('<input class="checkbox" name="checkbox" type="checkbox"><span class="text-style">'+ editedText +'</span>' ); //if the entry edited is not valid, keept the previous value		
		}
	}

});


// To capture the click outside the input key when editing items
$('.itemslist').on('focusout', '.edititem', function(){
	var inputData = $('.edititem').val().trim();
		if( inputEntryIsValid(inputData) ){		//Evaluate the input text
			editedHTMLRef.html('<input class="checkbox" name="checkbox" type="checkbox"><span class="text-style">' + inputData + '</span>' );  //add new item text value
			$('.item').focus(); //To get again the focus on
		}else{
			editedHTMLRef.html('<input class="checkbox" name="checkbox" type="checkbox"><span class="text-style">'+ editedText +'</span>' ); //if the entry edited is not valid, keept the previous value	
		}
});


// to capture if the checkbox has been checked or not
$('.itemslist').on('change', '.checkbox', function(){
	if( $(this).is(':checked') ){
		$(this).parent('li').children('.text-style').css("text-decoration", "line-through");
		$('#remove').fadeIn();
	}
	else{
		$(this).parent('li').children('.text-style').css("text-decoration", "none");
		    var checked = $('.itemslist li input.checkbox:checked').length; //this is to detect if at least 1 checkbox is checked
				if (!checked){
					$('#remove').fadeOut();
					return false;
				}
	}

    return false;
});


// to capture the double click event to edit the item
$('.itemslist').on('dblclick', 'li', function(){
	if( !( $(this).children('.checkbox').is(':checked') )){
		editedText = $(this).text();
		editedHTMLRef = $(this);
		$(this).html('<input class="edititem" id="edititem" name="edititem" type="text" maxlength="30" size="60" value="'+ editedText +'">'); // I add the input box to edit the text
		$('.edititem').focus();
	}
	
});


// To capture the click for remove all selected items
$('#remove').on('click', '', function(){
		$('.itemslist').children('li').each(function () {
			if( $(this).children('.checkbox').is(':checked') ){
				$(this).slideUp("normal", function() {
					$(this).remove();					//to remove the item after the hide effect
				});

			}
		});
		
		$('#remove').delay(750).fadeOut();
		$('.item').focus(); //To get again the focus on
		
});

 
// ******************** End Input functions ********************





// ******************** Internal functions ********************

function inputEntryIsValid(inputValue){ // evaluates the input entry
		return ((inputValue.length > 0) && (inputValue !== ''));
}

// ******************** End Internal functions ********************

});
