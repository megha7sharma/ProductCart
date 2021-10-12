import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function UserSidebar(props) {

    return (
        <div style={styles.sidebarContainer}>
            
           <ul style={styles.list}>            
               <li><Link to="/dashboard/user-product">Users</Link></li>
               <li><Link to="/dashboard/user-posts">Posts</Link></li>
               <li><Link to="/dashboard/user-blog">Blog</Link></li>
           </ul>
        </div>
    )
}

const styles= {
    list: {
        listStyleType: "none"
    },
    sidebarContainer: {
        display: "flex",
        flexBasis: "15%",
        flexShrink: "1",
        flexGrow: "0",
        backgroundColor: "yellow",
        justifyContent: "flex-start",
        
    }
}
