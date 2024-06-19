import '../styles/project.scss'

import UnifilNews1 from '../assets/UnifilNews 1.png'
import UnifilNews2 from '../assets/UnifilNews 2.png'
import UnifilNews3 from '../assets/UnifilNews 3.png'
import UnifilNews4 from '../assets/UnifilNews 4.png'
import UnifilNews5 from '../assets/UnifilNews 5.png'
import UnifilNews6 from '../assets/UnifilNews 6.png'
import UnifilNews7 from '../assets/UnifilNews 7.png'


const Project = () => {
  return (
    <div className='project'>
        <div className='projectHeader'>
            <h1>Unifil.News</h1>
            <a href="https://github.com/lucasgvr/crud-robson-backend">Code for the Back-End</a>
            <a href="https://github.com/lucasgvr/crud-robson-frontend">Code for the Front-End</a>
        </div>

        <div className='projectContent'>
            <div className="projectOverview">
                <h2>Project Overview</h2>
                <p>My extension practices project proposes the creation and maintenance of a blog dedicated to disseminating knowledge and promoting interaction among students, teachers, and the community at large.</p>
                <p>The main objective of the blog is to provide a dynamic and educational online space where relevant information and valuable insights can be shared. We aim to encourage active community participation, fostering collaborative learning and the creation of an inclusive knowledge network.</p>
                <p>This project is justified by the need to create an accessible, updated, and interactive communication channel that meets the demands for learning and exchange of experiences. Through the blog, we seek to fill information gaps, establish effective dialogue among different audiences, and strengthen ties between academic institutions and society.</p>
                <p>The central theme addressed in the blog revolves around Professional and Academic Development, a topic that addresses fundamental issues in today's landscape. Through articles, interviews, tutorials, and analyses, we will explore the most relevant aspects of this theme, providing a broader and critical understanding.</p>
                <p>The democratization of knowledge is essential for sustainable community development, and the blog emerges as a valuable tool to achieve this goal. Our approach aims to make content accessible to all audiences, stimulate active participation, and foster constructive discussions. By sharing information clearly and engagingly, we aim to create an atmosphere of continuous learning where each reader feels integral to the educational process.</p>
                <p>In summary, the blog represents more than just a virtual space. It serves as a transformative agent, connecting knowledge, experiences, and people for mutual enrichment.</p>
            </div>

            <div className="features">
                <h2>Features</h2>
                <ul>
                    <li><strong>User Authentication and Profiles:</strong> Secure user registration and login, with customizable user profiles.</li>
                    <li><strong>Content Creation and Management:</strong> Create, edit, and delete posts/articles, with rich text formatting options and draft saving.</li>
                    <li><strong>Social Interaction:</strong> Commenting system for user engagement, like/upvote system, and share functionality.</li>
                    <li><strong>Notifications:</strong> Real-time notifications for comments, likes, and replies, with customizable settings.</li>
                    <li><strong>Collaboration and Multi-user Support:</strong> Collaboration features, roles/permissions management.</li>
                </ul>
            </div>

            <div className="technologies">
                <h2>Technologies Used</h2>
                <ul>
                    <li><strong>Frontend:</strong> React</li>
                    <li><strong>Styling:</strong> SCSS</li>
                    <li><strong>Backend:</strong> Node.JS</li>
                    <li><strong>Database:</strong> MySql</li>
                </ul>
            </div>

            <div className="screenshots">
                <h2>Screenshots</h2>
                <div className='screenshotsGrid'>
                    <div className="screenshot">
                        <img src={UnifilNews1} alt="Screenshot 1" />
                    </div>
                    <div className="screenshot">
                        <img src={UnifilNews2} alt="Screenshot 2" />
                    </div>
                    <div className="screenshot">
                        <img src={UnifilNews3} alt="Screenshot 3" />
                    </div>
                    <div className="screenshot">
                        <img src={UnifilNews4} alt="Screenshot 4" />
                    </div>
                    <div className="screenshot">
                        <img src={UnifilNews5} alt="Screenshot 5" />
                    </div>
                    <div className="screenshot">
                        <img src={UnifilNews6} alt="Screenshot 6" />
                    </div>
                    <div className="screenshot">
                        <img src={UnifilNews7} alt="Screenshot 7" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project