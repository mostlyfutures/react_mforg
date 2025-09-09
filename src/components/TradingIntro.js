import React from 'react';
import { Link } from 'react-router-dom';

const TradingIntro = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mf-blue to-mf-light-blue text-white p-8">
      <Link to="/landing" className="back-button">Back</Link>
      
      <div className="main-content">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fadeIn text-center">
          What is Trading?
        </h1>
        
        <div className="text-center max-w-4xl mx-auto mb-8 leading-relaxed animate-fadeIn">
          <p className="mb-6">
            The word "Trading" is an umbrella term for the exchange of goods at a point in time. Trading uses 
            these markets where you will be capitalizing off of the facilitation and the exchange of goods. 
            The same way someone is willing to buy a fruit at a price is the same way a person is willing to 
            buy a stock or commodity like a car. Once you start to associate a demand with every particular 
            thing in life, trading becomes easier. People change their mind about how much they are willing 
            to pay for things all the time, this is called demand. Every stock, car, piece of technology, or 
            even a gold brick will always have demand for it at any given time, and trading is all about 
            knowing when it's likely for demand of a product to go up or go down given the variety of factors 
            related to the underlying product at the time.
          </p>
          <p>
            For example, if a Beyblade commercial starts to get kids interested in buying their toys, the 
            demand for Beyblades will go up. Now, imagine only 100 Beyblades are released by the company who 
            makes them; if 100 people buy up all the Beyblades priced at $10, the first person who doesn't 
            want their Beyblade anymore can sell it for $11. This facilitation of scarce goods is what makes 
            markets like Bitcoin and the S&P500 "tradeable". The things we will be "trading" are scarce, 
            which allows us to capitalize on the fluctuations in demand, completely online at the comfort of 
            a nice chair.
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-md mx-auto">
          <div className="link-card">
            <a 
              href="https://www.mostlyfutures.finance" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-center"
            >
              Start Trading
            </a>
          </div>
          <div className="link-card">
            <a href="#asset-types" className="block text-center">
              New to Trading?
            </a>
          </div>
        </div>
      </div>

      {/* Asset Types Section */}
      <div id="asset-types" className="max-w-4xl mx-auto mt-16 p-6 bg-white bg-opacity-5 backdrop-blur-sm rounded-xl leading-relaxed animate-fadeIn">
        <h2 className="text-3xl font-semibold mb-6 text-mf-gradient-start">How does trading work</h2>
        <p className="mb-6">
          At its core, trading is simply the act of exchanging goods, services, or assets. In financial markets, 
          this means buying things like stocks, cryptocurrencies, or commodities with the goal of selling what 
          you bought later when the price is higher making a profit from the price rising.
        </p>
        <p className="mb-6">
          Trading in financial markets works on the same principle as the beyblade analogy – it's all about 
          supply and demand. When demand for an asset goes up and the supply remains constant (or shrinks), 
          its price will rise. When demand falls or supply increases, the price typically drops.
        </p>
        <p className="mb-6">
          Every asset, whether it's a share of a company's stock, Gold, or a barrel of oil, has fluctuating 
          demand. Traders analyze various factors to predict when demand for a particular asset is likely to 
          increase or decrease. These factors can include:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>A liquidity gap (a FVG) in stock bar chart price action</li>
          <li>Economic news (e.g., Are major economies having good GDP at the given time, interest rates of major lending like the US or Japan)</li>
          <li>Global events (e.g., geopolitical tensions, Bank runs, Transnational)</li>
          <li>Technological advancements or disruption of world changing technology</li>
          <li>Market sentiment and quant/investor psychology about the market at a given time</li>
        </ul>
        <p className="mb-6">
          For example, if a company announces a groundbreaking new product, interest/demand for its stock will 
          likely surge resulting in the price of the company stock rising. If only a limited number of shares 
          are available, those shares become even more valuable. For example, that is why Bitcoin's price seems 
          to be always rising, because there is a finite amount of outstanding shares/Bitcoins and none more 
          can be issued, when more demand for Bitcoin comes at a point in time, the price rises with the new 
          demand. Lots of people like to trade cryptocurrencies because unlike stocks which more outstanding 
          shares can be added at any time, some cryptocurrencies like Bitcoin are eternally scarce, leading 
          to a higher retention of demand. There are many scarce things you can trade though, for example Gold 
          is one of them. Traders of all assets aim to buy when they believe an asset is undervalued at its 
          price at a given time and sell when demand increases which push the price of the asset higher. 
          Remember more demand means more people are willing to buy the asset at a higher price because they 
          want it so badly, and less demand means less people are willing to buy the asset at a lower price 
          because they don't want it as much.
        </p>

        <h3 className="text-2xl font-medium mt-8 mb-4 text-mf-gradient-end">Stocks</h3>
        <p className="mb-6">
          Stocks represent ownership of a company. This is kind of a weird concept to me still lowkey, but 
          whenever you purchase shares, you own a piece of that business. The Stock price of a company is 
          directly tied to its ability to remain profitable and the demand of the company's services/products. 
          Traders usually try to figure out if they can profit from a company's stock they believe to be 
          undervalued by looking at price movements driven by earnings reports, market sentiment, macroeconomic 
          factors, along with technical analysis. All of these things kind of matter, but I would say the most 
          important things to consider when determining if a stock is undervalued and if its a good time to buy 
          it is looking at its potentiality to continue growing in the future/near term and waiting for a 
          liquidity sweep on a higher time frame. If you are new to trading, don't worry about that last 
          sentence too much but go back to it later when you understand more because it can help you know when 
          to buy an asset.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <h4 className="text-lg font-semibold mb-3 text-green-400">Pros:</h4>
            <ul className="space-y-2">
              <li>• Works for both short-term and long-term strategies</li>
              <li>• Regulated and transparent, rarely any shady things</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3 text-red-400">Cons:</h4>
            <ul className="space-y-2">
              <li>• Gains are kind of slow but who cares the risk is low for stocks, there is little to no chance you lose 100% of your money after buying a stock.</li>
              <li>• You need to be able to afford to invest to make money from stocks. Don't spend money on any asset you can't afford to lose.</li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-medium mt-8 mb-4 text-mf-gradient-end">Futures</h3>
        <p className="mb-6">
          Futures is basically the same thing as a parlay for assets. When you buy an asset like a stock, a 
          commodity like gold, or even a cryptocurrency like Bitcoin in order to lose all your money the price 
          has to go to zero. This is likely never to happen. Vice Versa, it might take a really long time to 
          double your money with an asset you have invested in so people use something called futures to speed 
          up the process. Instead of waiting 2 years to get double your money, a person can buy the "futures" 
          of an asset to speed up their profit time. People can speed up their time to profit or lose money 
          through futures because it is the same as holding the asset regularly but with leverage. This means 
          if you have a futures contract with 2x leverage, Instead of losing all your money when the asset goes 
          to zero, you will lose your money at half the price of your entry. This is also true the opposite way, 
          with leverage, for example 2x leverage, when the asset goes up 10% instead of making a 10% gain you 
          will make 20% because of the leverage. Leverage allows traders to "bet" on the future price of an 
          asset (like oil, gold), (the S&P 500), or even crypto while shorting the margin it takes to profit 
          (or lose money).
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <h4 className="text-lg font-semibold mb-3 text-green-400">Pros:</h4>
            <ul className="space-y-2">
              <li>• High leverage allows for massive gains from small price movements</li>
              <li>• Trading with leverage is often more liquid than holding underlying assets</li>
              <li>• Make money faster</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3 text-red-400">Cons:</h4>
            <ul className="space-y-2">
              <li>• High leverage also means magnified losses. You have to know what you're doing to trade with leverage</li>
              <li>• Requires much better risk management and psychology</li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-medium mt-8 mb-4 text-mf-gradient-end">Forex (Foreign Exchange)</h3>
        <p className="mb-6">
          The global exchange of currencies. This is usually the most liquid market in the world, also being 
          open 24/7. Currencies fluctuate all the time and you can profit from these fluctuations by trading them. 
          Forex is the largest financial market in the world, with a daily trading volume exceeding $6 trillion. 
          Traders speculate on currency price movements based on price action on the bar chart, economic indicators, 
          and geopolitical events.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <h4 className="text-lg font-semibold mb-3 text-green-400">Pros:</h4>
            <ul className="space-y-2">
              <li>• Low Barrier for entry, you can trade with literal $10</li>
              <li>• You can practice for free with MetaTrader</li>
              <li>• High Liquidity and tight spreads (low cost to trade)</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3 text-red-400">Cons:</h4>
            <ul className="space-y-2">
              <li>• Extreme leverage at disposal can liquidate your account fast</li>
              <li>• Requires stronger risk management and psychology</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-6 text-mf-gradient-start mt-12">Where to look at price fluctuations of Assets?</h2>
        <p className="mb-6">
          Asset prices can be analyzed on{' '}
          <a 
            href="https://www.tradingview.com/pricing/?share_your_love=mostlyfutures" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-300 underline"
          >
            tradingview.com
          </a>{' '}
          (free), here you can look at price fluctuations of all assets in the world. Tradingview shows you the 
          price of assets in a bar chart format, which is the most common way to look at price fluctuations.
        </p>

        <h3 className="text-2xl font-medium mt-8 mb-4 text-mf-gradient-end">DEXs (Decentralized Exchanges)</h3>
        <p className="mb-6">
          A DEX is a trading platform that allows you to make trades without the need for extremely sensitive 
          personal information like your passport. Unlike traditional stock exchanges like Robinhood, DEXs use 
          enterprise grade security techniques facilitate peer-to-peer trading directly between users. Basically 
          all this means is that it is a safe place you can trade assets on.
        </p>

        <h4 className="text-xl font-medium mt-6 mb-3 text-mf-gradient-end">How DEXs Work</h4>
        <p className="mb-6">
          DEXs typically use unchangeable code to facilitate trades for its users. DEX's are so good for trading 
          because DEXs allow you to trade a variety of assets and you use something called a "web3 wallet" to 
          trade on them. A web3 wallet is a digital wallet that allows you to interact with DEX's and retain 
          complete control over your funds unlike a Robinhood where they hold your funds for you.
        </p>

        <h4 className="text-xl font-medium mt-6 mb-3 text-mf-gradient-end">Trading Tokenized Assets</h4>
        <p className="mb-6">
          DEXs excel at trading various tokenized assets including traditional cryptocurrencies, commodities, 
          government bonds, and even stocks. Popular DEX platforms include{' '}
          <a href="https://gains.trade/trading#AAPL-USD" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">gtrade</a>,{' '}
          <a href="https://hyperliquid.xyz/" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">Hyperliquid</a>, and{' '}
          <a href="https://ostium.app/" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">Ostium.app</a>. 
          Each offers slightly different features but follows the same core principle of being an online trading platform. 
          The main advantages are lower fees, no need for account creation or KYC, direct wallet-to-wallet trading, 
          and 24/7 availability. However, users need to manage their wallet navigate the technical aspects of a 
          "web3 wallet". This can be done using Metamask, an example of a "web3 wallet".
        </p>

        <h2 className="text-3xl font-semibold mb-6 text-mf-gradient-start mt-12">How to Trade?</h2>
        <p className="mb-6">
          This is the most important part of trading, the how? As I said before, trading mainly consists of three things:
        </p>
        <ul className="list-disc list-inside space-y-2 max-w-2xl mx-auto">
          <li><strong>Strategy</strong></li>
          <li><strong>Psychology</strong></li>
          <li><strong>Consistency</strong></li>
        </ul>
      </div>
    </div>
  );
};

export default TradingIntro;
