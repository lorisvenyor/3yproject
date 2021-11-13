
import React, {useState, useEffect} from 'react'
import {Text, View, StyleSheet, Dimensions, ScrollView, Linking} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import WebView from 'react-native-webview'
import * as firebase from 'firebase' 
import Hyperlink from 'react-native-hyperlink';
import Header from '../shared/header'

const DeviceHeight = Dimensions.get('screen').height
const DeviceWidth = Dimensions.get('screen').width

export default function NewsFeed () {

        const greeting = (hour) => {
            return "Good " + (hour <12 && "Morning! Have a nice day!" || hour <18 && "Afternoon! Hope you're having a good day!" || "Evening! You did good today!")
        }

        const dcusu = `
        <a class="twitter-timeline" data-tweet-limit="10" data-height="800" href="https://twitter.com/DCUSU?ref_src=twsrc%5Etfw">Tweets by DCUSU</a>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`

        const dcu = `
        <a class="twitter-timeline" data-tweet-limit="10" data-height="800" href="https://twitter.com/DCU?ref_src=twsrc%5Etfw">Tweets by DCU</a>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`

        const dculib = `
        <a class="twitter-timeline" data-tweet-limit="10" data-height="800" href="https://twitter.com/DCULIB?ref_src=twsrc%5Etfw">Tweets by DCULIB</a> 
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`

        return (
            <SafeAreaView style={styles.container}>
            <StatusBar style="auto"/>
            <ScrollView>

            <Header title='NEWS FEED'/>
                
                {/* shows the greeting depending on the time  */}
                {/* <Text style={{textAlign: 'center', fontSize: 17, fontStyle: 'italic', color: 'black'}}>How are you today, {NFname == '' ? <Text>{displayname}</Text> : <Text>{NFname}</Text>}?</Text> */}
                <Text style={{textAlign: 'center', fontSize: 18, fontStyle: 'italic', color: 'black'}}>{greeting(new Date().getHours())}</Text>

                <Text style={{
                    marginTop: 40, 
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    fontSize: 25,
                    color: 'orange'
                    }}>DCU Main</Text>

                <WebView 
                source={{ html: dcu}} 
                style={{ 
                    marginTop: 20, 
                    width: DeviceWidth, 
                    height: 600
                    
                    }} />

                <Text style={{
                    marginTop: 70, 
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    fontSize: 25,
                    color: '#802392'
                    }}>DCU Student Union</Text>

                <WebView 
                source={{ html: dcusu}} 
                style={{ 
                    marginTop: 20, 
                    width: DeviceWidth, 
                    height: 600}}/>

                <Text style={{
                    marginTop: 70, 
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    fontSize: 25,
                    color: '#59C9A5'
                    
                    }}>DCU Library</Text>

                <WebView 
                source={{ html: dculib}} 
                style={{ 
                    marginTop: 20,
                    marginBottom: 10, 
                    width: DeviceWidth, 
                    height: 600}} />

            {/* DCU HOTLINES  */}
            <View style={{marginTop: 30, marginBottom: 10}}>
                <Text style={{textAlign: 'center', fontSize: 25, color: '#25afcd', fontWeight: '700'}}>DCU Hotlines</Text>
                
                <Text style={{textAlign: 'center', marginTop: 20, fontSize: 20, marginBottom: 5, color: 'orange'}}>EMERGENCY</Text>
                
                <View style={{justifyContent: 'center', flexDirection: 'row', marginTop: 5}}>
                    <Text style={{fontSize: 17}}>DCU Security Emergency:  </Text> 
                    <Text selectable style={{fontSize: 17}}>01 700 8990</Text>
                </View>

                <View style={{justifyContent: 'center', flexDirection: 'row', marginTop: 5}}>
                    <Text style={{fontSize: 17}}>Gardaí (Santry):   </Text> 
                    <Text selectable style={{fontSize: 17}}>01 666 4000</Text>
                </View>

                <View style={{justifyContent: 'center', flexDirection: 'row', marginTop: 5}}>
                    <Text style={{fontSize: 17}}>Gardaí (Ballymun):   </Text> 
                    <Text selectable style={{fontSize: 17}}>01 666 4401</Text>
                </View>
                

                <Text selectable style={{textAlign: 'center', marginTop: 20, fontSize: 20, marginBottom: 5, color: 'orange'}}>MEDICAL</Text>
                
                <View style={{justifyContent: 'center', flexDirection: 'row', marginTop: 5}}>
                    <Text style={{fontSize: 17}}>DCU Medical Centre:   </Text> 
                    <Text selectable style={{fontSize: 17}}>01 700 5143</Text>
                </View>

                <View style={{justifyContent: 'center', flexDirection: 'row', marginTop: 5}}>
                    <Text style={{fontSize: 17}}>Beaumont Hospital:   </Text> 
                    <Text selectable style={{fontSize: 17}}>01 821 3844</Text>
                </View>

                <View style={{justifyContent: 'center', flexDirection: 'row', marginTop: 5}}>
                    <Text style={{fontSize: 17}}>Mater Hospital:   </Text> 
                    <Text selectable style={{fontSize: 17}}>01 830 1122</Text>
                </View>
                
                
                <Text style={{textAlign: 'center', marginTop: 20, fontSize: 20, marginBottom: 5, color: 'orange'}}>SUPPORT</Text>

                <View style={{justifyContent: 'center', flexDirection: 'row', marginTop: 5}}>
                    <Text style={{fontSize: 17}}>Victim Support:   </Text> 
                    <Text selectable style={{fontSize: 17}}>01 679 8673</Text>
                </View>

                <View style={{justifyContent: 'center', flexDirection: 'row', marginTop: 5}}>
                    <Text style={{fontSize: 17}}>Rape Crisis Centre:   </Text> 
                    <Text selectable style={{fontSize: 17}}>01 661 4911</Text>
                </View>

                <View style={{justifyContent: 'center', flexDirection: 'row', marginTop: 5}}>
                    <Text style={{fontSize: 17}}>Women's Aid Help Line:   </Text> 
                    <Text selectable style={{fontSize: 17}}>01 872 3756</Text>
                </View>

            </View>


            <Hyperlink
                marginBottom={20}
                linkStyle={{color: '#25afcd', fontSize: 20 }}
                onPress={()=>{ Linking.openURL('https://www.dcu.ie/timetabling/ac_20_21.shtml')}}
                linkText={(url) => url === 'https://www.dcu.ie/timetabling/ac_20_21.shtml' ? 'Academic Calendar' : url
                }>
                <Text style={{textAlign: 'center', fontSize: 18, marginTop: 20}}>
                    {`Click to see this year's\nhttps://www.dcu.ie/timetabling/ac_20_21.shtml`}
                </Text>
            </Hyperlink>

                
            </ScrollView>
            </SafeAreaView>
        )
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
        image_style: {
        width: 100, 
        height: 100,     
    }

})



// #FFBB24 this orange or
// #25afcd this blue