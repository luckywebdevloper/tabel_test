const nodes = [
  {
    id: "0",
    name: "Operating System",
    deadline: "2020-02-14T18:30:00.000Z",
    type: "SETUP",
    isComplete: true,
    nodes: null,
  },
  {
    id: "1",
    name: "VSCode",
    deadline: "2020-02-16T18:30:00.000Z",
    type: "SETUP",
    isComplete: true,
    nodes: [],
  },
  {
    id: "2",
    name: "JavaScript",
    deadline: "2020-03-27T18:30:00.000Z",
    type: "LEARN",
    isComplete: true,
    nodes: [
      {
        id: "23",
        name: "Objects",
        deadline: "2020-03-21T18:30:00.000Z",
        type: "LEARN",
        isComplete: true,
        nodes: [
          {
            id: "231",
            name: "Object Methods",
            deadline: "2020-03-19T18:30:00.000Z",
            type: "LEARN",
            isComplete: true,
            nodes: null,
          },
          {
            id: "232",
            name: "Garbage Collection",
            deadline: "2020-03-20T18:30:00.000Z",
            type: "LEARN",
            isComplete: true,
            nodes: null,
          },
        ],
      },
      {
        id: "22",
        name: "Data Types",
        deadline: "2020-03-19T18:30:00.000Z",
        type: "LEARN",
        isComplete: true,
        nodes: [
          {
            id: "221",
            name: "Strings",
            deadline: "2020-03-17T18:30:00.000Z",
            type: "LEARN",
            isComplete: true,
            nodes: null,
          },
          {
            id: "222",
            name: "Numbers",
            deadline: "2020-03-18T18:30:00.000Z",
            type: "LEARN",
            isComplete: true,
            nodes: null,
          },
        ],
      },
      {
        id: "24",
        name: "Code Style",
        deadline: "2020-03-22T18:30:00.000Z",
        type: "LEARN",
        isComplete: true,
        nodes: [],
      },
    ],
  },
  {
    id: "3",
    name: "React",
    deadline: "2020-04-07T18:30:00.000Z",
    type: "LEARN",
    isComplete: false,
    nodes: [
      {
        id: "35",
        name: "State",
        deadline: "2020-06-30T18:30:00.000Z",
        type: "LEARN",
        isComplete: false,
        nodes: [
          {
            id: "351",
            name: "Remote State",
            deadline: "2020-07-31T18:30:00.000Z",
            type: "LEARN",
            isComplete: true,
            nodes: [],
          },
          {
            id: "352",
            name: "Local State",
            deadline: "2020-07-31T18:30:00.000Z",
            type: "LEARN",
            isComplete: false,
            nodes: [],
          },
        ],
      },
      {
        id: "34",
        name: "Props",
        deadline: "2020-05-31T18:30:00.000Z",
        type: "LEARN",
        isComplete: false,
        nodes: null,
      },
      {
        id: "32",
        name: "JSX",
        deadline: "2020-03-31T18:30:00.000Z",
        type: "LEARN",
        isComplete: true,
        nodes: null,
      },
      {
        id: "31",
        name: "Create React App",
        deadline: "2020-03-31T18:30:00.000Z",
        type: "SETUP",
        isComplete: true,
        nodes: null,
      },
      {
        id: "33",
        name: "Components",
        deadline: "2020-04-30T18:30:00.000Z",
        type: "LEARN",
        isComplete: false,
        nodes: [],
      },
    ],
  },
  {
    id: "4",
    name: "Git",
    deadline: "2020-05-27T18:30:00.000Z",
    type: "SETUP",
    isComplete: false,
    nodes: [],
  },
  {
    id: "5",
    name: "Node",
    deadline: "2020-06-17T18:30:00.000Z",
    type: "LEARN",
    isComplete: true,
    nodes: [
      {
        id: "51",
        name: "Express",
        deadline: "2020-06-09T18:30:00.000Z",
        type: "LEARN",
        isComplete: false,
        nodes: null,
      },
    ],
  },
  {
    id: "6",
    name: "GraphQL",
    deadline: "2020-07-29T18:30:00.000Z",
    type: "LEARN",
    isComplete: false,
    nodes: [
      {
        id: "61",
        name: "Queries and Mutations",
        deadline: "2020-07-27T18:30:00.000Z",
        type: "LEARN",
        isComplete: false,
        nodes: [
          {
            id: "615",
            name: "Variables",
            deadline: "2020-07-23T18:30:00.000Z",
            type: "LEARN",
            isComplete: false,
            nodes: null,
          },
          {
            id: "614",
            name: "Fragments",
            deadline: "2020-07-22T18:30:00.000Z",
            type: "LEARN",
            isComplete: false,
            nodes: [
              {
                id: "6141",
                name: "Inline Fragments",
                deadline: "2020-07-22T18:30:00.000Z",
                type: "LEARN",
                isComplete: false,
                nodes: null,
              },
            ],
          },
          {
            id: "611",
            name: "Fields",
            deadline: "2020-07-19T18:30:00.000Z",
            type: "LEARN",
            isComplete: false,
            nodes: null,
          },
          {
            id: "616",
            name: "Directives",
            deadline: "2020-07-24T18:30:00.000Z",
            type: "LEARN",
            isComplete: false,
            nodes: null,
          },
          {
            id: "612",
            name: "Arguments",
            deadline: "2020-07-20T18:30:00.000Z",
            type: "LEARN",
            isComplete: false,
            nodes: null,
          },
          {
            id: "613",
            name: "Aliases",
            deadline: "2020-07-21T18:30:00.000Z",
            type: "LEARN",
            isComplete: false,
            nodes: null,
          },
        ],
      },
    ],
  },
];
