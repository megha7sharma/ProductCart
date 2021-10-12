import React from 'react'

export default function UserHome() {
    return (
        <div style={styles.userHomeContainer}>
            <p>
            There are a few situations when a paragraph might not need a topic sentence. For example, you might be able to omit a topic sentence in a paragraph that narrates a series of events, if a paragraph continues developing an idea that you introduced (with a topic sentence) in the previous paragraph, or if all the sentences and details in a paragraph clearly refer—perhaps indirectly—to a main point. The vast majority of your paragraphs, however, should have a topic sentence.
            </p>
        </div>
    )
}


const styles={
    userHomeContainer: {
        backgroundColor: "lightGreen",
        display: "flex",
        flexBasis: "85%",
        flexShrink: "1",
        flexGrow: "0"
        
    }
}
