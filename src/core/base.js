define([ 'util', 'settings' ], function(Util, Settings) {

	var Base = Base || {};

	Base.Context = function(contextid) {

		// function to notify others on an occurrence of an event
		this.notify = function(event, params) {
			$(this).trigger(event, params)
		};
		// function to listen to the events published by others
		this.listen = function(event, fn) {
			$(this).bind(event, fn)
		};

		this.getToolBar = function() {
			return $('#toolBar');
		}

		this.getHeader = function() {
			return $('header');
		};

		this.getContent = function() {
			return $('#appcontent');
		};

		this.getFooter = function() {
			return $('footer');
		};

		this.createUniqueContainer = function(parent, type, isPopup) {
			// set defaults
			type = typeof type !== 'undefined' ? type : '<span/>';
			parent = typeof parent !== 'undefined' ? parent : getContent();
			// create a random id for the child
			var childid = _.uniqueId([ 'container_' ]);

			// create the child container
			if (isPopup)
				parent.append($(type, {
					id : childid
				}));
			else
				parent.html($(type, {
					id : childid
				}));
			return $('#' + childid);
		};

		// request for any API resources
		this.request = function() {

		}
		
		this.setSettings = function(globalSettings){
			this.settings=globalSettings;//add settings to the global object
		}
		
		this.setRouter= function(globalRouter){
			this.router=globalRouter;//add router to the global object
		}
	}

	Base.Panel = function(panelparent, template, style, viewmodel, nls) {
		this.panelparent = panelparent;
		this.template = template;
		this.style = style;
		this.viewmodel = viewmodel;
		this.nls = nls;

		this.compileText = function(text) {
			var compiled = _.template(text);
			return compiled({
				containerid : this.getContainerId(),
				nls : this.nls
			});
		}

		this.init = function() {
			// add new style to the element
			if (!_.isNull(this.style)) {
				Util.createStyleInHead(this.compileText(this.style));
			}
			// append the html template
			if (!_.isNull(this.template)) {
				this.panelparent.html(this.compileText(this.template));
			}
			// initialize the view model
			this.viewmodel.initialize();
			return this;
		}

		this.getContainerId = function() {
			return this.panelparent.attr('id');
		}

		this.visible = function(visibility) {
			visibility ? this.panelparent.show() : this.panelparent.hide();
		}
	};

	Base.KoPanel = function(panelparent, template, style, viewmodel, nls,
			isPopup) {
		// call teh super class constructor
		Base.Panel.call(this, panelparent, template, style, viewmodel, nls,
				isPopup);

		this.init = function(bindModel) {
			// call the super class init() function
			Base.KoPanel.prototype.init.call(this);
			// do knockout bindings
			if (!bindModel) {
				var element = panelparent.get(0); // get the DOM element from
													// jquery element
				ko.applyBindings(viewmodel, element);
			}
			return this;
		}

		this.applyBindings = function(viewmodel) {
			var element = panelparent.get(0); // get the DOM element from
												// jquery element
			ko.applyBindings(viewmodel, element);
		}
	};
	Base.KoPanel.prototype = new Base.Panel();

	Base.KendoPanel = function(panelparent, template, style, viewmodel, nls) {
		// call teh super class constructor
		Base.Panel.call(this, panelparent, template, style, viewmodel, nls);

		this.init = function() {
			// call the super class init() function
			Base.KoPanel.prototype.init.call(this);

			kendo.bind(panelparent, this.viewmodel);
			return this;
		}

		this.visible = function(visibility) {
			visibility ? this.panelparent.show() : this.panelparent.hide();
		}
	};
	Base.KendoPanel.prototype = new Base.Panel();

	return Base;
});
