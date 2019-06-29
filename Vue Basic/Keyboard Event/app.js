var newapp = new Vue({

    el:"#app",
    data:{

    },
    methods:{
        keyPressfunction:function(event){
            console.log(event.key);
        },
        keyupfunction:function(){
            console.log();
        },
        keyupfunction:function(){
            console.log("Key  Up...");
        },
        keydownfunction: function(){
            console.log(" Key Down...")
        }
         
    }
});