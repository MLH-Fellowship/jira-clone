const data = [{
    id: 9,
    icon: "⭕️",
    status: "Open",
    title: "nine",
    content: "Get the modal working!"
},{id:0, 
    title:'zero', 
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem', 
    assignee:'me', 
    date:'10/10/20',
    status: "Open",
    icon: "⭕️",
},{id:1, 
    title:'one', 
    content:'The quick brown fox jumped ovee the lazy dog.', 
    assignee:'the fox', 
    date:'10/20/20',
    status: "In Review",
    icon: "📝",
},{id:2,
    title:'two',
    content:"you see, a dog growls when it's angry, and wags its tail when it's pleased. Now I growl when I'm pleased, and wag my tail when I'm angry. Therefore I'm mad.",
    assignee:'Alice',
    date:'10/10/20',
    status: "In Review",
    icon: "📝",
},{id:3, 
    title:'three', 
    content:'The quick brown fox jumped ovee the lazy dog.', 
    assignee:'the fox', 
    date:'10/20/20',
    status: "In Progress",
    icon: "🔆️",
},{id:4, 
    title:'four', 
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem',
    assignee:'me', 
    date:'10/10/20',
    status: "In Progress",
    icon: "🔆️",
},{id:8, 
    title:'eight', 
    content:'The quick brown fox jumped ovee the lazy dog.', 
    assignee:'the fox', 
    date:'10/20/20',
    status: "Closed",
    icon: "✅",
}];

const issueStatus = [{
    status: "Open",
    icon: "⭕️",
    color: "#EB5A46"
}, {
    status: "In Progress",
    icon: "🔆️",
    color: "#00C2E0"
}, {
    status: "In Review",
    icon: "📝",
    color: "#C377E0"
}, {
    status: "Closed",
    icon: "✅",
    color: "#3981DE"
}];


export { data, issueStatus };