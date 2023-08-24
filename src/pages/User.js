import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./User.module.scss";

const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users/" + id)
            .then((res) => {
                console.log(res);
                setUser(res.data);
                setLoading(false);
            });
    }, []);

    const userDetail = loading ? (
        <h1 className={`${style.loading}`}>is loading....</h1>
    ) : (
        <div className={`${style.user}`}>
            <div className={`${style.userInfo} ${style.name}`}>이름:{user.name}</div>
            <div className={`${style.userInfo} ${style.email}`}>이메일:{user.email}</div>
            <div className={`${style.userInfo} ${style.phone}`}>폰:{user.phone}</div>
            <div className={`${style.userInfo} ${style.website}`}>웹사이트:{user.website}</div>
        </div>
    );

    return (
        <div>
            <h1>User Info</h1>
            {userDetail}
        </div>
    );
};

export default User;