import React from 'react';
import './App.css';
import Section from './Components/Section';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Trevor Winger's Resume</h1>

        <div className="Body">
          <Section header='Education' bodyText={['BA - Philosophy (University of Minnesota - Duluth)',
          'BA - Cognitive Science (University of Minnesota - Duluth)',
          'BA - Computer Science (University of Minnesota - Duluth)',
          'BS - Linguistics (University of Minnesota - Duluth)',
          'MCS - Computer Science (University of Minnesota - Twin Cities)']} />

          <Section header='Work Experience' bodyText={['Product Manager - Software : Art Unlimited',
          'Software Engineer : L&M Radiator',
          'Technology Assistant (Software) : University of Minnesota Duluth']} />

          <Section header='Scholarships & Awards' bodyText={['Intel Edge AI Scholarship',
          'Raymond W Darland Scholarship',
          'Minnesota State Grant',
          'U Promise Scholarship',
          'Retta & Henry Ehlers Scholarship',
          'Philosophy Travel Award',
          'Grow with Google Scholar',
          'York University Computer Vision Scholarship']} />

          <Section header='Technical Skills' bodyText={['Programming Languages: C, C++, C#, Java, Python, JavaScript, Go, MIPS',
          'UI Related: HTML, CSS, XML, JSX, React',
          'Database: familiar with both SQL & NoSQL systems',
          'Version Control: git, Github, BitBucket', ]} />

          <Section header='Teaching Assitantships'  bodyText={['Philosophy 1025: Introduction to Cognitive Science (2017)',
          'Linguistics 3103: Syntax (2018)',
          'Linguistics 1811: Introduction to Linguistics (2018)',
          'Linguistics 4011: Programming for Natural Language Researchers (2019)']}/>

          <Section header='Research Assistantships' bodyText={['Creating a database of pejorative phrases with Dr. Jeanine Weekes-Schroer',
        'Collecting dialectical information pertaining to syntactic boundaries and pragmatics with Dr. Will Salmon',
        'Creating a corpus of syntactic information with Dr. Chongwon Park',
        'Conducting computational linguistics analysis on authors over time mapping mental decay over time with Dr. Chongwon Park']} />
        </div>

      </header>
    </div>
  );
}

export default App;
