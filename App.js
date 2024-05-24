import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import MapView, { Marker} from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';
import Bottomsheet from './src/component/Bottomsheet';
import TheButtomsheet from './src/component/MyButtomsheet';
export default function App ({ openNext, naviagtion}) {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['20%',], []);
  const handleSheetChanges = useCallback((index) => { }, []);
  const [searchLocationBottomsheet, setSearchLocationBottomsheet] =useState(true);
   const handleLocationBottomSheet=()=>{
     setSearchLocationBottomsheet(true);
     setDefaultBottomsheet(false);
   }
  return (
    <GestureHandlerRootView style={styles.container}>
      <MapView style={styles.map}
      initialRegion={{
        latitude: 4.8776,
        longitude: 7.0283,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
      provider='google'
      >
        <Marker
        coordinate={{
          latitude: 4.8776,
          longitude: 7.0283
        }}
        pinColor='red'
        >
        </Marker>
      </MapView>
      <View style={{position: 'absolute', marginTop: 40, paddingLeft: 25 }}>
      <TouchableOpacity style={{backgroundColor:'#0898A0', borderRadius: 35, padding: 10}}>
        <Ionicons
        name='menu-outline'
        size={35}
        color={'white'}
        onPress={() => naviagtion.openDrawer()} />
        </TouchableOpacity>
      </View>
      <View style={{position: 'absolute', marginTop: 730, paddingLeft: 430 }}>
        <TouchableOpacity style={{backgroundColor:'#0898A0', borderRadius: 35, padding: 15}}>
        <MaterialIcons
        name='gps-fixed'
        size={25}
        color={'white'}
        onPress={() => naviagtion.openDrawer()} />
        </TouchableOpacity>
      </View>
      <View style={{position: 'absolute', marginTop: 650, paddingLeft: 430  }}>
      <TouchableOpacity style={{backgroundColor:'black', borderRadius: 35, padding: 15}}>
        <MaterialIcons
        name='gpp-good'
        size={25}
        color= 'white'
        onPress={() => naviagtion.openDrawer()} />
        </TouchableOpacity>
      </View>
      <BottomSheet openNext={handleLocationBottomSheet}
      index={0}
        snapPoints={snapPoints}
        enablePanDownToClose={false}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        style={styles.bottom}>
        <View style={styles.contentContainer}>
          <Text style={styles.containerHeadline}>Hello, Temi</Text>
          <View style={{ flexDirection: 'row', paddingLeft: 15 }}>
            <View style={{ borderWidth: 1, borderColor: '#F5F5F5', backgroundColor: '##f5f5f5', padding: 15, borderBottomLeftRadius: 15, borderTopLeftRadius: 15 }}>
              <TouchableOpacity >
                <Ionicons
                  name='search'
                  size={25}
                  color={'#0898A0'} />
              </TouchableOpacity>
            </View>
            <View style={{ borderWidth: 2, borderColor: '#F5F5F5', backgroundColor: '#F5F5F5', padding: 15, borderBottomRightRadius: 15, borderTopRightRadius: 15, width: '85%' }}>
              <TouchableOpacity style={{ fontSize: 25 }} onPress={() => naviagtion.TheButtomsheet()}>
                  <Text>'Where are you going today?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </BottomSheet>
      {searchLocationBottomsheet && <TheButtomsheet />}
    </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    zIndex: 4,
    // width: '100%',
    // height: '100%',
  },
  bottom: {
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: '600',
    padding: 15,
    color: '#A3A3A3'
  },
  container1: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});