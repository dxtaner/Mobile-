import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import axios from 'axios';

const JobsPage = ({navigation}) => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          `https://www.themuse.com/api/public/jobs?page=${currentPage}`,
        );

        setJobs(response.data.results);
        setTotalPages(response.data.page_count);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchJobs();
  }, [currentPage]);

  const renderItem = ({item}) => (
    <View style={styles.jobItem}>
      <View style={styles.jobInfo}>
        <Text style={styles.jobTitle}>{item.name}</Text>
        <Text style={styles.jobCompany}>{item.company.name}</Text>
      </View>
      <View style={styles.jobDetails}>
        <Text style={styles.jobLocation}>
          {item.locations.map(loc => loc.name).join(', ')}
        </Text>
        <Text style={styles.jobLevel}>
          {item.levels.map(level => level.name).join(', ')}
        </Text>
        <Text style={styles.jobDate}>
          {new Date(item.publication_date).toLocaleDateString()}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.detailButton}
        onPress={() => navigation.navigate('DetailJobs', {jobId: item.id})}>
        <Text style={styles.buttonText}>Details</Text>
      </TouchableOpacity>
    </View>
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={jobs}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />

      <View style={styles.pagination}>
        <TouchableOpacity
          style={[
            styles.paginationButton,
            currentPage === 1 && styles.disabledButton,
          ]}
          onPress={handlePreviousPage}
          disabled={currentPage === 1}>
          <Text style={styles.paginationText}>Previous</Text>
        </TouchableOpacity>
        <Text style={styles.pageInfo}>
          Page {currentPage} of {totalPages}
        </Text>
        <TouchableOpacity
          style={[
            styles.paginationButton,
            currentPage === totalPages && styles.disabledButton,
          ]}
          onPress={handleNextPage}
          disabled={currentPage === totalPages}>
          <Text style={styles.paginationText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#F2F6FC',
  },
  jobItem: {
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 12,
    shadowColor: '#D3D3D3',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    padding: 20,
  },
  jobInfo: {
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  jobCompany: {
    fontSize: 16,
    color: '#7B7B7B',
  },
  jobDetails: {
    marginTop: 10,
    marginBottom: 15,
  },
  jobLocation: {
    fontSize: 14,
    color: '#95A5A6',
  },
  jobLevel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2980B9',
    marginVertical: 5,
  },
  jobDate: {
    fontSize: 12,
    color: '#BDC3C7',
  },
  detailButton: {
    backgroundColor: '#3498DB',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  paginationButton: {
    backgroundColor: '#3498DB',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  disabledButton: {
    backgroundColor: '#BDC3C7',
  },
  paginationText: {
    color: '#fff',
    fontSize: 16,
  },
  pageInfo: {
    fontSize: 16,
    color: '#333',
  },
});

export default JobsPage;
