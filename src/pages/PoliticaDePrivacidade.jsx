import React from "react";
import { ShieldCheck } from "lucide-react";

const PoliticaPrivacidade = () => {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-800 py-20 px-6 md:px-12 lg:px-24">
      {/* Cabeçalho */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <div className="flex justify-center mb-4">
          <div className="bg-[#DF5167]/10 p-4 rounded-full">
            <ShieldCheck className="w-10 h-10 text-[#DF5167]" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Aviso de Privacidade
        </h1>
        <p className="text-gray-600 text-lg">
          EGP Indústria e Comércio de Equipamentos Eletrônicos Ltda.
        </p>
        <div className="w-24 h-1 bg-[#DF5167] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12 border border-gray-100">
        <div className="space-y-8 leading-relaxed text-justify text-[15px] md:text-base">
          <p>
            A <strong>EGP Indústria e Comércio de Equip. Eletrônicos Ltda</strong> e suas afiliadas estão comprometidas em proteger sua
            privacidade. Esta Declaração de Privacidade descreve nossas práticas relacionadas à coleta, uso, processamento e proteção de dados pessoais.
          </p>

          <h2 className="text-2xl font-semibold text-[#DF5167] mt-10 mb-3">Informações Coletadas</h2>
          <p>
            Podemos coletar dados pessoais fornecidos por você ou automaticamente através do uso de nossos Produtos e Serviços.
            As informações coletadas incluem:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Informações de conta: e-mail, telefone, nome de usuário e preferências.</li>
            <li>Informações de dispositivos inteligentes: nome, ID, status, versão de firmware e atualizações.</li>
            <li>Dados de uso: interações, cliques, mensagens, registros e eventos do aplicativo.</li>
            <li>Informações de localização geográfica, precisa ou aproximada, quando autorizada.</li>
            <li>Feedbacks e sugestões enviadas por você.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#DF5167] mt-10 mb-3">Propósitos e Base Legal do Processamento</h2>
          <p>
            Processamos seus dados pessoais conforme necessário para fornecer e melhorar nossos serviços, cumprir obrigações legais e
            manter comunicações administrativas importantes. A base legal para o processamento inclui:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Execução de contrato e fornecimento de produtos e serviços.</li>
            <li>Cumprimento de obrigações legais e regulatórias.</li>
            <li>Consentimento do titular para comunicações de marketing.</li>
            <li>Interesse legítimo para aprimoramento contínuo de produtos e segurança.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#DF5167] mt-10 mb-3">Comunicação com e sem objetivos de marketing</h2>
          <p>
            Podemos enviar comunicações administrativas essenciais (termos, políticas e notificações importantes). Essas comunicações não
            podem ser canceladas. Já mensagens de marketing e promoções serão enviadas apenas mediante o seu consentimento, e você poderá cancelar o recebimento a qualquer momento.
          </p>

          <h2 className="text-2xl font-semibold text-[#DF5167] mt-10 mb-3">Compartilhamento de Dados Pessoais</h2>
          <p>
            Compartilhamos dados apenas conforme permitido por lei, com:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Prestadores de serviços (TI, hospedagem, pagamentos, suporte, entre outros).</li>
            <li>Subsidiárias e afiliadas da EGP, para operações corporativas.</li>
            <li>Parceiros de negócios e clientes, quando necessário para execução de serviços.</li>
            <li>Autoridades públicas, em cumprimento de obrigações legais.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#DF5167] mt-10 mb-3">Transferência Internacional de Dados</h2>
          <p>
            Os dados pessoais podem ser transferidos e processados em jurisdições diferentes do país de residência do titular, observando sempre as legislações aplicáveis e garantias adequadas de proteção.
          </p>

          <h2 className="text-2xl font-semibold text-[#DF5167] mt-10 mb-3">Segurança das Informações</h2>
          <p>
            Utilizamos medidas técnicas e administrativas para proteger suas informações pessoais, incluindo criptografia, autenticação, isolamento de dados e auditoria de segurança.
            Caso identifique uma falha, entre em contato através do e-mail <a href="mailto:sac@grupoegp.com.br" className="text-[#2E74FF] hover:underline">sac@grupoegp.com.br</a>.
          </p>

          <h2 className="text-2xl font-semibold text-[#DF5167] mt-10 mb-3">Período de Retenção</h2>
          <p>
            Os dados pessoais são mantidos apenas pelo período necessário ao cumprimento das finalidades desta Política, salvo obrigações legais em contrário. Após o período, os dados são excluídos ou anonimizados de forma segura.
          </p>

          <h2 className="text-2xl font-semibold text-[#DF5167] mt-10 mb-3">Alterações neste Aviso</h2>
          <p>
            Podemos atualizar este Aviso de Privacidade periodicamente. Em caso de mudanças relevantes, você será notificado por e-mail ou por meio de aviso em nosso site e aplicativos.
          </p>

          <h2 className="text-2xl font-semibold text-[#DF5167] mt-10 mb-3">Fale Conosco</h2>
          <p>
            Para dúvidas sobre este Aviso de Privacidade ou sobre o tratamento dos seus dados pessoais, entre em contato com nosso canal oficial:
          </p>
          <div className="mt-4 p-4 bg-gray-100 rounded-lg border-l-4 border-[#DF5167]">
            <p className="font-medium">📧 E-mail: <a href="mailto:sac@grupoegp.com.br" className="text-[#2E74FF] hover:underline">sac@grupoegp.com.br</a></p>
            <p>🌐 Site: <a href="https://www.grupoegp.com.br" target="_blank" className="text-[#2E74FF] hover:underline">www.grupoegp.com.br</a></p>
            <p className="text-sm text-gray-500 mt-2">Data efetiva: 14/06/2024</p>
          </div>

          <p className="text-center text-sm text-gray-500 mt-10">
            © 2023 EGP Indústria e Comércio de Equipamentos Eletrônicos Ltda — CNPJ: 40.116.124/0001-51
          </p>
        </div>
      </div>
    </section>
  );
};

export default PoliticaPrivacidade;
