
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
        ]
    }


        return data;
    }


    export default initialData;
