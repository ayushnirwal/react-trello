import React from 'react';
import '../css/card.css'


class Card extends React.Component {
    state = { 
        data:this.props.data,
        value:"",
        inputFieldId : String("Add_text")+this.props.data.id
        
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
        let [lastText] = copyData.texts.slice(-1)
        
        copyData.texts.push({
            id:lastText.id+1,
            text:this.state.value,
        });
        this.setState({
            data:copyData,
        })
        this.props.updateBoard(copyData);
        let ele=document.getElementById(this.state.inputFieldId);

        
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
                //different id for different dropdowns is necessary
                //id 0 is for empty text(which is not shown) 
                //needed for materialize not to break (there should be atleast one text present)
                const dropdownID= "dropdown"+String(this.state.data.id)+String(text.id);
                if(text.id!=0)
                    return(
                        <li key={text.id} id ="drop-down-container" className="card-text-container row">
                            <p className="card-text col s10">{text.text}</p>
                            
                            <i onClick={()=>{this.showOptions(dropdownID)}} className="material-icons col s2 more-options">more_horiz</i>
                            <div id={dropdownID} className ="options-container">
                                <a className="options" onClick={()=>{this.delText(text.id)}}>Delete</a>
                                <br/>
                                
                            </div>
                            
                            
                        </li>
                    )
            })
        }
        
        

        
        return (
            <div className="card">
                {/* card-title is a class in materialize-css therefore custom-card-title is used */}
                <div className="card-icon-container"  onClick={()=>{this.delCard(this.state.data.id)}}>
                                <i className="icon material-icons">close</i>
                            </div>
                <h2 className="center-align custom-card-title">{this.state.data.title}</h2>
                <ul>
                    {textList}
                    
                    <form className="row card-add-container" onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <input onChange={(e)=>{this.handleChange(e)}} id={this.state.inputFieldId} type="text" className="validate" autoComplete="off" />
                        <label htmlFor={this.state.inputFieldId}>AddText</label>
                    </div>
                    </form>

                </ul>
                
            </div>
        );
    }
}

export default Card;