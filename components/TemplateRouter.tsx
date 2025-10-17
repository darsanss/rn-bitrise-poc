import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BusinessTemplate from './BusinessTemplate';
import EcommerceTemplate from './EcommerceTemplate';
import SocialTemplate from './SocialTemplate';
import PortfolioTemplate from './PortfolioTemplate';
import DebugTemplate from './DebugTemplate';

const TemplateRouter: React.FC = () => {
  // These values would be replaced by Bitrise during build process
  const templateType = '{{TEMPLATE_TYPE}}';
  
  // Debug logging to see what we're getting
  console.log('TemplateRouter - templateType:', templateType);
  console.log('TemplateRouter - typeof templateType:', typeof templateType);
  
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

  // Check if replacement failed (still contains {{}})
  const isReplacementFailed = templateType.includes('{{') && templateType.includes('}}');
  
  // Use fallback template if replacement failed
  const actualTemplateType = isReplacementFailed ? 'business' : templateType;
  
  console.log('TemplateRouter - isReplacementFailed:', isReplacementFailed);
  console.log('TemplateRouter - actualTemplateType:', actualTemplateType);

  // TEMPORARY: Always show debug template to see what's happening
  return <DebugTemplate />;

  // Use conditional rendering instead of switch statement
  // This is more React Native friendly
  if (actualTemplateType === 'business') {
    return (
      <BusinessTemplate
        appName={appName}
        primaryColor={businessPrimaryColor}
        logoUrl={logoUrl}
        contactEmail={contactEmail}
      />
    );
  }
  
  if (actualTemplateType === 'ecommerce') {
    return (
      <EcommerceTemplate
        storeName={storeName}
        themeColor={themeColor}
        currency={currency}
        apiBaseUrl={apiBaseUrl}
      />
    );
  }
  
  if (actualTemplateType === 'social') {
    return (
      <SocialTemplate
        communityName={communityName}
        accentColor={accentColor}
        welcomeMessage={welcomeMessage}
      />
    );
  }
  
  if (actualTemplateType === 'portfolio') {
    return (
      <PortfolioTemplate
        name={name}
        profession={profession}
        bio={bio}
        primaryColor={portfolioPrimaryColor}
      />
    );
  }
  
  // Fallback UI when template type is not recognized
  return (
    <View style={styles.fallbackContainer}>
      <Text style={styles.fallbackTitle}>Template Not Found</Text>
      <Text style={styles.fallbackMessage}>
        The template type "{actualTemplateType}" is not supported.
      </Text>
      <Text style={styles.fallbackSubtext}>
        Supported templates: business, ecommerce, social, portfolio
      </Text>
      <Text style={styles.debugText}>
        Debug: Original value was "{templateType}"
      </Text>
      <Text style={styles.debugText}>
        Replacement failed: {isReplacementFailed ? 'Yes' : 'No'}
      </Text>
    </View>
  );
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
  debugText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
    fontFamily: 'monospace',
  },
});

export default TemplateRouter;
