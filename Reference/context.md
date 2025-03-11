# MBet-Adera Parcel Delivery Tracking App

## Project Overview
MBet-Adera is a cross-platform parcel delivery tracking application designed to provide real-time tracking and management of package deliveries. The application will be available on Android, iOS, and web platforms, catering to users in Ethiopia and potentially beyond.

## Business Context
The application aims to solve the challenge of reliable parcel tracking in regions where established delivery services might have limited reach or functionality. By using free and accessible resources (like GoMaps.pro instead of Google Maps APIs), the app remains functional in regions with payment restrictions while still providing essential delivery tracking features.

## Target Users
- Customers who want to track their parcels
- Delivery personnel managing package deliveries
- Administrators overseeing the delivery operations

## Technical Stack
- **Frontend**: React Native using Expo framework
- **Backend**: Supabase (PostgreSQL database with built-in authentication and real-time features)
- **Maps**: GoMaps.pro (as an alternative to Google Maps)
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage
- **Internationalization**: i18next for multilingual support
- **QR Code Generation**: react-native-qrcode-svg
- **Payment**: Chapa

## Key Features
1. **User Authentication**: Secure login and registration system
2. **Parcel Tracking**: Real-time tracking of parcels with status updates
3. **QR Code Generation**: For easy scanning and tracking of parcels
4. **Map Integration**: Visual tracking of delivery personnel and parcels
5. **Multilingual Support**: Available in English, Amharic, Arabic, German, and Chinese
6. **Role-Based Access**: Different interfaces for customers, delivery personnel, and administrators
7. **Push Notifications**: Updates on parcel status changes
8. **Offline Support**: Basic functionality when offline with data sync when online

## Design Principles
- **Minimalistic UI**: Clean, intuitive interface focusing on core functionality
- **Responsive Design**: Works seamlessly across different device sizes
- **Progressive Enhancement**: Start with core features and expand later
- **Accessibility**: Ensuring the app is usable by people with disabilities

## Future Enhancements
- Advanced analytics for delivery performance
- Integration with payment gateways
- Route optimization for delivery personnel
- Customer ratings and feedback system
- Chatbot support for common queries

## Project Structure

- `src/screens`: For all the screen components.
- `src/components`: For reusable components.
- `src/navigation`: For navigation-related files.
- `src/services`: For API calls and other services.
- `src/hooks`: For custom React hooks.
- `src/utils`: For utility functions.
- `src/constants`: For constant values.
- `src/assets`: For images, icons, and other static assets.
- `src/types`: For TypeScript type definitions.
- `src/i18n`: For internationalization files.
- `src/theme`: For styling and theming.

This document provides the foundation for the MBet-Adera application development and will be referenced throughout the project lifecycle. 