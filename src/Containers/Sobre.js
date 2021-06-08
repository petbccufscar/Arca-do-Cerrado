import React, { Component, Fragment } from 'react'
import Menu from '../Components/Menu/Menu'
import Rodape from '../Components/Rodape/Rodape'
import './Sobre.css'

class Sobre extends Component {
  render () {
    return (
      <Fragment>
        <Menu />
        <div class='corpo'>
          <h2 class='titulo'>Sobre</h2>
          <div class='margin-corpo'>
            <div class='textos'>
              <h2 class='subTitulo'>Apresentação do site</h2>
              <div class='linha-horizontal'></div>
              <p class='conteudo'>
                Este site visa alcançar o maior número de pessoas na divulgação
                dos resultados do trabalho que realizamos na Atividade de
                Extensão A Arca do Cerrado, na Universidade Federal de São
                Carlos. <br />
                objetivos... Aqui, você vai encontrar um mapa interativo, em
                escala, que representa a localização de cada uma de nossas
                mudas. Para facilitar sua navegação, apresentamos uma imagem
                ilustrativa do mapa local. Ao escolher um dos quadrantes, você
                será direcionado para sua versão ampliada. Ali, se passar o
                mouse sobre um dos pontos, aparecerá uma pequena caixa com o
                nome da planta. Se clicar sobre um ponto, terá acesso a fotos e
                informações básicas da espécie. Essas informações estão
                disponíveis também na seção “espécies” do blog. <br />
                Em uma das seções do blog, “informações”, fornecemos dados
                interessantes sobre espécies presentes no fragmento na Ufscar
                que ainda não conseguimos reproduzir ou cultivar. <br />
                Divulgamos na seção de “notícias” do blog as novidades de
                germinação, plantio, florada, frutificação de nossas espécies
                etc.
                <br />
                Costumamos visitar o local frequentemente para as atividades e
                você pode saber a data do próximo encontro na agenda. <br />
                Se tiver dúvidas, sugestões ou quiser colaborar conosco, entre
                em contato.
              </p>
            </div>
            <div class='textos'>
              <h2 class='subTitulo'>Descrição da área de cultivo</h2>
              <div class='linha-horizontal'></div>
              <p class='conteudo'>
                Fragmento de cerrado... Originalmente, o espaço era coberto por
                vegetação de cerrado, o que pode ser observado dada sua
                proximidade ao fragmento no câmpus e ao brotamento espontâneo de
                espécies endêmicas ali. Algumas das espécies têm troncos
                subterrâneos e pode ser que tenham resistido às diversas
                interferências ao longo dos anos, tais como podas de grama.
                Algumas das espécies presentes na área que surgiram
                espontaneamente são: gabiroba, araçá, arvorezinha.
                <br />
                O espaço fica em frente ao Departamento de Computação e é
                ladeado por um passeio (calçada) por onde transitam estudantes,
                funcionários e professores entre os prédios dos departamentos
                próximos (Matemática, Fisioterapia, Medicina entre outros).
                <br />
                Como não usamos elementos químicos para tratar as sementes nem
                outras técnicas artificiais de germinação e cultivo, e como não
                há muitos projetos que lidem com jardinagem envolvendo a
                vegetação de Cerrado na região, nosso conhecimento tem sido
                construído a partir da experiência prática.
                <br />
                São XXXX espécies e YYYY mudas de plantas selecionadas por sua
                beleza paisagística ou pelo fato de produzirem frutos
                comestíveis. Por conta do espaço reduzido disponível, somente
                espécies de porte arbustivo ou menores são escolhidas.
                <br />
                Muitos dos indivíduos vegetais presentes no espaço são
                desconhecidos da maioria das pessoas, atendendo um dos objetivos
                do projeto: atrair a atenção das pessoas seja pela beleza, seja
                pela curiosidade.
                <br />
                Na seção “espécies” do blog você pode conhecer algumas delas.
                <br />
                Para comportar o volume de trabalho e também para favorecer a
                manutenção, o espaço recebeu benfeitorias. Instalamos torneiras
                com auxílio da prefeitura do câmpus e com material doado pela
                tradicional loja de materiais de São Carlos, Gualtieri. Também
                delimitamos o espaço com separadores, evitando o avanço da grama
                de áreas de jardins limítrofes.
                <br />
                localização e fotos “panorâmicas”
              </p>
            </div>
            <div class='textos'>
              <h2 class='subTitulo'>Histórico</h2>
              <div class='linha-horizontal'></div>
              <p class='conteudo'>
                Desde que chegou a São Carlos, em 2006, o Prof. Mauricio costuma
                visitar o fragmento de Cerrado no câmpus da Universidade Federal
                de São Carlos aos finais de semana. Maravilhado com as belezas e
                a riqueza da área, coletava algumas sementes e produzia mudas em
                sua casa, imaginando poder um dia contribuir para a propagação
                daquelas espécies.
                <br />
                Em 2015, um grupo do qual fazia parte - que ansiava pela
                conservação do fragmento e realizava algumas ações nessa direção
                (Coletivo do Cerrado) - organizou um evento: Cerrado Livre. Fez
                parte de sua programação o plantio de 16 daquelas mudas em uma
                área sem uso em frente ao Departamento de Computação. Assim, em
                13 de maio daquele ano, nascia o Pomar do Cerrado.
                <br />
                Desde então, aos finais de semana, regularmente visitamos o
                local para fazer capinas, plantar novas mudas e realizar a
                manutenção da área, que foi ganhando um outro aspecto. Ao longo
                dos trabalhos, outras atividades se tornaram relevantes, tal com
                a divulgação do projeto.
                <br />
                Em fevereiro de 2018. apresentamos o projeto para a Pró-Reitoria
                de Extensão da universidade e fomos contemplados como Atividade
                de Extensão, que nomeamos A Arca do Cerrado: jardinagem para a
                valorização e recuperação do Cerrado. (23112.004456/2017-33).
              </p>
            </div>
            <div class='textos'>
              <h2 class='subTitulo'>Atividades</h2>
              <div class='linha-horizontal'></div>
              <p class='conteudo'>
                Desde o início, realizamos visitas frequentes ao fragmento de
                Cerrado, aprendendo sobre a sazonalidade das espécies e sua
                interação com o habitat. Nessas visitas, capturamos a beleza da
                natureza em imagens fotográficas, gerando um banco de cerca de 5
                mil fotos, que, embora de qualidade amadora, contêm um rico
                registro.
                <br />
                Realizamos a coleta de sementes, formação e plantio de mudas.
                Organizamos o processo de construção de sementeiras com a
                numeração dos tubetes e o registro das datas de coleta e
                plantio.
                <br />
                Visitamos a área para regar, capinar e realizar a manutenção de
                toda a área. Divulgamos as atividades na página do Facebook, que
                tem 600 seguidores (até o momento da escrita deste texto) e na
                seção Agenda.
                <br />
                Em várias oportunidades, o trabalho associado à Atividade de
                Extensão A Arca do Cerrado tem sido divulgado para a comunidade
                externa e acadêmica, seja por meio de exibição de cartazes, seja
                por participação em palestras. Temos recebido visitas de pessoas
                interessadas nesse tipo de jardinagem, da comunidade acadêmica e
                externa: arquitetos, professores, alunos de graduação, alunos do
                ensino fundamental. Saiba mais na seção “notícias do blog”.
              </p>
            </div>
            <div class='textos'>
              <h2 class='subTitulo'>Expectativas</h2>
              <div class='linha-horizontal'></div>
              <p class='conteudo'>
                Admitindo que a vida é dependente da Natureza e que o Cerrado
                faz parte dela, então o Cerrado herda sua importância. E,
                igualmente, se não é difícil associar a qualidade de vida à
                possibilidade de desfrutar de um ambiente integrado e
                sintonizado à Natureza, em que se possa estabelecer uma
                interação sinergética, então que seja assim com os espaços
                humanos formados no Cerrado.
                <br />E por conta desse desenlace um tanto quanto esperançoso,
                chega-se a uma convergência de ideias, ou seja, entre as muitas
                expectativas, entende-se que estão de uma forma ou outra
                associadas a fazer com que o Cerrado seja contemplado e
                valorizado como algo imprescindível.
                <br />
                Assim, a Arca do Cerrado se empenha primeiramente em conquistar
                a atenção das pessoas de forma que aos poucos ajustem suas
                perspectivas e orientações, passando a reconhecer a relevância
                do Cerrado, tornando-o merecedor de esforços para sua
                preservação e conservação.
                <br />
                Ao longo dos anos, expectativa vem se concretizando, conforme as
                muitas realizações gratificantes realizadas e que você pode
                conhecer nas seções “atividades” e “notícias”.
                <br />
                Esperamos que o conhecimento que temos adquirido ao longo das
                atividades - coleta de sementes, preparação de sementes para
                germinação, produção de sementeiras, acompanhamento do
                crescimento entre outros aspectos - possam inspirar a criação de
                outros espaços dedicados ao cultivo e valorização do Cerrado na
                universidade e fora dela.
                <br />
                Ficaremos muito contentes se pudermos colaborar com projetos com
                esses objetivos. Se houver interesse, entre em contato.
              </p>
            </div>
            <div class='textos'>
              <h2 class='subTitulo'>Participantes</h2>
              <div class='linha-horizontal'></div>
              <p class='conteudo'>
                Participam voluntariamente do projeto pessoas de diferentes
                áreas de conhecimento, formações, profissões, gêneros e idades,
                com ou sem experiência no trato com as plantas.
                <br />
                Apesar de não ter especialidade em áreas correlatas (Botânica),
                o interesse e a motivação do coordenador do Projeto, Mauricio
                Figueiredo, estão alinhados com as expectativas do grupo, pois
                acredita que a sociedade deve ser construída de forma integrada
                e harmônica com a Natureza e assim possibilitar uma vida
                sinergética com o ambiente que nos rodeia.
              </p>
            </div>
            <div class='textos'>
              <h2 class='subTitulo'>Contato</h2>
              <div class='linha-horizontal'></div>
              <p class='conteudo'>pomardocerrado@gmail.com</p>
            </div>
          </div>
        </div>
        <Rodape />
      </Fragment>
    )
  }
}

export default Sobre
