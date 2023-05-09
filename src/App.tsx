import React from 'react';
import {Route, Routes} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";

import {Login} from "./pages/Login";
import {Main} from "./pages/Main";
import {Registration} from "./pages/Registration";
import {PeopleSearch} from "./pages/PeopleSearch";
import {PostList} from "./pages/PostList";
import {Profile} from "./pages/Profile";
import {FriendsList} from "./pages/FriendsList";

import './App.sass';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes>
                <Route index element={<Main />}/>

                <Route path='/login' element={<Login/>}/>
                <Route path='/registration' element={<Registration />}/>

                <Route path='/profile' element={<Profile />}/>

                <Route path='/search' element={<PeopleSearch />}/>
                <Route path='/posts' element={<PostList />}/>
                <Route path='/friends' element={<FriendsList />}/>
            </Routes>
        </QueryClientProvider>
    );
}

export default App;