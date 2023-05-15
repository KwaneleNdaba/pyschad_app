import React, {useState} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet ,
    ImageBackground,
    Image,
    ScrollView,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Profile = ({navigation}) => {

  const [image, setImage] = useState('https://www.citypng.com/public/uploads/preview/profile-user-round-black-icon-symbol-hd-png-11639594326nxsyvfnkg9.png');


  return (
     <ScrollView>
              <View style={styles.container}>
                    <View >
                      <View 
                        style= {{alignItems: 'center',
                        backgroundColor: '#00a46c',
                        height: 115,
                        width: 360, 
                        borderBottomLeftRadius:40, 
                        borderBottomRightRadius:40,}}>
                    
                
                  <View
                        style={{
                            height: 115,
                            width: 115,
                            borderRadius: 500,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 50,
                            backgroundColor: '#FCA311',
                          }}>
                                  
                    <ImageBackground 
                        source={{uri: image}}
                        style={{height:100, width: 100, marginTop: 1}}
                        imageStyle={{borderRadius: 50}}>
                    </ImageBackground>
                    </View>                    
                            
                  </View>

                  <View style={[styles.action, {marginLeft: 20, marginTop: 60, marginBottom: 2}]}>
                    <Text style={{marginLeft: 90, marginTop:10, fontSize: 20,  fontWeight: 'bold'}}>Name Surname</Text>
                  </View>

                  <View style={[styles.action, {marginLeft: 20, marginTop: 5, marginBottom: 5}]}>
                  <Text style={{marginLeft: 120, marginTop:1, fontSize: 20, fontWeight: 'bold'}}>Gender</Text>
                  </View>
                
                  <View style={[styles.action, {marginLeft: 20, marginTop: 5,  marginBottom: 10}]}>
                  <FontAwesome name="hourglass" color="#333333" size={16} style={{marginTop:5, marginLeft: 120}} />
                  <Text style={{marginLeft: 10, fontSize: 18, fontWeight: 'bold'}}>Age</Text>
                  </View>
                  
                  <View style={[styles.action, {marginLeft: 20}]}>
                  <FontAwesome name="building" color="#333333" size={16} style={{marginTop:3, marginLeft: 113}}/>
                  <Text style={{marginLeft: 10, fontSize: 15, fontWeight: 'bold'}}>Campus</Text>
                   </View>

                  <View style={[styles.action, {marginLeft: 20, marginTop: 5,  marginBottom: 5}]}>
                  <FontAwesome name="phone" color="#333333" size={19} style={{marginTop:2, marginLeft: 113}} />
                  <Text style={{marginLeft: 10, fontSize: 15, fontWeight: 'bold'}}>Phone</Text>
                  </View>

                  <View style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    marginBottom: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: '#D3D3D3',
                    paddingBottom: 5,
                  }}>
                  </View>

      

                <View style={{marginLeft: 20, 
                flexDirection: 'row',
                marginTop: 10,
                marginBottom: 10,
                paddingBottom: 5,}}>
                <FontAwesome name="pencil" color="#333333" size={18} style={{marginTop:8, }} />
                <Text
                  style={{marginTop:8, marginLeft: 20,color: "#666666"}}        
                >My Concerns:</Text>
              </View>

              <TouchableOpacity style={styles.Button} 
               onPress={() => navigation.navigate("EditProfile")}
              >
                  <Text style={styles.btnText}>Edit</Text>
              </TouchableOpacity>

          </View>
       </View>
     </ScrollView>
  );
}

export default Profile

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
    backgroundColor: '#6A0DAD',
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
