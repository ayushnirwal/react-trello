import React from 'react';
import '../css/card.css'


class Card extends React.Component {
    state = { 
        data:this.props.data,
        value:"",
        inputFieldTextId : String("Add_text")+this.props.data.id
        
    }
    
    handleTitleChange =(e)=>{
        this.setState({
            
            newTitle:e.target.value
        })
        
    }
    handleTitleSubmit=(e)=>{
        e.preventDefault();
        let copyData = this.state.data;
        copyData.title = this.state.newTitle;
        this.setState({
            ...this.state,
            data:copyData,
        })
        this.props.updateBoard(copyData);
    }
    handleTextChange =(e,id)=>{
        this.setState({
            
            newText:e.target.value,
            newTextId:id
        })
        
    }
    handleTextSubmit=(e)=>{
        e.preventDefault();
        let copyData = this.state.data;
        
    
        
        copyData.texts=copyData.texts.map((text)=>{
            if(text.id != this.state.newTextId){
                return text
            }
            else{
                return({
                    id:this.state.newTextId,
                    text:this.state.newText
                })
            }
        })
        this.setState({
            data:copyData,
        })
        this.props.updateBoard(copyData);
        
    }
    handleChange = (event) =>{
        
        this.setState({
            
            value:event.target.value
        })
    }
    // add text
    handleSubmit=(event)=>{
        event.preventDefault();
        
        let copyData = this.state.data;
        console.log(copyData);
        let [lastText] = copyData.texts.slice(-1)
        
        copyData.texts.push({
            id:(lastText.id+1 )|| 0,
            text:this.state.value,
        });
        this.setState({
            data:copyData,
        })
        this.props.updateBoard(copyData);
        
        let ele=document.getElementById(this.state.inputFieldTextId);
        ele.value="";
        
    
    }
    delText = (id)=>{
        
        let copyData = this.state.data;
        copyData.texts=copyData.texts.filter((text)=>{return text.id!=id});
        if (copyData.texts==undefined){
            copyData.texts=[];
        }
        
        this.setState({
            data:copyData,
        })
        this.props.updateBoard(copyData)
        
    }
    showOptions =(dropdownID)=>{

        let dropdowns = document.getElementsByClassName("options-container");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
            }
        }
        
        let ele = document.getElementById(dropdownID);
        
        ele.classList.toggle("show");
    }
    delCard = (cardId)=>{
        
        this.props.delCard(cardId);
    }
    

    render() {
        const theme = this.props.theme;
        const {name,
        mainBackgroundColor,
        boardTitleColor,
        boardDescColor,
        cardColor,
        iconColor,
        textColor,
        borderColor} = theme;
        let textList = undefined;
        let len = this.state.data.texts.length;
        window.onclick = function(event) {
            if (!event.target.matches('.more-options')) {
              let dropdowns = document.getElementsByClassName("options-container");
              let i;
              for (i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }
              }
            }
          }
        
        if (len!=0){
            
            textList= this.state.data.texts.map((text)=>{
                
                const dropdownID= "dropdown"+String(this.state.data.id)+String(text.id);
                if(text.id!=0)
                    return(
                        <li style={{borderColor:borderColor}} key={text.id} className="card-text-container row">
                            
                            <form className="card-add-container" onSubmit={this.handleTextSubmit}>
                                <div className="text-input">

                                    <input onChange={(e)=>{this.handleTextChange(e,text.id)}} type="text" placeholder={text.text} className="card-text" autoComplete="off" />
                                    <i onClick={()=>{this.showOptions(dropdownID)}} className="material-icons more-options">more_horiz</i>
                                    
                                    
                                    <div style={{backgroundColor:cardColor}} id={dropdownID} className ="options-container">
                                        <a style={{color:iconColor}} className="options" onClick={()=>{this.delText(text.id)}}>Delete</a>
                                        <br/>

                                    </div>
                                    
                                </div>

                                
                            </form>

                            
                            
                            
                            
                        </li>
                    )
            })
        }
        
        

        
        return (
            <div style={{backgroundColor:cardColor}} className="card card-padding">
                {/* card-title is a class in materialize-css therefore custom-card-title is used */}
                <div className="card-icon-container"  onClick={()=>{this.delCard(this.state.data.id)}}>
                        <i style={{color:iconColor}} className="icon material-icons">close</i>
                </div>

                <form className="row card-add-container" onSubmit={this.handleTitleSubmit}>
                    <div className="my-input-field">

                        <input onChange={(e)=>{this.handleTitleChange(e,this.state.data.id)}} id={this.state.inputFieldId} type="text" placeholder={this.state.data.title} className="board-title" autoComplete="off" />
                                    
                    </div>
                </form>

                <ul className="container">
                    {textList}
                    
                    <form className="row card-add-container" onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <input id={this.state.inputFieldTextId} onChange={(e)=>{this.handleChange(e)}}  type="text"  autoComplete="off" />
                        <label htmlFor={this.state.inputFieldTextId}>Add Text</label>
                    </div>
                    </form>

                </ul>
                
            </div>
        );
    }
}

export default Card;