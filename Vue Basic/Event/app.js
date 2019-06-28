var app =new Vue({
    el:"#app",
    data:{
        counter:0
    },
    methods:{
        incement: function(inc){
          //  this.counter=this.counter +inc;
             this.counter +=inc;
        },
        decement:function(desc){
            //this.counter =this.counter -desc;
            this.counter -=desc;
        }
    }
});