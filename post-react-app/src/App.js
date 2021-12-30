import React from 'react';
import './App.css';
import PostContents from "./components/PostContents";
import { Provider } from "react-redux";
import { store } from "./actions/store";
import { AppBar, Container, Typography } from "@material-ui/core"

function App() {
  return (
        <Provider store = {store}>
            <Container maxWidth = "lg">
              <AppBar position='static' color="primary">
                <Typography
                  variant = "h3"
                  align="center">
                    Post Application    
                  </Typography>
              </AppBar>
            <PostContents />
            </Container>
        </Provider>
  );
}

export default App;
