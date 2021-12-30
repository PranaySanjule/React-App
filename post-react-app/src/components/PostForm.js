import React, { useEffect, useState } from "react";
import { TextField, withStyles, Button } from "@material-ui/core";
import useForm from "./useForm";
import { connect } from "react-redux";
import * as actions from "../actions/postContent";  

const initialFieldValues = {
    title: '',
    author: '',
    content: ''
}

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1)
        },
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    postBtn: {
        width: "50%",
        background: "hotpink" 
    }
})

const PostForm = ({ classes, ...props }) => {


    const validate = () => {
        let temp = { ...errors }
        temp.title = values.title ? "" : "This field is required."
        temp.author = values.author ? "" : "This field is required."
        temp.content = values.content ? "" : "This field is required."
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x == "")
    }

    var {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(initialFieldValues)

    const handleSubmit = e => {
        e.preventDefault()
        const onSuccess = ()=> {window.alert('Submitted Successfully')} 
        if (validate()) {
            
            props.createPostContent(values,onSuccess)
        }
    }


    return (
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}
            onSubmit={handleSubmit}>
            <h2>Create Post</h2>
            <TextField
                name="title"
                variant="standard"
                label="Title"
                fullWidth
                value={values.title}
                onChange={handleInputChange}
                {...(errors.title && { error: true, helperText: errors.title })}

            />

            <TextField
                name="author"
                variant="standard"
                label="Author"
                fullWidth
                value={values.author}
                onChange={handleInputChange}
                {...(errors.author && { error: true, helperText: errors.author })}
            />

            <TextField
                name="content"
                label="Content"
                multiline
                rows={4}
                variant="standard"
                fullWidth
                value={values.content}
                onChange={handleInputChange}
                {...(errors.content && { error: true, helperText: errors.content })}
            />

            <Button
                variant="contained"
                color="secondary"
                size="large"
                type="submit"
                className={classes.postBtn}
            >Create</Button>

        </form>
    );
}


const mapStateToProps = state => ({
    postContentList: state.postContent.list
})

const mapActionToProps = {
    createPostContent: actions.create
}


export default connect(mapStateToProps,mapActionToProps)(withStyles(styles)(PostForm));