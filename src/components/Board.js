import React from 'react';
import {Link, Redirect} from "react-router-dom"
import Card from "./Card"
class Board extends React.Component {
    state = {
    
        id:this.props.match.params.id,
        
        //[0] is added to convert from array to single json element
        data:this.props.data.filter((TotalData)=>{return TotalData.id == this.props.match.params.id} )[0],
        //data is a boards data
        

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
        let cardList = undefined
        if(this.state.data == undefined){
            return(
                <Redirect to="/"/>
            )
        }
        else{
            cardList = this.state.data.cards.map((cardData)=>{
            
                return(
                    <li key = {cardData.id} className="col s3">
                        <Card delCard ={(id)=>{this.delCard(id)}} updateBoard={(Data)=>{ this.applyUpdate(Data) }}  data={cardData} />
                    </li>
                )
            })
            return (
                <div>
                    <Link to="/"> <h3> Home </h3></Link>
                    <div className="container">
                        <h1 className="center-align">{this.state.data.title}</h1>
                        <ul className="row card-row">
                            {cardList} 
                            <button className="button" onClick={()=>{ this.addCard() }}>
                                Add Card
                            </button> 
                        </ul>
                    </div>
                    
    
                </div>
            );
        }
        
        
    }
}

export default Board;