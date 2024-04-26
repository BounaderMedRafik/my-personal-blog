import MDXbullet from "@/components/(MDXcomponents)/MDXbullet";
import MDXdescription from "@/components/(MDXcomponents)/MDXdescription";
import MDXlineBreak from "@/components/(MDXcomponents)/MDXlineBreak";
import MDXonelineCode from "@/components/(MDXcomponents)/MDXonelineCode";

export const blogsData = [
  {
    blogid: 0,
    title: "How i made a blog",
    desc: `In today's digital age, having an online presence is crucial for professionals in various industries. As a front-end developer, I realized the importance of showcasing my skills, projects, and experiences to potential clients and employers. Hence, I embarked on a journey to create a blog that would not only serve as a platform to share my front-end development career but also demonstrate my technical expertise. In this blog post, I will take you through my thought process, the tools I used, and the steps I took to bring my blog to life.`,
    image: "/blogzerothumbnail.jpg",
    content: (
      <>
        <div>
          <MDXbullet
            heading="Why I Needed to Make My Blog:"
            data={[
              "Showcasing My Skills: As a front-end developer, I wanted to provide a tangible representation of my abilities to potential clients and employers. A blog would allow me to showcase my expertise, highlight my projects, and share my thoughts on various front-end development topics.",
              "Building an Online Portfolio: Having a blog dedicated to my front-end development career would serve as an online portfolio. It would enable me to curate and display my best work, providing a comprehensive overview of my capabilities to anyone interested in working with me.",
              "Engaging with the Community: The blog would allow me to connect with fellow developers, engage in meaningful discussions, and share insights and experiences. It would be a platform to contribute to the development community and receive valuable feedback on my work.",
            ]}
          />
        </div>
        <div>
          <MDXlineBreak />
        </div>
        <div>
          <MDXdescription heading="Making the blog" />
          <MDXbullet
            heading="Choosing the Tech Stack:"
            data={[
              "Next.js: I opted for Next.js, a powerful React framework, to build my blog. Next.js provides server-side rendering, which improves performance and enhances the user experience.",
              "Tailwind CSS: To ensure a clean and responsive design, I utilized Tailwind CSS. Its utility-first approach and extensive set of pre-built components made designing my blog a breeze.",
              "Shadcn/UI: For added functionality and aesthetic appeal, I integrated Shadcn/UI components. These ready-made UI components helped enhance the user interface and save development time.",
              "TypeScript: To ensure code reliability and maintainability, I used TypeScript. Its static typing and advanced tooling capabilities helped catch potential errors early on and improve overall code quality.",
              "Aceternity UI: I incorporated Aceternity UI, a UI library built with accessibility in mind, to ensure a seamless experience for all users.",
            ]}
          />
          <MDXbullet
            heading="Planning and Designing:"
            data={[
              "I started by outlining the structure and content of my blog, including the main sections, navigation, and layout.",
              "Using the Tailwind CSS framework, I designed a clean and modern user interface, ensuring readability and usability across different devices and screen sizes.",
              "Through careful consideration of color schemes, typography, and imagery, I aimed to create an aesthetically pleasing and engaging experience for visitors.",
            ]}
          />
          <MDXbullet
            heading="Developing and Deploying:"
            data={[
              "Leveraging Next.js's powerful features, I began developing the necessary components and pages for my blog.",
              "I used TypeScript to write clean and maintainable code, ensuring better code organization and reducing the potential for bugs.",
              "Throughout the development process, I regularly tested my blog to ensure its responsiveness and functionality across various browsers and devices.",
              "Once development was complete, I deployed my blog to a hosting platform, making it accessible to the public.",
            ]}
          />
        </div>
        <div>
          <MDXlineBreak />
        </div>
        <div>
          <MDXdescription heading="Cloning the blog">
            feel free to clone my project in your machine by following the steps
            below, since this is open source project i making, take the full
            access to the github reposit
            <span className="ml-2 text-primary font-semibold">
              <a
                href="https://github.com/BounaderMedRafik/my-personal-blog"
                target="_blank"
              >
                personal-blog
              </a>
            </span>
          </MDXdescription>
          <MDXbullet
            heading="clone using github"
            data={[
              <>
                <div>
                  <MDXonelineCode code="git clone https://github.com/BounaderMedRafik/my-personal-blog.git" />
                </div>
              </>,
            ]}
            bulletless
          />
          <MDXbullet
            heading="install dependecies"
            data={[
              <>
                <div>
                  <MDXonelineCode code="npm i" />
                </div>
              </>,
            ]}
            bulletless
          />
          <MDXbullet
            heading="run in localhost:300"
            data={[
              <>
                <div>
                  <MDXonelineCode code="npm run blog" />
                </div>
              </>,
            ]}
            bulletless
          />
        </div>
        <div>
          <MDXlineBreak />
        </div>
        <div>
          <MDXdescription heading="Conclusion">
            Creating my blog to showcase my front-end development career has
            been an exciting and fulfilling journey. Through careful planning,
            utilizing the right tech stack, and focusing on design and
            functionality, I was able to bring my vision to life. My blog now
            serves as an online portfolio, allowing me to share my skills,
            projects, and experiences with potential clients and employers.
            Moreover, it enables me to engage with the development community,
            contribute to discussions, and receive valuable feedback. If you're
            considering building your own blog, I hope this post has provided
            you with insights and inspiration to embark on your own rewarding
            journey. Happy blogging!
          </MDXdescription>
        </div>
      </>
    ),
  },
  {
    blogid: 1,
    title: "Aceternity UI: New & Fresh",
    desc: `Aceternity UI is a new framework for styling websites in React and NextJS. It has gained significant attention from the web development community due to its innovative features and stunning design components 
    . This framework offers a wide range of animated components that are ready to be copied and pasted into websites, making it easier for developers to create visually appealing and interactive user interfaces.`,
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjP4WfPvOTXN_HsFj14iXZeOQyw61Dy0VHWh0jY_j68WOdAYNc6IwhNacBKS-SpW8bIOYJQANEuOggwlOVdjqOjIjUdnUq-zD1CB3IRLqCXzC3tO3cmH8eXuRb6KuzfZ5k5ZgNj1DLJtXoZs9wwqtxUUYOxMOyrIubcIG_ujzW1qdwIeuWU7eJLyvTQvywF/s2200/Meet%20Aceternity%20UI%20-%20A%20Mind%20Blowing%20UI%20Component%20Library.webp",
    content: (
      <>
        <div>
          <div>
            <MDXdescription heading="Key Features of Aceternity UI">
              Aceternity UI stands out for its seamless integration of
              framer-motion, Tailwind CSS, and shadcn, which results in a
              masterclass in UI design . The framework provides a collection of
              starting UI components that can be easily customized and modified
              to fit any developer's needs . These components are created using
              HTML elements, giving developers extensive control over each
              component . Aceternity UI also offers a variety of transitions and
              animations, allowing developers to create engaging and dynamic
              user experiences.
            </MDXdescription>
            <MDXdescription heading="Benefits of Aceternity UI">
              One of the main advantages of Aceternity UI is its simplicity and
              ease of use. Developers can quickly build great-looking websites
              within minutes by leveraging the pre-built components and
              animations provided by the framework . The framework eliminates
              the need for developers to worry about styling and animations, as
              they can simply copy and paste the trending components into their
              websites . Aceternity UI also provides the source code and
              examples for each component, making it easier for users to choose
              and implement the desired components .
            </MDXdescription>
            <MDXdescription heading="Conclusion">
              Aceternity UI is a revolutionary framework that offers a wide
              range of animated components and stunning design elements for web
              development. Its seamless integration of framer-motion, Tailwind
              CSS, and shadcn sets it apart from other UI frameworks. With
              Aceternity UI, developers can easily create visually appealing and
              interactive user interfaces, saving time and effort in the
              development process. Whether you're a beginner or an experienced
              developer, Aceternity UI provides the tools and resources to
              enhance your web development projects .
            </MDXdescription>
          </div>
        </div>
      </>
    ),
  },
];
