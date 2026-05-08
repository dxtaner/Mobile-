import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import api from '../services/api';

const DetailScreen = ({ route }) => {
  const { name } = route.params;
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPokemon = async () => {
    try {
      const res = await api.get(`pokemon/${name}`);
      setPokemon(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#FF0000" />
      </View>
    );
  }

  const mainType = pokemon.types[0].type.name;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header Kartı */}
        <View style={styles.headerCard}>
          <Text style={styles.idText}>
            #{String(pokemon.id).padStart(3, '0')}
          </Text>
          <Image
            source={{
              uri: pokemon.sprites.other['official-artwork'].front_default,
            }}
            style={styles.image}
          />
          <Text style={styles.title}>{pokemon.name.toUpperCase()}</Text>

          <View style={styles.typeContainer}>
            {pokemon.types.map((item, index) => (
              <View key={index} style={styles.typeBadge}>
                <Text style={styles.typeText}>{item.type.name}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>{pokemon.height / 10} m</Text>
              <Text style={styles.statLabel}>Boy</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.statBox}>
              <Text style={styles.statValue}>{pokemon.weight / 10} kg</Text>
              <Text style={styles.statLabel}>Ağırlık</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Temel İstatistikler</Text>
          {pokemon.stats.map((stat, index) => (
            <View key={index} style={styles.statBarRow}>
              <Text style={styles.statName}>
                {stat.stat.name.replace('-', ' ')}
              </Text>
              <View style={styles.barBackground}>
                <View
                  style={[
                    styles.barFill,
                    { width: `${(stat.base_stat / 255) * 100}%` },
                  ]}
                />
              </View>
              <Text style={styles.statNumber}>{stat.base_stat}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    paddingBottom: 40,
  },
  headerCard: {
    backgroundColor: '#48D0B0',
    paddingTop: 40,
    paddingBottom: 30,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  idText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(255,255,255,0.7)',
    position: 'absolute',
    right: 25,
    top: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#FFF',
    letterSpacing: 1,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  typeContainer: {
    flexDirection: 'row',
  },
  typeBadge: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  typeText: {
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  infoContainer: {
    padding: 25,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 20,
    elevation: 2,
    marginBottom: 25,
  },
  statBox: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
  },
  divider: {
    width: 1,
    backgroundColor: '#EEE',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  statBarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  statName: {
    width: 100,
    fontSize: 14,
    color: '#666',
    textTransform: 'capitalize',
  },
  barBackground: {
    flex: 1,
    height: 8,
    backgroundColor: '#EEE',
    borderRadius: 4,
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    backgroundColor: '#48D0B0',
    borderRadius: 4,
  },
  statNumber: {
    width: 30,
    textAlign: 'right',
    fontWeight: 'bold',
    color: '#333',
  },
});
