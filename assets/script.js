var app = new Vue({
    el: '#root',
    data: {
      hello:"https://www.venetoformazione.it/wp-content/uploads/2022/02/ottimizzare-immagini-display-retina.jpg",
      images:[
        {img:"https://www.venetoformazione.it/wp-content/uploads/2022/02/ottimizzare-immagini-display-retina.jpg"},
        {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpTun6ZJzXtt0rIiRtvI5Hdt0JwtGFxxmcA&usqp=CAU"},
        {img:"https://www.artemedialab.it/wp-content/uploads/2019/04/immagini-sfondo-1-700x400.jpg"},
        {img:"https://hd2.tudocdn.net/1039913?w=824&h=494"},
      ],
        
      index:0,
      },
      methods:{
        forward: function(){
          
            let lunghezza= this.images.length - 1;

            
            if(this.index >= lunghezza){
            return this.index = 0;
            }else{
             return this.index++;
            }
            
      },

      backward: function(){
          
        let lunghezza= this.images.length - 1;

        
        if(this.index == 0){
        return this.index = lunghezza;
        }else{
         return this.index--;
        }
        
  },
  }
})

 

 

  



  

