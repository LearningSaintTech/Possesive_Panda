import React from 'react';
import Card from './Card';

function App() {
  return (
    <div className="p-4 space-y-4">
      <Card 
        number="1" 
        title="E-Commerce" 
        description="We take pride in offering a comprehensive array of cutting-edge psychotherapy treatments. From Cognitive Behavioral Therapy (CBT) to tailored approaches like couples therapy or group therapy, our services are designed to address a wide range of mental health needs effectively." 
      />
      <Card 
        number="2" 
        title="Mobile App Dev." 
        description="We understand the demands of modern life, which is why we offer flexible virtual sessions that fit into your busy schedule, ensuring therapy is convenient and accessible wherever you are." 
      />
    </div>
  );
}

export default App;
