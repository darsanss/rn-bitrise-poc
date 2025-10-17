import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import BusinessTemplate from './BusinessTemplate';
import EcommerceTemplate from './EcommerceTemplate';
import SocialTemplate from './SocialTemplate';
import PortfolioTemplate from './PortfolioTemplate';
import TemplateRouter from './TemplateRouter';

const TemplateTester: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<'business' | 'ecommerce' | 'social' | 'portfolio' | 'real'>('business');

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'business':
        return (
          <BusinessTemplate
            appName="TechCorp Solutions"
            primaryColor="#007bff"
            logoUrl=""
            contactEmail="contact@techcorp.com"
          />
        );
      case 'ecommerce':
        return (
          <EcommerceTemplate
            storeName="Fashion Store"
            themeColor="#e91e63"
            currency="USD"
            apiBaseUrl="https://api.fashionstore.com"
          />
        );
      case 'social':
        return (
          <SocialTemplate
            communityName="Tech Community"
            accentColor="#28a745"
            welcomeMessage="Welcome to our amazing tech community!"
          />
        );
      case 'portfolio':
        return (
          <PortfolioTemplate
            name="John Doe"
            profession="Full Stack Developer"
            bio="Passionate about creating amazing digital experiences"
            primaryColor="#6f42c1"
          />
        );
      case 'real':
        return <TemplateRouter />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Template Preview</Text>
        <Text style={styles.subtitle}>Tap to switch between templates</Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, selectedTemplate === 'business' && styles.activeButton]}
            onPress={() => setSelectedTemplate('business')}
          >
            <Text style={[styles.buttonText, selectedTemplate === 'business' && styles.activeButtonText]}>
              Business
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.button, selectedTemplate === 'ecommerce' && styles.activeButton]}
            onPress={() => setSelectedTemplate('ecommerce')}
          >
            <Text style={[styles.buttonText, selectedTemplate === 'ecommerce' && styles.activeButtonText]}>
              Ecommerce
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.button, selectedTemplate === 'social' && styles.activeButton]}
            onPress={() => setSelectedTemplate('social')}
          >
            <Text style={[styles.buttonText, selectedTemplate === 'social' && styles.activeButtonText]}>
              Social
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.button, selectedTemplate === 'portfolio' && styles.activeButton]}
            onPress={() => setSelectedTemplate('portfolio')}
          >
            <Text style={[styles.buttonText, selectedTemplate === 'portfolio' && styles.activeButtonText]}>
              Portfolio
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.button, selectedTemplate === 'real' && styles.activeButton]}
            onPress={() => setSelectedTemplate('real')}
          >
            <Text style={[styles.buttonText, selectedTemplate === 'real' && styles.activeButtonText]}>
              Real App
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.templateContainer}>
        {renderTemplate()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#333',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    opacity: 0.9,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  activeButton: {
    backgroundColor: '#007bff',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  activeButtonText: {
    color: 'white',
  },
  templateContainer: {
    flex: 1,
  },
});

export default TemplateTester;
