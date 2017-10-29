action.controller( 'tae', function( view, model ) {

	var animate = model.service('animate');




	view.append( 'header', function( node ) {

	
		node.render({ list: 'Lists', title: 'Restaurants' });


		return node;
	});



	view.append( 'content', function( node ) {



		node.append( model.node('category') );

		node.append( model.node('restaurants') );


		// node.before( 'restaurants', function() {

		// 	return model.node('category');
		// });


		node.render({

			currency: 'PHP',

			category: 'Dinning'
		});


		return node;
	});



	view.append( 'footer', function( node ) {

		return model.node('footer').render({ year: '2017' });
	});





	// control.view('header').with({list: 'Lists'});

	// control.view('content').with({currency: 'PHP', category: 'Dinning'});

	// control.view('footer');

});
