import { FC, useMemo } from "react";
import { useGetMeQuery } from "../../api/endpoints/user";

import styles from './styles.module.scss';

const useGetUser = () => {
    const { data } = useGetMeQuery();

    return useMemo(() => {
        if (data) {
            return data;
            
        }
        return { username: '', email: '', id: '' };
    }, [data]);
}

const UserInfo: FC = () => {
    const { username } = useGetUser();

    const names = username.split(' ');
    const initials = names.reduce((acc, item) => {
        acc += item[0]?.toUpperCase() ?? '';
        return acc;
    }, '')

    return (
        <div className={styles.container}>
            <div className={styles.avatar}>{initials}</div>
            <span>{username}</span>
        </div>
    );
}

export default UserInfo;