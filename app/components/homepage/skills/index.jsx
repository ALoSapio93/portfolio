import React from 'react';

const TechStackSkills = () => {
  const skills = [
    {
      title: 'HTML',
      icon: '📄',
      description: 'Markup semantico, SEO e accessibilità (ARIA).',
      color: 'from-cyan-600 to-cyan-800',
      bgColor: 'bg-cyan-900/30',
      borderColor: 'border-cyan-700',
      progress: 90
    },
    {
      title: 'Sass / SCSS',
      icon: '{}',
      description: 'Struttura modulare, mixin e variabili.',
      color: 'from-purple-600 to-purple-800',
      bgColor: 'bg-purple-900/30',
      borderColor: 'border-purple-700',
      progress: 85
    },
    {
      title: 'Angular',
      icon: '🅰️',
      description: 'Framework enterprise, TypeScript e RxJS.',
      color: 'from-cyan-600 to-cyan-800',
      bgColor: 'bg-cyan-900/30',
      borderColor: 'border-cyan-700',
      progress: 90
    },
    {
      title: 'React',
      icon: '⚛',
      description: 'Componenti, hooks e SPA veloci.',
      color: 'from-purple-600 to-purple-800',
      bgColor: 'bg-purple-900/30',
      borderColor: 'border-purple-700',
      progress: 65
    },
    {
      title: 'Java',
      icon: '☕',
      description: 'OOP, multithreading e applicazioni enterprise.',
      color: 'from-cyan-600 to-cyan-800',
      bgColor: 'bg-cyan-900/30',
      borderColor: 'border-cyan-700',
      progress: 95
    },
    {
      title: 'Spring Boot',
      icon: '🍃',
      description: 'Microservizi, REST API e applicazioni scalabili.',
      color: 'from-purple-600 to-purple-800',
      bgColor: 'bg-purple-900/30',
      borderColor: 'border-purple-700',
      progress: 95
    },
    {
      title: 'CSS / Tailwind / Bootstrap',
      icon: '🎨',
      description: 'Layout moderni, responsive e animazioni pulite.',
      color: 'from-cyan-600 to-cyan-800',
      bgColor: 'bg-cyan-900/30',
      borderColor: 'border-cyan-700',
      progress: 95
    },
    {
      title: 'Flutter',
      icon: '📱',
      description: 'App cross-platform native per iOS e Android.',
      color: 'from-purple-600 to-purple-800',
      bgColor: 'bg-purple-900/30',
      borderColor: 'border-purple-700',
      progress: 65
    },
    {
      title: 'Kotlin',
      icon: '🔷',
      description: 'Sviluppo Android moderno e conciso.',
      color: 'from-cyan-600 to-cyan-800',
      bgColor: 'bg-cyan-900/30',
      borderColor: 'border-cyan-700',
      progress: 45
    }
  ];

  return (
    <div className="text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm mb-4 tracking-wider">// SKILLS</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Stack</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">
            Competenze chiave per prodotti veloci, accessibili e dal look futuristico.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${skill.bgColor} ${skill.borderColor} border-2 rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20`}
            >
              {/* Icon */}
              <div className="text-4xl mb-4 flex items-center gap-3">
                <span className="text-gray-300">{skill.icon}</span>
                <h3 className="text-xl font-bold text-white">{skill.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                {skill.description}
              </p>

              {/* Progress Bar */}
              <div className="relative">
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
                <div
                  className={`absolute -right-1 top-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r ${skill.color} rounded-full shadow-lg`}
                  style={{ left: `calc(${skill.progress}% - 8px)` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackSkills;