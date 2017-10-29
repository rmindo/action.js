var action = (function() {


	var ui = {
		views: {},
		models: {},
		pattern: {},
		controllers: {}
	};




	var animate;


	var model = {


		node: function( name ) {

			if( node = ui.views[name] ) {

				return node;	
			
			} else {

				return this.nodeHelper( document.getElementById( name ) );
			}
		},


		service: function( name ) {

			return ui.models[name];
		},


		nodeHelper: function( node ) {



			node.before = function( name, callback ) {

				this.insertBefore( callback(), this.children[name] );


				if( typeof animate !== 'undefined' ) {

					if( animate.node === element ) {

						animate.run();
					}
				}

				return this;
			};

			// Append
			node.append = function( element ) {

				this.appendChild( element );


				if( typeof animate !== 'undefined' ) {

					if( animate.node === element ) {

						animate.run();
					}
				}

				return this;
			};

			// Insert Before first child
			node.prepend = function( element ) {

				this.insertBefore( element, this.children[0] );


				if( typeof animate !== 'undefined' ) {

					if( animate.node === element ) {

						animate.run();
					}
				}

				return this;
			};

			// Loop given data object
			node.foreach = function( data ) {


				for( var index in data ) {

					var clone = model.nodeHelper( node.children[0].cloneNode(true) );

					data[index]['i'] = index;


					clone.render( data[index] );

					this.append( clone );
				}

				this.children[0].remove();

				this.removeAttribute('foreach');


				return this;
			};

			// Render content with given data
			node.render = function( data ) {


				if( this.nodeType === 1 ) {


					if( pattern = this.innerHTML.replace(/\s/g, '').match( /(\{[a-z]+\})/g ) ) {

						this.innerHTML = this.innerHTML.replace( new RegExp( pattern.join('|'), 'g' ),  function( matched ) {


							if( value = data[matched.match( /([a-z]+)/g )] ) {

								return value;
							}

							return matched;
						});
					}
				}

				return this;
			};



			node.animate = function( css, ms ) {

				if( typeof css === 'object' ) {
					

					animate = {

						node: node,

						run: function() {

							var oc = 0.01, va = [];


		            		var move = function( name, args ) {

		            			var co = 0;

					            var mo = setInterval( function() {

					                if( co >= args.value ) {

					                    clearInterval( mo );
					                }

									node.style[name] = co + 'px';

					                co += 1;

					            }, args.duration/100 );
			            	};



			            	if( opacity = css['opacity'] ) {

					            var opa = setInterval( function() {

					                if( oc >= opacity.value ) {

					                    clearInterval( opa );
					                }

									node.style['opacity'] = oc;

					                // animate.node.style.filter = 'alpha(opacity=' + oc * 20 + ')';

					                oc += oc * 0.025;

					            }, opacity.duration );
			            	}


			            	for( var name in css ) {

			            		if( typeof css[name] == 'object' ) {

					            	if( /width|height|Top|Left|Right|Bottom/.test( name ) ) {

					            		move( name, css[name] );
					            	}

				            	} else {

									if( typeof css[name] === 'string' && /px/.test( css[name] ) ) {

										move( name, { value: css[name].split('px')[0], duration: ms } );

									} else {

			                			node.style[name] = css[name];
					                }

				            	}
			            	}


						}

					}

				}
			};


			// Append To
			node.appendTo = function( name ) {

				model.node(name).appendChild( node );

				return this;
			};

			// Prepend To
			node.prependTo = function( name ) {

				model.node(name).insertBefore( node, model.node(name).children[0] );

				return this;
			};


			return node;
		},


		createElement: function( tag, callback ) {

			var node = model.nodeHelper( document.createElement( tag ) );


			if( callback ) {

				callback( node );
			}

			return node;
		},


		createElements: function( data ) {


			for( var key in data ) {


				var node = this.createElement( data[key].tag, function( node ) {

					node.id = key;

					data[key].node( node );
				});


				ui.views[key] = node;
			}

			return ui.views;
		}
	};




	var modules = {

		modal: {

		},

	};





	ui.pattern.view = function( name, callback ) {


		ui.views[name] = callback( ui.views[name] );


		return ui.views[name];
	};



	ui.pattern.model = function( name, callback ) {


		ui.models[name] = callback( model );


		return ui.models[name];
	};



	ui.pattern.module = function( name ) {

		return modules[name];
	}




	ui.pattern.controller = function( controller, callback ) {


		ui.controllers[controller] = model.node( controller );



		for( var child in children = ui.controllers[controller].children ) {

			if( id = children[child].id ) {

				var node = model.nodeHelper( children[child] );


				if( loop = node.getAttribute('foreach') ) {

					node.foreach( window[loop] );
				}
			}
		}


		callback({


			before: function( name, callback ) {

				ui.controllers[controller].before( name, callback );
			},


			append: function( name, callback ) {

				ui.controllers[controller].append( callback( ui.views[name] ) );
			},


			prepend: function( name, callback ) {

				ui.controllers[controller].prepend( callback( ui.views[name] ) );
			}

		}, model );

	};


	return ui.pattern;

})();
