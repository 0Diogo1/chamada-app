import { Link } from "expo-router";
import { View, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { Text } from "react-native-paper";

const Home = () => {
    return (
        <View style={styles.container}>
            <Text variant='headlineMedium'>Página inicial</Text>
            <Link style={styles.textColor} href='/'>voltar</Link>
        </View>
    )
}


export default Home;