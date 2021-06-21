import React, { useEffect, useState } from 'react';
import { Route, Switch, NavLink } from "react-router-dom";
import NavBar from '../components/navbar';
import Articles from '../pages/articles';
import axios from 'axios';
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Home = () => {

    let age = '7';
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);

    const [state, setState] = React.useState({
        age: '7',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
        age = event.target.value;

    };

    useEffect(() => {
        const getArticles = async () => {
            setLoading(true);
            const res = await axios.get(` http://api.nytimes.com/svc/mostpopular/v2/viewed/${age}.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`);
            setArticles(res.data.results);

            setLoading(false);
        };
        getArticles();

    }, []);




    return (
        <>

        <NavBar/>
            <FormControl>
                <InputLabel htmlFor="age-native-simple">Age</InputLabel>
                <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    inputProps={{
                        name: 'age',
                        id: 'age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value='1'>One</option>
                    <option value='7'>Seven</option>
                    <option value='30'>Thirty</option>
                </Select>
            </FormControl>
        <div>
            <Articles loading={loading} articles={articles} />
        </div >
            </>
    );
};

export default Home;