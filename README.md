# MostlyFutures React Application

This is a React recreation of the MostlyFutures website, originally built with vanilla HTML/CSS/JavaScript. The application has been converted to use React with modern web development practices.

## Features

### Main Pages
- **Home** (`/`) - Main landing page with navigation
- **Landing** (`/landing`) - Alternative landing page
- **Contact** (`/contact`) - Contact information page
- **Crypto Introduction** (`/crypto-intro`) - Educational content about cryptocurrency
- **Trading Introduction** (`/trading-intro`) - Comprehensive trading guide
- **NFTs** (`/nfts`) - NFT gallery showcase
- **Grant AI** (`/grant-ai`) - AI chatbot interface
- **QuizGen** (`/quizgen`) - AI-powered quiz generator

### Sub-Applications
- **MfSart** (`/mfSart`) - Photo gallery with Web3 wallet integration
- **MfDex** (`/mfDex`) - Decentralized trading platform landing page
- **MfExplore** (`/mfExplore`) - Exploration hub

## Technology Stack

- **React 18** - Frontend framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Ethers.js** - Ethereum library for Web3 functionality
- **Google Analytics** - Analytics tracking

## Key Features Implemented

### Navigation
- Responsive hamburger menu
- Mobile-first design
- Smooth animations and transitions

### Styling
- Blue gradient theme matching original design
- Glassmorphism effects with backdrop blur
- Responsive design for all screen sizes
- Custom animations (fadeIn, slideIn, bounce, spin)

### Interactive Components
- **Grant AI**: Full-featured chatbot with file upload, payment simulation, and video generation
- **QuizGen**: AI-powered quiz generator with PDF processing simulation
- **MfSart**: Photo gallery with Web3 wallet connection simulation
- **MfDex**: Trading platform with statistics display

### Web3 Integration
- EIP-6963 wallet discovery
- ENS name resolution simulation
- Wallet connection/disconnection functionality

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd react_mforg
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/          # React components
│   ├── Home.js         # Main home page
│   ├── Landing.js      # Landing page
│   ├── Contact.js      # Contact page
│   ├── CryptoIntro.js  # Crypto education
│   ├── TradingIntro.js # Trading guide
│   ├── NFTs.js         # NFT gallery
│   ├── GrantAI.js      # AI chatbot
│   ├── QuizGen.js      # Quiz generator
│   ├── MfSart.js       # Photo gallery
│   ├── MfDex.js        # Trading platform
│   └── MfExplore.js    # Exploration hub
├── App.js              # Main app component with routing
├── App.css             # Global styles
├── index.js            # Entry point
└── index.css           # Tailwind CSS imports
```

## API Integration

The application integrates with several APIs:

- **Google Gemini AI** - For Grant AI chatbot and QuizGen functionality
- **Google Analytics** - For user tracking and analytics
- **Simulated Web3 APIs** - For wallet functionality

## Responsive Design

The application is fully responsive and optimized for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktop (1024px and up)
- Large screens (1440px and up)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is part of the MostlyFutures ecosystem.

## Original Website

This React application is a recreation of the original MostlyFutures website located in the `mostlyfutures.org` folder. All functionality and styling has been preserved while modernizing the codebase with React.