var app = new Vue({
    el: '#app',
    data: {
      Name: 'Hora Krishna Roy',
      Status:"Vue Developer"
    },
    methods:{
      run: function(message,name){
        return "I am a Developer "+message+"name:"+name;
      },
      wellcome: function(daytime){
        return "Good"+daytime;
      },
      valueaccess : function(){
        return this.Name +" "+this.Status;
      }
    }
  }); 