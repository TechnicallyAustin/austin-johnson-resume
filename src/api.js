const resume = (() => {
    const header = () => {
        const header = document.body.appendChild(document.createElement("header"))
        const nav = header.appendChild(document.createElement("nav"))
        nav.setAttribute("class", "nav bg-dark")

        const title = nav.appendChild(document.createElement("p"))
        title.setAttribute("class", " nav-title text-white")
        title.textContent = "Austin Johnson"
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
            title.setAttribute("class", "summary-title text-white")
            title.textContent = `${item}`
        }
    }

    const articles = () => {
        
    }

    const footer = () => {}




    return {header, main, sections, footer}
})();    

resume.header()
resume.main()
resume.sections()


