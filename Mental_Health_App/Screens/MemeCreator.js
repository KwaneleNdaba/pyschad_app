import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TextInput, 
  Pressable, 
  TouchableOpacity,
} 
from 'react-native';

import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import * as ImagePicker from 'expo-image-picker';

import BottomSheet from 'reanimated-bottom-sheet';

const MemeCreator = ({navigation}) => {

    const [image, setImage] = useState('https://th.bing.com/th/id/OIP.32lBdu5X9JBT0UZAn8qgdwHaFj?w=252&h=189&c=7&r=0&o=5&pid=1.7');

    const choosePhotoFromLibrary = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        //console.warn(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
          setNewData({...newdata, Img_url: result.uri})
          //console.log(newdata.Img_url)
        }
      };

    const takePhotoFromCamera = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("You've refused to allow this appp to access your camera!");
          return;
        }
    
        const result = await ImagePicker.launchCameraAsync();
    
       
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
          
          setNewData({...newdata, Img_url: result.uri})
        }
        };
    
      const Inner = () => (
        <View style={styles.panel}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.panelTitle}>Upload Photo</Text>
            <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
          </View>
          <TouchableOpacity
            style={styles.panelButton}
            onPress={takePhotoFromCamera}>
            <Text style={styles.panelButtonTitle}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.panelButton}
            onPress={choosePhotoFromLibrary}>
            <Text style={styles.panelButtonTitle}>Choose From Library</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.panelButton}
            onPress={() => bs.current.snapTo(1)}>
            <Text style={styles.panelButtonTitle}>Cancel</Text>
          </TouchableOpacity>
        </View>
        )
    
        const Header= () => (
          <View style={styles.header}>
            <View style={styles.panelHeader}>
              <View style={styles.panelHandle} />
            </View>
          </View>
        );
    
      const bs = useRef();
    

  return (

    <View style={styles.container}>
        <BottomSheet
                ref={bs}
                snapPoints={[390, 0]}
                renderContent={Inner}
                renderHeader={Header}
                initialSnap={1}
                // callbackNode={this.fall}
                enabledGestureInteraction={true}
              />

    <Icon name="arrowleft" style={{marginLeft: 10, marginTop: 10}} size={30} color="black"   onPress={() => navigation.navigate("Login")} />
   
    <View style={styles.gamesWrapper}>

       <Text style={styles.SectionTitle}>MEME CREATOR</Text>
       <Image source={{uri: image}} style={{ width: 340, height: 300, marginRight: 5, borderRadius: 10,  paddingLeft: 80, }}/>
      
       <View style={styles.button1}>
            <Pressable   onPress={() => bs.current.snapTo(0)} style={({ pressed }) => [{ backgroundColor: pressed ? 'orange' : '#ECECEC' }, styles.button2,{backgroundColor: '#ECECEC'}]}>
                <Text style={styles.text2}>GENERATE ANOTHER IMAGE</Text>
            </Pressable>
        </View>
   
    <View>
        <TextInput  style={styles.input1}   placeholder="Top Text" keyboardType='default'/>
        <TextInput style={styles.input2}   placeholder="Bottom Text" keyboardType='default'/>
    </View>



    <TouchableOpacity style={styles.button4}>
    <Text style={styles.text4}>DOWNLOAD</Text>
    </TouchableOpacity>
      
   
</View>
</View>
  );
}

export default MemeCreator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: 'white',
  },

  gamesWrapper:{
    paddingHorizontal: 10,
  },

  SectionTitle:{
    fontSize: 30,
    fontWeight: 'bold',
    color:'black',
    paddingHorizontal: 3,
    padding: 20,
   
  },
  button1:{
    marginLeft: 165,
    alignItems: 'center',
    fontSize: 15,
    paddingVertical: 12,
    //paddingHorizontal: 7,
    //borderRadius: 9,
    //elevation: -1,
   
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 7,
    paddingHorizontal: 25,
    borderRadius: 35,
    elevation: 3,
    backgroundColor: 'white',
  },
 
  button4: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 7,
    paddingHorizontal: 55,
    borderRadius: 35,
    elevation: 3,
    backgroundColor: '#00a46c',
    color: '#FFFFFF',
    shadowOpacity: '50',
    shadowRadius: '15',
    marginTop: 15,
    marginLeft: 50,
    marginRight: 50,
  },
  TextInput:{
    textAlign: 'center',
  },
  input1: {
    height: 40,
    marginTop: 10,
    backgroundColor: '#ECECEC',
    borderRadius: 8,
    textAlign: 'center',
  },
 
  input2: {
    height: 40,
    marginTop: 10,
    backgroundColor: '#ECECEC',
    borderRadius: 8,
    textAlign:'center',
 
  },
 
  text2: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    fontSize: 9,
    color: 'black',
  },
  
  text4: {
    fontSize: 16,
    lineHeight: 21,
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#ffffff',
  },
  icon1:{
  marginTop: 5,
  marginRight: 200,
},
panel: {
  padding: 20,
  backgroundColor: '#FFFFFF',
  paddingTop: 20,
  width: '100%',
},
header: {
  backgroundColor: '#FFFFFF',
  shadowColor: '#333333',
  shadowOffset: {width: -1, height: -3},
  shadowRadius: 2,
  shadowOpacity: 0.4,
  paddingTop: 20,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
},
panelHeader: {
  alignItems: 'center',
},
panelHandle: {
  width: 40,
  height: 8,
  borderRadius: 4,
  backgroundColor: '#00000040',
  marginBottom: 10,
},
panelTitle: {
  fontSize: 27,
  height: 35,
},
panelSubtitle: {
  fontSize: 14,
  color: 'gray',
  height: 30,
  marginBottom: 10,
},
panelButtonTitle:{
  color: "white",
  fontWeight: "bold",
},
panelButton: {
  padding: 13,
  borderRadius: 10,
  backgroundColor: '#00a46c',
  alignItems: 'center',
  marginVertical: 7,
},
btnText: {
  fontSize: 17,
  fontWeight: 'bold',
  color: 'white',
},
action: {
  flexDirection: 'row',
  marginTop: 10,
  marginBottom: 10,
  borderBottomWidth:1,
  borderBottomColor: '#f2f2f2',
  paddingBottom: 5,
},
actionError: {
  flexDirection: 'row',
  marginTop: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#FF0000',
  paddingBottom: 5,
},
textInput: {
  flex: 1,
  marginTop:10,
  paddingLeft: 20,
  color: '#05375a',
},
action2:{
  flexDirection: 'row',
  marginTop: 10,
  marginBottom: 10,
  borderBottomWidth: 1,
  borderBottomColor: '#f2f2f2',
  paddingBottom: 5,
  paddingLeft: 19,
},

 
});

