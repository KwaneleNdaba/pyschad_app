import React, {useRef, useState} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    StyleSheet ,
    ImageBackground,
    Image,
    ScrollView,
} from 'react-native';

import BottomSheet from 'reanimated-bottom-sheet';
import { SelectList } from 'react-native-dropdown-select-list';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';


const EditProfile = ({navigation}) => {

  const [selected, setSelected] = React.useState("");
  
  const data = [
      {key:'1', value:'Select Gender', disabled:true},
      {key:'2', value:'Male'},
      {key:'3', value:'Female'},
      {key:'4', value:'Other',},
  ]

  const [image, setImage] = useState('https://www.citypng.com/public/uploads/preview/profile-user-round-black-icon-symbol-hd-png-11639594326nxsyvfnkg9.png');

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
     <ScrollView>
       <View style={styles.container}>

            <BottomSheet
                ref={bs}
                snapPoints={[320, 0]}
                renderContent={Inner}
                renderHeader={Header}
                initialSnap={1}
                // callbackNode={this.fall}
                enabledGestureInteraction={true}
              />

            <View >
                
                <View 
                style= {{alignItems: 'center',
                backgroundColor: '#00a46c',
                height: 200,
                width: 360, 
                borderBottomLeftRadius:50, 
                borderBottomRightRadius:50,}}>

                <TouchableOpacity
               onPress={() => navigation.navigate("Profile")}
                
                >
                <Image source={require("../assets/download-removebg-preview.png")}
                  style={{height: 23, width: 30, marginTop: 40, marginRight:300}}
                >
                </Image>
                </TouchableOpacity>
         
                <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
                    <View
                        style={{
                            height: 105,
                            width: 105,
                            borderRadius: 500,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 1,
                            backgroundColor: '#FCA311',}}>
                          
                        <ImageBackground source={{uri: image}} style={{height:95, width: 95, marginTop: 1}} imageStyle={{borderRadius: 50}}>
                                <View 
                                    style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',}}>
                                
                                <Icon 
                                        name="camera"
                                        size={35}
                                        color="#fff"
                                        style={{
                                            opacity: 0.7,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderWidth: 1,
                                            borderColor: '#fff',
                                            borderRadius: 10,}} />
                                </View>
                        </ImageBackground>
                    </View>
                </TouchableOpacity>      
            </View>

            <View style={[styles.action, {marginLeft: 20, marginTop: 20,}]}>
            <FontAwesome name="user-o" color="#333333" size={20} style={{marginTop:13}} />
            <TextInput
                    placeholder="Name"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCorrect={false}
                    name="Name"
                  />
            </View>

            <View style={[styles.action, {marginLeft: 20, marginTop: 1,}]}>
            <FontAwesome name="user-o" color="#333333" size={20} style={{marginTop:14}} />
            <TextInput
                    placeholder="Surname"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCorrect={false}
                    name="Surname"
                  />
            </View>
                
            <View>
            <SelectList 
                setSelected={(val) => setSelected(val)} 
                data={data} 
                save="value"
                style={{placeholderTextColor:"#666666", marginLeft: 20,}}
                defaultOption={{ key:'1', value:'Select Gender', disabled: true }} 
            />
            </View>

            <View style={[styles.action, {marginLeft: 20}]}>
            <FontAwesome name="phone" color="#333333" size={20} style={{marginTop:13}} />
            <TextInput
                placeholder="Phone"
                placeholderTextColor="#666666"
                keyboardType="number-pad"
                autoCorrect={false}
                name="Phone_no"
                style={styles.textInput}
              />
            </View>

            <View style={[styles.action, {marginLeft: 20, }]}>
            <FontAwesome name="hourglass" color="#333333" size={18} style={{marginTop:14}} />
            <TextInput
                placeholder="Age"
                placeholderTextColor="#666666"
                autoCorrect={false}
                keyboardType="number-pad"
                name="Age"
                style={styles.textInput}
              />
            </View>

           <View style={[styles.action, {marginLeft: 20}]}>
           <FontAwesome name="building" color="#333333" size={18} style={{marginTop:15}} />
           <TextInput
                placeholder="Campus"
                placeholderTextColor="#666666"
                autoCorrect={false}
                name="Campus"
                style={styles.textInput}
              />
            </View>

          <View style={{marginLeft: 20, 
              flexDirection: 'row',
              marginTop: 10,
              marginBottom: 10,
              paddingBottom: 5,}}>
          <FontAwesome name="pencil" color="#333333" size={18} style={{marginTop:8, }} />
          <Text style={{marginTop:8, marginLeft: 20,color: "#666666"}}        
          >My Concerns:</Text>
          </View>



        <TouchableOpacity style={styles.Button} >
            <Text style={styles.btnText}>Update</Text>
        </TouchableOpacity>
      </View>


      </View>
    </ScrollView>
  );
}

export default EditProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  Button: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#00a46c',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
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
