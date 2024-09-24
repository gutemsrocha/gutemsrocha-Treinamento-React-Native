import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

function App() {
  // Estado para controlar a visibilidade do cartão
  const [visible, setVisible] = useState(true);

  // Função para alternar a visibilidade
  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Serra Junior Engenharia</Text>
      </View>

      <View style={styles.main}>
        {visible && (
          <View style={styles.card}>
            <Image
              style={styles.logoImg}
              source={require('./src/logoserra.png')}
            />
            <Text style={styles.cardEmail}>https://www.serrajr.eng.br/</Text>
          </View>
        )}
        <TouchableOpacity 
          style={styles.botao}
          onPress={toggleVisibility} // Evento para alternar a visibilidade
        >
          <Text style={styles.botaoTexto}>{visible ? 'Mostrar / Esconder' : 'Mostrar / Esconder'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerTitle}>
          COPYRIGHT Ⓒ 2024 - SERRA JUNIOR ENGENHARIA
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001830',
    justifyContent: 'space-between',
  },

  header: {
    flex: 0.125,
    backgroundColor: '#FF6600',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerTitle: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },

  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    width: 300,
    borderRadius: 20,
  },

  logoImg: {
    margin: 30,
    width: 100,
    height: 100,
  },

  cardEmail: {
    color: '#001830',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  botao:{
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    width: 300,
    height: 50,
    borderRadius: 15,
  },

  botaoTexto: {
    color: '#001830',
    fontSize: 19,
    fontWeight: 'bold',
  },

  footer: {
    flex: 0.125,
    backgroundColor: '#FF6600',
    justifyContent: 'center',
    alignItems: 'center',
  },

  footerTitle: {
    color: '#FFF',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default App;