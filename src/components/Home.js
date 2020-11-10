import React from 'react'
import {Link} from 'react-router-dom'
import "../css/home.css"


class Home extends React.Component {
    state = { 
    }
    render() {
        const BoardList = this.props.data.map((board)=>{
            const url = "/board/"+String(board.id);
            return(
                <li key = {board.id} className="board-list-element container col s6">
                    <div className="card">
                       
                            <div className="icon-container" onClick={()=>{this.props.delBoard(board.id)}} >
                                <i className="icon material-icons">close</i>
                            </div>
                        <Link className="board-list-name" to = {url}>    
                            <h1 className="center-align board-title"> {board.title} </h1>
                            <p className="center-align board-desc"> {board.desc}</p>
                        </Link>
                    </div>
                </li>
            )
        })
        return (
            <div className="container">
                
                <ul className="board-list-container row">
                    {BoardList}
                    <li>
                        <div className="board-list-element container col s6">
                            <div className="card" onClick={()=>{this.props.addBoard()}}>
                                <h1 className="center-align board-title"> Add board </h1>
                                <p className="center-align board-desc"> <i className="icon material-icons">add</i> </p>
                                
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Home;