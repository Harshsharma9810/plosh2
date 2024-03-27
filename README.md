For trimming italian cusine
.split(" ")[0]


import React, { useState, useRef } from 'react';
import styles from './YourComponent.module.css'; // Assuming you're using CSS modules
// Import your images here

const YourComponent = () => {
    const [showInput, setShowInput] = useState(false);
    const inputRef = useRef(null);

    const handleAddClick = () => {
        setShowInput(true);
        inputRef.current.click(); // Programmatically click the input element
    };

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.addFile} onClick={handleAddClick}>
                    <img src={plusicon} alt="Add File" className={styles.plus} />
                </div>            
            </div>
            <div className={styles.input}>
                {showInput && (
                    <div className={styles.in1}>
                        {/* Render the input element */}
                        <input ref={inputRef} id="files" style={{ visibility: "hidden" }} type="file" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default YourComponent;



position: "absolute", left: "-9999px" ,