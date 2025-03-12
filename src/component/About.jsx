import myImage from "../assets/img/myphoto.jpg";
export default function About() {
  return (
    <section className="about" id="aboutme">
      <div className="wholediv">
        <div className="photo">
          <img className="myPhoto" src={myImage} alt="my photo" />
        </div>
        <div className="aboutme">
          <h1>ABOUT ME</h1>
          <p>
            Hello! I’m Ruska, a web developer with a passion for building
            interactive and responsive websites. I started my journey in 2022,
            studying Computer Science, where I developed a solid understanding
            of programming fundamentals. Wanting to further my skills, I
            enrolled in various online courses on platforms like Udemy. A key
            milestone in my learning journey was completing a React course,
            which helped me dive into modern web development technologies. I
            gained hands-on experience with React, Tailwind CSS, Redux, and
            Next.js—tools that have equipped me to build dynamic and scalable
            web applications. I’m continuously learning new frameworks and
            technologies to stay current and confident in both front-end and
            back-end development. With a focus on creating seamless user
            experiences and efficient websites, I’m always excited to tackle new
            challenges and grow as a web developer.
          </p>
        </div>
      </div>
      <div className="hobby">
        <h2>My Hobby</h2>
        <p>
          When I'm not coding, I enjoy watching films that explore sensitive and
          thought-provoking topics like racism, Nazism, and their impact on
          human emotions. I find it fascinating to learn about the fears,
          struggles, and intense human experiences portrayed in these stories.
          Documentaries and films about these topics often evoke a strong
          emotional response, and they provide a deeper understanding of how
          history has shaped the present.
        </p>
        <p>
          Additionally, I love watching films based on true stories, real
          videos, and diving into investigative topics like serial killers and
          unsolved mysteries. It's fascinating to analyze real-life events
          through documentaries and investigative series, gaining new
          perspectives on the complexities of human behavior and societal
          issues.
        </p>
      </div>
    </section>
  );
}
