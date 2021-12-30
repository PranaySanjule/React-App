import React, { Fragment, useEffect } from "react";
import { Divider, Grid, List, ListItem, ListItemText, Paper, Typography, withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../actions/postContent";
import PostForm from "./PostForm";

const styles = theme => ({
    paper : {
        margin: theme.spacing(3),
        padding: theme.spacing(2)
    }
})

const PostContents = ({classes, ...props}) => {

    useEffect(() => {
        props.fetchAllPostContents()
    }, [])

    return (
        <Grid container>
            <Grid item xs={5}>
                <Paper className={classes.paper}>
                    <PostForm />
                </Paper>
            </Grid>
            <Grid item xs={7}>
            <Paper className={classes.paper}>
                <List>
                    <h2 className={classes.paper}>All Posts</h2>
                    {
                        props.postContentList.map((record, index) => {
                            return (
                                <Fragment key={index}>
                                    <ListItem>
                                        <ListItemText>
                                            <Typography>
                                             TITLE :-    {record.title}
                                            </Typography>
                                            <Typography>
                                             AUTHOR :-   {record.author}
                                            </Typography>
                                            <div>
                                             CONTENT :-  {record.content}
                                            </div>
                                        </ListItemText>
                                    </ListItem>
                                    <Divider component="li" />
                                </Fragment>
                            )
                        })
                    }
                </List>
                </Paper>
            </Grid>
        </Grid>
    );
}

const mapStateToProps = state => ({
    postContentList: state.postContent.list
})

const mapActionToProps = {
    fetchAllPostContents: actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(PostContents));