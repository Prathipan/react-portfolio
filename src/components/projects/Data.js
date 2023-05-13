import Work1 from "../../assets/work1.png"
import Work2 from "../../assets/work2.png"
import Work3 from "../../assets/work3.png"
import Work4 from "../../assets/work4.png"
import Work5 from "../../assets/work5.png"
import Work6 from "../../assets/work6.png"
import Work7 from "../../assets/work7.png"

export const projects = [
    {
        id: 1,
        image: Work4,
        title: "Shop Zone(Ecomm App)",
        category: "MERN",
        desc : `Developed a user-friendly online
        shopping platform with comprehensive product catalogue, secure
        payment gateway integration, and efficient order management
        system.`,
        link : "https://shopzone-client.netlify.app/",
        FECode: "https://github.com/Prathipan/ecomm-client",
        BECode : "https://github.com/Prathipan/ecomm-server"
      },
      {
        id: 2,
        image: Work1 ,
        title: "Money manager",
        desc : `Created Money manager where the registered user can track their
        income and expense histories for future reference.`,
        category: "MERN",
        link : "https://prathipan-money-manager.netlify.app/",
        FECode: "https://github.com/Prathipan/money-manager-client",
        BECode : "https://github.com/Prathipan/money-manager-backend"
      },
      {
        id: 3,
        image: Work5,
        title: "Chat Application",
        desc : `Developed a chat application that allows real-time communication
        between users with message history.`,
        category: "MERN",
        link : "https://prathipan-chat-application.netlify.app/",
        FECode: "https://github.com/Prathipan/Chat-App-Client",
        BECode : "https://github.com/Prathipan/Chat-App-server"
      },
      {
        id: 4,
        image: Work6,
        title: "Netflix clone",
        desc : `Implemented a Netflix clone that offers a similar user
        interface like netflix, personalized content recommendations, and multi-device
        compatibility for streaming movies.`,
        category: "MERN",
        link : "https://videoflix-client.netlify.app",
        FECode: "https://github.com/Prathipan/netflix-clone-client",
        BECode : "https://github.com/Prathipan/netflix-clone-server"
      },
      {
        id: 5,
        image: Work7,
        title: "Netflix clone admin",
        desc : `Admin panel for netflix clone where admin can manage the users and videos`,
        category: "MERN",
        link : "https://onlineott-admin-dashboard.netlify.app/",
        FECode: "https://github.com/Prathipan/netflix-clone-admin",
        BECode : "https://github.com/Prathipan/netflix-clone-server"
      },    
      {
        id: 6,
        image: Work3,
        title: "Admin dashboard",
        category: "React",
        desc : "Simple admin dashboard with some charts, buttons and users list",
        link : "https://prathipan-sb-admin.netlify.app/",
        FECode: "https://github.com/Prathipan/SB-Admin-react"
      },
      {
        id: 7,
        image: Work2,
        title: "Library management system",
        desc : `Simple Library app which I have implemented simple CRUD operation`,
        category: "React",
        link : "https://prathipan-lms.netlify.app/",
        FECode: "https://github.com/Prathipan/LMS-client"
      }
      
]

export const projectsNav = [
    {
        name : "all"
    },
    {
        name : "React"
    },
    {
        name : "MERN"
    }
]

