action.controller( 'tae', function( method ) {

	
	var model = action.model({});



	action.view( 'heading', function( test ) {

		method.prepend( method.create( 'h1' ) );

		return 'Restaurants';
	});


	action.view( 'tubol', function( test ) {


		return method.foreach( function( each ) {

			each.node.id = 'test-' + each.index;
		});

	});



});



// action.controller( 'tae', function( method ) {

// 	var model = action.model({});


// 	action.view( 'tae', function( test ) {

// 		return document.getElementById('test');
// 	});

// });

