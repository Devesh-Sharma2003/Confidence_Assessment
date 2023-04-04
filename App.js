import {ReactMediaRecorder} from 'react-media-recorder'
// import "./App.html";
import "./App.css";

function App()
{
    return(
        <div>
        <div className='navbar'>
        <h2>CONFIDENCE ASSESMENT ON SPEECH ANALYSIS</h2>
        </div>
        <div className='lower'>
        <div className='lowerinner'>
        <h1><u><b>Questionnaire </b></u></h1>
        <div className='left'>
        
        <p> <h3><b><u>Choose any of the questions and start recording the answer... </u></b></h3> </p>
        <div className='question'>
        <div className='list'>
           
          
            <ul>
                <li><b>Tell me about yourself.</b></li>
                <li><b>What are your greatest strengths?</b></li>
                <li><b>Why should we hire you?</b></li>
                <li><b>What do you consider to be your weaknesses?</b></li>
                <li><b>Tell me about a time you demonstrated leadership skills.</b></li>
                <li><b>Tell me about a time you made a mistake.</b></li>
                <li><b>Whats your management style?</b></li>
                <li><b>What motivates you?</b></li>
            </ul>
       
          
            <div><textarea className='cmt' placeholder='Comment...'></textarea></div>
        </div>
        </div>
        
        </div></div>
        
        
        
        <div className='right'>
        
        <ReactMediaRecorder
        audio
        render = {({status,startRecording,stopRecording,mediaBlobUrl})=> (
        <div className="out">
            <p className="para">Status: {status}</p>
            <video src={mediaBlobUrl} autoplay loop controls></video>
            <div className='container'>
            <button className="btn1" onClick={startRecording}><b>Start Recording</b></button>
            <button className="btn2" onClick={stopRecording}><b>Stop Recording</b></button>
        </div>
        </div>
        
        )
    }
    />
        </div>
        
        </div>
        
        
    </div>
    )
}

export default App;
