import React from 'react';
import Card from './Card';
import '../Styling/Main.scss';

const App = () => {
  return(
    <section className='main-section'>
      {/* Child Component Instance */}
      <Card/>
    </section>
  )
}
export default App;