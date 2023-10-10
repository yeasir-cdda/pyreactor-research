export const Pages = [
    {
        title: "Home",

        url: "/",

        dataProperty: "data",

        apis: [
            {
                url: "/api/landingpage",
                method: "get",
                data: "landingpage",
                renderType: "ssr",
            },
        ],

        component: [
            {
                index: 1,
                tag: "img",
                style: { marginTop: "5px", border: "4px dashed" },

                dataProperty: "thumbnailUrl",
            },

            {
                index: 2,
                tag: "h2",
                style: { marginTop: "5px", border: "4px dashed" },

                dataProperty: "comapanyName",
            },
        ],
    },

    {
        title: "test",

        url: "/test",

        dataProperty: "data",

        apis: [
            {
                url: "https://jsonplaceholder.typicode.com/users",
                method: "get",
                data: "users",
                renderType: "ssr",
            },
            {
                name: "Posts",
                url: "https://jsonplaceholder.typicode.com/photos",
                method: "get",
                data: "posts",
                renderType: "csr",
            },
        ],

        component: [
            {
                index: 1,
                tag: "img",
                style: {
                    marginTop: "5px",
                    border: "2px solid",
                    borderColor: "red",
                    borderRadius: "50%",
                    height: "200px",
                    width: "200px",
                    padding: "4px",
                    margin: "20px auto",
                },

                dataProperty: "thumbnailUrl",
            },
            {
                index: 2,
                tag: "p",
                style: {
                    marginTop: "5px",
                    border: "4px solid",
                    borderRadius: "10px",
                    padding: "10px",
                    borderColor: "blue",
                    height: "100px",
                    width: "50%",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                },

                dataProperty: "title",
            },
            {
                index: 3,
                tag: "p",
                style: {
                    marginTop: "5px",
                    border: "4px solid",
                    borderRadius: "10px",
                    padding: "10px",
                    borderColor: "blue",
                    height: "100px",
                    width: "50%",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                },

                dataProperty: "title",
            },
            {
                index: 4,
                tag: "p",
                style: {
                    marginTop: "5px",
                    border: "4px solid",
                    borderRadius: "10px",
                    padding: "10px",
                    borderColor: "blue",
                    height: "100px",
                    width: "50%",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                },

                dataProperty: "title",
            },
            {
                index: 5,
                tag: "p",
                style: {
                    marginTop: "5px",
                    border: "4px solid",
                    borderRadius: "10px",
                    padding: "10px",
                    borderColor: "blue",
                    height: "100px",
                    width: "50%",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                },

                dataProperty: "title",
            },
        ],
    },
    {
        title: "tests",

        url: "/tests",

        dataProperty: "data",

        apis: [
            {
                url: "https://jsonplaceholder.typicode.com/users",
                method: "get",
                data: "users",
                renderType: "ssr",
            },
            {
                name: "Posts",
                url: "https://jsonplaceholder.typicode.com/photos",
                method: "get",
                data: "posts",
                renderType: "csr",
            },
        ],
        states: [
            {
                name: "yeasir",
                value: 5,
            },
            {
                name: "yeasir2",
                value: 2,
            },
            {
                name: "yeasir3",
                value: 10,
            },
        ],
        hooks: [
            {
                name: "useEffect",
                dependencies: ["yeasir", "yeasir2"],
                hook: `function(){
                console.log("hey there yeasir from hook")
            }`,
            },
        ],
        functions: [
            {
                name: "setYeasir",
                func: `function() { 
                console.log(window.location.host)

            }`,
            },
        ],

        component: [
            {
                index: 1,
                tag: "img",
                style: {
                    marginTop: "5px",
                    border: "2px solid",
                    borderColor: "red",
                    borderRadius: "50%",
                    height: "200px",
                    width: "200px",
                    padding: "4px",
                    margin: "20px auto",
                },

                dataProperty: "thumbnailUrl",
            },
            {
                index: 2,
                tag: "p",
                data: "",
                content: "",
                style: {
                    marginTop: "5px",
                    border: "4px solid",
                    borderRadius: "10px",
                    padding: "10px",
                    borderColor: "blue",
                    height: "100px",
                    width: "50%",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                },

                dataProperty: "yeasir2",
            },
            {
                index: 3,
                tag: "p",
                data: "",
                content: "",
                style: {
                    marginTop: "5px",
                    border: "4px solid",
                    borderRadius: "10px",
                    padding: "10px",
                    borderColor: "blue",
                    height: "100px",
                    width: "50%",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                },

                dataProperty: "yeasir",
            },
            {
                index: 7,
                tag: "p",
                data: "",
                content: "",
                style: {
                    marginTop: "5px",
                    border: "4px solid",
                    borderRadius: "10px",
                    padding: "10px",
                    borderColor: "blue",
                    height: "100px",
                    width: "50%",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                },

                dataProperty: "yeasir3",
            },
            {
                index: 4,
                tag: "button",
                onClick: `function(){
                    setStateValue("yeasir", states["yeasir"]+1)
                }`,
                style: {
                    marginTop: "5px",
                    border: "4px solid",
                    borderRadius: "10px",
                    padding: "10px",
                    borderColor: "purple",
                    backgroundColor: "gray",
                    height: "100px",
                    width: "50%",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                },

                dataProperty: "button",
            },
            {
                index: 6,
                tag: "button",
                onClick: `function(){
                    setStateValue("yeasir", states["yeasir"]-1)
                }`,
                style: {
                    marginTop: "5px",
                    border: "4px solid",
                    borderRadius: "10px",
                    padding: "10px",
                    borderColor: "purple",
                    backgroundColor: "gray",
                    height: "100px",
                    width: "50%",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                },

                dataProperty: "button",
            },
            {
                index: 8,
                tag: "button",
                onClick: `function(){
                    setStateValue("yeasir3", states["yeasir3"]-1)
                }`,
                style: {
                    marginTop: "5px",
                    border: "4px solid",
                    borderRadius: "10px",
                    padding: "10px",
                    borderColor: "purple",
                    backgroundColor: "gray",
                    height: "100px",
                    width: "50%",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                },

                dataProperty: "button",
            },
            {
                index: 5,
                tag: "div",
                style: {
                    position: "absolute",
                    bottom: "25px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "between",
                    borderRadius: "10px",
                    padding: "10px",
                    backgroundColor: "#B2BEB5",
                    height: "120px",
                    width: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                    transition: "all 0.5s ease-in-out",
                },
                conditionalStyles: [
                    {
                        condition: "states['yeasir'] < 4",
                        style: {
                            right: "-505px",
                        },
                    },
                    {
                        condition: "states['yeasir'] >= 4",
                        style: {
                            right: "25px",
                        },
                    },
                ],
                // conditionalRender: [
                //     {
                //         expression: "states['yeasir2'] === states['yeasir']", // First condition
                //     },
                //     {
                //         operator: "OR", // Logical operator (OR, AND, NOT, NOR)
                //         expression: "states['yeasir'] < 2", // Second condition
                //     },
                //     {
                //         operator: "AND", // Logical operator (OR, AND, NOT, NOR)
                //         expression: "states['yeasir3'] === 3", // Second condition
                //     },
                // ],
            },
            {
                index: 1,
                parentIndex: 5,
                tag: "div",
                style: {
                    border: "1px solid",
                    borderRadius: "50%",
                    height: "50px",
                    width: "50px",
                },
                conditionalStyles: [
                    {
                        condition: "states['yeasir'] < 4",
                        style: {
                            backgroundColor: "red",
                        },
                    },
                    {
                        condition: "states['yeasir'] >= 4",
                        style: {
                            backgroundColor: "green",
                        },
                    },
                ],
            },
        ],
    },
];
