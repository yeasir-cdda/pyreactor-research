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
                value: "0",
            },
            {
                name: "yeasir2",
                value: 2,
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
                tag: "button",
                state: "yeasir",
                stateValue: "0",
                onclick: `function(){
                    setStateValue("yeasir2", states["yeasir2"]-1)
                }`,
                shouldRunEffect: false,
                // useEffect: `function(){
                //     console.log("hello yeair")
                // }
                // `,
                effectDeps: ["yeasir"],
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
        ],
    },
];
