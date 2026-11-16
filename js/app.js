/**
 * Este arquivo contém o código principal para funcionamento do gerador
 */

/**
 * Configurações temporarias para testar a inicialização do app
 */
const APP_CONFIG = {
    name: "Mighty Blade Builder",
    version: "0.1.0",
    ruleset: "mighty-blade-3.5"
};

function initializeApp() {

    console.log(`${APP_CONFIG.name} iniciado.`);
    console.log(`Versão: ${APP_CONFIG.version}`);
    console.log(`Sistema: ${APP_CONFIG.ruleset}`);

    document.body.dataset.appInitialized = "true";

}

document.addEventListener("DOMContentLoaded", initializeApp);