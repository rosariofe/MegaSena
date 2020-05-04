import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

/*export default function App() {
  const [outputText, setOutputText] = useState('Texto Inicial');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="Alterar texto" onPress={() => {setOutputText("Novo Texto")}} />
    </View>
  );
}
*/

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      contador: "----------"
    }
  }
  render(){
    return(
    <View style={styles.container}>
      <p><Text><h2>{"MEGA SENA"}</h2></Text></p>
      <Text>{this.state.contador}</Text><br/>
      <Button 
        title="Sortear"
        onPress={() => {this.setState({contador: resultado()})}} />
    </View>
    );
  }

}


function resultado(){

  let sort =[0,0,0,0,0,0];

  sort[0] = random();

  for (let i = 1; i < sort.length; i++){
    const r = random();
    for(let j=0 ; j<sort.length; j++){
      if(r == sort[j] && j != i){
        r =random();

      }else{
      sort[i] = r;
      }
    }
  }
  
  for(let x = 0; x < sort.length - 1;  x++){
    for(let y = x+1; y < sort.length; y++){
      if(sort[x]> sort[y]){
        let aux = sort[x];
        sort[x] = sort[y];
        sort[y] = aux;
      }
    }
  }

  return sort[0] + " , " + sort[1] + " , " + sort[2] + " , " + sort[3] + " , " + sort[4] + " , " + sort[5];

}

function random(){
  let r;
  return r = getRandomInt(1, 61);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
