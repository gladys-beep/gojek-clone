import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function GojekApp() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <ScrollView
        style={styles.content}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Service Grid */}
        <ServiceGrid />

        {/* Promo Banner */}
        <PromoBanner />

        {/* Merchants */}
        <MerchantsSection />
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </View>
  );
}

// ===== COMPONENTS =====

// Header Component
function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Text style={styles.greeting}>Selamat Pagi! 👋</Text>
        <Text style={styles.location}>📍 Jakarta Pusat</Text>
      </View>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>👤</Text>
      </View>
    </View>
  );
}

// Service Grid Component
function ServiceGrid() {
  const services = [
    { id: 1, name: 'Go-Ride', emoji: '🏍️' },
    { id: 2, name: 'Go-Food', emoji: '🍕' },
    { id: 3, name: 'Go-Send', emoji: '📦' },
    { id: 4, name: 'Go-Play', emoji: '🎮' },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Layanan Populer</Text>
      <View style={styles.serviceGrid}>
        {services.map((service) => (
          <Pressable key={service.id} style={styles.serviceCard}>
            <Text style={styles.serviceEmoji}>{service.emoji}</Text>
            <Text style={styles.serviceName}>{service.name}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

// Promo Banner Component
function PromoBanner() {
  const promos = [
    { id: 1, title: 'Diskon 50%', emoji: '🎉', color: '#667eea' },
    { id: 2, title: 'Free Ongkir', emoji: '🚚', color: '#f56565' },
    { id: 3, title: 'Cashback', emoji: '💰', color: '#48bb78' },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Promo Menarik</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: 16 }}>
        {promos.map((promo) => (
          <View key={promo.id} style={[styles.promoBanner, { backgroundColor: promo.color }]}>
            <Text style={styles.promoEmoji}>{promo.emoji}</Text>
            <Text style={styles.promoText}>{promo.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

// Merchants Section Component
function MerchantsSection() {
  const merchants = [
    { id: 1, name: 'Cafe Roti', emoji: '☕' },
    { id: 2, name: 'Nasi Goreng', emoji: '🍗' },
    { id: 3, name: 'Soto Ayam', emoji: '🍲' },
    { id: 4, name: 'Bakso Enak', emoji: '🍝' },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Restoran Terdekat</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 16 }}
      >
        {merchants.map((merchant) => (
          <View key={merchant.id} style={styles.merchantCard}>
            <Text style={styles.merchantEmoji}>{merchant.emoji}</Text>
            <Text style={styles.merchantName} numberOfLines={1}>{merchant.name}</Text>
            <Text style={styles.merchantRating}>⭐ 4.8</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

// Bottom Navigation Component
function BottomNavigation() {
  const navItems = [
    { id: 1, icon: '🏠', label: 'Home' },
    { id: 2, icon: '📊', label: 'Activity' },
    { id: 3, icon: '💬', label: 'Inbox' },
    { id: 4, icon: '👤', label: 'Account' },
  ];

  return (
    <View style={styles.bottomNav}>
      {navItems.map((item) => (
        <Pressable key={item.id} style={styles.navItem}>
          <Text style={styles.navIcon}>{item.icon}</Text>
          <Text style={styles.navLabel}>{item.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

// ===== STYLES =====

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  // Header Styles
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#00b894',
    paddingHorizontal: 20,
    paddingTop: 50, // Menyesuaikan status bar HP agar tidak terlalu ke atas
    paddingBottom: 20,
  },
  headerLeft: {
    flex: 1,
  },
  greeting: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: '#e0e0e0',
    fontWeight: '500',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 22,
  },

  // Content
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  // Section Styles
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 12,
  },

  // Service Grid
  serviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceCard: {
    width: '48%',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#eee',
  },
  serviceEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  serviceName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },

  // Promo Banner
  promoBanner: {
    width: 220,
    borderRadius: 14,
    padding: 18,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  promoEmoji: {
    fontSize: 36,
    marginBottom: 6,
  },
  promoText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
  },

  // Merchant Card
  merchantCard: {
    width: 130,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
  },
  merchantEmoji: {
    fontSize: 28,
    marginBottom: 6,
  },
  merchantName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  merchantRating: {
    fontSize: 12,
    color: '#e67e22',
    marginTop: 4,
    fontWeight: '600',
  },

  // Bottom Navigation
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    elevation: 10,
  },
  navItem: {
    alignItems: 'center',
    paddingVertical: 4,
  },
  navIcon: {
    fontSize: 22,
    marginBottom: 2,
  },
  navLabel: {
    fontSize: 11,
    color: '#00b894',
    fontWeight: '600',
  },
});