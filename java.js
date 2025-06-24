// Esperar que o DOM seja completamente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Efeito de digitação para o título
    const titleElement = document.querySelector(".typing-text");
    if (titleElement) {
        const text = titleElement.textContent;
        titleElement.textContent = "";
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                titleElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        typeWriter();
    }
    
    // Menu mobile
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    
    if (hamburger && navMenu) {
        hamburger.addEventListener("click", function() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });
        
        // Fechar o menu ao clicar em um link
        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", function() {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });
    }
    
    // Destacar link ativo no menu
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll(".nav-link");
    
    menuItems.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add("active");
        }
    });
    
    // Animação de scroll suave para links internos
    document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });
    
    // Validação do formulário de contato
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            // Aqui você adicionaria a lógica para enviar o formulário
            // Como é apenas um exemplo, vamos apenas mostrar uma mensagem
            const formStatus = document.getElementById("form-status");
            if (formStatus) {
                formStatus.textContent = "Mensagem enviada com sucesso!";
                formStatus.style.color = "#4CAF50";
                contactForm.reset();
                
                // Limpar a mensagem após 3 segundos
                setTimeout(() => {
                    formStatus.textContent = "";
                }, 3000);
            }
        });
    }

    // --- Lógica de Tradução --- //
    const translations = {
        pt: {
            home: "Home",
            sobre: "Sobre",
            projetos: "Projetos",
            contato: "Contato",
            download_cv: "Download CV",
            hi_im_lorran: "Olá, eu sou o Lorran! Estudante de engenharia da computação. Foco nas áreas de IA e Desenvolvimento Back-end.",
            all_rights_reserved: "Todos os direitos reservados.",
            sobre_mim: "Sobre Mim",
            about_text_1: "Estou em busca da minha primeira oportunidade de emprego. Meu sonho é um dia trabalhar com IA e Machine Learning. Tenho 21 anos e atualmente moro no Brasil. Tenho experiência com SQL, Python, C e Machine Learning. Também estou buscando um emprego que eu possa desenvolver novas habilidades, e eventualmente, aplicar meus conhecimentos.",
            minhas_habilidades: "Minhas Habilidades",
            experiencia: "Experiência",
            seduc_title: "SEDUC - Secretaria de Educação",
            analista_dados: "Analista de Dados",
            seduc_period: "Setembro 2023 - Agosto 2025 (1 ano 7 meses)",
            seduc_desc_1: "Desenvolvi um software personalizado para automatizar processos financeiros, reduzindo tempo e erros operacionais.",
            seduc_desc_2: "Criei dashboards interativos e manipulei planilhas avançadas no Excel integradas com scripts de automação.",
            seduc_desc_3: "Prestei suporte técnico aos usuários, aprimorando habilidades de comunicação e resolução de problemas.",
            formacao: "Formação",
            eng_comp_title: "Bacharelado em Engenharia da Computação",
            ufpa: "UFPA - Universidade Federal do Pará",
            ufpa_period: "Fevereiro 2022 - Dezembro 2027",
            certificacoes: "Certificações",
            cert_excel: "JavaScript:Fundamentos para Desenvolvimento Web Interativo",
            cert_python: "Administrador de Banco de Dados",
            cert_python_2: "Inteligência Artificial para Projetos Sustentáveis",
            meus_projetos: "Meus Projetos",
            projetos_descricao: ".",
            projeto_titulo_1: "titulo",
            projeto_descricao_1: "descrição.",
            projeto_tag_1: "tec 1",
            projeto_titulo_2: "titulo",
            projeto_descricao_2: "descrição.",
            projeto_tag_2: "tec 1",
            projeto_titulo_3: "titulo",
            projeto_descricao_3: "descrição.",
            projeto_tag_3: "tec 1",
            ver_detalhes: "Ver Detalhes",
            entre_em_contato: "Entre em Contato",
            contato_descricao: "Tem alguma pergunta ou proposta? Estou sempre aberto a novas oportunidades e colaborações. Entre em contato comigo através do formulário abaixo ou pelos canais diretos.",
            email_title: "Email",
            linkedin_title: "LinkedIn",
            whatsapp_title: "WhatsApp",
            enviar_mensagem: "Enviar mensagem",
            seu_nome_placeholder: "Seu Nome",
            seu_email_placeholder: "Seu Email",
            assunto_placeholder: "Assunto",
            sua_mensagem_placeholder: "Sua Mensagem",
            enviar: "Enviar",
            vamos_trabalhar_juntos: "Vamos Trabalhar Juntos",
            cta_descricao: "Estou disponível para projetos freelance, oportunidades de trabalho e colaborações. Se você está procurando alguém com experiência em automação, desenvolvimento Python e soluções inteligentes, ficarei feliz em conversar sobre como posso ajudar.",
            enviar_email: "Enviar Email"
        },
        en: {
            home: "Home",
            sobre: "About",
            projetos: "Projects",
            contato: "Contact",
            download_cv: "Download CV",
            hi_im_lorran: "Hi, I'm Lorran! A computer engineering student from Brazil. I focus on AI and Backend Development areas.",
            all_rights_reserved: "All rights reserved.",
            sobre_mim: "About Me",
            about_text_1: "I am looking for my first job opportunity. My dream is to one day work with AI and Machine Learning. I am 21 years old and currently live in Brazil. I have experience with SQL, Python, C and Machine Learning. I am also looking for a job where I can develop new skills, and eventually, apply my knowledge.",
            minhas_habilidades: "My Skills",
            experiencia: "Experience",
            seduc_title: "SEDUC - Department of Education",
            analista_dados: "Data Analyst",
            seduc_period: "September 2023 - August 2025 (1 year 7 months)",
            seduc_desc_1: "I developed custom software to automate financial processes, reducing time and operational errors.",
            seduc_desc_2: "I created interactive dashboards and manipulated advanced Excel spreadsheets integrated with automation scripts.",
            seduc_desc_3: "I provided technical support to users, improving communication and problem-solving skills.",
            formacao: "Education",
            eng_comp_title: "Bachelor's Degree in Computer Engineering",
            ufpa: "UFPA - Federal University of Pará",
            ufpa_period: "February 2022 - December 2027",
            certificacoes: "Certifications",
            cert_excel: "Microsoft Office Specialist: Excel Certification",
            cert_python: "Introduction to Programming with Python",
            cert_python_2: "Introduction to Programming with Python",
            meus_projetos: "My Projects",
            projetos_descricao: ".",
            projeto_titulo_1: "title",
            projeto_descricao_1: "description.",
            projeto_tag_1: "tech 1",
            projeto_titulo_2: "title",
            projeto_descricao_2: "description.",
            projeto_tag_2: "tech 1",
            projeto_titulo_3: "title",
            projeto_descricao_3: "description.",
            projeto_tag_3: "tech 1",
            ver_detalhes: "View Details",
            entre_em_contato: "Get in Touch",
            contato_descricao: "Have any questions or proposals? I'm always open to new opportunities and collaborations. Contact me through the form below or through direct channels.",
            email_title: "Email",
            linkedin_title: "LinkedIn",
            whatsapp_title: "WhatsApp",
            enviar_mensagem: "Send message",
            seu_nome_placeholder: "Your Name",
            seu_email_placeholder: "Your Email",
            assunto_placeholder: "Subject",
            sua_mensagem_placeholder: "Your Message",
            enviar: "Send",
            vamos_trabalhar_juntos: "Let's Work Together",
            cta_descricao: "I am available for freelance projects, job opportunities and collaborations. If you are looking for someone with experience in automation, Python development and intelligent solutions, I would be happy to talk about how I can help.",
            enviar_email: "Send Email"
        }
    };

    function setLanguage(lang) {
        document.documentElement.lang = lang; // Define o atributo lang da tag html
        document.querySelectorAll("[data-key]").forEach(element => {
            const key = element.getAttribute("data-key");
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        // Salva a preferência de idioma no localStorage
        localStorage.setItem("preferredLanguage", lang);
    }

    // Adiciona event listeners aos botões de idioma
    document.querySelectorAll(".lang-button").forEach(button => {
        button.addEventListener("click", function() {
            setLanguage(this.getAttribute("data-lang"));
        });
    });

    // Carrega o idioma preferido do usuário ou define o padrão
    const savedLanguage = localStorage.getItem("preferredLanguage") || "pt";
    setLanguage(savedLanguage);
});

