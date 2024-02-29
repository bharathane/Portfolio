import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import TabItem from "../EachTableItem";
import ProjectItem from "../ProjectItem";

import "./index.css";

const tabsList = [
  {
    id: uuidv4(),
    category: "SINGLE PAGE",
    text: "Single Page",
  },
  {
    id: uuidv4(),
    category: "DYNAMIC",
    text: "Dynamic Page",
  },
  {
    id: uuidv4(),
    category: "RESPONSIVE",
    text: "Responsive Page",
  },
];

const projectsDetails = [
  {
    id: uuidv4(),
    name: "Insta Clone",
    url: "https://bharath108.ccbp.tech/login",
    category: "SINGLE PAGE",
    repoLink: "https://github.com/bharathane/instaCloneRepo.git",
    imageUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1709200045/Insta-Clone_kcg69e.png",
  },
  {
    id: uuidv4(),
    name: "NXT Watch",
    url: "https://bharath359.ccbp.tech/",
    category: "SINGLE PAGE",
    repoLink: "https://github.com/bharathane/NxtWatch.git",
    imageUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1708931638/Screenshot_9_gjpu7w.png",
  },
  {
    id: uuidv4(),
    name: "Rock Paper Scissor",
    url: "https://rock-paper-scissor-game-orpin.vercel.app/",
    category: "SINGLE PAGE",
    repoLink: "https://github.com/bharathane/rock-paper-scissor-game.git",
    imageUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1708932416/Screenshot_2024-01-28_151824_grygn8.png",
  },
  {
    id: uuidv4(),
    name: "Gradient Generator",
    url: "https://gradient-generator-1btp.onrender.com/",
    category: "SINGLE PAGE",
    repoLink: "https://github.com/bharathane/Gradient-Generator.git",
    imageUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1708932532/Screenshot_2024-02-26_125827_iyjpwh.png",
  },
  {
    id: uuidv4(),
    name: "Meme Generator",
    url: "https://meme-generator-17xl.onrender.com/",
    category: "SINGLE PAGE",
    repoLink: "https://github.com/bharathane/Meme-Generator.git",
    imageUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1708932651/meme-genarator_lyovnu.png",
  },
  {
    id: uuidv4(),
    name: "Jobby App",
    url: "https://bharathjobbyapp.ccbp.tech/login",
    category: "SINGLE PAGE",
    repoLink: "https://github.com/bharathane/jobbyApp.git",
    imageUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1708950765/jobby_app_t3qy2n.png",
  },
  {
    id: uuidv4(),
    name: "Prime Video",
    url: "https://prime-video-delta.vercel.app/",
    category: "SINGLE PAGE",
    repoLink: "https://github.com/bharathane/prime-video.git",
    imageUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1708932743/prime-video_yxr813.png",
  },
  {
    id: uuidv4(),
    name: "Popular Git Repos",
    url: "https://bharathane.github.io/popular-git-repos/",
    category: "SINGLE PAGE",
    repoLink: "https://github.com/bharathane/popular-git-repos.git",
    imageUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1709025963/popular-git-repos_kk2ntg.png",
  },
  {
    id: uuidv4(),
    name: "CCBP Timeline",
    url: "https://bharathane.github.io/ccbp-timeline/",
    category: "SINGLE PAGE",
    repoLink: "https://github.com/bharathane/ccbp-timeline.git",
    imageUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1709026083/ccbp-timeline_hndyt7.png",
  },
  {
    id: uuidv4(),
    name: "CoWin Dashboard",
    url: "https://bharathane.github.io/cowin-dashboard/",
    category: "SINGLE PAGE",
    repoLink: "https://github.com/bharathane/cowin-dashboard.git",
    imageUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1709026184/cowin-dashboard_hccjiq.png",
  },
  {
    id: uuidv4(),
    name: "Events Booking",
    url: "https://events-booking-gold.vercel.app/",
    category: "SINGLE PAGE",
    repoLink: "https://github.com/bharathane/Events-Booking.git",
    imageUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1709186474/events_booking_obgifh.png",
  },
  {
    id: uuidv4(),
    name: "Stop Watch",
    url: "https://bharathane.github.io/Stop-Watch/",
    category: "SINGLE PAGE",
    repoLink: "https://github.com/bharathane/Stop-Watch.git",
    imageUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1709186611/Stop-Watch_hlnllj.png",
  },
  {
    id: uuidv4(),
    name: "Emoji Game",
    url: "https://emoji-game-neon.vercel.app/",
    category: "SINGLE PAGE",
    repoLink: "https://github.com/bharathane/Emoji-Game.git",
    imageUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1709186749/Emoji-Game_y7ae6x.png",
  },
  {
    id: uuidv4(),
    name: "Todo's List",
    url: "https://bharath360.ccbp.tech/",
    category: "DYNAMIC",
    repoLink: "https://github.com/bharathane/Todo-app.git",
    imageUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1709189261/todo-list_dencgl.png",
  },
  {
    id: uuidv4(),
    name: "Wikipedia",
    url: "https://searchsite.ccbp.tech/",
    category: "DYNAMIC",
    repoLink: "https://github.com/bharathane/wikipedia.git",
    imageUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1709187739/wikipedia-search_rai9nr.png",
  },
  {
    id: uuidv4(),
    name: "Food Munch",
    url: "https://bharath361.ccbp.tech/",
    category: "RESPONSIVE",
    repoLink: "https://github.com/bharathane/Food-Munch.git",
    imageUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1709190707/Food-Munch_l910gw.png",
  },
  {
    id: uuidv4(),
    name: "Lab Test",
    url: "https://bharath333.ccbp.tech/",
    category: "RESPONSIVE",
    repoLink: "https://github.com/bharathane/LabTest.git",
    imageUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1709191339/Lab-Test_led4r9.png",
  },
  {
    id: uuidv4(),
    name: "Simplotel",
    url: "https://bharathsimplo.ccbp.tech/",
    category: "RESPONSIVE",
    repoLink: "https://github.com/bharathane/simplotel-assignment.git",
    imageUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1709192937/simplotel_xi7rdq.png",
  },
  {
    id: uuidv4(),
    name: "Movie Tickets",
    url: "https://bhrath.ccbp.tech/",
    category: "SINGLE PAGE",
    repoLink: "https://github.com/bharathane/leadrat.git",
    imageUrl:
      "https://res.cloudinary.com/dr2jqbir9/image/upload/v1709200341/Movie-Tickets_pc36rx.png",
  },
];

const Projects = () => {
  const [btnId, setBtnId] = useState(projectsDetails[0].category);

  const getIdFromChild = (id) => {
    setBtnId(id);
  };

  const filterItems = projectsDetails.filter((each) => each.category === btnId);

  return (
    <div className="projects-container">
      <ul className="tabs-list-con">
        {tabsList.map((each) => (
          <TabItem
            single={each}
            key={each.id}
            getIdFromChild={getIdFromChild}
            isActive={each.id === btnId}
          />
        ))}
      </ul>
      <ul className="all-projects">
        {filterItems.map((each) => (
          <ProjectItem single={each} key={each.id} />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
