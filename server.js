
const express = require('express')
const app = express()
const path = require('path');
const port = 3000
app.use(express.static('public'))

series=[
  {codigo:1, nome:'ATG' },
  {codigo:2, nome:'BS'},
  {codigo:3, nome:'Bumper plates'},
  {codigo:1, nome:'box'},
  {codigo:1, nome:'complex'},
  {codigo:1, nome:'coach'},
  {codigo:1, nome:'kipping'},
 ]

  
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/crossfit.html'));
});

app.get("/series/",(req,res)=>{
    var series=req.query.series;
    
    console.log("Categoria escolhida "+nome);
    console.log("id :"+codigo);
    var series='';
    for(var i=0;i<series.length;i++){
       series+= "<p><b>nome:</b> "+series[i].nome+series[i].codigo+"<b>Price</b>"+"</p>"
    }
res.send(series);
})



app.listen(port, () => {
 console.log(`Esta aplicação está escutando a
porta ${port}`)
})