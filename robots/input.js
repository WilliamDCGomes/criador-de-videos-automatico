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
        return readline.question('Tyoe a Wikipedia search term: ')
    }
    function askAndReturnPrefix(){
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]
        return selectedPrefixText
    }
    function askandReturnLanguage(){
        const language = ['pt', 'en']
        const selectedLangIndex = readline.keyInSelect(language,'Choice Language: ')
        const selectedLangText = language[selectedLangIndex]
        return selectedLangText
    }
}
module.exports = robot