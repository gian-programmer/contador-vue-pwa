const app= Vue.createApp({
    data(){
        return{
            title:"contador App - Vue",
            count:0,
        }
    },
    methods:{
        disCount(){
            this.count-=1;
        },
        addCount(){
            this.count+=1;
        },
        modCount(instruction="add",limit=1){
            if(instruction=="dis"){
                this.count-=limit;
            }else{
                this.count+=limit;
            }
        }

    }
})