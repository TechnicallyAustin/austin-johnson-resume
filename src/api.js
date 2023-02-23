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
            title.setAttribute("class", `${item.toLowerCase()}-item text-white`)
            title.textContent = `${item}`
        }
    }

    const summary = () => {
        const section = document.querySelector(".summary");
        const article = section.appendChild(document.createElement("article"));
        const info = section.appendChild(document.createElement("p"));
    }
    const skills = () => {
        const section = document.querySelector(".skills");
        const article = section.appendChild(document.createElement("article"));
        const list = section.appendChild(document.createElement("ul"));
        list.setAttribute("class", "skill-list d-flex flex-wrap row-cols-4")
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
        section.setAttribute("class", "projects")
        const list = section.appendChild(document.createElement("ul"));
        const titles = ["DigitalDash", "Nakama", "LaterGram"]
        
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
            let article = section.appendChild(document.createElement("article"));
            article.setAttribute("class", `${item.toLowerCase()}`)
            // using the project title create project cards

            let card = article.appendChild(document.createElement("div"));
            card.setAttribute("class", "card");

            let header = article.appendChild(document.createElement("div"));
            header.setAttribute("class", "card-header text-white");
            header.textContent = `${titles[i]}`

            let title = article.appendChild(document.createElement("h3"));
            title.setAttribute("class", "card-title");
            title.textContent = "Text"


            let body = article.appendChild(document.createElement("div"));
            body.setAttribute("class", "card-body");

            let footer = article.appendChild(document.createElement("div"));
            footer.setAttribute("class", "card-footer");

            let newProject = project(header, title, body, footer);

        }

        
    }
    const experience = () => {
        const section = document.querySelector(".experience");
        const article = section.appendChild(document.createElement("article"));
        
           for (let i = 0; i < 3; i++){
            let item = article.appendChild(document.createElement("li"))
            item.setAttribute("class", "experience-list ")
            item.textContent = "bullet"
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


