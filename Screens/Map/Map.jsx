import React, { useState, useEffect } from "react";
import { Layout, Icon } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { Callout } from "react-native-maps";
import { GetPois } from "../../api/user";
import Filter from "../../components/Filter";
import { TouchableOpacity, View, Text } from "react-native";
import MarkerPopover from "../../components/MarkerPopover";
const Map = ({ navigation }) => {
  const [ModalVisible, setModalVisible] = useState(false);
  const [Allpois, setAllPois] = useState([]);
  const [Displayedpois, setDisplayedPois] = useState([]);
  useEffect(async () => {
    const data = await GetPois();
    setAllPois(data.features);
    setDisplayedPois(data.features);
  }, []);

  const filterPois = () => {
    // here we filter the data array according to some parameters
    //code will be like : setDisplayedPois(Allpois.filter((p)=>p.properties.theme=="running"))
    // this function should be passed to the filter component and called from there with the filtering parameters
  };
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
            key={p.properties.identifiant}
            coordinate={{
              latitude: p.geometry.coordinates[1],
              longitude: p.geometry.coordinates[0],
            }}
            title={p.properties.nom}
            description={p.properties.soustheme}
          >
            <Callout style={styles.Callout}>
              <MarkerPopover element={p.properties} />
            </Callout>
          </MapView.Marker>
        ))}
      </MapView>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.Fab}
      >
        <Icon style={styles.icon} fill="#000" name="menu-outline" />
      </TouchableOpacity>
      <Filter
        filterPois={filterPois}
        ModalVisible={ModalVisible}
        setModalVisible={setModalVisible}
      />
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
