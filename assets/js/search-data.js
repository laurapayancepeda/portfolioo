// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about-me",
    title: "about-me",
    section: "Navigation",
    handler: () => {
      window.location.href = "/draft/";
    },
  },{id: "nav-work",
          title: "work",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/draft/work/index.html";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "An evolving collection of projects I have built and explored.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/draft/projects/";
          },
        },{id: "dropdown-work",
              title: "work",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/draft/work/";
              },
            },{id: "dropdown-projects",
              title: "projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/draft/projects/";
              },
            },{id: "post-complyguard",
        
          title: "Complyguard",
        
        description: "and my role as a Data and Business Intelligence Analyst",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/draft/blog/2026/complyguard/";
          
        },
      },{id: "post-the-coalesce-group",
        
          title: "The Coalesce Group",
        
        description: "and my role as a Client Reporting Analyst",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/draft/blog/2026/colescegroup/";
          
        },
      },{id: "post-green-bell-packaging",
        
          title: "Green Bell Packaging",
        
        description: "and my role as a Data Analyst",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/draft/blog/2025/greenbellpackaging/";
          
        },
      },{id: "news-inside-my-ba-in-international-business-degree-modules-amp-learnings",
          title: 'Inside My BA in International Business Degree - Modules &amp;amp; Learnings',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/draft/news/bachelors/";
            },},{id: "news-inside-my-msc-business-analytics-and-big-data-degree-modules-amp-learnings",
          title: 'Inside My MSc Business Analytics and Big Data Degree - Modules &amp;amp; Learnings...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/draft/news/masters/";
            },},{id: "news-languages-a-multilingual-journey",
          title: 'Languages- A Multilingual Journey',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/draft/news/languages/";
            },},{id: "projects-predicting-customer-acceptance-for-car-purchases",
          title: 'Predicting Customer Acceptance for Car Purchases',
          description: "RSTUDIO",
          section: "Projects",handler: () => {
              window.location.href = "/draft/projects/car-purchases-predictor/";
            },},{id: "projects-coffee-shop-sales-report",
          title: 'Coffee Shop Sales Report',
          description: "TABLEAU",
          section: "Projects",handler: () => {
              window.location.href = "/draft/projects/coffee-sales/";
            },},{id: "projects-corporate-dashboards-monitoring-and-reporting",
          title: 'Corporate Dashboards - Monitoring and Reporting',
          description: "POWER BI | EXCEL",
          section: "Projects",handler: () => {
              window.location.href = "/draft/projects/corporate-dashboards/";
            },},{id: "projects-employee-analysis-and-summary",
          title: 'Employee Analysis and Summary',
          description: "TABLEAU",
          section: "Projects",handler: () => {
              window.location.href = "/draft/projects/employee-analysis/";
            },},{id: "projects-fisheries-conservation-and-forecasting",
          title: 'Fisheries Conservation and Forecasting',
          description: "TABLEAU | RAPIDMINER",
          section: "Projects",handler: () => {
              window.location.href = "/draft/projects/fisheries-analysis/";
            },},{id: "projects-rotten-fruit-predictor",
          title: 'Rotten Fruit Predictor',
          description: "CV/YOLO | PYTHON",
          section: "Projects",handler: () => {
              window.location.href = "/draft/projects/fruit-predictor/";
            },},{id: "projects-match-game-performance-analysis",
          title: 'Match Game Performance Analysis',
          description: "TABLEAU",
          section: "Projects",handler: () => {
              window.location.href = "/draft/projects/match-analysis/";
            },},{id: "projects-news-content-predictor",
          title: 'News Content Predictor',
          description: "LLM/BERT | PYTHON",
          section: "Projects",handler: () => {
              window.location.href = "/draft/projects/news-predictor/";
            },},{id: "projects-session-training-and-player-performance",
          title: 'Session Training and Player Performance',
          description: "POWER BI",
          section: "Projects",handler: () => {
              window.location.href = "/draft/projects/session-analysis/";
            },},{id: "projects-player-and-team-performance-analysis",
          title: 'Player and Team Performance Analysis',
          description: "RSTUDIO",
          section: "Projects",handler: () => {
              window.location.href = "/draft/projects/team-performance/";
            },},{id: "projects-sentiment-analysis-and-pattern-recognition-in-wellbeing",
          title: 'Sentiment Analysis and Pattern Recognition in Wellbeing',
          description: "RSTUDIO",
          section: "Projects",handler: () => {
              window.location.href = "/draft/projects/wellbeing-analysis/";
            },},{id: "projects-wine-quality-prediction",
          title: 'Wine Quality Prediction',
          description: "RSTUDIO",
          section: "Projects",handler: () => {
              window.location.href = "/draft/projects/wine-quality/";
            },},{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/laura-payan-cepeda", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
