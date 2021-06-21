import React, { useEffect, useState } from 'react';
import { Route, Switch, NavLink } from "react-router-dom";
import NavBar from '../components/navbar';
import Articles from '../pages/articles';
import axios from 'axios';
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            setLoading(true);
            const res = await axios.get(` http://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`);
            setArticles(res.data.results);

            setLoading(false);
        };
        getArticles();

    }, []);

    return (
        <>
        <NavBar/>
        <div>
            <Articles loading={loading} articles={articles} />
        </div >
            </>
    );
};

export default Home;