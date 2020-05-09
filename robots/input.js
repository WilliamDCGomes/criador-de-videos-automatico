const readline = require('readline-sync')
const state = require('./state.js')
function robot(){
    const content = {
        maximumSentences: 7
    }
    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()
    content.lang = askandReturnLanguage()
    state.save(content)
    function askAndReturnSearchTerm(){
        return readline.question('Escolha o que deseja procurar: ')
    }
    function askAndReturnPrefix(){
        const prefixes = ['Quem eh', 'O que eh', 'A historia de(a)']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma opcao: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]
        return selectedPrefixText
    }
    function askandReturnLanguage(){
        const language = ['pt', 'en']
        const selectedLangIndex = readline.keyInSelect(language,'Escolha uma linguagem: ')
        const selectedLangText = language[selectedLangIndex]
        return selectedLangText
    }
}
module.exports = robot