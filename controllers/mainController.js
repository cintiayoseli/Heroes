module.exports = {
    index : (req,res) => {
    res.send('Ni superman, Iron Man o La Mujer Maravilla son tan importantes como las y los Heroes de carne y hueso que encontraras en este sitio. Esperamos que ellas y ellos te sirvan como inspiracion para poder cumplirtus objetivos. Recuerda: ¡nunca pares de creer en ti!')
}}

creditos : (req, res) =>{
         res.send ("Pagina creada por la comision 5")
    }; 
    estado : (req,res)=>{
        res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
    }
    