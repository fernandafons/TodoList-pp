import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Input from './src/components/Input';
import AddButton from './src/components/AddButton';
import Item from './src/components/Item';

export default function App() {
  const [itemsList, setItemsList] = useState([]);
  const [item, setItem] = useState('');

  const add = () => {
    if (item) {
      setItemsList([...itemsList, item]);
      setItem('');
    }
  }

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View style={{flexDirection: 'row', marginTop: 100}}>
        <Input 
          item={item}
          setItem={setItem}
        />
        <AddButton add={add} />
      </View>
      {itemsList.map(items => (
          <Item title={items} />
      ))}
    </View>
  );
}
