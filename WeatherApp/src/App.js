import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  RefreshControl,
  Dimensions,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {format} from 'date-fns';
import {tr} from 'date-fns/locale';
import Config from 'react-native-config';

import useFetch from './hooks/useFetch';
import Loading from './components/Loading';
import WeatherInfoCard from './components/WeatherInfoCard';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const App = () => {
  const [coords, setCoords] = useState({lat: 0, lon: 0});
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [useCitySearch, setUseCitySearch] = useState(false);
  const [apiUrl, setApiUrl] = useState(null);

  const formattedDate = format(new Date(), 'PPPPpp', {locale: tr});

  const {data, loading} = useFetch(apiUrl);

  const fetchLocation = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Konum İzni',
          message: 'Uygulama konumunuza erişmek istiyor.',
          buttonNeutral: 'Daha Sonra',
          buttonNegative: 'İptal',
          buttonPositive: 'Tamam',
        },
      );

      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        console.error('Konum izni verilmedi');
        return;
      }
    }

    Geolocation.getCurrentPosition(
      pos => {
        const {latitude, longitude} = pos.coords;
        setCoords({lat: latitude, lon: longitude});
        const locUrl = `${Config.API_URL}lat=${latitude}&lon=${longitude}&appid=${Config.API_KEY}&lang=tr&units=metric`;
        setApiUrl(locUrl);
      },
      err => {
        console.error('Konum alınamadı:', err.message);
      },
      {enableHighAccuracy: true, timeout: 15000},
    );
  };

  const onRefresh = () => {
    setRefreshing(true);
    setUseCitySearch(false);
    setSearchQuery('');
    fetchLocation();
    setTimeout(() => setRefreshing(false), 1000);
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      const cityUrl = `${Config.API_URL}q=${searchQuery}&appid=${Config.API_KEY}&lang=tr&units=metric`;
      setApiUrl(cityUrl);
      setUseCitySearch(true);
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  if (!apiUrl || loading) return <Loading />;

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <Image
        source={require('./assets/skyback.jpg')}
        style={styles.backgroundImage}
        blurRadius={2}
      />
      <View style={styles.overlay}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Şehir adı girin..."
            placeholderTextColor="#bbb"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.searchButtonText}>Ara</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.glassCard}>
          <Text style={styles.cityText}>
            {data?.name}, {data?.sys?.country}
          </Text>
          <Text style={styles.dateText}>{formattedDate}</Text>
          <Text style={styles.tempText}>{Math.round(data?.main?.temp)}°C</Text>
          <View style={styles.weatherRow}>
            <Image
              style={styles.icon}
              source={{
                uri: `https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@4x.png`,
              }}
            />
            <Text style={styles.weatherText}>
              {data?.weather[0]?.description}
            </Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <WeatherInfoCard
            label="Rüzgar"
            value={data?.wind?.speed}
            unit="km/h"
            color="#81D4FA"
          />
          <WeatherInfoCard
            label="Basınç"
            value={data?.main?.pressure}
            unit="hPa"
            color="#AED581"
          />
          <WeatherInfoCard
            label="Nem"
            value={data?.main?.humidity}
            unit="%"
            color="#FFCC80"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  backgroundImage: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: 'absolute',
  },
  overlay: {
    padding: 20,
    paddingTop: 60,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 45,
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 25,
    paddingHorizontal: 20,
    color: '#fff',
    fontSize: 16,
  },
  searchButton: {
    marginLeft: 10,
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  glassCard: {
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  cityText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dateText: {
    color: '#ccc',
    textAlign: 'center',
    marginVertical: 6,
  },
  tempText: {
    fontSize: 56,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 10,
  },
  weatherRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherText: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 10,
    textTransform: 'capitalize',
  },
  icon: {
    width: 70,
    height: 70,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
});
