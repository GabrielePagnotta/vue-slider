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
      
      img1:"https://www.venetoformazione.it/wp-content/uploads/2022/02/ottimizzare-immagini-display-retina.jpg",
      img2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpTun6ZJzXtt0rIiRtvI5Hdt0JwtGFxxmcA&usqp=CAU",
        
      i:0,
      

      },

      mounted(){
        this.intervallo()
      },
  
      methods:{
        forward: function(){
          
            let lunghezza= this.images.length - 1;

            console.log(this.images.length)

            
            if(this.i == lunghezza){
            return this.i = 0;
            }else{
             return this.i++;
            }   
      },

      backward: function(){
          
        let lunghezza= this.images.length - 1;

        
        if(this.i == 0){
        return this.i = lunghezza;
        }else{
         return this.i--;
        }
        
  },
    intervallo(){
      return setInterval(()=>{this.forward()},3000)
    },

    dot(index){
      this.i= index
    },

  },
})



 

 

  



  

