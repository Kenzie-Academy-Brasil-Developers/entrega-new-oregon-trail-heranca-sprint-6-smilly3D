# language: pt

Funcionalidade: Doctor
    Como um Doctor
    Eu devo curas os viajantes doentes
    Para que eu possa seguir viagem e ajudar outros passageiros a seguir viagem

    Contexto:
        Dado um Doctor de nome "MedicineGuy"
        E ele sempre começa a viagem com 1 refeição
        E ele sempre começa a viagem saudável.

    Cenário: Comeu e seguiu saudável
        Quando o Doctor se alimentar 1 vez
        Então a quantia de refeição deve ir para 0
        E o Doctor está saudavel

    Cenário: Curou um doente
        Quando o Doctor curar o "José"
        Então o "José" ficara saudavel

