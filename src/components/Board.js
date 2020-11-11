import React from 'react';
import {Link, Redirect} from "react-router-dom"
import Card from "./Card"
import '../css/board.css'
class Board extends React.Component {
    state = {
    
        id:this.props.match.params.id,
        
        //[0] is added to convert from array to single json element
        data:this.props.data.filter((TotalData)=>{return TotalData.id == this.props.match.params.id} )[0],
        //data is a boards data
        

    }
    handleTitleSubmit =(event)=>{
        event.preventDefault();
        
        this.props.updateBoardHome(this.state.formId,this.state.title,"updateTitle")
        
    }
    handleDescSubmit =(event)=>{
        event.preventDefault();
        
        this.props.updateBoardHome(this.state.formId,this.state.desc,"updateDesc")
        
    }
    handleChange=(e,id,type)=>{
        
        if (type == "title"){
            this.setState({
                formId:id,
                title:e.target.value,
            })
        }
        else if(type == "desc"){
            this.setState({
                formId:id,
                desc:e.target.value,
            })
        }
    }
    applyUpdate = (cardData) =>{
        //get cardData
        let copyData = this.state.data;
        copyData.cards=copyData.cards.map((card)=>{
            if(card.id!=cardData.id){
                return card;
            }
            else{
                return cardData
            }
        })
        this.props.updateBoard(copyData);
    }
    addCard = ()=>{
        let copyData = this.state.data;
        copyData.cards.push(
            {
                id:copyData.cards.length+1,
                title:"new-card-title",
                texts:[
                    {
                        id:0,
                        text:""
                    },
                    {
                        id:1,
                        text:"new-card text-1"
                    },
                    {
                        id:2,
                        text:"new-card text-2"
                    }
                ]
            }
        );
        this.props.updateBoard(copyData);
    }
    delCard= (cardId)=>{
        let copyData = this.state.data;
        
        copyData.cards= copyData.cards.filter((card)=>{return cardId != card.id })
        this.setState({
            data:copyData
        });
        this.props.updateBoard(copyData);
    }
    
    render() {
        const theme = this.props.theme.availableThemes[this.props.theme.selected];
        const {name,
            mainBackgroundColor,
            boardTitleColor,
            boardDescColor,
            cardColor,
            iconColor,
            textColor,
            borderColor} = theme;
        let cardList = undefined
        if(this.state.data == undefined){
            return(
                <Redirect to="/"/>
            )
        }
        else{
            //seting placeholder stuffs' color by accesing DOM elements

            

            cardList = this.state.data.cards.map((cardData)=>{
            
                return(
                    <li key = {cardData.id} className="col s12 m6 l4">
                        <Card theme = {theme} delCard ={(id)=>{this.delCard(id)}} updateBoard={(Data)=>{ this.applyUpdate(Data) }}  data={cardData} />
                    </li>
                )
            })
            return (
                <div>
                    <div className="row">
                        <Link to="/"> <i style={{color:iconColor}} class="back medium material-icons">arrow_back</i> </Link>
                    </div>

                    <div className="card-list-container">

                        <form className="row card-add-container" onSubmit={this.handleTitleSubmit}>
                            <div className="my-input-field">
                                <input onChange={(e)=>{this.handleChange(e,this.state.id,"title")}} id={this.state.inputFieldId} type="text" placeholder={this.state.data.title} className="board-title" autoComplete="off" />
                                    
                            </div>
                        </form>
                                
                            
                        <form className="row card-add-container" onSubmit={this.handleDescSubmit}>
                            <div className="my-input-field">
                                <input onChange={(e)=>{this.handleChange(e,this.state.id,"desc")}} id={this.state.inputFieldId} type="text" placeholder={this.state.data.desc} className="board-desc" autoComplete="off" />
                                    
                            </div>
                        </form>


                        <ul className="row ">
                            {cardList} 
                            <div  style={{backgroundColor:cardColor}} className="card valign-wrapper add-card-button col s12 m6 l4" onClick={()=>{ this.addCard() }}>
                                <div style={{color:iconColor}} className="add-card-text">Add Card</div>
                                
                                <i className="icon material-icons add-card-text ">add</i>
                            </div> 
                        </ul>
                    </div>
                    
    
                </div>
            );
        }
        
        
    }
}

export default Board;