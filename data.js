Vue.createApp({
    data(){
        return{
            pictureTypeIndex:0,
            pictureType:[
                {key:'large', name:'清晰'},
                {key:'medium', name:'中等'},
                {key:'thumbnail', name:'模糊'}
            ],
            users:[],
        }
    },
    methods:{
        getData(){
            let vm = this;
            $.ajax({
                url: 'https://randomuser.me/api/?results=6',
                dataType: 'json',
                success: function(data) {
                  vm.users = data.results;
                }
              });
                    
        }

    }
    ,
    mounted(){
        this.getData();
    }
}).mount('#app')