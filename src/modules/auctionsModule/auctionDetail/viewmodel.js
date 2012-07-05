define([], function() {

	return function(id) {

		this.itemToAdd = ko.observable(id);
		this.allItems = ko.observableArray([ "Fries", "Eggs Benedict", "Ham", "Cheese" ]);
		this.selectedItems = ko.observableArray([ "Ham" ]);

		this.addItem = function() {
			if ((this.itemToAdd() != "") && (this.allItems.indexOf(this.itemToAdd()) < 0)) // Prevent blanks and duplicates
				this.allItems.push(this.itemToAdd());
			this.itemToAdd(""); // Clear the text box
		};

		this.removeSelected = function() {
			this.allItems.removeAll(this.selectedItems());
			this.selectedItems([]); // Clear selection
		};

		this.sortItems = function() {
			this.allItems.sort();
		};

		this.moduleEnabled = ko.observable(true);

	};
});
