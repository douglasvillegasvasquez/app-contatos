import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput,Button,FlatList } from 'react-native';
import ContatoItem from './components/ContatoItem';
import ContatoInput from './components/ContatoInput';
export default function App() {
  const [contatos, setContatos] = useState([]);
  const [contadorContatos,setContadorContatos] = useState(10); //falta

  //para adicionar o que foi digitado
  const adicionarContato = (contato,telefone)=> {
    setContatos(contatos => {
      console.log(contatos);
      setContadorContatos(contadorContatos +2);
      
      return [{key:contadorContatos.toString(),valueCont:contato, valueTel:telefone}, ...contatos]
      
    })
    
  }
/* (contato => {
para cada contato rodar.
})*/
  const removerContato= (key) => {
    setContatos (contatos => {
      return contatos.filter(contato => {
       return contato.key !==key;
    
      });
      
    });
  };
  return (
/*    <View style={styles.container} >*/
<View style={styles.telaPrincipalView}>

<ContatoInput onAdicionarContato = {adicionarContato} />
<FlatList
  data={contatos}
  renderItem={
    contato => (
      <ContatoItem 
      chave={contato.item.key}
      contato={contato.item.valueCont}
      telefone={contato.item.valueTel}
      onDelete={removerContato}
      />
      
    )
  }
  
  
/>
</View>
  );

}
const styles = StyleSheet.create({
  telaPrincipalView:{
    paddingLeft:50,
    paddingRight:50,
    paddingBottom:150,
    paddingTop:40
  }  
});
