import React from 'react';
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types';
import Article from "../components/article";

export default function Articles({ loading, articles }) {

    return (
        <>
            {
                loading ? (
                    "Loading..."
                ) : (
                    <div>
                        <Grid container spacing={3}>
                            {articles.map((article) => (
                                <Grid item xs={12} sm={4} key={article._id}>
                                    <Article article={article} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>)}
        </>
    );
}

Articles.propTypes = {
    loading: PropTypes.bool.isRequired,
    articles: PropTypes.array.isRequired,
};