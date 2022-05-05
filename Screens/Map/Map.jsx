import React, { useState, useEffect } from "react";
import { Layout, Icon } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { GetPois } from "../../api/user";
import MarkerPopover from "../../components/MarkerPopover";
import LoadingBlockScreen from "../../components/LoadingBlockScreen";
import { useNavigation } from "@react-navigation/native";

const Map = () => {
  const navigation = useNavigation();

  const [ModalVisible, setModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [PopoverVisible, setPopoverVisible] = useState(false);
  const [LoadingVisible, setLoadingVisibility] = useState(true);
  const [Allpois, setAllPois] = useState([]);
  const [Displayedpois, setDisplayedPois] = useState([]);
  useEffect(async () => {
    let abortController = new AbortController();
    const data = await GetPois();
    setAllPois(data);
    setDisplayedPois(data);
    setLoadingVisibility(false);
    return () => {
      abortController.abort();
    };
  }, []);

  
  return (
    <Layout style={styles.Container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 45.758663919731184,
          longitude: 4.8456010926260475,
          latitudeDelta: 0.6,
          longitudeDelta: 0.06,
        }}
      >
        {Displayedpois.map((p) => (
          <MapView.Marker
            key={p.id}
            coordinate={{
              latitude: parseFloat(JSON.parse(p.point).coordinates[0]),
              longitude: parseFloat(JSON.parse(p.point).coordinates[1]),
            }}
            onPress={() =>{setSelectedLocation(p),setPopoverVisible(true)}}
          />
        ))}
      </MapView>
     
      <MarkerPopover
        navigation={navigation}
        ModalVisible={PopoverVisible}
        setModalVisible={setPopoverVisible}
        infrastructure={selectedLocation}
      />
      {LoadingVisible && <LoadingBlockScreen />}
    </Layout>
  );
};

export default Map;
const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: "100%",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  Fab: {
    width: 55,
    height: 55,
    borderRadius: 30,
    right: 10,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#000",
    position: "absolute",
    bottom: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 32,
    marginLeft: 5,
    marginRight: 5,
    height: 32,
  },
  Callout: {
    borderRadius: 10,
  },
});
