var newapp = new Vue({

    el:"#app",

    data:{
        counter:0
    },
    methods:{
        incrementby1:function(){
            this.counter++;
        }
    }
});