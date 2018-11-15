class Pelicula {

	constructor(idpelicula, titulo, descripcion, estreno, poster, trailer){
		this.idpelicula=idpelicula;
		this.titulo=titulo;
		this.descripcion=descripcion;
		this.estreno=estreno;
		this.poster=poster;
		this.trailer=trailer;
        }
        Mostrar(area){
            let self=this;
    		//console.log(`hola, soy ${self.titulo} (${self.estreno}), y ${self.descripcion}`);
            let ficha = document.querySelector(".pelicula").cloneNode(true);
            ficha.querySelector("h4").innerText=self.titulo;
            ficha.querySelector("p").innerText=self.estreno;
            //ficha.querySelector("p").innerText=self.descripcion;
            ficha.querySelector("img").src=self.poster;
            ficha.classList.remove("hide");
            ficha.querySelector("a").onclick=function(event){
                event.preventDefault();
                let reproducir=new Promise ((resolve, reject)=>{
                    if (auth2.currentUser.get().isSignedIn()) {
                    let usuario = auth2.currentUser.get().getbasicProfile();
                    } else {
                        auth2.signIn().then(()=>{
                            let usuario = auth2.currentUser.get().get-basicProfile();
                            alert("bleh");
                            resolve(usuario);
                        });
                    }
                });
            reproducir.then((usuario)=>{
                console.log("vos sos: "+usuario.getGivenName())
                let reproductor=document.querySelector("#playMovie");
                reproductor.querySelector("#titulo").innerText=`${self.titulo} (${self.estreno})`;
                reproductor.querySelector("#descripcion").innerText=self.descripcion;
                reproductor.querySelector("#imagen").src=self.poster;
                reproductor.querySelector("iframe").src=self.trailer;
                reproductor.classList.remove("hide");
                window.scroll({top: reproductor.offsetTop, behavior:"smooth"});
                }
                document.querySelector("#peliculas").appendChild(ficha);
                }
        		static parse (json){
                console.log(json);
        	    if ( json instanceof Array ) {
                        let peliculas=new Array();
                        json.forEach(function(item){
                            peliculas.push(
                                new Pelicula(
                                item.idPelicula,	
                                item.Titulo,
                                item.Descripcion,
                                item.Estreno,
                                item.Poster,
                                item.Trailer)
                            	);
                        });
                        return peliculas;
        	        } else if ( json instanceof Object ) {
                        return new Pelicula(json.idPelicula, json.Titulo, json.Descripcion, json.Estreno, json.Poster, json.Trailer);
        	        } else if ( json instanceof Pelicula) {
                        console.error("Error: el parametro ya es una pelicula");
        	        } else {	
        	        	console.error("Error: el parametro no puede ser convertiddo a pelicula");
        	        }
                };
            
                
            
}


























}