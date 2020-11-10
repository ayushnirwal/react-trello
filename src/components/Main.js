import React from 'react'
import Home from './Home'
import Board from './Board'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import 'materialize-css'

class Main extends React.Component {
    state = { 
        boards:[
            {
                id:1,
                title: "title 1",
                desc:"desc of board 1",
                cards:[
                    {
                        id:1,
                        title:"card-title1",
                        texts:[
                            {
                                id:0,
                                text:"0"
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
                                id:0,
                                text:"0"
                            },
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
            },
            {
                id:2,
                title: "title 2",
                desc:"desc of board 1",
                cards:[
                    {
                        id:1,
                        title:"card-title1",
                        texts:[
                            {
                                id:0,
                                text:"0"
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
                                id:0,
                                text:"0"
                            },

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
            }
        ]
    } 
    addBoard=()=>{
        const newBoard={
            id:this.state.boards.length+1,
            title: "new Board"+String(this.state.boards.length+1),
            desc:"desc of new board ",
            cards:[
                {
                    id:1,
                    title:"card-title1",
                    texts:[
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
        let newBoards = this.state.boards;
        newBoards.push(newBoard);
        this.setState({
            
            boards:newBoards
        })
    }
    delBoard=(id)=>{
        const newBoards=this.state.boards.filter((board)=>{return board.id!=id});
        this.setState({
            boards:newBoards
        })

    }
    updateBoard=(newBoard)=>{
        const newBoards = this.state.boards.map((board)=>{
            if (board.id!=newBoard.id){
                return board
            }
            else{
                return newBoard
            }
        })
        this.setState({
            boards:newBoards
        })
    }
    render() {
        const HomeData=this.state.boards.map((board)=>{
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
                        return ( <Home delBoard ={(id)=>{this.delBoard(id)}} addBoard={()=>{this.addBoard()}} {...props} data={HomeData} /> )
                    }} /> 
                    
                    <Route exact path="/board/:id" render={(props) => {
                        return ( <Board updateBoard={(newBoard)=>this.updateBoard(newBoard)} {...props } data = {this.state.boards} /> )
                    }} /> 
                </Switch>
            </Router>
        );
    }
}

export default Main;