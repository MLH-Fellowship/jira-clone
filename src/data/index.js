const data = [
  {
    id: 9,
    status: "Open",
    title: "nine",
    content: "Get the modal working!",
    comments: [
      {
        user: "userOne",
        content: "FIRST!!!",
        date: "10/10/20",
      },
      {
        user: "userTwo",
        content: "Good Job!",
        date: "10/10/20",
      },
    ],
    date: "10/02/20",
    dueDate: "11/10/20",
    assignee: "userOne",
    reporter: "userTwo",
    label: "new feature request",
    linkedIssues: [1, 6],
  },
  {
    id: 0,
    title: "zero",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem",
    assignee: "me",
    date: "10/10/20",
    status: "Open",
  },
  {
    id: 1,
    title: "one",
    content: "The quick brown fox jumped ovee the lazy dog.",
    assignee: "the fox",
    date: "10/20/20",
    status: "In Review",
  },
  {
    id: 2,
    title: "two",
    content:
      "you see, a dog growls when it's angry, and wags its tail when it's pleased. Now I growl when I'm pleased, and wag my tail when I'm angry. Therefore I'm mad.",
    assignee: "Alice",
    date: "10/10/20",
    status: "In Review",
  },
  {
    id: 3,
    title: "three",
    content: "The quick brown fox jumped ovee the lazy dog.",
    assignee: "the fox",
    date: "10/20/20",
    status: "In Progress",
  },
  {
    id: 4,
    title: "four",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem",
    assignee: "me",
    date: "10/10/20",
    status: "In Progress",
  },
  {
    id: 8,
    title: "eight",
    content: "The quick brown fox jumped ovee the lazy dog.",
    assignee: "the fox",
    date: "10/20/20",
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

export { data, issueStatus };
