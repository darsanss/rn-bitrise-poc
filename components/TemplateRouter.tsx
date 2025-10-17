import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BusinessTemplate from './components/BusinessTemplate';
import EcommerceTemplate from './components/EcommerceTemplate';
import SocialTemplate from './components/SocialTemplate';
import PortfolioTemplate from './components/PortfolioTemplate';

const TemplateRouter: React.FC = () => {
  // These values would be replaced by Bitrise during build process
  const templateType = '{{TEMPLATE_TYPE}}';
  
  // Business template variables
  const appName = '{{APP_NAME}}';
  const businessPrimaryColor = '{{PRIMARY_COLOR}}';
  const logoUrl = '{{LOGO_URL}}';
  const contactEmail = '{{CONTACT_EMAIL}}';
  
  // Ecommerce template variables
  const storeName = '{{STORE_NAME}}';
  const themeColor = '{{THEME_COLOR}}';
  const currency = '{{CURRENCY}}';
  const apiBaseUrl = '{{API_BASE_URL}}';
  
  // Social template variables
  const communityName = '{{COMMUNITY_NAME}}';
  const accentColor = '{{ACCENT_COLOR}}';
  const welcomeMessage = '{{WELCOME_MESSAGE}}';
  
  // Portfolio template variables
  const name = '{{NAME}}';
  const profession = '{{PROFESSION}}';
  const bio = '{{BIO}}';
  const portfolioPrimaryColor = '{{PRIMARY_COLOR}}';

  const renderTemplate = () => {
    switch (templateType) {
      case 'business':
        return (
          <BusinessTemplate
            appName={appName}
            primaryColor={businessPrimaryColor}
            logoUrl={logoUrl}
            contactEmail={contactEmail}
          />
        );
      
      case 'ecommerce':
        return (
          <EcommerceTemplate
            storeName={storeName}
            themeColor={themeColor}
            currency={currency}
            apiBaseUrl={apiBaseUrl}
          />
        );
      
      case 'social':
        return (
          <SocialTemplate
            communityName={communityName}
            accentColor={accentColor}
            welcomeMessage={welcomeMessage}
          />
        );
      
      case 'portfolio':
        return (
          <PortfolioTemplate
            name={name}
            profession={profession}
            bio={bio}
            primaryColor={portfolioPrimaryColor}
          />
        );
      
      default:
        // Fallback UI when template type is not recognized
        return (
          <View style={styles.fallbackContainer}>
            <Text style={styles.fallbackTitle}>Template Not Found</Text>
            <Text style={styles.fallbackMessage}>
              The template type "{templateType}" is not supported.
            </Text>
            <Text style={styles.fallbackSubtext}>
              Supported templates: business, ecommerce, social, portfolio
            </Text>
          </View>
        );
    }
  };

  return renderTemplate();
};

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  fallbackTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  fallbackMessage: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
    textAlign: 'center',
  },
  fallbackSubtext: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
});

export default TemplateRouter;
