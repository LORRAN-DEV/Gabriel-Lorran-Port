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
    // Traduções atualizadas
    const translations = {
        pt: {
            home: "Início",
            sobre: "Sobre",
            projetos: "Projetos",
            contato: "Contato",
            download_cv: "Baixar CV",
            hi_im_lorran: "Olá, eu sou o Lorran! Estudante de Engenharia da Computação focado em IA e Back-end.",
            all_rights_reserved: "Todos os direitos reservados.",
            sobre_mim: "Sobre Mim",
            about_text_1: "Buscando minha primeira oportunidade de emprego, sonho trabalhar com IA e Machine Learning. Tenho 21 anos e moro no Brasil. Possuo experiência com SQL, Python, C e Machine Learning, buscando sempre desenvolver novas habilidades e aplicar meus conhecimentos.",
            minhas_habilidades: "Minhas Habilidades",
            experiencia: "Experiência",
            seduc_title: "SEDUC - Secretaria de Educação",
            analista_dados: "Analista de Dados",
            seduc_period: "Setembro 2023 - Agosto 2025 (1 ano 7 meses)",
            seduc_desc_1: "Desenvolvi software para automatizar processos financeiros, reduzindo tempo e erros.",
            seduc_desc_2: "Criei dashboards interativos e planilhas automatizadas no Excel.",
            seduc_desc_3: "Prestei suporte técnico aprimorando comunicação e resolução de problemas.",
            formacao: "Formação",
            eng_comp_title: "Bacharelado em Engenharia da Computação",
            ufpa: "UFPA - Universidade Federal do Pará",
            ufpa_period: "Fevereiro 2022 - Dezembro 2027",
            certificacoes: "Certificações",
            cert_excel: "JavaScript: Fundamentos para Web Interativa",
            cert_python: "Administrador de Banco de Dados",
            cert_python_2: "IA para Projetos Sustentáveis",
            meus_projetos: "Meus Projetos",
            projetos_descricao: "Projetos realizados para prática e aperfeiçoamento profissional.",
            projeto_titulo_1: "API_VOUCHER",
            projeto_descricao_1: "API REST em Spring Boot + MySQL + Docker com cadastro e autenticação de usuários, cadastro de produtos, geração e gestão de vouchers, documentação Swagger.",
            projeto_tag_1: "Java | Docker | Spring | MySQL",
            projeto_titulo_2: "Encurtador de URL",
            projeto_descricao_2: "Projeto de encurtador de URL em PHP + MySQL com redirecionamento automático, ideal para aprendizado prático.",
            projeto_tag_2: "PHP | MySQL",
            projeto_titulo_3: "Projeto Exemplo",
            projeto_descricao_3: "Descrição de projeto exemplo para portfólio.",
            projeto_tag_3: "Tecnologia",
            ver_detalhes: "Ver Detalhes",
            entre_em_contato: "Entre em Contato",
            contato_descricao: "Tem alguma pergunta ou proposta? Estou aberto a colaborações e oportunidades. Fale comigo pelo formulário abaixo ou por contato direto.",
            email_title: "Email",
            linkedin_title: "LinkedIn",
            whatsapp_title: "WhatsApp",
            enviar_mensagem: "Enviar Mensagem",
            seu_nome_placeholder: "Seu Nome",
            seu_email_placeholder: "Seu Email",
            assunto_placeholder: "Assunto",
            sua_mensagem_placeholder: "Sua Mensagem",
            enviar: "Enviar",
            vamos_trabalhar_juntos: "Vamos Trabalhar Juntos",
            cta_descricao: "Disponível para projetos, freelance e oportunidades em Python, Java, automação e IA.",
            enviar_email: "Enviar Email"
        },
        en: {
            home: "Home",
            sobre: "About",
            projetos: "Projects",
            contato: "Contact",
            download_cv: "Download CV",
            hi_im_lorran: "Hi, I\'m Lorran! A Computer Engineering student focused on AI and Backend Development.",
            all_rights_reserved: "All rights reserved.",
            sobre_mim: "About Me",
            about_text_1: "I am looking for my first job opportunity and dream of working with AI and Machine Learning. I am 21 years old and live in Brazil. I have experience with SQL, Python, C, and Machine Learning, always looking to develop new skills and apply my knowledge.",
            minhas_habilidades: "My Skills",
            experiencia: "Experience",
            seduc_title: "SEDUC - Department of Education",
            analista_dados: "Data Analyst",
            seduc_period: "September 2023 - August 2025 (1 year 7 months)",
            seduc_desc_1: "Developed software to automate financial processes, reducing time and errors.",
            seduc_desc_2: "Created interactive dashboards and automated Excel spreadsheets.",
            seduc_desc_3: "Provided technical support, improving communication and problem-solving skills.",
            formacao: "Education",
            eng_comp_title: "Bachelor\'s in Computer Engineering",
            ufpa: "UFPA - Federal University of Pará",
            ufpa_period: "February 2022 - December 2027",
            certificacoes: "Certifications",
            cert_excel: "JavaScript: Fundamentals for Interactive Web",
            cert_python: "Database Administrator",
            cert_python_2: "AI for Sustainable Projects",
            meus_projetos: "My Projects",
            projetos_descricao: "Projects for practice and professional improvement.",
            projeto_titulo_1: "API_VOUCHER",
            projeto_descricao_1: "REST API with Spring Boot + MySQL + Docker for user registration and authentication, product registration, voucher generation and management, with Swagger documentation.",
            projeto_tag_1: "Java | Docker | Spring | MySQL",
            projeto_titulo_2: "URL Shortener",
            projeto_descricao_2: "A URL shortener project using PHP + MySQL with automatic redirection, ideal for practical learning.",
            projeto_tag_2: "PHP | MySQL",
            projeto_titulo_3: "Sample Project",
            projeto_descricao_3: "Sample project description for portfolio.",
            projeto_tag_3: "Technology",
            ver_detalhes: "View Details",
            entre_em_contato: "Get in Touch",
            contato_descricao: "Have a question or proposal? Open to collaborations and opportunities. Contact me using the form below or via direct contact.",
            email_title: "Email",
            linkedin_title: "LinkedIn",
            whatsapp_title: "WhatsApp",
            enviar_mensagem: "Send Message",
            seu_nome_placeholder: "Your Name",
            seu_email_placeholder: "Your Email",
            assunto_placeholder: "Subject",
            sua_mensagem_placeholder: "Your Message",
            enviar: "Send",
            vamos_trabalhar_juntos: "Let\'s Work Together",
            cta_descricao: "Available for projects, freelance work, and opportunities in Python, Java, automation, and AI.",
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


