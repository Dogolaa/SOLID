# SOLID

## Introdução

- 'Criado' por Robert C. Matin (Uncle Bob)
- Na verdade foi uma contribuição de diversas pessoas
- LSP (Princípio da Substituição de Liskov), foi criado por Barbara Liskov, **fundamental para garantir que classes derivadas possam substituir suas classes base sem quebrar o comportamento do programa**
- OCP (Princípio Opened/Closed), foi criado por Bertrand Meyer, pioneiro na **ideia de Programação por Contrato**, estabelecendo bases para design de software mais robusto e extensível.

<br>

_SOLID **evita** softwares **rígidos** (sistemas que qualquer mudança simples se tornam complexas e caras), **frágeis** (Código que quebra inesperadamente quando modificiado em uma parte), **imóveis** (Componentes difíceis de reutilizar em outros contextos ou projetos) e com **acoplamento excessivo** (Módulos fortemente dependentes, dificultando manutenção e evolução)_

<br>

## Acrônimo "SOLID"

- S: **Single Responsibility Principle**: Princípio da Responsabilidade Única
- O: **Open-Closed Principle** Princípio Aberto-Fechado
- L: **Liskov Substitution Principle** Princípio da Substituição de Liskov
- I: **Interface Segregation Principle** Princípio da Segregação de Interfaces
- D: **Dependency Inversion Principle** Princípio da Inversão de Dependência

<br>

## SRP - Single Responsibility Principle

"Princípio da única razão para mudança"

- Uma classe deve ter apenas uma responsabilidade bem definida, com um único motivo para mudança.
- Cada classe deve se especializar em fazer uma tarefa específica com excelência, criando código modular e coeso.
- Múltiplas responsabilidades em uma classe aumentam complexidade e riscos de manutenção.

<br>

Erros comuns:

- **Interpretação Literal**, pensar que "uma coisa" significa uma única linha de código ou função muito específica.
- **Escopo Restrito**, mal-entendido de que SRP significa limitar drasticamente a funcionalidade de uma classe
- **Abstração Inadequada**, dificuldade em identificar o nível correto de responsabilidade e coesão.'

### SRP: Definições

- **Atores**: Um ator pode ser um pessoa, um grupo ou um sistema que requisita mudanças no software. Diferentes atores como usuários finais, gestores de produto, equipes de negócios e desenvolvedores podem ter necessidades distintas.

- **Razões para mudança**: Uma razão para mudar representa os diferentes stakeholders ou atores que podem exigir modificações que acabam refletindo na mudança em uma mesma classe.

- **Impacto de Multiplicidade de Atores**: Mudanças para atender um ator podem impactar outras funcionalidades, gerando fragilidade no código.

### SRP: Atores e Stakeholders

![alt text](/readmeImages/atoresStakeholders.png)

## OCP - Open-Closed Principle

"Basicamente diz que um componente/classe deve estar aberta para extensão, mas fechado para modificação, ou seja, toda vez que você tem algo, tem-se que cria-lo de uma maneira que ele seja extensivo, não se da manutenção no componente principal e sim nos componentes que o formam."
