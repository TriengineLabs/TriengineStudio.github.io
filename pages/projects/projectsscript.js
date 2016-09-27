
var accordionItems = new Array();

function init() {

	// Grab the accordion items from the page
	var apps = document.getElementsByTagName( 'div' );
	for (var i = 0; i < apps.length; i++) {
		if (apps[i].className == 'accordionApp') {
			accordionItems.push(apps[i]);
		}
	}

	 // Assign onclick events to the accordion item headings
	for (var i = 0; i < accordionItems.length; i++) {
		var h2 = getFirstChildWithTagName( accordionItems[i], 'H2');
		h2.onclick = toggleItem;
	}
	
      // Hide all items
	for ( var i = 0; i < accordionItems.length; i++) {
		accordionItems[i].className = 'accordionApp hide';
	}
}

function toggleItem() {
	var itemClass = this.parentNode.className;

	// Hide all items
	for ( var i = 0; i < accordionItems.length; i++) {
		accordionItems[i].className = 'accordionApp hide';
	}

	// Show this item if it was previously hidden
	if ( itemClass == 'accordionApp hide') {
		this.parentNode.className = 'accordionApp';
	}
}

function getFirstChildWithTagName (element, tagName) {

	for (var i = 0; i < element.childNodes.length; i++) {
		if ( element.childNodes[i].nodeName == tagName ) {
			return element.childNodes[i];
		}
	}

}