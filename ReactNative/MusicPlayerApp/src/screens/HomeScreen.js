import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import Sound from 'react-native-sound';

import Icon from 'react-native-vector-icons/Ionicons';

import songs from '../data/songs';
import MusicCard from '../components/MusicCard';

Sound.setCategory('Playback');

const HomeScreen = () => {
  const [currentSong, setCurrentSong] = useState(null);

  const [sound, setSound] = useState(null);

  const [playing, setPlaying] = useState(false);

  const playMusic = song => {
    if (sound) {
      sound.stop();
      sound.release();
    }

    const newSound = new Sound(song.url, '', error => {
      if (error) {
        console.log(error);
        return;
      }

      newSound.play(success => {
        if (success) {
          console.log('Finished');
        }

        newSound.release();

        setPlaying(false);
      });

      setPlaying(true);
    });

    setSound(newSound);

    setCurrentSong(song);
  };

  const toggleMusic = () => {
    if (!sound) return;

    if (playing) {
      sound.pause();
      setPlaying(false);
    } else {
      sound.play();
      setPlaying(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🎵 Music Player</Text>

      {currentSong && (
        <View style={styles.playerContainer}>
          <Image source={{ uri: currentSong.image }} style={styles.cover} />

          <Text style={styles.songTitle}>{currentSong.title}</Text>

          <Text style={styles.artist}>{currentSong.artist}</Text>

          <TouchableOpacity style={styles.playButton} onPress={toggleMusic}>
            <Icon name={playing ? 'pause' : 'play'} size={40} color="#fff" />
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        data={songs}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <MusicCard item={item} onPress={() => playMusic(item)} />
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 15,
  },

  header: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 20,
  },

  playerContainer: {
    backgroundColor: '#1e1e1e',
    borderRadius: 25,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },

  cover: {
    width: 220,
    height: 220,
    borderRadius: 20,
  },

  songTitle: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 20,
  },

  artist: {
    color: '#aaa',
    fontSize: 17,
    marginTop: 5,
  },

  playButton: {
    marginTop: 20,
    backgroundColor: '#6200ee',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
