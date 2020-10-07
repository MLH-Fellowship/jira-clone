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
    dueDate: "Wednesday 10/14/20 12:00 PM",
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
    dueDate: "Thursday 10/15/20 12:00 PM",
    status: "Open",
  },
  {
    id: 1,
    title: "one",
    content: "The quick brown fox jumped ovee the lazy dog.",
    assignee: "003",
    date: "Friday 10/09/20 11:46 PM",
    dueDate: "Firday 10/16/20 12:00 PM",
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
    color: "#EB5A46",
  },
  {
    status: "In Progress",
    color: "#00C2E0",
  },
  {
    status: "In Review",
    color: "#C377E0",
  },
  {
    status: "Closed",
    color: "#3981DE",
  },
];

const users = [
  {
    id: "001",
    firstName: "Ella",
    lastName: "Fitzgerald",
    team: "Lyrical Lynxes",
    email: "ef@text.email",
  },
  {
    id: "002",
    firstName: "Johnny",
    lastName: "Cash",
    team: "Lyrical Lynxes",
    email: "ef@text.email",
  },
  {
    id: "003",
    firstName: "Lady",
    lastName: "Gga",
    team: "Lyrical Lynxes",
    email: "lg@text.email",
  },
  {
    id: "004",
    firstName: "Yo-Yo",
    lastName: "Ma",
    team: "Lyrical Lynxes",
    email: "ym@text.email",
  },
];
export { data, issueStatus, users };
