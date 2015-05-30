//handlebars partials
exports.partials = {};

//handlebars helpers
exports.helpers = {
    test : function(arg1){}
};

exports.data = {
    "javascript" : [
        "./assets/js/jquery.sticky.js"
    ],
    
    "fonts" : [
        "https://fonts.googleapis.com/css?family=Dosis",
        "https://fonts.googleapis.com/css?family=Noto+Sans"
    ],

    "description" : "breez",
    "title" : "breez template",
    
    "logo" : {
        "src" : "./assets/images/logo.png",
        "alt" : "Sweefty",
        "url" : "#top" //optional
    },

    "menu" : {
        "sticky" : true //set to false if you don't want a sticky header
    },
    
    //spash options
    "splash" : {
        //comment the following if you don't want the splash screen to have a bold intro text
        "head"    : "Hello, We're Sweefty",
        "subhead" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet.",
        "buttons" : [
            {
                "text" : "Learn More",
                "link" : "#more"
            },
            {
                "text" : "Buy Now",
                "link" : "#buy"
            },
        ]
    }
};
