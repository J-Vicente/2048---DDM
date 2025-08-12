import NavBar from '../../components/navbar';
// RankingScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '@/constants/Colors';
import { useLoadFonts } from '@/hooks/useLoadFonts';
import { recordService } from "@/services/api";

type RankingItem = {
  id:number
  score: number;
  date: string;
  higherBlock: number;
  userName: string | null;
};

interface GetData {
  id: number,
  score:number;
  date:string;
  higherBlock:number;
  userName:string | null;
}


export default function ranking() {

    const fontsLoaded = useLoadFonts();

    const [records, setRecords] = useState<RankingItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data: GetData[] = await recordService.getAll();
        
        // @ts-ignore
        const list = data.records; 

        const sorted = [...list].sort((a, b) => b.score - a.score);

        setRecords(sorted);

      } catch (error) {
        console.error('Erro ao buscar ranking', error);
      }
    }

    fetchData();
  }, []);
  

  const renderItem = ({ item, index }: { item: RankingItem; index: number }) => (
    <View style={styles.item}>
      <Text style={styles.position}>#{index + 1}</Text>
      <View style={styles.info}>
        <Text style={styles.name}>{item.userName}</Text>
        <Text style={styles.date}>Data: {new Date(item.date).toLocaleDateString()}</Text>
        <View style={styles.blockContainer}>
          <Text style={styles.blockLabel}>Maior bloco:</Text>
          <View style={[styles.blockValue, getBlockStyle(item.higherBlock)]}>
            <Text style={styles.blockText}>{item.higherBlock}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.score}>{item.score.toLocaleString()}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
    <LinearGradient
        colors={[colors.gradient1, colors.gradient2, colors.gradient3]} 
        style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>

        <NavBar iconHome={true} iconUser={true} />

      <Text style={styles.title}>Melhores Pontuações</Text>
      <FlatList
        data={records}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </LinearGradient>
    </View>
  );
}

function getBlockStyle(value: number) {
  switch (value) {
    case 2:
      return { backgroundColor: colors.block2 };
    case 4:
      return { backgroundColor: colors.block4 };
    case 8:
      return { backgroundColor: colors.block8 };
    case 16:
      return { backgroundColor: colors.block16 };
    case 32:
      return { backgroundColor: colors.block32 };
    case 64:
      return { backgroundColor: colors.block64 };
    case 128:
      return { backgroundColor: colors.block128 };
    case 256:
      return { backgroundColor: colors.block256 };
    case 512:
      return { backgroundColor: colors.block512 };
    case 1024:
      return { backgroundColor: colors.block1024 };
    case 2048:
      return { backgroundColor: colors.block2048 };
    default:
      return { backgroundColor: '#ccc' };
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.text,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    alignSelf: 'center',
    fontFamily:'Inter_800ExtraBold',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: colors.playAgain,
    padding: 12,
    marginVertical: 6,
    borderRadius: 12,
    alignItems: 'center',
    marginLeft:40,
    marginRight:40,
    borderWidth:1,
    borderColor: colors.text,
    opacity: 0.8,
  },
  position: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 18,
    width: 40,
  },
  info: {
    flex: 1,
    marginLeft: 8,
  },
  name: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  date: {
    color: '#aaa',
    fontSize: 12,
  },
  blockContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  blockLabel: {
    color: '#ccc',
    fontSize: 12,
    marginRight: 4,
  },
  blockValue: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 6,
    marginLeft:2,
  },
  blockText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  score: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
});