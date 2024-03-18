import { MdDesignServices } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { GrDatabase } from "react-icons/gr";
import { FaLaptopCode } from "react-icons/fa6";

export const SKILLS = [
    {
        title: "Frontend",
        icon: <FaLaptopCode />,
        skills : [
            { skills: "HTML5", percentage: "80%" },
            { skills: "CSS3 (Sass/Scss)", percentage: "90%" },
            { skills: "Javascript", percentage: "80%" },
            { skills: "React.js", percentage: "80%" },
        ]
    },
    {
        title: "Backend",
        icon: <GrDatabase />,
        skills : [
            { skills: "Node.js", percentage: "70%" },
            { skills: "Express.js", percentage: "65%" },
        ]
    },
    {
        title: "Tools",
        icon: <MdDesignServices />,
        skills : [
            { skills: "Git & Github", percentage: "85%" },
            { skills: "Visual Studio Code", percentage: "75%" },
            { skills: "Webpack", percentage: "60%" },
            { skills: "Responsive Design", percentage: "70%" },
        ]
    },
    {
        title: "Soft Skills",
        icon: <GiSkills />,
        skills : [
            { skills: "Problem Solving", percentage: "80%" },
            { skills: "Collaboration", percentage: "85%" },
            { skills: "Attention to Detail", percentage: "60%" },
        ]
    },
];
export const WORK_EXPERIENCE = [
    {
        title: "What is Lorem Ipsum",
        date: "January 2022 - Present",
        responsibilities: [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        ]
    },
    {
        title: "Where does it come from",
        date: "January 2020 - 2023",
        responsibilities: [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        ]
    },
    {
        title: "Why do we use it",
        date: "January 2019 - 2020",
        responsibilities: [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        ]
    },
    {
        title: "Where can I get some",
        date: "January 2018 - 2019",
        responsibilities: [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        ]
    },
];