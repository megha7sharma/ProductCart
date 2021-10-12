import React from 'react'

export default function Footer() {
    return (
        <footer style={styles.containerFooter}>
          <p>Footer</p>  
        </footer>
    )
}


const styles={
    containerFooter: {
        backgroundColor: "cyan",
        flexBasis: "50px",
        marginTop: "auto",
    }
}
