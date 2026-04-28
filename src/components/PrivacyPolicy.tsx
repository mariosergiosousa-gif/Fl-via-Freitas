import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onClose: () => void;
}

export default function PrivacyPolicy({ onClose }: PrivacyPolicyProps) {
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

        <h1 className="serif text-4xl md:text-5xl text-white mb-4 italic">Política de <span className="text-brand-accent not-italic">Privacidade</span></h1>
        <p className="text-slate-500 text-sm mb-12 display tracking-widest uppercase">Última atualização: 28 de abril de 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-slate-300 font-light leading-relaxed">
          <p>
            A presente Política de Privacidade descreve como os dados pessoais são coletados, utilizados e protegidos ao utilizar o site Excelência em Odontologia.
          </p>
          <p>
            Ao acessar este site, você concorda com os termos desta política, em conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados – LGPD).
          </p>

          <section className="space-y-4">
            <h2 className="serif text-2xl text-white italic">1. Quem somos</h2>
            <p>O site Excelência em Odontologia é administrado por:</p>
            <ul className="list-none space-y-2 border-l border-brand-accent/30 pl-6">
              <li><span className="text-brand-accent font-medium">Responsável (Controlador):</span> Flávia Freitas</li>
              <li><span className="text-brand-accent font-medium">CNPJ:</span> Sob Consulta</li>
              <li><span className="text-brand-accent font-medium">E-mail:</span> excelenciaodondologia8@gmail.com</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="serif text-2xl text-white italic">2. Quais dados coletamos</h2>
            <p>Podemos coletar os seguintes dados pessoais:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nome completo</li>
              <li>Telefone e/ou WhatsApp</li>
              <li>Endereço de e-mail</li>
              <li>Informações enviadas via formulário de contato</li>
              <li>Dados de navegação (endereço IP, tipo de navegador, páginas visitadas)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="serif text-2xl text-white italic">3. Finalidade do uso dos dados</h2>
            <p>Os dados coletados são utilizados para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Agendamento de consultas odontológicas</li>
              <li>Atendimento ao paciente</li>
              <li>Responder dúvidas ou solicitações</li>
              <li>Comunicação sobre serviços oferecidos</li>
              <li>Melhorar a experiência de navegação no site</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="serif text-2xl text-white italic">4. Compartilhamento de dados</h2>
            <p>Seus dados não são vendidos ou comercializados.</p>
            <p>Eles podem ser compartilhados apenas quando necessário com:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Serviços de hospedagem do site</li>
              <li>Ferramentas de comunicação (como e-mail e WhatsApp)</li>
              <li>Autoridades legais, quando exigido por lei</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="serif text-2xl text-white italic">5. Armazenamento e segurança</h2>
            <p>Adotamos medidas de segurança adequadas para proteger seus dados contra acesso não autorizado, perda ou uso indevido.</p>
            <p>Os dados são mantidos apenas pelo tempo necessário para cumprir as finalidades descritas nesta política.</p>
          </section>

          <section className="space-y-4">
            <h2 className="serif text-2xl text-white italic">6. Uso de cookies</h2>
            <p>Este site pode utilizar cookies para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Melhorar o funcionamento e desempenho</li>
              <li>Analisar o comportamento de navegação</li>
              <li>Personalizar a experiência do usuário</li>
            </ul>
            <p>Você pode desativar os cookies nas configurações do seu navegador.</p>
          </section>

          <section className="space-y-4">
            <h2 className="serif text-2xl text-white italic">7. Direitos do titular dos dados</h2>
            <p>Nos termos da LGPD, você tem direito a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirmar a existência de tratamento dos seus dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar a exclusão dos dados</li>
              <li>Revogar o consentimento</li>
            </ul>
            <p>Para exercer esses direitos, entre em contato pelo e-mail informado.</p>
          </section>

          <section className="space-y-4">
            <h2 className="serif text-2xl text-white italic">8. Alterações nesta política</h2>
            <p>Esta Política de Privacidade pode ser atualizada a qualquer momento para refletir mudanças legais ou operacionais.</p>
          </section>

          <section className="space-y-4">
            <h2 className="serif text-2xl text-white italic">9. Contato</h2>
            <p>Para dúvidas ou solicitações relacionadas à privacidade:</p>
            <ul className="list-none space-y-2 border-l border-brand-accent/30 pl-6">
              <li><span className="text-brand-accent font-medium">📧 E-mail:</span> excelenciaodondologia8@gmail.com</li>
              <li><span className="text-brand-accent font-medium">📍 Clínica:</span> Rua Barão do Rio Branco, 83, Centro, Brumadinho - MG</li>
            </ul>
          </section>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 text-center">
            <p className="display text-[10px] font-bold tracking-[0.4em] uppercase text-slate-600">
                @ 2026 excelência em odontologia.
            </p>
        </div>
      </div>
    </motion.div>
  );
}
