
var app =new Vue({
    el:"#app",
    data:{
        isActive:true,
        count:0,
        message:"Hello Pallab"
    },
    methods:{
        incrementby1:function(){
            this.count++;
        }
    }
});