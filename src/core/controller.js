define(['_util', './router', './mediator'], function(Util, Router, Mediator) {
	
	//static separate mediator instance to be used by all controllers
	var controllerMediator = new Mediator();

	return function(context) {
		
		var allHandles = {};
		var isDeactivationChained = true; //defaults to 'true'
		var selfController = this;
		var router = new Router();
		
		
		/*
		 * Wrapper for handles. This allows us to intercept activation calls 
		 * so that we are able to execute custom logic such as deactivation
		 * of other handles.
		 */
		function Wrapper(handle) {
			var selfWrapper = this;
			selfWrapper.handle = handle;

			this.activate = function(vals) {
				// deactivate all active handles in current controller
				deactivateAll();
				//raise the event to deactivate other controllers
				controllerMediator.notify('GLOBAL_HANDLER_DEACTIVATION', selfController);
				// activate the requested handler
				selfWrapper.handle.activate(vals);
			};
			
			this.deactivate = function(){
				selfWrapper.handle.deactivate();
			};

		}

		function deactivateAll() {
			//deactivate all local handles of this controller
			for (path in allHandles) {
				try{
					allHandles[path].deactivate();
				} catch(err) {
					//error in deactivating one handle shouldn't
					//break the deactivation process
					Util.Logger.error("deactivation failed for Handle '" + path + "' : " + err);
				}
				
			}
		}
		
		//listener for deactivation calls from other controllers
		controllerMediator.listen('GLOBAL_HANDLER_DEACTIVATION',function(controller){
			//if event is not raised by me && my deactivation is chained
			if(selfController !== controller && isDeactivationChained) {
				deactivateAll();
			}
		});

		return {
			addHandles : function(handles) {
				for (path in handles) {
					var HandlerClass = handles[path];
					var handlerObj = new Wrapper(new HandlerClass(context));
					router.addRoute(path, handlerObj.activate);
					//lets keep a reference of all handles so that it is possible to deactivate
					allHandles[path] = handlerObj;
				}
			},
			
			chainDeactivation : function(isChained) {
				isDeactivationChained = isChained;
			},
			
			init : function() {
				router.init();
			},
			
			goTo : function(path){
				router.routeTo(path);
			}

		};

	};
});
