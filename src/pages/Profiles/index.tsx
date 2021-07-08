import React, { useContext, useState } from "react";
import { useEffect } from "react";
import UserTag, { User } from "../../components/User";
import AuthContext from "../../contexts/auth";
import { PageView, PageTitle, ScrollUsers } from "./styles";

const Profiles = () => {
    const { users } = useContext(AuthContext);
    const [localUsers, setLocalUsers] = useState(users);

    useEffect(() => {
        setLocalUsers(users);
    }, [users]);

    let exampleUser: User;

    exampleUser = {
        id: '00000',
        username: 'username',
        first_name: 'Nome',
        last_name: 'Sobrenome',
        email: '123@example.com',
        about: 'eu!',
        photo: 'https://dcom-prod.imgix.net/files/2020-05/Guy%27s%20Big%20Bite%20v2%20-%20POSTER_0.jpg?w=520&h=520&crop=focalpoint&fp-x=0.5&fp-y=0.1&fit=crop&auto=compress&q=75',
        pius: [],
        likes: [],
        following: [],
        followers: [],
        favorites: []
    };

    return (
        <PageView>
            <PageTitle>Perfis de usuários</PageTitle>
            <ScrollUsers>
                {localUsers!.map((localUser: User) => {
                    return <UserTag user={localUser} key={localUser.id} />
                })}
            </ScrollUsers>
        </PageView>
    );
}

export default Profiles;