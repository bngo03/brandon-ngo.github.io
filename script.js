document.addEventListener('DOMContentLoaded', () => {
  const projectContainer = document.getElementById('project-container');

  const projects = [
    {
      title: "Decoding Diabetes",
      description: "Built a Random Forest model (78% accuracy) to predict diabetes from a 768-patient dataset. Highlighted glucose and BMI as key predictors using Python and Scikit-learn.",
      image: "images/decoding_diabetes.jpg",
      link: "https://github.com/bngo03/decoding-diabetes"
    },
    {
      title: "Mutual Funds & ETFs Analysis",
      description: "Analyzed 24,239 funds with regression (R²=0.62) and K-means clustering to identify top ETFs. Recommended Vanguard S&P 500 ETF for its high Sharpe ratio.",
      image: "images/mutual_funds_etfs.jpg",
      link: "https://github.com/bngo03/mutual-funds-etfs"
    },
    {
      title: "Syracuse Basketball Analytics",
      description: "Created a shot quality metric and used regression to pinpoint high-efficiency plays (>1.13 points/possession) for Utah and Minnesota’s strategies.",
      image: "images/syracuse_basketball.png",
      link: "https://github.com/bngo03/syracuse-basketball"
    },
    {
      title: "Sports Analytics Practicum",
      description: "Predicted NBA draft targets (e.g., Dalton Knecht) and evaluated Charlotte FC and Panthers’ metrics to guide roster decisions using R and SQL.",
      image: "images/sports_practicum.png",
      link: "https://github.com/bngo03/sports-practicum"
    }
  ];

  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'bg-white p-6 rounded-xl shadow-lg card-hover fade-in';
    projectCard.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover rounded-lg mb-4">
      <h3 class="text-2xl font-semibold text-indigo-900">${project.title}</h3>
      <p class="text-gray-600 mt-2">${project.description}</p>
      <a href="${project.link}" target="_blank" rel="noopener noreferrer"
         class="mt-4 inline-block bg-fuchsia-500 text-white px-4 py-2 rounded-full hover:bg-fuchsia-600 transition">
         View Project
      </a>
    `;
    projectContainer.appendChild(projectCard);
  });
});
