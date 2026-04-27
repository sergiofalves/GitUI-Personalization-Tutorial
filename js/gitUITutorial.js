// =============================================================================
// Translations
// =============================================================================

const translations = {
    en: {
        tutorialTitle: "Personalization Tutorial",
        tutorialSubtitle: "Follow the next steps for an introduction to the personalization operations.",
        colorTitle: "Font Color",
        colorInstructions: "<b>Instruction:</b> Use the extension to change the color of the text element below.",
        colorTip: "<b>Tip:</b> After selecting an operation, the extension will highlight the borders of all webpage elements that are available for personalization.",
        colorText: "Personalize my text color!",
        bgColorTitle: "Background Color",
        bgColorInstructions: "<b>Instruction:</b> Use the extension to change the background color of the text element below.",
        bgColorText: "Personalize my background color!",
        removeTitle: "Remove Element",
        removeInstructions: "<b>Instruction:</b> Use the extension to remove the text element below. Do it without affecting the other elements of the webpage.",
        removeTip: "<b>Tip:</b> Typically, webpages have hidden elements and boxes. When selecting the element to remove, select the box closest to the text.",
        removeText: "You can remove me!",
        fontSizeTitle: "Font Size",
        fontSizeInstructions: "<b>Instruction:</b> Use the extension to change the font size of the element below.",
        fontSizeText: "Personalize my font size!",
        fontSizeTitle2: "Propagable Font Size",
        fontSizeInstructions2: "<b>Instruction:</b> Use the extension to change the font size of both elements below at the same time.",
        fontSizeTip2: "<b>Tip:</b> You can apply some operations to multiple elements at the same time by applying an operation to the box in which they are contained. When personalizing, look for the borders of the box that contain both elements.",
        fontSizeText2: "Personalize our font size!",
        fontSizeHeader2: "I am a huge text!",
        resizeTitle: "Resize Element",
        resizeInstructions: "<b>Instruction:</b> Use the extension to resize the element below.",
        resizeTip: "<b>Tip:</b> To resize an element, you may also need to resize nearby elements.",
        resizeText: "Can you resize me?",
        reorderTitle: "Reorder Element",
        reorderInstructions: "<b>Instruction:</b> Use the extension to switch the order of the two elements below.",
        reorderBox1: "This is Item 1",
        reorderBox2: "This is Item 2",
        moveTitle: "Move Element",
        moveInstructions: "<b>Instruction:</b> Use the extension to move one item from one list to another.",
        shortcutTitle: "Add Shortcut",
        shortcutInstructions: "<b>Instruction:</b> Use the extension to insert a shortcut in the box below.",
        shortcutTip: "<b>Tip:</b> Add a shortcut to where you want to go next (this is the last step).",
        next: "Next",
        finish: "Finish",
        back: "Previous",
        colorChanged: "Color changed successfully to",
        bgColorChanged: "Background color changed successfully to",
        elementRemoved: "Element removed successfully!",
        wrongElementRemoved: 'You removed the wrong element. Use the extension "back" option and try again!',
        fontSizeChanged: "Font size changed successfully to",
        bothFontSizeChanged: "Font size changed successfully to",
        tryBothFontSize: 'Try to change both font sizes at once. Use the extension "back" option and try again!',
        resized: "Element resized successfully to",
        reordered: "Elements reordered successfully!",
        moved: "Element moved successfully!",
        shortcutAdded: "Shortcut added successfully!",
        shortcutAddedMove: "Shortcut added, please move it!",
        tutorialFinished: 'Tutorial Completed! You can now start personalizing! Next time, remember to save the adaptation!'
    },
    pt: {
        tutorialTitle: "Tutorial de Personalização",
        tutorialSubtitle: "Siga os próximos passos para uma introdução às operações de personalização.",
        colorTitle: "Cor da Fonte",
        colorInstructions: "<b>Instrução:</b> Use a extensão para mudar a cor do elemento de texto abaixo.",
        colorTip: "<b>Dica:</b> Após selecionar uma operação, a extensão destacará as bordas de todos os elementos da página disponíveis para personalização.",
        colorText: "Personalize a cor do meu texto!",
        bgColorTitle: "Cor de Fundo",
        bgColorInstructions: "<b>Instrução:</b> Use a extensão para mudar a cor de fundo do elemento de texto abaixo.",
        bgColorText: "Personalize a cor do meu fundo!",
        removeTitle: "Remover Elemento",
        removeInstructions: "<b>Instrução:</b> Use a extensão para remover o elemento de texto abaixo. Faça isso sem afetar os outros elementos da página.",
        removeTip: "<b>Dica:</b> Normalmente, páginas da web têm elementos e caixas ocultas. Ao selecionar o elemento para remover, selecione a caixa mais próxima do texto.",
        removeText: "Pode remover-me!",
        fontSizeTitle: "Tamanho da Fonte",
        fontSizeInstructions: "<b>Instrução:</b> Use a extensão para alterar o tamanho da fonte do elemento abaixo.",
        fontSizeText: "Personalize o tamanho da minha fonte!",
        fontSizeTitle2: "Tamanho de Fonte Propagável",
        fontSizeInstructions2: "<b>Instrução:</b> Use a extensão para alterar o tamanho da fonte de ambos os elementos abaixo ao mesmo tempo.",
        fontSizeTip2: "<b>Dica:</b> Pode aplicar algumas operações a vários elementos ao mesmo tempo, aplicando uma operação à caixa em que eles estão contidos. Ao personalizar, procure as bordas da caixa que contem os dois elementos.",
        fontSizeText2: "Personalize o nosso tamanho de fonte!",
        fontSizeHeader2: "Eu sou um texto enorme!",
        resizeTitle: "Redimensionar Elemento",
        resizeInstructions: "<b>Instrução:</b> Use a extensão para redimensionar o elemento abaixo.",
        resizeTip: "<b>Dica:</b> Para redimensionar um elemento pode ter de redimensionar também elementos próximos.",
        resizeText: "Pode redimensionar-me?",
        reorderTitle: "Reordenar Elemento",
        reorderInstructions: "<b>Instrução:</b> Use a extensão para trocar a ordem dos dois elementos abaixo.",
        reorderBox1: "Esta é o Item 1",
        reorderBox2: "Esta é o Item 2",
        moveTitle: "Mover Elemento",
        moveInstructions: "<b>Instrução:</b> Use a extensão para mover um item de uma lista para outra.",
        shortcutTitle: "Adicionar Atalho",
        shortcutInstructions: "<b>Instrução:</b> Use a extensão para inserir um atalho para um URL na caixa abaixo.",
        shortcutTip: "<b>Dica:</b> Adicione um atalho para o website que quer visitar de seguida (este é o último passo!).",
        next: "Próximo",
        finish: "Concluir",
        back: "Anterior",
        colorChanged: "Cor alterada com sucesso para",
        bgColorChanged: "Cor de fundo alterada com sucesso para",
        elementRemoved: "Elemento removido com sucesso!",
        wrongElementRemoved: 'Removeu o elemento errado. Use a opção "Atrás" da extensão e tente novamente!',
        fontSizeChanged: "Tamanho da fonte alterado com sucesso para",
        bothFontSizeChanged: "Tamanho da fonte alterado com sucesso para",
        tryBothFontSize: 'Tente alterar ambos os tamanhos de fonte ao mesmo tempo. Use a opção "Atrás" da extensão e tente novamente!',
        resized: "Elemento redimensionado com sucesso para",
        reordered: "Elementos reordenados com sucesso!",
        moved: "Elemento movido com sucesso!",
        shortcutAdded: "Atalho adicionado com sucesso!",
        shortcutAddedMove: "Atalho adicionado, por favor, mova-o!",
        tutorialFinished: 'Tutorial concluído! Agora pode começar a personalizar! Da próxima vez, lembre-se de guardar a adaptação!'
    }
};

// =============================================================================
// Language management
// =============================================================================

// Retrieve the language from localStorage, defaulting to 'en'
let currentLanguage = localStorage.getItem('currentLanguage') || 'en';

/** Returns the translation string for the given key in the active language. */
function translate(key) {
    return translations[currentLanguage][key];
}

/** Switches the active language and re-renders all translatable content. */
function switchLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    localStorage.setItem('currentLanguage', currentLanguage);
    updateLanguage();
}

/**
 * Updates every translatable element in one pass using data-i18n attributes.
 * Each element that should be translated must carry a data-i18n="<key>"
 * attribute whose value matches a key in the translations object.
 */
function updateLanguage() {
    const t = translations[currentLanguage];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.innerHTML = t[el.dataset.i18n];
    });

    // Next buttons
    document.querySelectorAll('.next-button').forEach(btn => {
        btn.innerHTML = btn.id.includes('shortcut') ? t.finish : t.next;
    });

    // Back buttons
    document.querySelectorAll('.back-button').forEach(btn => {
        btn.textContent = t.back;
    });

    // Language toggle label
    document.getElementById('language-toggle').innerHTML =
        currentLanguage === 'en' ? 'Português' : 'English';
}

// =============================================================================
// TutorialNavigator — step navigation
// =============================================================================

class TutorialNavigator {
    /**
     * @param {string[]} steps
     */
    constructor(steps) {
        this.steps = steps;
        this.currentStep = 0;
    }

    /**
     * Moves the tutorial by `delta` steps (+1 = forward, -1 = back).
     * Guards against going out of bounds.
     */
    navigate(delta) {
        const next = this.currentStep + delta;
        if (next < 0 || next >= this.steps.length) return;

        document.getElementById(this.steps[this.currentStep]).style.display = 'none';
        this.currentStep = next;
        document.getElementById(this.steps[this.currentStep]).style.display = 'block';
        this._updateUrlHash();
    }

    /** Reads the URL hash and jumps to the matching step (used on load / hashchange). */
    goToFromURL() {
        const hash = window.location.hash.substring(1);
        if (!hash) return;

        const idx = this.steps.indexOf(hash + '-operation');
        if (idx === -1) return;

        document.getElementById(this.steps[this.currentStep]).style.display = 'none';
        this.currentStep = idx;
        document.getElementById(this.steps[this.currentStep]).style.display = 'block';
        document.getElementById(this.steps[this.currentStep]).scrollIntoView();
        this._updateUrlHash();
    }

    /** Reflects the active step in the URL hash. */
    _updateUrlHash() {
        window.location.hash = this.steps[this.currentStep].replace('-operation', '');
    }

    /**
     * Attaches click listeners to all back/next buttons.
     */
    bindButtons() {
        document.querySelectorAll('.back-button').forEach(btn =>
            btn.addEventListener('click', () => this.navigate(-1))
        );

        document.querySelectorAll('.next-button:not(#shortcut-next)').forEach(btn =>
            btn.addEventListener('click', () => this.navigate(1))
        );

        // Final step shows a completion alert instead of advancing
        document.getElementById('shortcut-next').addEventListener('click', () => {
            alert(translate('tutorialFinished'));
        });
    }
}

// =============================================================================
// Mutation observers — monitor personalisation actions
// =============================================================================

/** Watches a single element's attributes and calls callback on any change. */
function observeStyleChange(element, callback) {
    const observer = new MutationObserver(callback);
    observer.observe(element, {
        attributes: true,
        childList: false,
        subtree: false
    });
}

/** Wires up all MutationObservers for the tutorial steps. */
function setupObservers() {
    const colorZone = document.getElementById('color-text');
    const bgColorZone = document.getElementById('bg-color-text');
    const removeZone = document.getElementById('remove-text');
    const removeBoxZone = document.getElementById('remove-box');
    const fontSizeZone = document.getElementById('font-size-text');
    const fontSizeZone2 = document.getElementById('font-size-text2');
    const fontSizeZoneHeader2 = document.getElementById('font-size-header2');
    const resizeZone = document.getElementById('resize-box');
    const reorderZone = document.getElementById('reorder-zone');
    const moveZone = document.getElementById('move-zone');

    // --- Font Color ---
    observeStyleChange(colorZone, () => {
        const newColor = window.getComputedStyle(colorZone).color;
        if (newColor !== 'rgb(0, 0, 0)') {
            document.getElementById('color-message').textContent =
                `${translate('colorChanged')} ${newColor}!`;
            document.getElementById('color-next').disabled = false;
        }
    });

    // --- Background Color ---
    observeStyleChange(bgColorZone, () => {
        const newBgColor = window.getComputedStyle(bgColorZone).backgroundColor;
        if (newBgColor !== 'rgb(255, 255, 255)' && newBgColor !== 'rgba(0, 0, 0, 0)') {
            document.getElementById('bg-color-message').textContent =
                `${translate('bgColorChanged')} ${newBgColor}!`;
            document.getElementById('bg-color-next').disabled = false;
        }
    });

    // --- Remove Element (correct target) ---
    observeStyleChange(removeZone, () => {
        if (window.getComputedStyle(removeZone).display === 'none') {
            const msg = document.getElementById('remove-message');
            msg.classList.remove('message-error');
            msg.textContent = translate('elementRemoved');
            document.getElementById('remove-next').disabled = false;
        }
    });

    // --- Remove Element (wrong target — outer box) ---
    observeStyleChange(removeBoxZone, () => {
        if (window.getComputedStyle(removeBoxZone).display === 'none') {
            const msg = document.getElementById('remove-message');
            msg.classList.add('message-error');
            msg.textContent = translate('wrongElementRemoved');
            document.getElementById('remove-next').disabled = true;
        }
    });

    // --- Font Size (single element) ---
    observeStyleChange(fontSizeZone, () => {
        const newFontSize = window.getComputedStyle(fontSizeZone).fontSize;
        if (newFontSize !== '16px') {
            document.getElementById('font-size-message').textContent =
                `${translate('fontSizeChanged')} ${newFontSize}!`;
            document.getElementById('font-size-next').disabled = false;
        }
    });

    // --- Font Size (propagable — both elements must change) ---
    observeStyleChange(fontSizeZone2, () => {
        const newFontSize = window.getComputedStyle(fontSizeZone2).fontSize;
        const newFontSizeHeader = window.getComputedStyle(fontSizeZoneHeader2).fontSize;
        const msg = document.getElementById('font-size-message2');

        const textChanged = newFontSize !== '16px';
        const headerChanged = newFontSizeHeader !== '30px';

        if (!textChanged && !headerChanged) {
            // Both back to original — clear message
            msg.classList.remove('message-error');
            msg.textContent = '';
        } else if (textChanged && headerChanged) {
            // Both changed — success
            msg.classList.remove('message-error');
            msg.textContent = `${translate('bothFontSizeChanged')} ${newFontSizeHeader} e ${newFontSize}!`;
            document.getElementById('font-size-next2').disabled = false;
        } else {
            // Only one changed — prompt user to change both
            msg.classList.add('message-error');
            msg.textContent = translate('tryBothFontSize');
        }
    });

    // --- Resize ---
    observeStyleChange(resizeZone, () => {
        const style = window.getComputedStyle(resizeZone);
        const newWidth = style.width;
        const newHeight = style.height;
        document.getElementById('resize-message').textContent =
            `${translate('resized')} ${newWidth} x ${newHeight}!`;
        document.getElementById('resize-next').disabled = false;
    });

    // --- Reorder ---
    const initialOrder = Array.from(reorderZone.children).map(c => c.id);
    const reorderObserver = new MutationObserver(() => {
        const currentOrder = Array.from(reorderZone.children).map(c => c.id);
        if (JSON.stringify(initialOrder) !== JSON.stringify(currentOrder)) {
            document.getElementById('reorder-message').textContent = translate('reordered');
            document.getElementById('reorder-next').disabled = false;
        }
    });
    reorderObserver.observe(reorderZone, { childList: true });

    // --- Move ---
    _initMoveOperation();
    observeStyleChange(moveZone, () => {
        const box1Items = Array.from(document.getElementById('list1').children);
        const box2Items = Array.from(document.getElementById('list2').children);

        const itemsMoved =
            box1Items.some(item => item.getAttribute('data-original-box') === 'box2') ||
            box2Items.some(item => item.getAttribute('data-original-box') === 'box1');

        if (itemsMoved) {
            document.getElementById('move-message').textContent = translate('moved');
            document.getElementById('move-next').disabled = false;
        }
    });

    // --- Shortcut ---
    _initShortcutOperation();
}

// =============================================================================
// Move operation helpers (private to this module)
// =============================================================================

function _initMoveOperation() {
    ['list1', 'list2'].forEach(listId => {
        const boxKey = listId === 'list1' ? 'box1' : 'box2';
        Array.from(document.getElementById(listId).children).forEach(item => {
            item.setAttribute('data-original-box', boxKey);
        });
    });
    document.getElementById('move-message').textContent = '';
}

// =============================================================================
// Shortcut operation helpers (private to this module)
// =============================================================================

let _shortcutElement = null;

function _checkShortcutPosition() {
    if (!_shortcutElement) return;
    const zone = document.getElementById('shortcut-zone');
    const zoneRect = zone.getBoundingClientRect();
    const rect = _shortcutElement.getBoundingClientRect();

    const overlaps =
        rect.bottom > zoneRect.top &&
        rect.top < zoneRect.bottom &&
        rect.right > zoneRect.left &&
        rect.left < zoneRect.right;

    if (overlaps) {
        document.getElementById('shortcut-message').textContent = translate('shortcutAdded');
        document.getElementById('shortcut-next').disabled = false;
    }
}

function _observeShortcutMovement() {
    if (!_shortcutElement) return;

    const moveObserver = new MutationObserver(_checkShortcutPosition);
    moveObserver.observe(_shortcutElement, {
        attributes: true,
        subtree: true,
        attributeFilter: ['style']
    });

    // Fallback interval in case style mutations are not triggered
    const interval = setInterval(() => {
        _checkShortcutPosition();
        if (!document.getElementById('shortcut-next').disabled) {
            clearInterval(interval);
        }
    }, 500);
}

function _initShortcutOperation() {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.tagName === 'A' && node.href.includes('https://')) {
                    _shortcutElement = node;
                    _observeShortcutMovement();
                }
            });
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

// =============================================================================
// Tutorial initialisation
// =============================================================================

const STEPS = [
    'color-operation',
    'bg-color-operation',
    'remove-operation',
    'font-size-operation',
    'font-size2-operation',
    'resize-operation',
    'reorder-operation',
    'move-operation',
    'shortcut-operation'
];

const navigator = new TutorialNavigator(STEPS);

function initTutorial() {
    updateLanguage();

    // Hide all steps, then show the one matching the URL hash (or step 0)
    document.querySelectorAll('.operation-container').forEach(op => {
        op.style.display = 'none';
    });

    const hash = window.location.hash.substring(1);
    const hashIdx = STEPS.indexOf(hash + '-operation');
    if (hashIdx !== -1) {
        navigator.currentStep = hashIdx;
    }

    document.getElementById(STEPS[navigator.currentStep]).style.display = 'block';
    navigator._updateUrlHash();

    navigator.bindButtons();
    setupObservers();
}

// Navigate on hash changes (e.g. browser back/forward)
window.addEventListener('hashchange', () => navigator.goToFromURL());

// Boot on page load
window.onload = initTutorial;
