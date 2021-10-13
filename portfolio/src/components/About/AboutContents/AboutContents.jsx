import React from 'react';
import { Link } from 'react-router-dom';

const AboutContents = (props) => {
    if (props.type === "home"){
        return (
            <div>
                <p className="display-6 my-3">Hi, I'm Ryan! I'm glad you're here.</p>
                <p className="my-1">I'm a full stack developer with an insatiable desire to learn and create.
                Whether it's food, music, or tech, I always take the same approach- 
                start with the basics. I make sure that all the needs are met, then
                I add my signature with a high quality flourish that makes my creations
                stand out. I'm always thinking about ways to improve and expand on my work,
                and I love to take on a new challenge.</p>

                <p className="my-3">Grab a cup of coffee, take a look around. If you have any questions or
                would like to get to know me better, make sure to reach out <Link to="/contact">here.</Link></p>
            </div>
        )
    } else {
        return (
            <div>
                <p className="display-6 m-4">I'm thrilled you would like to know more about me!</p>
                <p className="h4 py-4">Let's dig in: I'm a full stack dev, guitarist, fisherman, pit boss, father, gardener, and - above all else - a person who loves to learn.</p>
                <p><span className="h5">As a dev, I have found a serious love for C# and .Net, and I am always thinking about a new project to get started on. </span>
                    My passion for coding actually started in an unlikely place- writing formulas in Microsoft Excel!
                    The feeling of making the computer take over some of my work was profound, and left my curious about what other ways I could make computers work.
                    It didn't take long to come across Python, and I dove in. I spent a year studying Python and Software Development principles through Codecademy until I stumbled across C#.
                    The first project I did in C# was Tim Corey's <a href="https://www.youtube.com/watch?v=wfWxdh-_k_4">C# Start to Finish</a>- which was my first exposure to C#, WinForms, SQL, and Dapper. 
                    After completing that project and making a few changes, I was excited to start my next project, and realized there was still a lot I didn't know. Rather than struggle through and try to figure out
                    how to start projects, I decided to pursue a bootcamp. </p> 
                <p><span className="h5">After careful consideration and comparison of dozens of different programs, I enrolled in devCodeCamp's Software Development bootcamp. </span> 
                    In this program, I learned JavaScript, HTML, CSS, React, Django, ASP.NET, and so much more. I used tools like Visual Studio, VS Code, Postman, Adobe XD, and most importantly, a wonderful team of instructors.
                    I built dozens of projects and worked on teams with multiple different people, all remote. The course concluded with an individual capstone project, <Link to="/work">Hobby Radar</Link>. I applied all I had learned,
                    and then some. I figured out how to implement MailKit and Twilio, so my application could extend beyond the website. I used Google APIs and explored Redux. I built my first recommendation engine, and I am very proud 
                    of the end result. You can see my demo video <a href="https://www.youtube.com/watch?v=_ovOn3DvTFI">here</a>. I'm currently looking for work while further refinining my skills, and I can't wait to see what I learn next!
                </p>
                <p><span className="h5">Beyond programming, I have a great deal of interests. </span>  I've been playing guitar for about 14 years, and I love making music with my friends. My tastes range from Bluegrass to Heavy Metal to Classical, and everywhere in between.
                    I've recently discovered a passion for fishing- mostly because of the zen of it. Being in nature is grounding, and it's always a new experience! I usually fish from my kayak, but I enjoy fishing just about anywhere I can.
                    Another hobby of mine is smoking- I can make a mean brisket, fall-off-the-bone ribs, and delicious chicken. Sticking to the theme of learning, there's always something new to try and discover in the world of smoking.
                    If that's your thing, let's get together and I'll make you a sampler! I'm also a very proud father of two amazing little girls, who are my pride and joy. They are part of my motivation to continue to learn
                    and challenge myself with programming. I want them to know they can do hard things. I want them to be able to see the results of working hard and pursuing your passions. Additionally, I've recently become interested in 
                    gardening! I built some raised beds and grew all kinds of produce for my family this year, which is something that I had both never done before and had no idea how to do. I'm not joking about my passion for learning! I 
                    am constantly absorbing and implementing new information, and I get so much joy from accomplishing even something as small as growing my first radish.
                </p>
                <p className="lead">I hope that gives you a much better idea of who I am- but there's still more! Make sure to <Link to="/contact">reach out</Link> to learn even more about me, even if it's just to chat!
                    Thank you so much for taking a look at my site, and the time you put into learning about me. I hope you'll visit again soon and check out new developments as I get them put up!
                </p>
            </div>
        )
    }
}

export default AboutContents;