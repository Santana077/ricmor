import Card from '../Card/Card';

const stylesCards ={
   display:"flex",
   justifyContent:"space-between"
}

export default function Cards(props) {
   const { characters } = props;
   return( 
      <div style={stylesCards}>
         {characters.map(({name,species,gender,image},index)=>{
               return (<Card 
                  key={index}
                  name={name}
                  species={species}
                  gender={gender}
                  image={image}
                  onClose={() => window.alert('Emulamos que se cierra la card')}
               
               />)
            })

         }
      </div>
   )
}
