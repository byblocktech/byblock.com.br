import { Button } from "@/components/ui/button";
import { Github, Download, Code2, Users } from "lucide-react";
import { useState } from "react";

/**
 * Design System: Minimalismo Sofisticado com Tecnologia
 * - Dark theme with blue accents
 * - Modern typography with clear hierarchy
 * - Smooth transitions and hover effects
 * - Asymmetric layout with visual depth
 */

export default function Home() {
  const [activeSection, setActiveSection] = useState("sobre");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/80 border-b border-blue-500/20">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <Code2 className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              ByBlock
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#sobre"
              onClick={() => setActiveSection("sobre")}
              className={`text-sm font-medium transition-all duration-300 ${
                activeSection === "sobre"
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Sobre
            </a>
            <a
              href="#softwares"
              onClick={() => setActiveSection("softwares")}
              className={`text-sm font-medium transition-all duration-300 ${
                activeSection === "softwares"
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Softwares
            </a>
            <a
              href="#opensource"
              onClick={() => setActiveSection("opensource")}
              className={`text-sm font-medium transition-all duration-300 ${
                activeSection === "opensource"
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Open Source
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028297294/BrG4UncF44N2GKuqAtLVFA/hero-bg-gYFjB6ZYwUjnYnpkep8GGE.webp"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/50 text-blue-300 text-sm font-medium">
              Bem-vindo ao ByBlock Group
            </span>
          </div>

          <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Soluções
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              {" "}
              Performáticas
            </span>
            <br />e Eficientes
          </h2>

          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Focamos em criar softwares de alta qualidade com design minimalista e
            funcionalidade excepcional. Transparência e inovação são nossos pilares.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setActiveSection("softwares")}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/50"
            >
              <Download className="w-5 h-5 mr-2" />
              Nossos Softwares
            </Button>
            <Button
              onClick={() => setActiveSection("opensource")}
              variant="outline"
              className="border-blue-400/50 text-blue-300 hover:bg-blue-500/10 px-8 py-6 text-lg rounded-lg font-semibold transition-all duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              Explorar Open Source
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="sobre"
        className="relative min-h-screen flex items-center py-20 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028297294/BrG4UncF44N2GKuqAtLVFA/about-section-gyemv9XsSJvAMpV4hNfkya.webp"
            alt="About Section"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-5xl font-bold mb-6">
                Sobre o
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  ByBlock Group
                </span>
              </h3>
              <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                Somos um grupo dedicado a criar soluções tecnológicas de excelência.
                Acreditamos que software minimalista, bem projetado e transparente é
                o caminho para resolver problemas reais.
              </p>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Nossa missão é desenvolver ferramentas que empoderem desenvolvedores e
                usuários, mantendo a simplicidade e a qualidade em primeiro lugar.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 border border-blue-400/50 flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Código Limpo</h4>
                    <p className="text-slate-400">
                      Desenvolvemos com padrões altos de qualidade e boas práticas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 border border-blue-400/50 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Comunidade</h4>
                    <p className="text-slate-400">
                      Acreditamos no poder da colaboração e transparência
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur border border-blue-400/30 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="h-3 bg-blue-500/50 rounded-full w-3/4"></div>
                  <div className="h-3 bg-blue-400/50 rounded-full w-full"></div>
                  <div className="h-3 bg-blue-500/50 rounded-full w-5/6"></div>
                  <div className="h-3 bg-blue-400/50 rounded-full w-4/5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Softwares Section */}
      <section
        id="softwares"
        className="relative min-h-screen flex items-center py-20 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028297294/BrG4UncF44N2GKuqAtLVFA/softwares-section-j4GisWer5Q6g6jYvmHntpC.webp"
            alt="Softwares Section"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-6">
              Nossos
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Softwares
              </span>
            </h3>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Ferramentas poderosas e minimalistas para Windows e outras plataformas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Software Card 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-slate-800/50 backdrop-blur border border-blue-400/30 rounded-2xl p-8 hover:border-blue-400/60 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-4">
                  <Download className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold mb-3">Projeto Windows</h4>
                <p className="text-slate-300 mb-6">
                  Nossa ferramenta mais recente para Windows, desenvolvida com foco em
                  performance e simplicidade.
                </p>
                <a
                  href="https://github.com/USUARIO/REPOSITORIO/releases/download/v1.0.0/projeto.exe"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-4 h-4" />
                  Baixar (.exe)
                </a>
              </div>
            </div>

            {/* Software Card 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-slate-800/50 backdrop-blur border border-blue-400/30 rounded-2xl p-8 hover:border-blue-400/60 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold mb-3">Em Desenvolvimento</h4>
                <p className="text-slate-300 mb-6">
                  Estamos trabalhando em novas soluções inovadoras para trazer mais
                  valor aos nossos usuários.
                </p>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700/50 hover:bg-slate-700 rounded-lg font-semibold transition-all duration-300 text-slate-400 cursor-not-allowed">
                  Em Breve
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section
        id="opensource"
        className="relative min-h-screen flex items-center py-20 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028297294/BrG4UncF44N2GKuqAtLVFA/opensource-section-DK7Vekc6hssaEYbMLUe3Lb.webp"
            alt="Open Source Section"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-6">
              Open
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Source
              </span>
            </h3>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Acreditamos na transparência e no poder da comunidade. Explore nossos
              repositórios públicos no GitHub.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border border-blue-400/30 rounded-2xl p-12 text-center">
            <Users className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h4 className="text-3xl font-bold mb-4">Comunidade em Crescimento</h4>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Todos os nossos projetos open source estão disponíveis no GitHub.
              Contribuições são bem-vindas e encorajadas!
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Github className="w-5 h-5" />
              Visitar GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-500/20 bg-slate-950/50 backdrop-blur py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <Code2 className="w-5 h-5" />
                </div>
                <h5 className="text-lg font-bold">ByBlock Group</h5>
              </div>
              <p className="text-slate-400">
                Soluções minimalistas e eficientes para o mundo digital.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Links Rápidos</h5>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a
                    href="#sobre"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="#softwares"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Softwares
                  </a>
                </li>
                <li>
                  <a
                    href="#opensource"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Open Source
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Comunidade</h5>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>
              &copy; 2026 ByBlock Group. Todos os direitos reservados. Desenvolvido
              com paixão por código limpo.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
