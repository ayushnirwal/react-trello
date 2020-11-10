import React from 'react'
import Home from './Home'
import Board from './Board'
import initialData from './data'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ls from 'local-storage'
import store from 'store'
import 'materialize-css'




class Main extends React.Component {
    state = { 
       data:undefined,
    } 
    componentDidMount(){
        const cacheData = store.get('react-keep');
        if (cacheData==undefined){
            const data = initialData();
            this.setState({
                data:data
            })
            console.log("first time")
            store.set('react-keep',data);
        }
        else{
            this.setState({
                data:cacheData
            })
            console.log("loading from cache")
        }
        
    }
    componentDidUpdate(){
        store.set('react-keep',this.state.data);
        console.log("updating");
    }
    addBoard=()=>{
        const newBoard={
            id:this.state.data.boards.length+1,
            title: "Add Board Title here",
            desc:"Add Description of the board here ",
            cards:[
                {
                    id:1,
                    title:"card-title1",
                    texts:[
                        {
                            id:0,
                            text:""
                        },
                        {
                            id:1,
                            text:"card-1 text-1"
                        },
                        {
                            id:2,
                            text:"card-1 text-2"
                        }
                    ]
                },
                {
                    id:2,
                    title:"card-title2",
                    texts:[
                        {
                            id:1,
                            text:"card-2 text-1"
                        },
                        {
                            id:2,
                            text:"card-2 text-2"
                        }
                    ]
                }
            ]
        };
        let newBoards = this.state.data.boards;
        newBoards.push(newBoard);
        this.setState({
            
            boards:newBoards
        })
    }
    delBoard=(id)=>{
        const newBoards=this.state.data.boards.filter((board)=>{return board.id!=id});
        const data = {boards:newBoards}
        this.setState({
            data
        })

    }
    updateBoardHome = (id,text,type) =>{

        
        let newBoards = this.state.data.boards.map((board)=>{
            if (type == "updateTitle"){
                if (board.id!=id){
                    
                    return board
                }
                else{
                    board.title=text;
                    return board
                }
            }
            else if(type == "updateDesc"){
                if (board.id!=id){
                    return board
                }
                else{
                    board.desc=text;
                    return board
                }
            }
            
        })
        console.log(newBoards);
        const data = {boards:newBoards}
        this.setState({
            data
        })
    }
    updateBoard=(newBoard)=>{
        const newBoards = this.state.data.boards.map((board)=>{
            if (board.id!=newBoard.id){
                return board
            }
            else{
                return newBoard
            }
        })
        const data = {boards:newBoards}
        this.setState({
            data
        })
    }
    render() {
        if (this.state.data != undefined){
            
            const HomeData=this.state.data.boards.map((board)=>{
                return({
                    id:board.id,
                    title:board.title,
                    desc:board.desc
                })
            })
            return (
                <Router>
                    <Switch>

                        <Route exact path="/" render={(props) => {
                            return ( <Home updateBoardHome={(id,text,type)=>this.updateBoardHome(id,text,type)} delBoard ={(id)=>{this.delBoard(id)}} addBoard={()=>{this.addBoard()}} {...props} data={HomeData} /> )
                        }} /> 
                        
                        <Route exact path="/board/:id" render={(props) => {
                            return ( <Board updateBoardHome={(id,text,type)=>this.updateBoardHome(id,text,type)} updateBoard={(newBoard)=>this.updateBoard(newBoard)} {...props } data = {this.state.data.boards} /> )
                        }} /> 
                    </Switch>
                </Router>
            );
        }
        else{
            return(
                <h1>loading</h1>
            );
            
        }

    }
}

export default Main;