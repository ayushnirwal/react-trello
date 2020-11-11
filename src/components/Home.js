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
        
        this.props.updateBoardHome(this.state.id,this.state.title,"updateTitle")
        
    }
    handleDescSubmit =(event)=>{
        event.preventDefault();
        
        this.props.updateBoardHome(this.state.id,this.state.desc,"updateDesc")
        
    }
    themeChange =(e) =>{
        
        this.props.changeTheme(e)
    } 
    render() {
        const themeNameList = this.props.theme.availableThemes.map((theme)=> theme.name );
        const themeSelected = this.props.theme.selected;
        const theme = this.props.theme.availableThemes[this.props.theme.selected];
        const {name,
        mainBackgroundColor,
        boardTitleColor,
        boardDescColor,
        cardColor,
        iconColor,
        textColor,
        borderColor} = theme;

        const style={
            
        }

        
        const BoardList = this.props.data.map((board)=>{
            

            
            const url = "/board/"+String(board.id);
            return(
                <li key = {board.id} className="board-list-element container col s12 l6">
                    <div style= {{backgroundColor:cardColor}} className="card">
                       
                        <div className="icon-container" >
                            <i onClick={()=>{this.props.delBoard(board.id)}} style={{color:iconColor}} className="icon material-icons">close</i>
                        </div>
                           
                        <div className="container">
                            <form className="row card-add-container" onSubmit={this.handleTitleSubmit}>
                                <div className="my-input-field">
                                    <input onChange={(e)=>{this.handleChange(e,board.id,"title")}} style={{color:boardTitleColor}} type="text" placeholder={board.title} className="board-title" autoComplete="off" />
                                    
                                </div>
                            </form>
                                
                            
                            <form className="row card-add-container" onSubmit={this.handleDescSubmit}>
                                <div className="my-input-field">
                                    <input onChange={(e)=>{this.handleChange(e,board.id,"desc")}} style={{color:boardDescColor}} type="text" placeholder={board.desc} className="board-desc" autoComplete="off" />
                                    
                                </div>
                            </form>
                        </div>


                        <Link className="center-align" to = {url}> 
                            <p style={{color:iconColor}} className="center-align">Go To board <i style={{color:iconColor}} className="left-align icon tiny arrow-forward material-icons">arrow_forward</i></p>
                            
                        </Link>
                    </div>
                </li>
            )
        })
        
        return (
            <div className="container">
                <div className="theme-menu row">
                
                    <p className="col s6 l6 center-align">
                    <label>
                        <input onClick={(e)=>{this.themeChange(0)}} name="group1" value={0} type="radio" defaultChecked={themeSelected == 0} />
                        <span style={{color:iconColor,fontSize:'2rem'}}>{themeNameList[0]}</span>
                    </label>
                    </p>
                    <p className="col s6 l6 center-align">
                    <label>
                        <input onClick={(e)=>{this.themeChange(1)}} name="group1" value={1} type="radio" defaultChecked={themeSelected == 1} />
                        <span style={{color:iconColor,fontSize:'2rem'}}>{themeNameList[1]}</span>
                    </label>
                    </p>
                
                
                </div>
                
                <ul className="board-list-container row">
                    {BoardList}
                    <li>
                        <div className="board-list-element container col s12 l6">
                            <div style= {{backgroundColor:cardColor}} className="card" onClick={()=>{this.props.addBoard()}}>
                                <h1 style={{color:iconColor}} className="center-align board-title"> Add board </h1>
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