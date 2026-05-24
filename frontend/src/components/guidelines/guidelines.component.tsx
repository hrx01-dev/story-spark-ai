const GuidelinesComponent = () => {
  const sections = [
    {
      title: "Respect the Community",
      icon: "🌍",
      color: "from-blue-500 to-cyan-500",
      items: [
        "Be respectful, supportive, and constructive in every interaction.",
        "Harassment, hate speech, discrimination, or bullying will not be tolerated.",
        "Encourage creativity by giving meaningful feedback and appreciation.",
        "Avoid spam, misleading promotions, or disruptive behavior.",
      ],
    },
    {
      title: "Create Original Content",
      icon: "📚",
      color: "from-purple-500 to-pink-500",
      items: [
        "Publish original stories, prompts, and ideas whenever possible.",
        "Always credit inspirations, collaborations, or referenced content.",
        "Do not plagiarize, repost stolen work, or violate copyrights.",
        "Keep content safe, legal, and appropriate for the platform audience.",
      ],
    },
    {
      title: "Use AI Responsibly",
      icon: "🤖",
      color: "from-green-500 to-emerald-500",
      items: [
        "Review AI-generated content before publishing publicly.",
        "Do not use AI for misinformation, impersonation, or harmful content.",
        "Disclose AI assistance where transparency is expected.",
        "AI should enhance creativity — not replace accountability.",
      ],
    },
    {
      title: "Write Better Stories",
      icon: "✍️",
      color: "from-orange-500 to-yellow-500",
      items: [
        "Use detailed prompts with genre, tone, characters, and setting.",
        "Refine prompts through iterations to improve story quality.",
        "Keep characters consistent and dialogues natural.",
        "Focus on emotion, pacing, and immersive storytelling.",
      ],
    },
    {
      title: "Contribute Professionally",
      icon: "⚡",
      color: "from-pink-500 to-rose-500",
      items: [
        "Follow the Code of Conduct in all collaborations.",
        "Discuss major features before starting implementation.",
        "Keep pull requests clean, focused, and documented.",
        "Write clear commit messages and test your changes properly.",
      ],
    },
    {
      title: "Protect Privacy & Security",
      icon: "🔒",
      color: "from-indigo-500 to-violet-500",
      items: [
        "Never share personal, private, or sensitive information.",
        "Respect platform privacy policies and user data.",
        "Report vulnerabilities responsibly instead of exploiting them.",
        "Keep passwords, tokens, and API keys secure at all times.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm text-gray-300 tracking-wide">
              Story Spark AI Community Standards
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Build Stories.
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Respect Creativity.
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
            These guidelines help keep Story Spark AI safe, creative,
            collaborative, and inspiring for writers, developers, and creators
            worldwide.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 overflow-hidden hover:scale-[1.02] transition-all duration-300 hover:border-white/20"
            >
              {/* Gradient Hover Glow */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-500 bg-gradient-to-br ${section.color}`}
              />

              {/* Top Gradient Line */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${section.color}`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center text-3xl shadow-lg mb-6`}
                >
                  {section.icon}
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold mb-5">{section.title}</h2>

                {/* Items */}
                <ul className="space-y-4">
                  {section.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-300 leading-relaxed"
                    >
                      <div
                        className={`mt-2 min-w-[8px] h-2 rounded-full bg-gradient-to-r ${section.color}`}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="mt-20 relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 p-10 text-center backdrop-blur-xl">
          <div className="absolute inset-0 bg-white/[0.02]" />

          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">
              Together We Build Better Stories ✨
            </h3>

            <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
              By using Story Spark AI, you agree to follow these community
              standards and help create a safe, inspiring, and innovative space
              for everyone.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="px-5 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-gray-300">
                Creativity First
              </div>

              <div className="px-5 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-gray-300">
                Safe AI Usage
              </div>

              <div className="px-5 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-gray-300">
                Respect Everyone
              </div>

              <div className="px-5 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-gray-300">
                Build Responsibly
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidelinesComponent;
