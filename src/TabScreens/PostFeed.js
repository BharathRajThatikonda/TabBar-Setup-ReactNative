import React,{Component} from 'react';
import {View,Text,StyleSheet,Modal,Button} from 'react-native'





export default class POstFeed extends Component{
constructor(){
    super();
    this.state = {
        visibility:false,
    };
}

    setVisibility(visible){
        console.log('set state')
        this.setState({
            visibility:visible,
        });
    }

    render(){
        return(

            <View style = {styles.mainContainer}>
               <Modal
            animationType={'slide'} 
            transparent={false} 
            visible={this.state.visibility}
        >
                <View style={styles.modalContainer}>
                    <View>
                        <Text>
                            Simple Model
                        </Text>
                        <Button
                        color = 'red'
                        onPress={()=>this.setVisibility(!this.state.visibility)}
                        title='hide'
                        />
                    </View>
                    
                </View>

                     </Modal>
                     <Button
                     color="yellow"
                     onPress={() => this.setVisibility(true)}
                     title="Show Modal"
                    />
                <Text>
                    POstFeed        
                </Text>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
      mainContainer:{
          marginTop:22,
      },
      modalContainer:{
          marginTop:22,
          backgroundColor: 'red',
      }
});