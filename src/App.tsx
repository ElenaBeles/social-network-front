import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from 'react-query';

import {Login} from './pages/Login';
import {Main} from './pages/Main';
import {Registration} from './pages/Registration';
import {PostList} from './pages/PostList';
import {Profile} from './pages/Profile';
import {FriendsList} from './pages/FriendsList';

import './App.sass';
import {Layout} from './components/Layout';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Layout>
                <Routes>
                    <Route ></Route>
                    <Route index element={<Main />}/>

                    <Route path='/login' element={<Login/>}/>
                    <Route path='/registration' element={<Registration />}/>
                    <Route path='/profile' element={<Profile />}/>

                    <Route path='/posts' element={<PostList />}/>
                    <Route path='/search' element={<FriendsList />}/>
                </Routes>
            </Layout>
        </QueryClientProvider>
    );
}

export default App;