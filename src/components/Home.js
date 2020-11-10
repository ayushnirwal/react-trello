import React from 'react'
import {Link} from 'react-router-dom'
import "../css/home.css"


class Home extends React.Component {
    state = { 
    }
    handleChange=(e,id,type)=>{
        
        if (type == "title"){
            this.setState({
                id,
                title:e.target.value,
            })
        }
        else if(type == "desc"){
            this.setState({
                id,
                desc:e.target.value,
            })
        }
    }
    handleTitleSubmit =(event)=>{
        event.preventDefault();
        console.log(this.state);
        this.props.updateBoardHome(this.state.id,this.state.title,"updateTitle")
        
    }
    handleDescSubmit =(event)=>{
        event.preventDefault();
        console.log(this.state);
        this.props.updateBoardHome(this.state.id,this.state.desc,"updateDesc")
        
    }
    render() {
        const BoardList = this.props.data.map((board)=>{
            const url = "/board/"+String(board.id);
            return(
                <li key = {board.id} className="board-list-element container col s6">
                    <div className="card">
                       
                        <div className="icon-container"  >
                            <i onClick={()=>{this.props.delBoard(board.id)}} className="icon material-icons">close</i>
                        </div>
                           
                            
                            <form className="row card-add-container" onSubmit={this.handleTitleSubmit}>
                                <div className="my-input-field">
                                    <input onChange={(e)=>{this.handleChange(e,board.id,"title")}} id={this.state.inputFieldId} type="text" placeholder={board.title} className="board-title" autoComplete="off" />
                                    
                                </div>
                            </form>
                                
                            
                            <form className="row card-add-container" onSubmit={this.handleDescSubmit}>
                                <div className="my-input-field">
                                    <input onChange={(e)=>{this.handleChange(e,board.id,"desc")}} id={this.state.inputFieldId} type="text" placeholder={board.desc} className="board-desc" autoComplete="off" />
                                    
                                </div>
                            </form>


                        <Link className="center-align" to = {url}> 
                            <p className="center-align">Go To board <i className="left-align icon tiny arrow-forward material-icons">arrow_forward</i></p>
                            
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