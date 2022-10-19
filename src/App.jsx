import React from "react";
import "./app.scss";
import { GrCheckbox } from "react-icons/gr";

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Open Up</h1>
        <p>Processo Unificado Aberto</p>
      </div>
      <div className="container-text">
        <div className="apresentation">
          <h2>Apresentação</h2>
        </div>
        <div className="">
          <ul className="list-apresentation">
            <li>
              <div className="icons">
                <GrCheckbox />
              </div>
              <p>Surgimento</p>
            </li>
            <li>
              <div className="icons">
                <GrCheckbox />
              </div>
              <p>Conceitos</p>{" "}
            </li>
            <li>
              <div className="icons">
                <GrCheckbox />
              </div>
              <p>Características</p>
            </li>
            <li>
              <div className="icons">
                <GrCheckbox />
              </div>
              <p>Elementos Básicos</p>
            </li>
            <li>
              {" "}
              <div className="icons">
                <GrCheckbox />
              </div>{" "}
              <p>Estrutura</p>
            </li>
            <li>
              {" "}
              <div className="icons">
                <GrCheckbox />
              </div>
              <p>Disciplina</p>{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="container-text">
        <div className="apresentation">
          <h2>Surgimento</h2>
        </div>
        <ul className="list-apresentationn">
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>
              O Processo Unificado Aberto, do inglês Open Unified Process
              (OpenUP)
            </p>
          </li>
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>{" "}
            <p>
              A IBM viu a necessidade de criar uma versão mais ágil RUP, Então a
              IBM Forneceu para a comunidade Eclipse o conteúdo da versão
              inicial desse novo processo.
            </p>
          </li>
          <li>
            {" "}
            <div className="icons">
              <GrCheckbox />
            </div>
            <p> Hoje ele faz parte do EPF (Eclipse Process Framework).</p>
          </li>
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>
              Surge assim a metodologia Open UP, ou, Processo Unificado Aberto,
              uma metodologia ágil de desenvolvimento de software.
            </p>
          </li>
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>
              OpenUP preserva as características essenciais do RUP/Unified
              Process
            </p>{" "}
          </li>
        </ul>
      </div>
      <div className="container-text">
        <div className="apresentation">
          <h2>Conceitos</h2>
        </div>
        <ul className="list-apresentationn">
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>
              A Open UP, é um Processo Unificado leve que aplica as abordagens
              iterativa e incremental;
            </p>
          </li>
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>Aborda uma filosofia de desenvolvimento ágil;</p>
          </li>
          <li>
            {" "}
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>
              {" "}
              Processo de desenvolvimento de software que é{" "}
              <strong>mínimo, completo e extensível.</strong>
            </p>
          </li>
        </ul>
      </div>
      <div className="container-text">
        <div className="apresentation">
          <h2>Características</h2>
        </div>
        <ul className="list-apresentationn">
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>
              Mínimo: Utiliza apenas conteúdo fundamental para o processo de
              desenvolvimento.
            </p>
          </li>
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>
              Completo: Possui as disciplinas essenciais para o ciclo de vida de
              desenvolvimento de software.
            </p>
          </li>
          <li>
            {" "}
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>
              Extensível: Pode ser adaptado para atender projetos específicos{" "}
            </p>
          </li>
        </ul>
      </div>
      <div className="container-text">
        <div className="apresentation">
          <h2>Princípios Básicos</h2>
        </div>
        <ul className="list-apresentationn">
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>
              O Open UP possui quatro princípios fundamentais que compõem os
              pilares de seu processo:
            </p>
          </li>
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>
              Balancear as prioridades concorrentes para maximizar os valores
              dos Stakeholders
            </p>
          </li>
          <li>
            <div className="container-desc">
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>Problema a ser resolvido;</p>
              </div>
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>
                  As restrições inerentes à equipe de desenvolvimento (custo,
                  recursos, habilidades, etc.);
                </p>
              </div>
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>As restrições inerentes à solução proposta.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>
              Colaborar para alinhar os interesses e compartilhar os
              conhecimentos
            </p>
          </li>
          <li>
            <div className="container-desc">
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>Possibilitar um ambiente saudável de desenvolvimento;</p>
              </div>
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>Possibilitando colaboração, compreensão e concordância;;</p>
              </div>
            </div>
          </li>
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>
              Focar inicialmente na arquitetura para minimizar riscos e
              organizar o desenvolvimento.
            </p>
          </li>
          <li>
            <div className="container-desc">
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>Focar suas ações na arquitetura;;</p>
              </div>
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>Minimizar os riscos;</p>
              </div>
            </div>
          </li>
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>
              Envolver os Stakeholders para obter contínuo feedback do
              desenvolvimento
            </p>
          </li>
          <li>
            <div className="container-desc">
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>
                  Promover práticas que permitam à equipe de desenvolvimento
                  obter feedback contínuo dos Stakeholders sobre a solução
                  proposta e demonstrar o incremento de seu valor.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="container-text">
        <div className="apresentation">
          <h2>Papéis no Open UP</h2>
        </div>
        <ul className="list-apresentationn">
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>Arquiteto:</p>
          </li>
          <li>
            <div className="container-desc">
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>
                  Responsável por definir a arquitetura de software, incluindo a
                  tomada das principais decisões técnicas que orientam todo o
                  desenho e a implementação do projeto.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>Gerente de Projeto:</p>
          </li>
          <li>
            <div className="container-desc">
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>
                  Responsável o planejamento do projeto, coordena as interações
                  com os Stakeholders e mantêm a equipe de projeto focada em
                  alcançar os objetivos do projeto.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>Analista:</p>
          </li>
          <li>
            <div className="container-desc">
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>
                  Representa os interesses do cliente e do usuário final
                  recolhendo informações dos Stakeholders para entender o
                  problema a ser resolvido, capturando os requisitos e definindo
                  suas prioridades.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>Testador:</p>
          </li>
          <li>
            <div className="container-desc">
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>
                  Responsável pelas principais atividades do esforço de teste.
                  Estas atividades incluem identificar, definir, implementar e
                  conduzir os testes necessários, bem como registrar e analisar
                  os resultados dos testes.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>Desenvolvedor:</p>
          </li>
          <li>
            <div className="container-desc">
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>
                  Responsável por desenvolver uma parte do sistema, incluindo a
                  construção de seu desenho de forma que ele atenda a
                  arquitetura e possivelmente a prototipagem da interface de
                  usuário, e então implementar, executar o teste de unidade e
                  integrar os componentes que são parte da solução.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>Stakeholder:</p>
          </li>
          <li>
            <div className="container-desc">
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>
                  Representa grupos de interessados cujas necessidades devem ser
                  satisfeitas pelo projeto. É um papel que pode ser executado
                  por qualquer um que seja (ou potencialmente possa ser) afetado
                  pelo resultado do projeto.
                </p>
              </div>
            </div>
          </li>
          <div className="image-stack">
            <img src="./img/imagem.jpg" alt="" />
          </div>
        </ul>
      </div>
      <div className="container-text">
        <div className="apresentation">
          <h2>Estrutura Open UP</h2>
        </div>
        <ul className="list-apresentationn">
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>
              O Open UP, assim como o RUP é um processo iterativo incremental de
              desenvolvimento de software e está estruturado em 3 camadas
              distintas:{" "}
              <strong>
                {" "}
                ciclo de vida de projeto, ciclo de vida de iteração e micro
                incremento.
              </strong>
            </p>
          </li>
          <div className="img-camadas">
            {" "}
            <img src="./img/camadas.jpg" alt="" />
          </div>
        </ul>
      </div>
      <div className="container-text">
        <div className="apresentation">
          <h2>1ª Camada - Ciclo de vida de Projeto</h2>
        </div>
        <ul className="list-apresentationn">
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>
              Open UP divide o ciclo de vida de projetos em quatro fases
              distintas:{" "}
              <strong> iniciação, elaboração,construção e transição.</strong>
            </p>
          </li>
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>Iniciação</p>
          </li>
          <li>
            <div className="container-desc">
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>
                  Fase em que se enfatiza o processo de análise de negócios e
                  análise de requisitos do negócio analisado, dando uma ênfase
                  menor a arquitetura e implementação;
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>Elaboração </p>
          </li>
          <li>
            <div className="container-desc">
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>
                  Fase em que se enfatiza o processo de desenvolvimento da
                  análise arquitetural da solução proposta;
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>Construção</p>
          </li>
          <li>
            <div className="container-desc">
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>
                  Fase em que se enfatiza o processo de implementação da solução
                  proposta, bem como, testes e integração;
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>Transição</p>
          </li>
          <li>
            <div className="container-desc">
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>
                  Fase em que se destaca o processo de implantação do release,
                  com importante foco na realização do teste beta e
                  reconfiguração necessária do sistema, além de foco no processo
                  de treinamento do usuário e conversão dos dados legados.
                </p>
              </div>
            </div>
          </li>
          <div className="img-camadas">
            <img src="./img/ciclodevida.jpg" alt="" />
          </div>
        </ul>
      </div>
      <div className="container-text">
        <div className="apresentation">
          <h2>2ª Camada - Ciclo de Iteração </h2>
        </div>
        <ul className="list-apresentationn">
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>
              Os processos iterativos pregam a divisão de suas atividades
              principais em subatividades, chamadas de iteração.
            </p>
          </li>
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>
              Uma iteração é focada no desenvolvimento de um Build (executável).
            </p>
          </li>
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>Tem que ter sido exaustivamente testado.</p>
          </li>
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>Para o Open UP, as disciplinas tratadas são:</p>
          </li>
          <li>
            <div className="container-desc">
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>Requisitos;</p>
              </div>
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>Arquitetura;</p>
              </div>
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>Implementação;</p>
              </div>
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>Teste;</p>
              </div>
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>Gerência de Projetos.</p>
              </div>
            </div>
          </li>
          <div className="img-camadas">
            <img src="./img/camadas2.jpg" alt="" />
          </div>
        </ul>
      </div>
      <div className="container-text">
        <div className="apresentation">
          <h2>3ª Camada - Ciclo de Micro Incremento</h2>
        </div>
        <ul className="list-apresentationn">
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>Foco no Individual;</p>
          </li>

          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>
              Jornada curtas de trabalho para alcançar os objetivos de uma
              iteração:
            </p>
          </li>
          <li>
            <div className="container-desc">
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>
                  Passo mensurável de progresso do projeto (horas ou poucos
                  dias).
                </p>
              </div>
            </div>
          </li>
          <div className="img-camadas">
            <img src="./img/iteracao.jpg" alt="" />
          </div>
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p> Ciclo de vida de Micro Incremento:</p>
          </li>
          <div className="img-camadas">
            <img src="./img/iteracao2.jpg" alt="" />
          </div>
        </ul>
      </div>
      <div className="container-text">
        <div className="apresentation">
          <h2>Disciplinas do Open UP</h2>
        </div>
        <ul className="list-apresentationn">
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>
              No Processo Unificado, as Tarefas são agrupadas logicamente nas
              diversas disciplinas, que são distribuídas entre as fases e são
              executadas a cada iteração, em maior ou menor escala.
            </p>
          </li>

          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>Disciplina de Requisitos:</p>
          </li>
          <li>
            <div className="container-desc">
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>
                  Nesta disciplina agrupa todas as tarefas de Análise do
                  negocio:{" "}
                  <strong>
                    {" "}
                    Analise de requisitos e Especificação de requisitos.
                  </strong>
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>Disciplina de Arquitetura:</p>
          </li>
          <li>
            <div className="container-desc">
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>
                principal objetivo apresentar uma arquitetura estável
para o desenvolvimento do sistema, baseando-se nos
requisitos especificados.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>Disciplina de Implementação:</p>
          </li>
          <li>
            <div className="container-desc">
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>
                Organiza as tarefas que irão transformar a arquitetura
proposta na implementação do sistema.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>Disciplina de Teste:</p>
          </li>
          <li>
            <div className="container-desc">
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>
                tarefas relacionadas a teste, que se preocupam em
prover feedback sobre a maturidade do sistema,
projetando, implementando, executando e avaliando
testes.

                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>Disciplina de Gerência de Projeto:</p>
          </li>
          <li>
            <div className="container-desc">
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>
                Objetivo apresentar técnicas para que o gerente de
projetos possa liderar, facilitar e oferecer suporte à sua
equipe, auxiliando-a a lidar com os riscos e obstáculos
encontrados durante o processo de desenvolvimento
de software.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <p>Existem duas grandes prioridades para o gerente
de projetos:</p>
          </li>
          <li>
            <div className="container-desc">
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>
                A arquitetura da solução proposta;
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="container-desc">
              <div className="container-iten">
                <div className="icons">
                  <GrCheckbox />
                </div>
                <p>
                A gerência dos riscos.
                </p>
              </div>
            </div>
          </li>
          <div className="container-text">
        <div className="apresentation">
          <h2>Referencias</h2>
        </div>
        <ul className="list-apresentationn">
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <div className="ref">
            <a href="https://pt.wikipedia.org/wiki/OpenUP">Wikipedia</a>
            </div>
           
          </li>

          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <div className="ref">
            <a href="http://open2up.blogspot.com/">Open2Up</a>
            </div>
           
          </li>
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <div className="ref">
            <a href="https://www.cin.ufpe.br/~tg/2006-2/ceac.pdf">UFPE</a>
            </div>
            
          </li>
          <li>
            <div className="icons">
              <GrCheckbox />
            </div>
            <div className="ref">
            <a href="https://www.tiespecialistas.com.br/openup-uma-visao-geral/">Tiespecialistas</a>
            </div>
          
          </li>

      
        </ul>
      </div>
        </ul>
      </div>
    </div>
  );
};

export default App;
