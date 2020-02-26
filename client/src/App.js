import React, { Component } from 'react';
import Wordcloud from './components/wordcloud'
import './App.css';

class App extends Component {
  state = {
    inputText: ""
  }

  handleChange = ({ target }) => {
    this.setState({inputText: target.value.toLowerCase()})
  }

  buildWords = () => {
    const excludedWords = ['and', 'the', 'is', 'a', 'of', 'to', 'is', 'with', 'for', 'in']
    const { inputText } = this.state
    const newString = inputText.replace(/([^a-z^A-Z^\s])/g, '')
    const wordObj = newString.split(" ").reduce((acc, word) => {
      if(excludedWords.includes(word) || !word) return acc
      if(acc[word]) {
        acc[word] = acc[word] + 1
        return acc
      }
        acc[word] = 1
        return acc
    }, {})

    return Object.entries(wordObj)
      .map(([text, value]) => ({text,value}))
      .sort((a,b) => (a.count - b.count <0 ? 1 : a.count - b.count > 0 ? -1 : 0)  )
  }


render() {
  const words = this.buildWords()
    return (
      <div className="App">
        <header className="App-header">
        stuff
        </header>
          <textarea onChange={this.handleChange} />
          <Wordcloud words={words} />
          <ul>
          {words.map(({text, value}) => <li>{text} : {value}</li>)}
          </ul>
      </div>
    );
  }
}

export default App;

//The What Graviz provides best in class business/ brands and their Leaders with the ability to achieve authentic trust, liking, preference and love.  The How Our Client achieves this through having the ability to create and sustain congruent, coordinated - customer and market focused engagements which emanate from a single source, delivered with a single voice.  The Why All client interactions should build trust, because trust is the basis for all transactions.  Our clients brands/ business will succeed in the present/ future because they are deemed to be the most trustworthy and authentic. Authenticity requires consistency and from our clients standpoint, consistency requires collaboration, coordination and clarity - which is one reason why they use us.  Our Outcome... Graviz works with business/ Leaders to ensure that all communication disciplines, contribute to an authentically focused, trustworthy brand which is liked by the market and loved by the customers and communities we help create, support and develop.  Our clients, experience and background includes... Proctor & Gamble - Yes, Pampers Sveriges Annonsörer / The Association of Swedish Advertisers Nacka strand, Fox International Channels, Disney, 20th Century Fox, Mercedes Benz, Tele2 I'm a strategic advisor to the CEO and the VP of Sales.  In six short years Scrive has become the Nordic markets most trusted provider of e-Signature solutions.  As a result Scrive is currently in a phase of both national and international expansion. To date Scrive is present in twenty markets and anticipates further growth as a result of having developed the Worlds safest legal eSigning solution, the Worlds best POS eSigning solution and the Worlds easiest integration and on-boarding program.  Clients span the industries and range from Avis, 3, DNB, Avanza Bank.  Scrives head office is in Stockholm, Sweden. Working with BeTao's owners and management team, I provided oversight and input on both strategic and tactical brand, marketing and sales related challenges.  Deliverables... In cooperation with the Management, I developed a buyer profile, sales strategy and tactics which helped yield well over 100,000 subscription paying customers via the telephone.  Translated the approach developed into a social media based communication model - helping yield over 50,000 followers on Facebook. In order to further my education in non verbal communication and lie detection, I work in a part-time capacity with what is arguably Sweden's best Security company...  Experience... A member of the team protecting Scandic Hotels and their clients - the Swedish Prime Minister... various Swedish Government Officials... Swedish Ice Hockey Team... Ajax FC... Michelin Awards...  Providing training for new security guards joining our division.  Education... Various Expert Level certifications in facial psychology - Dr. Paul Ekman, (Clients include, FBI, CIA..) Master of Deception Detection - Steven Van. Aperen, (Received training from FBI) Body Language Tactics - Scott Rouse and Greg Hartley, (Clients include CEO's of Fortune 500's, FBI...)  Achievements... Pandox, a major real estate owner conducted an independent security survey of 150 of the major hotels in its property portfolio, I was a team member at Scandic Malmen which had the best security rating out of all 150 hotels surveyed, (Credit to our boss Jimmy Lindblad).  A member of the Security Team at Scandic Downtown Camper - voted the Worlds Number One urban hotel in 2018.  Responsibility for training new guards entering our division.  Facilitated the development of six psychological profiles for use in Security settings for Operational Managers - Jimmy Lindblad and Peter Johansson. Facilitated the development of a new concept and course called "Security as a Service" for Operational Managers - Jimmy Lindblad and Peter Johansson.  Ongoing Education... Training directly with Chase Hughes/ Ellipsis Behavioural Laboratories - Advanced threat detection, Behavioural Analysis, Behavioural Profiling, Behavioural Engineering.
