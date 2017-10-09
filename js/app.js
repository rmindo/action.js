action.loop( 'test', lists, function( test ) {

	test.node.id = 'test-' + test.index;


	return test.render( test.node );
});
