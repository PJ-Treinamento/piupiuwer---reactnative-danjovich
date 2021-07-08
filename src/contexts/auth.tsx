import { AxiosResponse } from "axios";
import React, { createContext, useState, useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { Piu, PiuTagProps } from "../components/Piu";
import { User } from "../components/User";
import api from '../services/api';

interface AuthContextData {
    signed: boolean;
    user: User | null;
    users: User[];
    piuTags: PiuTagProps[];
    loadingInPage: boolean;
    logIn(email: string, password: string): Promise<void>;
    logOut(): void;
    getPius(): Promise<void>;
    publishPiu(text: string): Promise<void>;
    deletePiu(piu_id: string): Promise<void>;
    likePiu(piu_id: string): Promise<AxiosResponse<any>>;
    favoritePiu(piu_id: string, alreadyFavorite: boolean): Promise<AxiosResponse<any>>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(false);
    const [loadingInPage, setLoadingInPage] = useState(false);

    useEffect(() => {
        api.defaults.headers.authorization = `Bearer ${token}`;
    }, [token]);

    async function logIn(email: string, password: string) {
        const response = await api.post('/sessions/login', {
            email: email,
            password: password
        });
        setUser(response.data.user);
        setToken(response.data.token);
        api.defaults.headers.authorization = `Bearer ${response.data.token}`;
        setLoading(true);
        getPius().catch((error) => {
            console.log(error);
        });
        getUsers(response.data.user.id);
    }

    async function logOut() {
        setUser(null);
        setToken('');
    }

    const [pius, setPius] = useState<Piu[]>([]);
    const [piuTags, setPiuTags] = useState<PiuTagProps[]>([]);
    async function getPius() {
        const response = await api.get('pius');
        const data = response.data;
        let piusArray: Piu[];
        piusArray = [];
        for (const piu of data) {
            piusArray.push(piu);
        }
        piusArray = orderByDate(piusArray);
        let piuTagsArray: PiuTagProps[];
        piuTagsArray = [];
        for (const piu of piusArray) {
            let piuTag: PiuTagProps;
            piuTag = {
                piu: piu,
                key: piu.id
            }
            piuTagsArray.push(piuTag);
        }
        setPius(piusArray);
        setPiuTags(piuTagsArray);
        setLoading(false);
        setLoadingInPage(false);
    }

    async function publishPiu(text: string) {
        await api.post('pius', {
            text: text
        }).then((response) => {
            setLoadingInPage(true);
            getPius();
        }).catch((error) => {
            console.log(error);
            alert('Erro: não foi possível publicar o Piu');
        });
    }
    
    async function deletePiu(piu_id: string) {
        await api.delete('pius', {
            data: { piu_id: piu_id }
        }).then(() => {
            setLoadingInPage(true);
            getPius();
        }).catch((error) => {
            console.log(error);
        });
    }

    async function likePiu(piu_id: string) {
        setLoadingInPage(true);
        const response = await api.post('pius/like', {
            piu_id: piu_id
        });
        setLoadingInPage(false);
        return response;
    }

    async function favoritePiu(piu_id: string, alreadyFavorite: boolean) {
        setLoadingInPage(true);
        let favoriteOrUnfavorite = alreadyFavorite ? 'unfavorite' : 'favorite';
        const response = await api.post(`pius/${favoriteOrUnfavorite}`, {
            piu_id: piu_id
        });
        setLoadingInPage(false);
        return response;
    }

    const [users, setUsers] = useState<User[]>([]);
    async function getUsers(currentUserId: string) {
        await api.get('users').then((response) => {
            let allUsers = response.data;
            allUsers = allUsers.filter((oneUser: User) => {
                return oneUser.id !== currentUserId;
            });
            setUsers(allUsers);
        }).catch((error) => {
            console.log(error);
        });
    }

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#666" />
            </View>
        );
    }

    return (
        <AuthContext.Provider value={{ 
            signed: !!user, 
            user: user,
            users: users,
            piuTags: piuTags,
            loadingInPage: loadingInPage,
            logIn: logIn, 
            logOut: logOut,
            getPius: getPius,
            publishPiu: publishPiu,
            deletePiu: deletePiu,
            likePiu: likePiu,
            favoritePiu: favoritePiu,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

const orderByDate = (piusArray: Piu[]) => {
    type Tuple = [Piu, Date];

    let sortable: Tuple[];
    sortable = [];
    for (const piu of piusArray) {
        sortable.push([piu, piu.created_at]);
    }
    sortable.sort(function (a, b) {
        return Number(a[1]) - Number(b[1]);
    });

    let result = [];
    for (const tuple of sortable) {
        result.push(tuple[0]);
    }
    return result;
}

export default AuthContext;