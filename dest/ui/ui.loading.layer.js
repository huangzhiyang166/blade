define(["UILayer",getAppUITemplatePath("ui.loading.layer")],function(a,b){return _.inherit(a,{propertys:function($super){$super(),this.template=b,this.datamodel={text:"文字信息"},this.events={"click .cui-grayload-close":"closeAction"},this.maskToHide=!1},initialize:function($super,a){$super(a)},addEvent:function($super){$super(),this.on("onCreate",function(){this.$el.addClass("cui-loading")})},closeAction:function(){this.hide()},setDatamodel:function(a,b){this.datamodel.text=a,this.closeAction=b,this.refresh()}})});