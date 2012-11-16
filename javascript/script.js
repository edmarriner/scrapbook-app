var d = new Date();

Book = Backbone.Model.extend({
	defaults: {
		title: 'Book Name Default',
		created: d.getTime(),
		updated: d.getTime()
	},
	initialize: function(){
		//alert("Welcome to this world");
		this.on("change", function(model){
			alert("Model was changed");
		});
	}
});

var book1 = new Book({title: "First Holiday"});
