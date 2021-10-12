import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UserSidebar from './components/UserSidebar';


export default function UserDashboard(props) {
    console.log(props);
    return (
        <div style={styles.dashboardContainer}>
            <Header/>
            <main style={styles.dashboardContent}>
                <div style={styles.sidebarContainer}>
                    <UserSidebar />
                </div>
                <div style={styles.contentArea}>
                    {props.children}
                </div>
            </main>
           <Footer />           
        </div>
    )
}


const styles={
 dashboardContainer:{
    display: "flex", 
    backgroundColor: "red", 
    minHeight: "100vh", 
    maxWidth: "100%",
    flexDirection: "column"
 },
 dashboardContent: {
    display:"flex",
    flex:"auto",
    backgroundColor:"white"
     
 },
 contentArea: {
     flexShrink: "0",
     flexGrow:"1",
     flexBasis:"85%",
     minHeight: "100%"
 },
 sidebarContainer: {
     minHeight:"100%",
     flexShrink: "0",
     flexGrow:"1",
     flexBasis:"15%"
 }



}
