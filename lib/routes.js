if (Meteor.isClient) {
    Accounts.onLogin(function () {
        FlowRouter.go('srMap');
    });
    Accounts.onLogout(function () {
        FlowRouter.go('signIn');
    });
}

// gets triggered whenever a url is entered
FlowRouter.triggers.enter([function (context, redirect) {
    AccountsTemplates.ensureSignedIn(context, redirect);
    //if (!Meteor.userId()) {
    //    FlowRouter.go('home');
    //}
}]);

//FlowRouter.notFound = {
//    action: function() {
//        BlazeLayout.render('masterLayout', {
//            footer: "footer",
//            main: "pageNotFound",
//            nav: "nav",
//        });
//    }
//};

//FlowRouter.route('/', {
//    name: 'home',
//    action()
//{
//    if (Meteor.userId()) {
//        FlowRouter.go('srMap');
//    }
//    GAnalytics.pageview();
//    BlazeLayout.render('HomeLayout');
//}
//})
//;


FlowRouter.route('/', {
    name: 'srMap',
    action()
{
    //GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'SRMap'});
}
})
;






//Routes
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');