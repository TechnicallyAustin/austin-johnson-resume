const resume = (() => {
    const header = () => {
        const head = document.body.appendChild(document.createElement("header"))
        head.setAttribute("class", "header bg-dark d-flex flex-column align-items-center border-bottom")
        const title = head.appendChild(document.createElement("h1"))
        title.setAttribute("class", " nav-title text-white mb-0")
        title.textContent = "Austin Johnson"

        const nav = () => { 
            const nav = head.appendChild(document.createElement("nav"))
            nav.setAttribute("class", "contact-info bg-dark list-unstyled list-inline ")

            const navLinks = () => {
            const info = nav.appendChild(document.createElement("ul"));
            info.setAttribute("class", "nav-links list-inline-item col")

            const email = nav.appendChild(document.createElement("li"))
            email.textContent = "TechnicallyAustin@gmail.com"
            email.setAttribute("class", "email text-white list-inline-item col");

            const phone = nav.appendChild(document.createElement("li"));
            phone.setAttribute("class", "phone text-white list-inline-item col mw-75");
            phone.textContent = "(503)-954-4511"

            const github = nav.appendChild(document.createElement("li"));
            github.setAttribute("class", "github text-white list-inline-item col");
            github.textContent = "TechnicallyAustin.github.io"

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
        const list = section.appendChild(document.createElement("ul"))
    }
    const skills = () => {
        const section = document.querySelector(".skills");
        const article = section.appendChild(document.createElement("article"));
        const list = section.appendChild(document.createElement("ul"));
    }
    const projects = () => {
        const section = document.querySelector(".projects");
        const article = section.appendChild(document.createElement("article"));
        const list = section.appendChild(document.createElement("ul"));
    }
    const experience = () => {
        const section = document.querySelector(".experience");
        const article = section.appendChild(document.createElement("article"));
    }

    const footer = () => {}

    return {header, main, sections,summary, skills, projects, experience, footer}
})();    

resume.header()
resume.main()
resume.sections()


