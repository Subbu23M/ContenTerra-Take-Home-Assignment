import React from 'react';
import '../Styling/Main.scss';
import Card from './Card';

const App = () => {
  return(
    <section className='main-section'>
      {/* Child Component Instance */}
      <Card/>
    </section>
  )
}

export default App;