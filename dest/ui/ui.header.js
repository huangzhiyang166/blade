define(["UIView",getAppUITemplatePath("ui.header")],function(a,b){return _.inherit(a,{propertys:function($super){$super(),this.template=b,this.events={"click #c-ui-header-home":"homeAction","click #c-ui-header-tel":"telAction","click #c-ui-header-return":"backAction","click .c-ui-header-btn":"commitAction"},this.datamodel&&this.datamodel.events&&_.isFunction(this.datamodel.events.customHandler)&&(this.events["click #"+this.datamodel.btn.id]="customerAction")},initialize:function($super,a){$super(a),this.rootBox=this.wrapper=a.root,this.show()},show:function($super){this.wrapper.empty(),$super()},createRoot:function(a){this.$el=$(a)},initElement:function(){this.root=this.wrapper},set:function(a){_.extend(this.datamodel,a),this.refresh(!0)},updateHeader:function(a,b){this.set({name:b})},homeAction:function(){this.datamodel.events.homeHandler.call(this.datamodel.view||this)},telAction:function(){},backAction:function(){this.datamodel.events.returnHandler.call(this.datamodel.view||this)},commitAction:function(){this.datamodel.events.commitHandler.call(this.datamodel.view||this)},customerAction:function(){this.datamodel.events.customHandler.call(this.datamodel.view||this)}})});