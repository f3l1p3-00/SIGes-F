module.exports = function(application){
        application.get('/',function(req,res){
        application.App.Controllers.HomeController.indexHome(application,req,res);
            
        });
};