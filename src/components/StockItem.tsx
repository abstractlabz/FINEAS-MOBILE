import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface StockItemProps {
  iconName: string; // Using Ionicons name instead of logo image
  companyName: string;
  symbol: string;
  percentageChange: number;
  onPress?: () => void;
}

const StockItem: React.FC<StockItemProps> = ({
  iconName,
  companyName,
  symbol,
  percentageChange,
  onPress,
}) => {
  const isPositive = percentageChange >= 0;

  return (
    <TouchableOpacity style={styles.stockItem} onPress={onPress}>
      <View style={styles.leftContent}>
        <View style={styles.iconContainer}>
          <Icon name={iconName} size={24} color="white" />
        </View>
        <View style={styles.companyInfo}>
          <Text style={styles.companyName}>{companyName}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>
      <View
        style={[
          styles.percentageContainer,
          isPositive ? styles.positive : styles.negative,
        ]}>
        <Icon
          name={isPositive ? 'caret-up' : 'caret-down'}
          size={16}
          color={isPositive ? '#4CAF50' : '#F44336'}
        />
        <Text
          style={[
            styles.percentageChange,
            isPositive ? styles.positive : styles.negative,
          ]}>
          {Math.abs(percentageChange).toFixed(1)}%
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  stockItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  companyInfo: {
    marginLeft: 12,
  },
  companyName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  symbol: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
    marginTop: 2,
  },
  percentageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  percentageChange: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 4,
  },
  positive: {
    color: '#4CAF50',
  },
  negative: {
    color: '#F44336',
  },
});

export default StockItem;
