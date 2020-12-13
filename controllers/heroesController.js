const fs = require ('fs')

const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));
module.exports = {
  

index : (req,res) =>{
    res.send(heroes)
},
detalle : (req,res)=>{
    
let heroe = heroes.filter(heroe => heroe.id == req.params.id);
	console.log(heroe)
	
	if(heroe.length != 0) {
        
        return res.send(`hola, mi nombre es ${heroe[0].nombre}y soy ${heroe[0].profesion}`)
    }
	    return res.send(`Lo siento, el id no coincide con ningun heroe registrado`);
	
},
	

bio : (req, res)=>{
            
        let heroe = heroes.filter(heroe => heroe.id == req.params.id);

        if (heroe.length === 0){
            return	res.send ("No encontramos un héroe para mostrarte su biografía")
        
        
        }else{
            return res.send (`${heroe[0].nombre}: ${heroe[0].resenia}`)
        } 
    
        }
}