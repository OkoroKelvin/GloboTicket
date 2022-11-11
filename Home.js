import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {
    useFonts,
    Ubuntu_300Light,
    Ubuntu_300Light_Italic,
    Ubuntu_400Regular,
    Ubuntu_400Regular_Italic,
    Ubuntu_500Medium,
    Ubuntu_500Medium_Italic,
    Ubuntu_700Bold,
    Ubuntu_700Bold_Italic,
  } from '@expo-google-fonts/ubuntu';
  

  


const Home = (props) => {
    let [fontsLoaded] = useFonts({
        Ubuntu_300Light,
        Ubuntu_300Light_Italic,
        Ubuntu_400Regular,
        Ubuntu_400Regular_Italic,
        Ubuntu_500Medium,
        Ubuntu_500Medium_Italic,
        Ubuntu_700Bold,
        Ubuntu_700Bold_Italic,
      });
    

    return (
        <View style={styles.container}>
            <Image 
                style={styles.globologo}
                source={require('./images/_Export_globoticket-bug-black.png')}    
            />
            <Text style={styles.title}>Welcome To GloboTicket</Text>
            <Text style={styles.subtitle}>{props.username}</Text>
            <View style={styles.textcontainer}>
                <Text style={styles.content}>{introText}</Text>
            </View>

        </View>
    );
}

const introText = `Quid ad utilitatem tantae pecuniae? Ut nemo dubitet, eorum omnia officia quo spectare, quid sequi, quid fugere debeant? Eodem modo is enim tibi nemo dabit, quod, expetendum sit, id esse laudabile. Qui-vere falsone, quaerere mittimus-dicitur oculis se privasse; Dolor ergo, id est summum malum, metuetur semper, etiamsi non aderit; Videmusne ut pueri ne verberibus quidem a contemplandis rebus perquirendisque deterreantur?`;

const styles = StyleSheet.create({

    container:{
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
        paddingTop: 70
    },
    textcontainer:{
        textAlign: 'center',
        paddingTop: 10
    },
    globologo: {
        height: 100,
        width: 150
    },
    title:{
        fontFamily: 'Ubuntu_700Bold',
    },
    subtitle:{
        paddingTop: 5,
        fontFamily: 'Ubuntu_500Medium', 
    },
    content: {
        fontFamily: 'Ubuntu_300Light',
        fontWeight: '300'
    }

});

export default Home;