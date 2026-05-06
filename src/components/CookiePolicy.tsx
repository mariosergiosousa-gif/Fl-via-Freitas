import { motion } from 'motion/react';
import { ArrowLeft, Cookie } from 'lucide-react';

interface CookiePolicyProps {
  onClose: () => void;
  key?: string | number;
}

export default function CookiePolicy({ onClose }: CookiePolicyProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 z-[100] bg-brand-paper overflow-y-auto px-6 py-24 md:py-32"
    >
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onClose}
          className="mb-12 flex items-center gap-2 text-brand-accent hover:text-white transition-colors group cursor-pointer"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="display text-xs font-bold tracking-[0.2em] uppercase">Voltar ao Início</span>
        </button>

        <div className="flex items-center gap-4 mb-4">
          <Cookie className="text-brand-accent" size={32} />
          <h1 className="serif text-4xl md:text-5xl text-white italic">Política de <span className="text-brand-accent not-italic">Cookies</span></h1>
        </div>
        <p className="text-slate-500 text-sm mb-12 display tracking-widest uppercase">Última atualização: 29 de abril de 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-slate-300 font-light leading-relaxed">
          <p>
            Esta Política de Cookies explica o que são cookies e como os usamos em nosso site. Você deve ler esta política para entender o tipo de cookies que usamos, as informações que coletamos usando cookies e como essas informações são usadas.
          </p>

          <section className="space-y-4">
            <h2 className="serif text-2xl text-white italic">1. O que são Cookies?</h2>
            <p>
              Cookies são pequenos arquivos de texto que são usados para armazenar pequenas informações. Eles são armazenados no seu dispositivo quando o site é carregado no seu navegador. Esses cookies nos ajudam a fazer o site funcionar corretamente, torná-lo mais seguro, fornecer uma melhor experiência ao usuário e entender como o site funciona.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="serif text-2xl text-white italic">2. Como usamos os Cookies?</h2>
            <p>
              Como a maioria dos serviços online, nosso site usa cookies primários e de terceiros para vários fins. Os cookies primários são principalmente necessários para que o site funcione da maneira correta e não coletam nenhum dos seus dados pessoalmente identificáveis.
            </p>
            <p>
              Os cookies de terceiros usados em nosso site são principalmente para entender como o site funciona, como você interage com nosso site, manter nossos serviços seguros e, em suma, fornecer a você um usuário melhor e melhorado experiência.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="serif text-2xl text-white italic">3. Tipos de cookies que utilizamos</h2>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <span className="text-brand-accent font-medium">Essenciais:</span> Alguns cookies são essenciais para que você possa experimentar a funcionalidade completa do nosso site. Eles nos permitem manter as sessões do usuário e prevenir quaisquer ameaças à segurança. Eles não coletam nem armazenam nenhuma informação pessoal.
              </li>
              <li>
                <span className="text-brand-accent font-medium">Estatísticos:</span> Estes cookies armazenam informações como o número de visitantes do site, o número de visitantes únicos, quais páginas do site foram visitadas, a origem da visita, etc. Estes dados ajudam-nos a compreender e analisar o desempenho do site e onde ele precisa de melhorias.
              </li>
              <li>
                <span className="text-brand-accent font-medium">Funcionais:</span> São os cookies que auxiliam certas funcionalidades não essenciais no nosso site. Essas funcionalidades incluem a incorporação de conteúdo como vídeos ou o compartilhamento de conteúdo do site em plataformas de mídia social.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="serif text-2xl text-white italic">4. Como posso controlar as preferências de cookies?</h2>
            <p>
              Caso decida alterar as suas preferências mais tarde através da sua sessão de navegação, pode clicar no separador "Política de Cookies" no seu ecrã. Isto exibirá o aviso de consentimento novamente, permitindo que você altere suas preferências ou retire seu consentimento totalmente.
            </p>
            <p>
              Além disso, diferentes navegadores fornecem métodos diferentes para bloquear e excluir cookies usados ​​pelos sites. Você pode alterar as configurações do seu navegador para bloquear/excluir os cookies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="serif text-2xl text-white italic">5. Contato</h2>
            <p>Se você tiver alguma dúvida sobre nossa Política de Cookies, entre em contato conosco:</p>
            <ul className="list-none space-y-2 border-l border-brand-accent/30 pl-6">
              <li><span className="text-brand-accent font-medium">📧 E-mail:</span> excelenciaodondologia8@gmail.com</li>
              <li><span className="text-brand-accent font-medium">📍 Clínica:</span> Rua Barão do Rio Branco, 83, Centro, Brumadinho - MG</li>
            </ul>
          </section>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 text-center">
            <p className="display text-[10px] font-bold tracking-[0.4em] uppercase text-slate-600">
                @ 2026 Excelência em Odontologia
            </p>
        </div>
      </div>
    </motion.div>
  );
}
