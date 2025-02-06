// import { useState, useEffect, createContext, useContext } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useRouter } from "expo-router";

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     const loadUser = async () => {
//       const storedUser = await AsyncStorage.getItem("user");
//       if (storedUser) {
//         setUser(JSON.parse(storedUser));
//       } else {
//         router.replace("/"); // Redireciona para login se não houver usuário
//       }
//     };

//     loadUser();
//   }, []);

//   const login = async (userData) => {
//     await AsyncStorage.setItem("user", JSON.stringify(userData));
//     setUser(userData);
//     router.replace("/home"); // Redireciona para Home após login
//   };

//   const logout = async () => {
//     await AsyncStorage.removeItem("user");
//     setUser(null);
//     router.replace("/"); // Redireciona para login após logout
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
