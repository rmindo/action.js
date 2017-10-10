action.controller( 'tae', function( method ) {

	
	var model = action.model({});



	action.view( 'test', function( test ) {


		return method.foreach( function( each ) {

			each.node.id = 'test-' + each.index;
		});

	});


	action.view( 'heading', function( test ) {

		method.prepend( method.create( 'div', function( node ) {

			// node.id = 'create';
		}));

		return '<h1>Restaurants</h1>';
	});

});



// action.controller( 'tae', function( method ) {

// 	var model = action.model({});


// 	action.view( 'tae', function( test ) {

// 		return document.getElementById('test');
// 	});

// });

