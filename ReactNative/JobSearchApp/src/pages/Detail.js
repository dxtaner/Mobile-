import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Alert,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import RenderHTML from 'react-native-render-html';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {Linking} from 'react-native';

const JobDetail = ({route}) => {
  const {jobId} = route.params;
  const [jobDetail, setJobDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);

  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        const response = await axios.get(
          `https://www.themuse.com/api/public/jobs/${jobId}`,
        );
        setJobDetail(response.data);
      } catch (error) {
        Alert.alert('Error', 'There was an issue fetching the job details.');
        console.error('Error fetching job detail:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetail();
  }, [jobId]);

  const handleFavorite = () => {
    const isAlreadyFavorite = favorites.some(job => job.id === jobDetail.id);
    if (isAlreadyFavorite) {
      Alert.alert('Favorite', 'This job is already in your favorites.');
    } else {
      dispatch({type: 'ADD_FAVORITE', payload: jobDetail});
      Alert.alert(
        'Added to Favorites',
        'The job has been added to your favorites.',
      );
    }
  };

  const handleRemoveFavorite = () => {
    dispatch({type: 'REMOVE_FAVORITE', payload: jobDetail});
    Alert.alert(
      'Removed from Favorites',
      'The job has been removed from your favorites.',
    );
  };

  const handleApply = () => {
    if (jobDetail.refs.landing_page) {
      Linking.openURL(jobDetail.refs.landing_page).catch(err =>
        Alert.alert('Failed', 'Could not open the job application link.'),
      );
    } else {
      Alert.alert(
        'No Application Link',
        'Unfortunately, there is no application link available for this job.',
      );
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2980B9" />
        <Text style={{marginTop: 10}}>Loading job details...</Text>
      </View>
    );
  }

  if (!jobDetail) {
    return (
      <View style={styles.container}>
        <Text>No job details available.</Text>
      </View>
    );
  }

  const content = jobDetail.contents;
  const formattedDate = new Date(jobDetail.publication_date).toLocaleDateString(
    'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.jobDetailContainer}>
        <Text style={styles.jobTitle}>{jobDetail.name}</Text>
        <Text style={styles.jobCompany}>{jobDetail.company.name}</Text>
        <Text style={styles.jobLocation}>
          {jobDetail.locations.map(loc => loc.name).join(', ')}
        </Text>
        <Text style={styles.jobLevel}>
          {jobDetail.levels.map(level => level.name).join(', ')}
        </Text>
        <Text style={styles.jobDate}>{formattedDate}</Text>

        <View style={styles.jobDescriptionContainer}>
          <Text style={styles.sectionTitle}>Job Description</Text>
          <RenderHTML
            contentWidth={Dimensions.get('window').width}
            source={{html: content}}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={
              favorites.some(job => job.id === jobDetail.id)
                ? handleRemoveFavorite
                : handleFavorite
            }>
            <View style={styles.iconWrapper}>
              <Ionicons
                name={
                  favorites.some(job => job.id === jobDetail.id)
                    ? 'heart-dislike'
                    : 'heart'
                }
                size={22}
                color="#fff"
              />
            </View>
            <Text style={styles.buttonText}>
              {favorites.some(job => job.id === jobDetail.id)
                ? 'Remove Favorite'
                : 'Add to Favorite'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
            <View style={styles.iconWrapper}>
              <Ionicons name="rocket-outline" size={22} color="#fff" />
            </View>
            <Text style={styles.buttonText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F9FA',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jobDetailContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  jobTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  jobCompany: {
    fontSize: 18,
    color: '#777',
    marginBottom: 10,
  },
  jobLocation: {
    fontSize: 16,
    color: '#95A5A6',
    marginBottom: 5,
  },
  jobLevel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2980B9',
    marginBottom: 5,
  },
  jobDate: {
    fontSize: 14,
    color: '#BDC3C7',
    marginBottom: 15,
  },
  jobDescriptionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  favoriteButton: {
    backgroundColor: '#E74C3C',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    width: '48%',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  applyButton: {
    backgroundColor: '#27AE60',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    width: '48%',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  iconWrapper: {
    marginRight: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 6,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default JobDetail;
