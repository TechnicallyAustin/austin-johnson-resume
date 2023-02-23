const resume = (() => {
    const header = () => {
        const head = document.body.appendChild(document.createElement("header"))
        head.setAttribute("class", "header bg-secondary d-flex flex-column align-items-center border-bottom")
        const title = head.appendChild(document.createElement("h1"))
        title.setAttribute("class", " nav-title text-white mb-0")
        title.textContent = "Austin Johnson"

        const nav = () => { 
            const nav = head.appendChild(document.createElement("nav"))
            nav.setAttribute("class", "contact-info  list-unstyled list-inline ")

            const navLinks = () => {
            const info = nav.appendChild(document.createElement("ul"));
            info.setAttribute("class", "nav-links list-inline-item d-flex col")

            const email = nav.appendChild(document.createElement("li"))
            email.textContent = "TechnicallyAustin@gmail.com | "
            email.setAttribute("class", "email text-white list-inline-item col");

            const phone = nav.appendChild(document.createElement("li"));
            phone.setAttribute("class", "phone text-white list-inline-item col mw-75");
            phone.textContent = "(503)-954-4511 | "

            const github = nav.appendChild(document.createElement("li"));
            github.setAttribute("class", "github text-white list-inline-item col");
            github.textContent = "TechnicallyAustin.github.io | "

            const profile = nav.appendChild(document.createElement("li"));
            profile.setAttribute("class", "profile text-white list-inline-item col");
            profile.textContent = "TechnicallyAustin.com"
            };
            navLinks()

        };
        nav()

    }

    const main = () => {
        const content = document.body.appendChild(document.createElement("main"));
        content.setAttribute("class", "resume-content bg-dark")
        this.main = content
    }

    const sections = () => {
        const titles = ["Summary", "Skills", "Projects", "Experience"]
    
        for (let item of titles){
            let section = this.main.appendChild(document.createElement("section"))
            section.setAttribute("class", `${item.toLowerCase()}`)

            const title = section.appendChild(document.createElement("h2"))
            title.setAttribute("class", `${item.toLowerCase()}-item text-white ms-3 border-bottom`)
            title.textContent = `${item}`
        }
    }

    const summary = () => {
        const section = document.querySelector(".summary");
        const article = section.appendChild(document.createElement("article"));
        const info = section.appendChild(document.createElement("p"));
        info.setAttribute("class", "summary-info text-white p-3 ms-4 mb-0")
        info.textContent = "As a self-taught developer, I have spent the past five years deeply immersed in the world of software development and computer science. During this time, I have taught myself core development principles, built numerous projects, and continuously refined my skills. I am passionate about creating performative and creative solutions that can improve the lives of those around me using technology." + 
                           "As a systems administrator, I have honed my ability to provide excellent solutions to any challenges that may arise. Through this experience, I have developed a knack for crafting innovative and impactful solutions. I am now eager to apply my skills and experience to a new challenge."

    }
    const skills = () => {
        const section = document.querySelector(".skills");
        const article = section.appendChild(document.createElement("article"));
        const list = section.appendChild(document.createElement("ul"));
        list.setAttribute("class", "skill-list d-flex flex-wrap row-cols-4 ms-3")
        // organize the bullets into 4 columns

        const allSkills = ["HTML", "CSS", "JavaScript", "SASS", "BootStrap", "React", "NodeJS", "MongoDB", "Express", "RESTful API's", "GIT", "JEST"]

        for (let i = 0; i < allSkills.length; i++){
            let item = list.appendChild(document.createElement("li"));
            item.setAttribute("class", "experience-list text-white col");
            item.textContent = allSkills[i];
        }
     
    }
    const projects = () => {
        const section = document.querySelector(".projects")
        const subSection = section.appendChild(document.createElement("div"))
        subSection.setAttribute("class", "d-flex justify-content-around gap-3 p-2 ms-3")

        const titles = ["DigitalDash", "Nakama", "LaterGram", "AZ88"]
        
        const project = (title, link, description, technologies) => {
            const getTitle = () => {}
            const getLink = () => {}
            const getInfo = () => {}
            const getTech = () => {}
            
            return {getTitle, getLink, getInfo, getTech}
        };
        
        // creates DOM Project Objects
        for (let i = 0; i < titles.length; i++){
            let item = titles[i]
            let article = subSection.appendChild(document.createElement("article"));
            article.setAttribute("class", `${item.toLowerCase()}text-center border`)
            // using the project title create project cards

            // Card
            let card = article.appendChild(document.createElement("div"));
            card.setAttribute("class", "card border-primary d-flex flex-column justify-content-around align-items-around");

            // Header
            let header = article.appendChild(document.createElement("div"));
            header.setAttribute("class", "card-header text-white");

            let title = header.appendChild(document.createElement("h4"))
            title.setAttribute("class", "mb-0")
            title.textContent = `${titles[i]}`
            
            // Link
            let link = article.appendChild(document.createElement("p"));
            link.setAttribute("class", "card-title text-white mb-0");
            link.textContent = "Github Pages Link"

            // Body
            let body = article.appendChild(document.createElement("div"));
            body.setAttribute("class", "card-body");

            let description = body.appendChild(document.createElement("p"));
            description.setAttribute("class", "project-description mb-0 text-white")
            description.textContent = "This is a blurb about what was learned and accomplished in this project"

            // Footer
            let footer = article.appendChild(document.createElement("div"));
            footer.setAttribute("class", "card-footer");

            let footerInfo = footer.appendChild(document.createElement("p"));
            footerInfo.setAttribute("class", "footer-info mb-0 text-white");
            footerInfo.textContent = "Technologies used"

            let footerButton = footer.appendChild(document.createElement("button"));
            footerButton.setAttribute("class", "btn btn-primary")
            footerButton.setAttribute("href", "#")
            footerButton.textContent = "See my Code!"

            let newProject = project(header, title, body, footer);

        }

        
    }
    const experience = () => {
        const section = document.querySelector(".experience");
        const article = section.appendChild(document.createElement("article"));
        article.setAttribute("class","job d-flex flex-column justify-content-around align-items-start")
        const jobs = ["Comagine Health", "Apple", "OSU Client Services"]
        const positions = ["System Administrator", "Technical Specialist", "Technical Support Analyst"]
        const dates = ["October 2018 - Present", "August 2017 - October 2018", "January 2016 - June 2017"]
        let work = article.appendChild(document.createElement("div"));
        work.setAttribute("class", "previous-jobs");

           for (let i = 0; i < jobs.length; i++){
            let job = jobs[i]
            let position = positions[i]
            let date = dates[i]

            let jobItem = article.appendChild(document.createElement("div"))
            jobItem.setAttribute("class", "job-item text-white w-100 p-3")

            // group comany and a drop down SVG in a div to dynamically create jobs info.
            // display the in a row.
            let company = jobItem.appendChild(document.createElement("h5"));
            company.setAttribute("class", "company mb-0")
            company.textContent = `${job}`


            // group in a div, space between
            let infoDiv = jobItem.appendChild(document.createElement("div"));
            infoDiv.setAttribute("class", "d-flex justify-content-between w-100 border-bottom")

            let title = infoDiv.appendChild(document.createElement("div"))
            title.setAttribute("class", "job-title")
            title.textContent =`${position}`;

            let worked = infoDiv.appendChild(document.createElement("p"));
            worked.setAttribute("class", "employ-dates mb-0");
            worked.textContent =`${date}`
        }
    }


    const footer = () => {}

    return {header, main, sections,summary, skills, projects, experience, footer}
})();    

resume.header()
resume.main()
resume.sections()
resume.summary()
resume.skills()
resume.projects()
resume.experience()


