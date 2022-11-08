import AddItem from './components/AddItem'
import { useState } from 'react'
import Header  from './components/Header'
import Parrafo  from './components/Parrafo'
import Lista  from './components/Lista'
import Items  from './components/Items'
import './App.css';

const [items, setItems] = useState()

function App() {
  const [items, setItems] = useState([{
    id: 1,
    title: 'Desarrollando proyecto en Laravel',
    category: 'Desarrollo y Programación',
    day:'Lunes',
    time: '18:00',
    imagen: 'html5.png',
  },
  {
    id: 2,
    title: 'Aprendiendo React',
    category: 'Desarrollo y Programación',
    day:'Martes',
    time: '03/05/2021',
    imagen: 'css.png',
  },
  {
    id: 3,
    title: 'Intr. a Data Science con Python',
    category: 'Desarrollo y Programación',
    day:'Miércoles',
    time: '04/05/2021',
    imagen: 'css.png',
    
  },
  {
    id: 4,
    title: 'Aprendiendo Algoritmo con Python',
    category: 'Desarrollo y Programación',
    day:'Jueves',
    time: '05/05/2021',
    imagen: 'css.png',
  }])
 
  const addItem = (item)=>{
    setItems(item)
  }


  return (
    <>
     <div className='container'>
      <div className='row justify-content-center'>
      <Header />
      <AddItem addItem={addItem}/>
      <Parrafo />
      <Lista />
      <Items items={items} />
      </div>
     </div>
    </>
  )
}
export default App;
