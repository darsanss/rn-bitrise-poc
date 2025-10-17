import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const DebugTemplate: React.FC = () => {
  // Test all variables to see what's being replaced
  const templateType = '{{TEMPLATE_TYPE}}';
  const appName = '{{APP_NAME}}';
  const primaryColor = '{{PRIMARY_COLOR}}';
  const logoUrl = '{{LOGO_URL}}';
  const contactEmail = '{{CONTACT_EMAIL}}';
  const storeName = '{{STORE_NAME}}';
  const themeColor = '{{THEME_COLOR}}';
  const currency = '{{CURRENCY}}';
  const apiBaseUrl = '{{API_BASE_URL}}';
  const communityName = '{{COMMUNITY_NAME}}';
  const accentColor = '{{ACCENT_COLOR}}';
  const welcomeMessage = '{{WELCOME_MESSAGE}}';
  const name = '{{NAME}}';
  const profession = '{{PROFESSION}}';
  const bio = '{{BIO}}';

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🔍 Debug Template</Text>
        <Text style={styles.subtitle}>Variable Replacement Test</Text>
      </View>
      
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Template Variables</Text>
          <View style={styles.variableList}>
            <Text style={styles.variableItem}>
              <Text style={styles.variableName}>TEMPLATE_TYPE:</Text> "{templateType}"
            </Text>
            <Text style={styles.variableItem}>
              <Text style={styles.variableName}>APP_NAME:</Text> "{appName}"
            </Text>
            <Text style={styles.variableItem}>
              <Text style={styles.variableName}>PRIMARY_COLOR:</Text> "{primaryColor}"
            </Text>
            <Text style={styles.variableItem}>
              <Text style={styles.variableName}>LOGO_URL:</Text> "{logoUrl}"
            </Text>
            <Text style={styles.variableItem}>
              <Text style={styles.variableName}>CONTACT_EMAIL:</Text> "{contactEmail}"
            </Text>
            <Text style={styles.variableItem}>
              <Text style={styles.variableName}>STORE_NAME:</Text> "{storeName}"
            </Text>
            <Text style={styles.variableItem}>
              <Text style={styles.variableName}>THEME_COLOR:</Text> "{themeColor}"
            </Text>
            <Text style={styles.variableItem}>
              <Text style={styles.variableName}>CURRENCY:</Text> "{currency}"
            </Text>
            <Text style={styles.variableItem}>
              <Text style={styles.variableName}>API_BASE_URL:</Text> "{apiBaseUrl}"
            </Text>
            <Text style={styles.variableItem}>
              <Text style={styles.variableName}>COMMUNITY_NAME:</Text> "{communityName}"
            </Text>
            <Text style={styles.variableItem}>
              <Text style={styles.variableName}>ACCENT_COLOR:</Text> "{accentColor}"
            </Text>
            <Text style={styles.variableItem}>
              <Text style={styles.variableName}>WELCOME_MESSAGE:</Text> "{welcomeMessage}"
            </Text>
            <Text style={styles.variableItem}>
              <Text style={styles.variableName}>NAME:</Text> "{name}"
            </Text>
            <Text style={styles.variableItem}>
              <Text style={styles.variableName}>PROFESSION:</Text> "{profession}"
            </Text>
            <Text style={styles.variableItem}>
              <Text style={styles.variableName}>BIO:</Text> "{bio}"
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Replacement Status</Text>
          <View style={styles.statusList}>
            <Text style={styles.statusItem}>
              Template Type Replacement: {templateType.includes('{{') ? '❌ FAILED' : '✅ SUCCESS'}
            </Text>
            <Text style={styles.statusItem}>
              App Name Replacement: {appName.includes('{{') ? '❌ FAILED' : '✅ SUCCESS'}
            </Text>
            <Text style={styles.statusItem}>
              Primary Color Replacement: {primaryColor.includes('{{') ? '❌ FAILED' : '✅ SUCCESS'}
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Expected Behavior</Text>
          <Text style={styles.instructionText}>
            • If variables show "{{VARIABLE_NAME}}" → Replacement failed
          </Text>
          <Text style={styles.instructionText}>
            • If variables show actual values → Replacement succeeded
          </Text>
          <Text style={styles.instructionText}>
            • TEMPLATE_TYPE should be: "business", "ecommerce", "social", or "portfolio"
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#007bff',
    paddingTop: 60,
    paddingBottom: 30,
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
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  variableList: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  variableItem: {
    fontSize: 14,
    marginBottom: 8,
    fontFamily: 'monospace',
  },
  variableName: {
    fontWeight: 'bold',
    color: '#007bff',
  },
  statusList: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statusItem: {
    fontSize: 16,
    marginBottom: 8,
  },
  instructionText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
    lineHeight: 20,
  },
});

export default DebugTemplate;
