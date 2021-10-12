import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserDashboard from './UserDashboard';
import UserHome from './pages/UserHome';
import UserProduct from './pages/UserProduct';
import UserPosts from './pages/UserPosts';
import UserBlog from './pages/UserBlog';
import UserAdd from './pages/UserAdd';

export default function Dashboard() {
    return (
    <UserDashboard>
        <Switch>
            <Route exact path="/dashboard">
                <UserHome />
            </Route>
            <Route path="/dashboard/user-product">
                <UserProduct />
            </Route>
            <Route path="/dashboard/user-posts">
                <UserPosts />
            </Route>
            <Route path="/dashboard/user-blog">
                <UserBlog />
            </Route>
            <Route path="/dashboard/user-add">
                <UserAdd />
            </Route>
        </Switch>
        </UserDashboard>
    )
}
