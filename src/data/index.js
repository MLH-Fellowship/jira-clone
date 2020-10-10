const data = [
  {
    id: 9,
    status: "Open",
    title: "nine",
    content: "Get the modal working!",
    comments: [
      {
        user: "002",
        content: "FIRST!!!",
        date: "Wednesday 10/07/20 2:46 PM",
      },
      {
        user: "004",
        content: "Good Job!",
        date: "Wednesday 10/07/20 5:42 PM",
      },
    ],
    date: "Wednesday 10/07/20 1:46 PM",
    due_date: "Wednesday 10/14/20",
    reporter: "userTwo",
    label: "new feature request",
    linkedIssues: [1, 6],
  },
  {
    id: 0,
    title: "zero",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem",
    date: "Thursday 10/08/20 1:46 PM",
    due_date: "Thursday 10/15/20",
    status: "Open",
  },
  {
    id: 1,
    title: "one",
    content: "The quick brown fox jumped ovee the lazy dog.",
    assignee: "003",
    date: "Friday 10/09/20 11:46 PM",
    due_date: "Firday 10/16/20",
    status: "In Review",
  },
  {
    id: 2,
    title: "two",
    content:
      "you see, a dog growls when it's angry, and wags its tail when it's pleased. Now I growl when I'm pleased, and wag my tail when I'm angry. Therefore I'm mad.",
    assignee: "004",
    date: "Friday 10/09/20 11:46 PM",
    status: "In Review",
  },
  {
    id: 3,
    title: "three",
    content: "The quick brown fox jumped ovee the lazy dog.",
    assignee: "001",
    date: "Thursday 10/15/20 1:46 PM",
    status: "In Progress",
    comments: [
      {
        user: "003",
        content: "This is a priority",
        date: "Wednesday 10/07/20 2:46 PM",
      },
      {
        user: "001",
        content: "Agree",
        date: "Wednesday 10/07/20 5:42 PM",
      },
    ],
  },
  {
    id: 4,
    title: "four",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem",
    assignee: "001",
    date: "Friday 10/16/20 3:43 AM",
    status: "In Progress",
  },
  {
    id: 8,
    title: "eight",
    content: "The quick brown fox jumped ovee the lazy dog.",
    assignee: "002",
    date: "Monday 10/12/20 3:43 AM",
    status: "Closed",
  },
];

const issueStatus = [
  {
    status: "Open",
    id: 1,
  },
  {
    status: "In Progress",
    id: 2,
  },
  {
    status: "In Review",
    id: 3,
  },
  {
    status: "Closed",
    id: 4,
  },
];

const users = [
  {
    id: "001",
    first_name: "Ella",
    last_name: "Fitzgerald",
    team: "Lyrical Lynxes",
    email: "ef@text.email",
  },
  {
    id: "002",
    first_name: "Johnny",
    last_name: "Cash",
    team: "Lyrical Lynxes",
    email: "ef@text.email",
  },
  {
    id: "003",
    first_name: "Lady",
    last_name: "Gga",
    team: "Lyrical Lynxes",
    email: "lg@text.email",
  },
  {
    id: "004",
    first_name: "Yo-Yo",
    last_name: "Ma",
    team: "Lyrical Lynxes",
    email: "ym@text.email",
  },
];
export { data, issueStatus, users };
