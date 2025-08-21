import React from 'react'

const LoadingCom = () => {
  return (
    <>
        <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading...</p>
        </div>
        <style jsx>{`
            .loading-container {    
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100vh;
            }
            .loading-spinner {
                border: 8px solid #f3f3f3; /* Light grey */
                border-top: 8px solid #3498db; /* Blue */
                border-radius: 50%;
                width: 60px;
                height: 60px;
                animation: spin 2s linear infinite;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            p {
                margin-top: 20px;
                font-size: 1.2em;
                color: #555;
            }
        `}</style>
       
       
    </>
  )
}

export default LoadingCom
