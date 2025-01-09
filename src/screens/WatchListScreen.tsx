import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import StockItem from '../components/StockItem';

type SortType = 'default' | 'az' | 'highest' | 'lowest';

const WatchListScreen = () => {
  const [sortType, setSortType] = useState<SortType>('default');

  const stocks = [
    {
      iconName: 'logo-apple',
      companyName: 'Apple Inc',
      symbol: 'AAPL',
      percentageChange: 3.5,
    },
    {
      iconName: 'cart-outline',
      companyName: 'Amazon.com Inc',
      symbol: 'AMZN',
      percentageChange: -2.3,
    },
    {
      iconName: 'globe-outline',
      companyName: 'Meta Platforms Inc',
      symbol: 'META',
      percentageChange: 6.6,
    },
    {
      iconName: 'hardware-chip-outline',
      companyName: 'NVIDIA Corp',
      symbol: 'NVDA',
      percentageChange: -4.2,
    },
  ];

  const getSortedStocks = () => {
    switch (sortType) {
      case 'az':
        return [...stocks].sort((a, b) =>
          a.companyName.localeCompare(b.companyName),
        );
      case 'highest':
        return [...stocks].sort(
          (a, b) => b.percentageChange - a.percentageChange,
        );
      case 'lowest':
        return [...stocks].sort(
          (a, b) => a.percentageChange - b.percentageChange,
        );
      default:
        return stocks;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Watchlist</Text>

      {/* Sort Controls */}
      <View style={styles.sortContainer}>
        <TouchableOpacity
          onPress={() => setSortType('default')}
          style={[
            styles.sortButton,
            sortType === 'default' && styles.activeSort,
          ]}>
          <Icon name="list-outline" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSortType('az')}
          style={[styles.sortButton, sortType === 'az' && styles.activeSort]}>
          <Text style={styles.sortButtonText}>A-Z</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSortType('highest')}
          style={[
            styles.sortButton,
            sortType === 'highest' && styles.activeSort,
          ]}>
          <Text style={styles.sortButtonText}>Highest</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSortType('lowest')}
          style={[
            styles.sortButton,
            sortType === 'lowest' && styles.activeSort,
          ]}>
          <Text style={styles.sortButtonText}>Lowest</Text>
        </TouchableOpacity>
      </View>

      {/* Stock List */}
      <View style={styles.stockList}>
        {getSortedStocks().map(stock => (
          <StockItem
            key={stock.symbol}
            iconName={stock.iconName}
            companyName={stock.companyName}
            symbol={stock.symbol}
            percentageChange={stock.percentageChange}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1BE8',
    padding: 16,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 24,
  },
  sortContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    padding: 4,
    marginBottom: 24,
  },
  sortButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeSort: {
    backgroundColor: '#682BFF',
  },
  sortButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  stockList: {
    flex: 1,
  },
});

export default WatchListScreen;
