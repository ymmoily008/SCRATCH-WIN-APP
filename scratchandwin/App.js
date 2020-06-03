import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Dimensions, Alert } from 'react-native';
import {Button, TabHeading} from 'native-base';
import {FontAwesome} from '@expo/vector-icons';

var itemArray = new Array(25).fill('empty');


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      randomnumber: ''
    };
  }

  // when loads up
  componentDidMount()  {
    this.setState({randomnumber: this.generaterandomNumber()});
  }
generaterandomNumber = () => {
 let randomnumber = Math.floor(Math.random()* 25);
 this.setState({randomnumber:randomnumber,isScratched:true});
 return randomnumber;

};
scratchItem =itemNumber=>{
  if (this.state.randomnumber === itemNumber) {
    itemArray[itemNumber]='lucky';
  
    
  } else {
    itemArray[itemNumber]='unlucky';
  }
  if ((this.scratchItem) > 5) {
    Alert.alert('STOP');
  }
  this.forceUpdate();

};
scratchItemicon=itemNumber=>{
  if (itemArray[itemNumber] === 'lucky') {
    return 'dollar';
    
  } else if (itemArray[itemNumber] === 'unlucky') {
    return 'frown-o';
  

}
return 'circle';
};

scratchItemcolor= itemNumber =>{
  if (itemArray[itemNumber] === 'lucky') {
    return 'green';
    
  } else if (itemArray[itemNumber] === 'unlucky') {
    return 'red';
  

}
return 'black';

}

showAllItem=()=>{
  itemArray.fill('unlucky');
  itemArray[this.state.randomnumber]='lucky';
  this.forceUpdate();

}

ResetGame=() =>{
  this.setState({randomnumber: this.generaterandomNumber()},
  ()=>{
    itemArray.fill('empty');
    this.forceUpdate;
  }
  )

}

  render() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topText}> scratch and win game</Text>
      </View>
      <View style={styles.grid}>
        <View style={styles.itemrow}>
          <TouchableOpacity style={styles.item}
          onPress={() => {
            this.scratchItem(0)
          }
        }
          >
            <FontAwesome
             name={this.scratchItemicon(0)}
             size={50}
             color={this.scratchItemcolor(0)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => {
            this.scratchItem(1)
          }
        }
          >
            <FontAwesome
             name={this.scratchItemicon(1)}
             size={50}
             color={this.scratchItemcolor(1)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => {
            this.scratchItem(2)
          }
        }
          >
            <FontAwesome
             name={this.scratchItemicon(2)}
             size={50}
             color={this.scratchItemcolor(2)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => {
            this.scratchItem(3)
          }
        }
          >
            <FontAwesome
             name={this.scratchItemicon(3)}
             size={50}
             color={this.scratchItemcolor(3)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => {
            this.scratchItem(4)
          }
        }
          >
            <FontAwesome
             name={this.scratchItemicon(4)}
             size={50}
             color={this.scratchItemcolor(4)}
            />
          </TouchableOpacity>
          
        

        </View>
        <View style={styles.itemrow}>
          <TouchableOpacity style={styles.item}
          onPress={() => {
            this.scratchItem(5)
          }
        }
          >
            <FontAwesome
             name={this.scratchItemicon(5)}
             size={50}
             color={this.scratchItemcolor(5)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => {
            this.scratchItem(6)
          }
        }
          >
            <FontAwesome
             name={this.scratchItemicon(6)}
             size={50}
             color={this.scratchItemcolor(6)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => {
            this.scratchItem(7)
          }
        }
          >
            <FontAwesome
             name={this.scratchItemicon(7)}
             size={50}
             color={this.scratchItemcolor(7)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => {
            this.scratchItem(8)
          }
        }
          >
            <FontAwesome
             name={this.scratchItemicon(8)}
             size={50}
             color={this.scratchItemcolor(8)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => {
            this.scratchItem(9)
          }
        }
          >
            <FontAwesome
             name={this.scratchItemicon(9)}
             size={50}
             color={this.scratchItemcolor(9)}
            />
          </TouchableOpacity>
          
        

        </View>
        <View style={styles.itemrow}>
          <TouchableOpacity style={styles.item}
          onPress={() => {
            this.scratchItem(10)
          }
        }
          >
            <FontAwesome
             name={this.scratchItemicon(10)}
             size={50}
             color={this.scratchItemcolor(10)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => {
            this.scratchItem(11)
          }
        }
          >
            <FontAwesome
             name={this.scratchItemicon(11)}
             size={50}
             color={this.scratchItemcolor(11)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => {
            this.scratchItem(12)
          }
        }
          >
            <FontAwesome
             name={this.scratchItemicon(12)}
             size={50}
             color={this.scratchItemcolor(12)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => {
            this.scratchItem(13)
          }
        }
          >
            <FontAwesome
             name={this.scratchItemicon(13)}
             size={50}
             color={this.scratchItemcolor(13)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => {
            this.scratchItem(14)
          }
        }
          >
            <FontAwesome
             name={this.scratchItemicon(14)}
             size={50}
             color={this.scratchItemcolor(14)}
            />
          </TouchableOpacity>
          
        

        </View>
        <View style={styles.itemrow}>
          <TouchableOpacity style={styles.item}
          onPress={() => {
            this.scratchItem(15)
          }
        }
          >
            <FontAwesome
             name={this.scratchItemicon(15)}
             size={50}
             color={this.scratchItemcolor(15)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => {
            this.scratchItem(16)
          }
        }
          >
            <FontAwesome
             name={this.scratchItemicon(16)}
             size={50}
             color={this.scratchItemcolor(16)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => {
            this.scratchItem(17)
          }
        }
          >
            <FontAwesome
             name={this.scratchItemicon(17)}
             size={50}
             color={this.scratchItemcolor(17)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => {
            this.scratchItem(18)
          }
        }
          >
            <FontAwesome
             name={this.scratchItemicon(18)}
             size={50}
             color={this.scratchItemcolor(18)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => {
            this.scratchItem(19)
          }
        }
          >
            <FontAwesome
             name={this.scratchItemicon(19)}
             size={50}
             color={this.scratchItemcolor(19)}
            />
          </TouchableOpacity>
          
        

        </View>
        <View style={styles.itemrow}>
          <TouchableOpacity style={styles.item}
          onPress={() => {
            this.scratchItem(20)
          }
        }
          >
            <FontAwesome
             name={this.scratchItemicon(20)}
             size={50}
             color={this.scratchItemcolor(20)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => {
            this.scratchItem(21)
          }
        }
          >
            <FontAwesome
             name={this.scratchItemicon(21)}
             size={50}
             color={this.scratchItemcolor(21)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => {
            this.scratchItem(22)
          }
        }
          >
            <FontAwesome
             name={this.scratchItemicon(22)}
             size={50}
             color={this.scratchItemcolor(22)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => {
            this.scratchItem(23)
          }
        }
          >
            <FontAwesome
             name={this.scratchItemicon(23)}
             size={50}
             color={this.scratchItemcolor(23)}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.item}
          onPress={() => {
            this.scratchItem(24)
          }
        }
          >
            <FontAwesome
             name={this.scratchItemicon(24)}
             size={50}
             color={this.scratchItemcolor(24)}
            />
          </TouchableOpacity>
          
        

        </View>
      
      </View>
      <Button
      onPress={ () => {this.showAllItem();
       } }
      full
      success
      style={styles.button}
      >
        <Text style={styles.buttonText} >Show all coupons</Text>
      </Button>
      <Button
      onPress={ () => {this.ResetGame();
      } }
      full
      primary
      style={styles.button}
      >
        <Text style={styles.buttonText}>Reset Game</Text>
      </Button>
         
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid:{

  },
  item:{
    alignItems:'center',
    padding:10,
    borderWidth:2,
    borderColor:'#000',
    minWidth:70


  },
  itemrow:{
    flexDirection:'row',


  },
  text:{
    fontSize:30,
    fontWeight:'bold'
  },
  button:{
    marginVertical:15
  },
  buttonText:{
    color:'#FFFFFF',
    fontSize:18
  },
  topBar:{
    backgroundColor:'#53E0BC',
    justifyContent:'center',
    width: Dimensions.get('window').width,
    marginVertical:20
  },
  topText:{
    color: '#ffffff',
    fontWeight:'bold',
    fontSize:30,
    textAlign:'center',
    marginVertical:5
  }
});
