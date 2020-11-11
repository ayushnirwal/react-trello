
const initialData =()=>{
    const data = {
        boards:
        [
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
        ],
        theme:{
            selected:1,
            availableThemes:[
                {
                    
                    name:"Theme 1",
                    mainBackgroundColor:"#fff3e2",
                    boardTitleColor:"#3abda3",
                    boardDescColor:"#3abda3",
                    cardColor:"#ebcfc4",
                    iconColor:"#706897",
                    textColor:"#3abda3",
                    borderColor:"#706897",

                },
                {
                    
                    name:"Theme 2",
                    mainBackgroundColor:"#1c2b2d",
                    boardTitleColor:"#3abda3",
                    boardDescColor:"#3abda3",
                    cardColor:"#e6d5b8",
                    iconColor:"#b58126",
                    textColor:"#3abda3",
                    borderColor:"#777",

                },

            ],
        }
    }


        return data;
    }


    export default initialData;
