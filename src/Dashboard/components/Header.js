import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <header style={styles.headerContainer}>
            <div style={styles.userInfo}>
                <h5>Welcome User</h5>
            </div>
             <div style={styles.headerTags}>
            {/* <ul style={styles.headerMenu}>                
                <li><Link to='/'>Home  </Link></li>               
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul> */}
            </div> 

            <div style={styles.userAction}>
                <h5>Logout</h5>
            </div>


            
        </header>
    )
}

const styles={
    headerContainer: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "grey",
        flexBasis: "50px"
    },
    headerMenu: {
        display: "flex",
        listStyleType: "none",
        justifyContent: "",
       
               
    },
    userInfo: {
        paddingLeft: "10px",
        flexBasis: "15%",
        flexGrow: "0",
        flexShrink : "1"
    },
    userAction: {
        paddingRight: "10px",
        display: "flex",
        justifyContent: "flex-end",
        flexBasis: "15%",
        flexGrow: "0",
        flexShrink: "1"
    },
    headerTags: {
        flexBasis: "70%",
        flexGrow: "0",
        flexShrink: "1" 
    }

    
}
