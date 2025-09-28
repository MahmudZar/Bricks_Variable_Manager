document.addEventListener('DOMContentLoaded', () => {

    const ICONS = {
        drag: `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.1875 6.4375H12.1938V6.44375H12.1875V6.4375Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.5 6.4375C12.5 6.52038 12.4671 6.59987 12.4085 6.65847C12.3499 6.71708 12.2704 6.75 12.1875 6.75C12.1046 6.75 12.0251 6.71708 11.9665 6.65847C11.9079 6.59987 11.875 6.52038 11.875 6.4375C11.875 6.35462 11.9079 6.27513 11.9665 6.21653C12.0251 6.15792 12.1046 6.125 12.1875 6.125C12.2704 6.125 12.3499 6.15792 12.4085 6.21653C12.4671 6.27513 12.5 6.35462 12.5 6.4375ZM12.1875 10.4937H12.1938V10.5H12.1875V10.4937Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.5 10.4937C12.5 10.5765 12.4671 10.656 12.4085 10.7146C12.3499 10.7732 12.2704 10.8062 12.1875 10.8062C12.1046 10.8062 12.0251 10.7732 11.9665 10.7146C11.9079 10.656 11.875 10.5765 11.875 10.4937C11.875 10.4108 11.9079 10.3313 11.9665 10.2727C12.0251 10.2141 12.1046 10.1812 12.1875 10.1812C12.2704 10.1812 12.3499 10.2141 12.4085 10.2727C12.4671 10.3313 12.5 10.4108 12.5 10.4937ZM12.1875 14.5624H12.1938V14.5687H12.1875V14.5624Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path d="M12.5 14.5625C12.5 14.6454 12.4671 14.7249 12.4085 14.7835C12.3499 14.8421 12.2704 14.875 12.1875 14.875C12.1046 14.875 12.0251 14.8421 11.9665 14.7835C11.9079 14.7249 11.875 14.6454 11.875 14.5625C11.875 14.4796 11.9079 14.4001 11.9665 14.3415C12.0251 14.2829 12.1046 14.25 12.1875 14.25C12.2704 14.25 12.3499 14.2829 12.4085 14.3415C12.4671 14.4001 12.5 14.4796 12.5 14.5625ZM7.8125 6.4375H7.81875V6.44375H7.8125V6.4375Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.125 6.4375C8.125 6.52038 8.09208 6.59987 8.03347 6.65847C7.97487 6.71708 7.89538 6.75 7.8125 6.75C7.72962 6.75 7.65013 6.71708 7.59153 6.65847C7.53292 6.59987 7.5 6.52038 7.5 6.4375C7.5 6.35462 7.53292 6.27513 7.59153 6.21653C7.65013 6.15792 7.72962 6.125 7.8125 6.125C7.89538 6.125 7.97487 6.15792 8.03347 6.21653C8.09208 6.27513 8.125 6.35462 8.125 6.4375ZM7.8125 10.4937H7.81875V10.5H7.8125V10.4937Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.125 10.4937C8.125 10.5765 8.09208 10.656 8.03347 10.7146C7.97487 10.7732 7.89538 10.8062 7.8125 10.8062C7.72962 10.8062 7.65013 10.7732 7.59153 10.7146C7.53292 10.656 7.5 10.5765 7.5 10.4937C7.5 10.4108 7.53292 10.3313 7.59153 10.2727C7.65013 10.2141 7.72962 10.1812 7.8125 10.1812C7.89538 10.1812 7.97487 10.2141 8.03347 10.2727C8.09208 10.3313 8.125 10.4108 8.125 10.4937ZM7.8125 14.5624H7.81875V14.5687H7.8125V14.5624Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.125 14.5625C8.125 14.6454 8.09208 14.7249 8.03347 14.7835C7.97487 14.8421 7.89538 14.875 7.8125 14.875C7.72962 14.875 7.65013 14.8421 7.59153 14.7835C7.53292 14.7249 7.5 14.6454 7.5 14.5625C7.5 14.4796 7.53292 14.4001 7.59153 14.3415C7.65013 14.2829 7.72962 14.25 7.8125 14.25C7.89538 14.25 7.97487 14.2829 8.03347 14.3415C8.09208 14.4001 8.125 14.4796 8.125 14.5625Z" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        edit: `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.83398 6.3335H5.00065C4.55862 6.3335 4.1347 6.50909 3.82214 6.82165C3.50958 7.13421 3.33398 7.55814 3.33398 8.00016V15.5002C3.33398 15.9422 3.50958 16.3661 3.82214 16.6787C4.1347 16.9912 4.55862 17.1668 5.00065 17.1668H12.5007C12.9427 17.1668 13.3666 16.9912 13.6792 16.6787C13.9917 16.3661 14.1673 15.9422 14.1673 15.5002V14.6668" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.3333 4.66676L15.8333 7.16676M16.9875 5.98759C17.3157 5.65938 17.5001 5.21424 17.5001 4.75009C17.5001 4.28594 17.3157 3.84079 16.9875 3.51259C16.6593 3.18438 16.2142 3 15.75 3C15.2858 3 14.8407 3.18438 14.5125 3.51259L7.5 10.5001V13.0001H10L16.9875 5.98759Z" stroke="currentColor" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        delete: `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.83301 18C5.37467 18 4.98245 17.8369 4.65634 17.5108C4.33023 17.1847 4.1669 16.7922 4.16634 16.3333V5.5H3.33301V3.83333H7.49967V3H12.4997V3.83333H16.6663V5.5H15.833V16.3333C15.833 16.7917 15.67 17.1842 15.3438 17.5108C15.0177 17.8375 14.6252 18.0006 14.1663 18H5.83301ZM14.1663 5.5H5.83301V16.3333H14.1663V5.5ZM7.49967 14.6667H9.16634V7.16667H7.49967V14.6667ZM10.833 14.6667H12.4997V7.16667H10.833V14.6667Z" fill="currentColor"/></svg>`,
        save: `<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 6.33333V16.3333C17.5 16.7917 17.3369 17.1842 17.0108 17.5108C16.6847 17.8375 16.2922 18.0006 15.8333 18H4.16667C3.70833 18 3.31611 17.8369 2.99 17.5108C2.66389 17.1847 2.50056 16.7922 2.5 16.3333V4.66667C2.5 4.20833 2.66333 3.81611 2.99 3.49C3.31667 3.16389 3.70889 3.00056 4.16667 3H14.1667L17.5 6.33333ZM15.8333 7.04167L13.4583 4.66667H4.16667V16.3333H15.8333V7.04167ZM10 15.5C10.6944 15.5 11.2847 15.2569 11.7708 14.7708C12.2569 14.2847 12.5 13.6944 12.5 13C12.5 12.3056 12.2569 11.7153 11.7708 11.2292C11.2847 10.7431 10.6944 10.5 10 10.5C9.30556 10.5 8.71528 10.7431 8.22917 11.2292C7.74306 11.7153 7.5 12.3056 7.5 13C7.5 13.6944 7.74306 14.2847 8.22917 14.7708C8.71528 15.2569 9.30556 15.5 10 15.5ZM5 8.83333H12.5V5.5H5V8.83333ZM4.16667 7.04167V16.3333V4.66667V7.04167Z" fill="currentColor"/></svg>`,
        duplicate: `<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.51953 14.1667H3.01953V2.5H14.6861V5H13.0195V4.16668H4.68617V12.5H5.51953V14.1667ZM18.0195 17.5V5.83332H6.35285V17.5H18.0195ZM15.5002 10.8333H13.0002V8.33332H11.3335V10.8333H8.83351V12.5H11.3335V15H13.0002V12.5H15.5002V10.8333Z" fill="currentColor"/></svg>`,
        x: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8337 5.34175L14.6587 4.16675L10.0003 8.82508L5.34199 4.16675L4.16699 5.34175L8.82533 10.0001L4.16699 14.6584L5.34199 15.8334L10.0003 11.1751L14.6587 15.8334L15.8337 14.6584L11.1753 10.0001L15.8337 5.34175Z" fill="currentColor"/></svg>`,
        search: `<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.4167 11.6667H12.7583L12.525 11.4417C13.37 10.4617 13.8343 9.21059 13.8333 7.91667C13.8333 6.84535 13.5157 5.7981 12.9205 4.90733C12.3253 4.01656 11.4793 3.3223 10.4895 2.91232C9.49977 2.50235 8.41066 2.39508 7.35993 2.60408C6.3092 2.81309 5.34404 3.32897 4.58651 4.08651C3.82897 4.84404 3.31309 5.8092 3.10408 6.85993C2.89508 7.91066 3.00235 8.99977 3.41232 9.98954C3.8223 10.9793 4.51656 11.8253 5.40733 12.4205C6.2981 13.0157 7.34535 13.3333 8.41667 13.3333C9.75834 13.3333 10.9917 12.8417 11.9417 12.025L12.1667 12.2583V12.9167L16.3333 17.075L17.575 15.8333L13.4167 11.6667ZM8.41667 11.6667C6.34167 11.6667 4.66667 9.99167 4.66667 7.91667C4.66667 5.84167 6.34167 4.16667 8.41667 4.16667C10.4917 4.16667 12.1667 5.84167 12.1667 7.91667C12.1667 9.99167 10.4917 11.6667 8.41667 11.6667Z" fill="currentColor"/></svg>`,
        reset: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`,
        grid: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 10.8333C7.94203 10.8333 8.36595 11.0089 8.67851 11.3215C8.99107 11.634 9.16667 12.058 9.16667 12.5V15.8333C9.16667 16.2754 8.99107 16.6993 8.67851 17.0118C8.36595 17.3244 7.94203 17.5 7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5C2.5 12.058 2.67559 11.634 2.98816 11.3215C3.30072 11.0089 3.72464 10.8333 4.16667 10.8333H7.5ZM15.8333 10.8333C16.2754 10.8333 16.6993 11.0089 17.0118 11.3215C17.3244 11.634 17.5 12.058 17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5C12.058 17.5 11.634 17.3244 11.3215 17.0118C11.0089 16.6993 10.8333 16.2754 10.8333 15.8333V12.5C10.8333 12.058 11.0089 11.634 11.3215 11.3215C11.634 11.0089 12.058 10.8333 12.5 10.8333H15.8333ZM7.5 2.5C7.94203 2.5 8.36595 2.67559 8.67851 2.98816C8.99107 3.30072 9.16667 3.72464 9.16667 4.16667V7.5C9.16667 7.94203 8.99107 8.36595 8.67851 8.67851C8.36595 8.99107 7.94203 9.16667 7.5 9.16667H4.16667C3.72464 9.16667 3.30072 8.99107 2.98816 8.67851C2.67559 8.36595 2.5 7.94203 2.5 7.5V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5ZM15.8333 2.5C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V7.5C17.5 7.94203 17.3244 8.36595 17.0118 8.67851C16.6993 8.99107 16.2754 9.16667 15.8333 9.16667H12.5C12.058 9.16667 11.634 8.99107 11.3215 8.67851C11.0089 8.36595 10.8333 7.94203 10.8333 7.5V4.16667C10.8333 3.72464 11.0089 3.30072 11.3215 2.98816C11.634 2.67559 12.058 2.5 12.5 2.5H15.8333Z" fill="currentColor"/></svg>`,
        row: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="3" y="14" rx="1"></rect><path d="M14 4h7"></path><path d="M14 9h7"></path><path d="M14 15h7"></path><path d="M14 20h7"></path></svg>`,
    };
    
    let state, dom, cssEditor, categorySortable, variableSortable;

    // --- CORE & INITIALIZATION ---
    function init() {
        state = getInitialState();
        cacheDomElements();
        injectIcons();
        loadFromLocalStorage(); // This will override default state if data exists
        setupEventListeners();
        render();
    }

    function getInitialState() {
        return {
            data: { 
                categories: [
                    { id: 'uncategorized', name: 'Uncategorized' }
                ], 
                variables: [] 
            },
            activeCategoryId: 'all',
            selectedVariableIds: new Set(),
            selectedCategoryIds: new Set(),
            editingCategoryId: null,
            viewMode: 'grid', // 'grid' or 'row'
            searchQuery: '',
            lastSelectedVarId: null,
            lastSelectedCatId: null,
        };
    }

    function cacheDomElements() {
        dom = {
            appContainer: document.getElementById('app-container'),
            categoriesPanel: document.getElementById('categories-panel'),
            variablesPanel: document.getElementById('variables-panel'),
            propertiesPanel: document.getElementById('properties-panel'),
            searchInput: document.getElementById('search-input'),
            clearSearchBtn: document.getElementById('clear-search-btn'),
            resetAppBtn: document.getElementById('reset-app-btn'),
            variablesTitle: document.getElementById('variables-title'),
            propertiesTitle: document.getElementById('properties-title'),
            importCodeBtn: document.getElementById('import-code-btn'),
            importJsonBtn: document.getElementById('import-json-btn'),
            exportJsonBtn: document.getElementById('export-json-btn'),
            exportCssBtn: document.getElementById('export-css-btn'),
            addCategoryBtn: document.getElementById('add-category-btn'),
            clearCategorySelectionBtn: document.getElementById('clear-category-selection-btn'),
            bulkDeleteCategoryBtn: document.getElementById('bulk-delete-category-btn'),
            addVariableBtn: document.getElementById('add-variable-btn'),
            selectAllVarsCheckbox: document.getElementById('select-all-vars-checkbox'),
            clearSelectionBtn: document.getElementById('clear-selection-btn'),
            bulkDeleteBtn: document.getElementById('bulk-delete-btn'),
            viewGridBtn: document.getElementById('view-grid-btn'),
            viewRowBtn: document.getElementById('view-row-btn'),
            categoriesList: document.getElementById('categories-list'),
            variablesCanvas: document.getElementById('variables-canvas'),
            propTabsContainer: document.getElementById('prop-tabs'),
            propTabs: document.querySelectorAll('.prop-tab'),
            propEditContent: document.getElementById('prop-edit-content'),
            propCategorizeContent: document.getElementById('prop-categorize-content'),
            moveCategorySelect: document.getElementById('move-category-select'),
            applyMoveBtn: document.getElementById('apply-move-btn'),
            variableModal: document.getElementById('variable-modal'),
            variableModalTitle: document.getElementById('variable-modal-title'),
            variableForm: document.getElementById('variable-form'),
            variableIdInput: document.getElementById('variable-id'),
            variableNameInput: document.getElementById('variable-name'),
            variableValueInput: document.getElementById('variable-value'),
            variableColorPicker: document.getElementById('variable-color-picker'),
            variableCategorySelect: document.getElementById('variable-category'),
            variableModalSaveBtn: document.getElementById('variable-modal-save-btn'),
            deleteConfirmModal: document.getElementById('delete-confirm-modal'),
            deleteConfirmTitle: document.getElementById('delete-confirm-title'),
            deleteConfirmMessage: document.getElementById('delete-confirm-message'),
            deleteConfirmDetails: document.getElementById('delete-confirm-details'),
            deleteConfirmCancelBtn: document.getElementById('delete-confirm-cancel-btn'),
            deleteConfirmBtn: document.getElementById('delete-confirm-btn'),
            codeModal: document.getElementById('code-modal'),
            codeModalTitle: document.getElementById('code-modal-title'),
            codeModalDesc: document.getElementById('code-modal-desc'),
            cssEditorEl: document.getElementById('css-editor'),
            codeModalActions: document.getElementById('code-modal-actions'),
            importJsonModal: document.getElementById('import-json-modal'),
            uploadZone: document.getElementById('upload-zone'),
            jsonFileInput: document.getElementById('json-file-input'),
        };
    }

    function injectIcons() {
        document.getElementById('search-icon').innerHTML = ICONS.search;
        document.getElementById('icon-reset').innerHTML = ICONS.reset;
        document.getElementById('icon-x').innerHTML = ICONS.x;
        document.getElementById('icon-cat-clear-selection').innerHTML = ICONS.x;
        document.getElementById('icon-cat-bulk-delete').innerHTML = ICONS.delete;
        document.getElementById('icon-clear-selection').innerHTML = ICONS.x;
        document.getElementById('icon-bulk-delete').innerHTML = ICONS.delete;
        document.getElementById('icon-grid-view').innerHTML = ICONS.grid;
        document.getElementById('icon-row-view').innerHTML = ICONS.row;
    }
    
    // --- DATA & STATE MANAGEMENT ---
    function saveAndRender(toastMessage, toastType = 'success') { 
        saveToLocalStorage(); 
        render(); 
        if(toastMessage) showToast(toastMessage, toastType); 
    }
    
    function generateId() { return Date.now().toString(36) + Math.random().toString(36).substr(2, 9); }
    
    function saveToLocalStorage() {
        try {
            const dataToSave = {
                data: state.data,
                viewMode: state.viewMode,
            };
            localStorage.setItem('bricksVarManager', JSON.stringify(dataToSave));
        } catch (e) {
            console.error("Error saving to local storage:", e);
            showToast("Could not save data. Storage may be full.", 'error');
        }
    }

    function loadFromLocalStorage() {
        const savedState = localStorage.getItem('bricksVarManager');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            state.data = parsedState.data || state.data;
            state.viewMode = parsedState.viewMode || 'grid';
        } 
        ensureUncategorizedExists();
        if (!state.activeCategoryId) {
            state.activeCategoryId = 'all';
        }
    }

    function ensureUncategorizedExists() {
         if (!state.data.categories || !Array.isArray(state.data.categories)) {
            state.data.categories = [];
        }
        const uncategorized = state.data.categories.find(c => c.id === 'uncategorized');
        if (!uncategorized) {
            state.data.categories.unshift({ id: 'uncategorized', name: 'Uncategorized' });
        }
    }

    function getVisibleVariables() {
        // When searching, always return a flat list of all matching variables.
        if (state.searchQuery) {
            const query = state.searchQuery.toLowerCase();
            return state.data.variables.filter(v => v.name.toLowerCase().includes(query) || v.value.toLowerCase().includes(query));
        }
        // When viewing "All Variables", return a flat list of all variables.
        if (state.activeCategoryId === 'all' || !state.activeCategoryId) {
            return state.data.variables;
        }
        // Otherwise, return variables for the active category.
        return state.data.variables.filter(v => v.category === state.activeCategoryId);
    }
    
    // --- RENDER FUNCTIONS ---
    function render() {
        renderCategories();
        renderVariables();
        renderPropertiesPanel();
        updateVariablePanelHeader();
        updateCategoryPanelHeader();
    }

    function renderCategories() {
        dom.categoriesList.innerHTML = '';
        
        // Static "All Variables"
        const allItem = createCategoryElement({ id: 'all', name: 'All Variables' }, state.data.variables.length);
        dom.categoriesList.appendChild(allItem);

        // Static "Uncategorized"
        const uncategorized = state.data.categories.find(c => c.id === 'uncategorized');
        const uncatCount = state.data.variables.filter(v => v.category === 'uncategorized').length;
        const uncatItem = createCategoryElement(uncategorized, uncatCount);
        dom.categoriesList.appendChild(uncatItem);
        
        // Sortable user-created categories
        const otherCategories = state.data.categories.filter(c => c.id !== 'uncategorized');
        otherCategories.forEach(cat => {
            const varCount = state.data.variables.filter(v => v.category === cat.id).length;
            const catItem = createCategoryElement(cat, varCount);
            dom.categoriesList.appendChild(catItem);
        });
        
        setupCategorySortable();
    }

    function createCategoryElement(cat, count) {
        const item = document.createElement('div');
        item.className = 'category-item';
        item.dataset.id = cat.id;

        if (state.activeCategoryId === cat.id) item.classList.add('active');
        if (state.selectedCategoryIds.has(cat.id)) item.classList.add('selected');
        if (state.editingCategoryId === cat.id) {
            item.classList.add(cat.isNew ? 'new-category' : 'editing');
        }

        const isSelectable = cat.id !== 'all' && cat.id !== 'uncategorized';
        const isDraggable = isSelectable && !state.editingCategoryId;

        const handle = isDraggable ? `<i class="icon handle" title="Drag to reorder">${ICONS.drag}</i>` : `<span class="icon" style="width:20px;"></span>`;

        const nameContent = (state.editingCategoryId === cat.id)
            ? `<input type="text" class="category-name-input" value="${cat.name}" data-id="${cat.id}">`
            : `<span class="category-name">${cat.name}</span>`;

        const actions = isSelectable
            ? `<div class="category-actions">
                ${state.editingCategoryId === cat.id ? `
                    <button class="icon-btn" data-action="save-category" data-id="${cat.id}" title="Save">${ICONS.save}</button>
                    <button class="icon-btn" data-action="delete-category" data-id="${cat.id}" title="Delete">${ICONS.delete}</button>
                ` : `
                    <button class="icon-btn" data-action="edit-category" data-id="${cat.id}" title="Edit">${ICONS.edit}</button>
                    <button class="icon-btn" data-action="delete-category" data-id="${cat.id}" title="Delete">${ICONS.delete}</button>
                `}
               </div>`
            : '';

        item.innerHTML = `
            ${handle}
            ${nameContent}
            <span class="category-count">${count}</span>
            ${actions}`;
        return item;
    }

    function renderVariables() {
        dom.variablesCanvas.className = `variables-canvas layout-${state.viewMode}`;
        dom.variablesCanvas.innerHTML = '';

        const visibleVars = getVisibleVariables();

        if (visibleVars.length === 0) {
            renderEmptyState(state.searchQuery);
            let titleText = 'Variables';
            if (state.searchQuery) titleText = 'Search Results';
            else if (state.activeCategoryId === 'all') titleText = 'All Variables';
            else titleText = state.data.categories.find(c => c.id === state.activeCategoryId)?.name || 'Variables';
            dom.variablesTitle.textContent = `${titleText} (0)`;
            return;
        }
        
        const container = document.createElement('div');
        container.id = 'variable-container-inner';
        container.className = 'variables-grid';

        if (state.searchQuery) {
            renderSearchResults(visibleVars, container);
        } else {
            visibleVars.forEach(v => container.appendChild(createVariableCard(v)));
        }
        dom.variablesCanvas.appendChild(container);
        
        const titleCategory = state.activeCategoryId === 'all' ? 'All Variables' : state.data.categories.find(c => c.id === state.activeCategoryId)?.name;
        dom.variablesTitle.textContent = `${state.searchQuery ? 'Search Results' : titleCategory} (${visibleVars.length})`;
        setupVariableSortable();
    }
    
    function renderEmptyState(isSearch) {
        if(isSearch) {
            dom.variablesCanvas.innerHTML = `<div class="empty-state"><h3>No Matching Variables</h3><p>Try searching for a different name or value.</p></div>`;
        } else {
            dom.variablesCanvas.innerHTML = `<div class="empty-state"><h3>No Variables Yet</h3><p>Get started by importing your variables or adding them manually.</p><div class="actions"><button id="empty-import-code-btn" class="main-btn btn-secondary">Import from Code</button><button id="empty-import-json-btn" class="main-btn btn-primary">Import Bricks JSON</button></div></div>`;
            document.getElementById('empty-import-code-btn').onclick = openCodeImportModal;
            document.getElementById('empty-import-json-btn').onclick = openJsonImportModal;
        }
    }

    function renderSearchResults(variables, container) {
        container.className = 'search-results-container';
        const groupedByCat = variables.reduce((acc, v) => {
            const catId = v.category || 'uncategorized';
            (acc[catId] = acc[catId] || []).push(v);
            return acc;
        }, {});
        
        const allCategories = [{id: 'uncategorized', name: 'Uncategorized'}, ...state.data.categories.filter(c => c.id !== 'uncategorized')];
        const categoryOrder = allCategories.map(c => c.id);

        categoryOrder.forEach(catId => {
            if (groupedByCat[catId] && groupedByCat[catId].length > 0) {
                const category = allCategories.find(c => c.id === catId);
                if (!category) return;
                const groupEl = document.createElement('div');
                groupEl.className = 'category-group';
                const gridEl = document.createElement('div');
                gridEl.className = 'variables-grid';
                groupedByCat[catId].forEach(v => gridEl.appendChild(createVariableCard(v)));
                groupEl.innerHTML = `<h3 class="category-title">${category.name}</h3>`;
                groupEl.appendChild(gridEl);
                container.appendChild(groupEl);
            }
        });
    }
    
    function createVariableCard(v) {
        const card = document.createElement('div');
        card.className = 'variable-card';
        card.dataset.id = v.id;
        if (state.selectedVariableIds.has(v.id)) card.classList.add('selected');

        const isColor = /^#|rgb|hsl/.test(v.value);
        
        // Universal HTML structure for both grid and row views
        card.innerHTML = `
            <i class="icon handle">${ICONS.drag}</i>
            <input type="checkbox" data-action="toggle-select" ${state.selectedVariableIds.has(v.id) ? 'checked' : ''}>
            <div class="color-swatch" style="background-color: ${isColor ? v.value : 'transparent'};"></div>
            <div class="variable-info">
                <div class="variable-name">--${v.name}</div>
                <div class="variable-value">${v.value}</div>
            </div>
            <div class="variable-actions">
                <button class="icon-btn" data-action="duplicate" title="Duplicate">${ICONS.duplicate}</button>
                <button class="icon-btn" data-action="delete" title="Delete">${ICONS.delete}</button>
            </div>
            <button class="copy-btn" data-action="copy">Copy</button>
        `;
        return card;
    }

    function renderPropertiesPanel() {
        const selectedCount = state.selectedVariableIds.size;
        dom.propertiesPanel.classList.toggle('visible', selectedCount > 0);
        if (selectedCount === 0) return;

        dom.propertiesTitle.textContent = `Selected (${selectedCount})`;
        dom.propTabsContainer.style.display = 'flex';
        
        if (selectedCount === 1) {
            dom.propTabs.forEach(t => t.style.display = 'flex');
            showPropTab('edit');
            renderEditForm();
        } else {
            dom.propTabs.forEach(t => t.style.display = t.dataset.tab === 'categorize' ? 'flex' : 'none');
            showPropTab('categorize');
        }
        
        dom.moveCategorySelect.innerHTML = state.data.categories
            .map(c => `<option value="${c.id}">${c.name}</option>`)
            .join('');
        if(selectedCount === 1) {
            const id = state.selectedVariableIds.values().next().value;
            const variable = state.data.variables.find(v => v.id === id);
            if(variable) dom.moveCategorySelect.value = variable.category;
        }
    }
    
    function renderEditForm() {
        if(state.selectedVariableIds.size !== 1) {
            dom.propEditContent.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding-top: 2rem;">Select a single variable to edit.</p>';
            return;
        }
        const id = state.selectedVariableIds.values().next().value;
        const v = state.data.variables.find(v => v.id === id);
        if (!v) return;

        dom.propEditContent.innerHTML = `
            <div class="form-group">
                <label for="prop-edit-name">Name</label>
                <input type="text" id="prop-edit-name" value="${v.name}" data-id="${v.id}">
            </div>
            <div class="form-group">
                <label for="prop-edit-value">Value</label>
                <input type="text" id="prop-edit-value" value="${v.value}" data-id="${v.id}">
            </div>
            <button id="prop-save-btn" class="main-btn btn-primary" style="width:100%">Save Changes</button>`;
    }

    function updateVariablePanelHeader() {
        const hasSelection = state.selectedVariableIds.size > 0;
        dom.clearSelectionBtn.classList.toggle('visible', hasSelection);
        dom.bulkDeleteBtn.classList.toggle('visible', hasSelection);
        
        const visibleVars = getVisibleVariables();
        dom.selectAllVarsCheckbox.checked = visibleVars.length > 0 && visibleVars.every(v => state.selectedVariableIds.has(v.id));

        dom.viewGridBtn.classList.toggle('active', state.viewMode === 'grid');
        dom.viewRowBtn.classList.toggle('active', state.viewMode === 'row');
    }

    function updateCategoryPanelHeader() {
        const hasSelection = state.selectedCategoryIds.size > 0;
        dom.clearCategorySelectionBtn.classList.toggle('visible', hasSelection);
        dom.bulkDeleteCategoryBtn.classList.toggle('visible', hasSelection);
    }
    
    // --- EVENT LISTENERS & HANDLERS ---
    function setupEventListeners() {
        dom.searchInput.addEventListener('input', handleSearch);
        dom.clearSearchBtn.addEventListener('click', clearSearch);
        dom.resetAppBtn.addEventListener('click', handleResetApp);
        dom.importCodeBtn.addEventListener('click', openCodeImportModal);
        dom.importJsonBtn.addEventListener('click', openJsonImportModal);
        dom.exportJsonBtn.addEventListener('click', exportAsJson);
        dom.exportCssBtn.addEventListener('click', openCodeExportModal);
        dom.addCategoryBtn.addEventListener('click', handleAddCategory);
        dom.clearCategorySelectionBtn.addEventListener('click', clearCategorySelection);
        dom.bulkDeleteCategoryBtn.addEventListener('click', handleBulkCategoryDelete);
        dom.categoriesList.addEventListener('click', handleCategoryClick);
        dom.categoriesList.addEventListener('keydown', handleCategoryKeyDown);
        dom.addVariableBtn.addEventListener('click', () => openVariableModal());
        dom.viewGridBtn.addEventListener('click', () => handleViewToggle('grid'));
        dom.viewRowBtn.addEventListener('click', () => handleViewToggle('row'));
        dom.variablesCanvas.addEventListener('click', handleVariableCanvasClick);
        dom.selectAllVarsCheckbox.addEventListener('change', handleSelectAll);
        dom.clearSelectionBtn.addEventListener('click', clearSelection);
        dom.bulkDeleteBtn.addEventListener('click', handleBulkDelete);
        dom.propTabs.forEach(tab => tab.addEventListener('click', () => showPropTab(tab.dataset.tab)));
        dom.propEditContent.addEventListener('click', handlePropEditClick);
        dom.applyMoveBtn.addEventListener('click', handleBulkMove);
        document.querySelectorAll('[data-modal-close]').forEach(btn => btn.addEventListener('click', () => closeModal(btn.closest('.modal-overlay').id)));
        dom.variableForm.addEventListener('submit', handleVariableFormSubmit);
        dom.variableValueInput.addEventListener('input', e => { if (/^#([0-9a-f]{3}){1,2}$/i.test(e.target.value)) dom.variableColorPicker.value = e.target.value; });
        dom.variableColorPicker.addEventListener('input', e => dom.variableValueInput.value = e.target.value);
        dom.uploadZone.addEventListener('click', () => dom.jsonFileInput.click());
        dom.jsonFileInput.addEventListener('change', e => handleJsonFile(e.target.files[0]));
        setupDragDrop(dom.uploadZone, handleJsonFile);
    }
    
    function handleSearch(e) {
        state.searchQuery = e.target.value.trim();
        dom.categoriesPanel.classList.toggle('hidden', !!state.searchQuery);
        dom.clearSearchBtn.style.display = state.searchQuery ? 'inline-flex' : 'none';
        render();
    }
    
    function clearSearch() { dom.searchInput.value = ''; handleSearch({ target: { value: '' } }); }
    
    function handleCategoryClick(e) {
        const item = e.target.closest('.category-item');
        if (!item) return;
        const id = item.dataset.id;
        const actionBtn = e.target.closest('[data-action]');
        
        if (actionBtn) { 
            e.stopPropagation();
            const action = actionBtn.dataset.action;
            switch(action) {
                case 'edit-category': state.editingCategoryId = id; renderCategories(); setTimeout(() => dom.categoriesList.querySelector(`.category-name-input[data-id="${id}"]`)?.focus(), 0); break;
                case 'delete-category': handleDeleteCategory(id); break;
                case 'save-category': saveCategoryEdit(id); break;
            }
        } else {
            if (e.ctrlKey || e.metaKey || e.shiftKey) {
                if(id !== 'all' && id !== 'uncategorized') {
                   toggleCategorySelection(id, e.shiftKey, e.ctrlKey || e.metaKey);
                }
            } else {
                if (state.activeCategoryId !== id) {
                    state.activeCategoryId = id;
                    state.editingCategoryId = null;
                    if(state.searchQuery) clearSearch();
                    clearSelection();
                    render();
                }
            }
        }
    }

    function handleVariableCanvasClick(e) {
        const card = e.target.closest('.variable-card');
        if (!card) return;

        const actionBtn = e.target.closest('[data-action]');
        const id = card.dataset.id;

        if (actionBtn) {
            e.stopPropagation();
            const action = actionBtn.dataset.action;
            switch(action) {
                case 'toggle-select':
                    toggleVariableSelection(id, e.shiftKey, e.ctrlKey || e.metaKey);
                    break;
                case 'copy':
                    const variable = state.data.variables.find(v => v.id === id);
                    navigator.clipboard.writeText(`var(--${variable.name})`);
                    showToast(`Copied: var(--${variable.name})`, 'success');
                    break;
                case 'duplicate': openVariableModal(id, true); break;
                case 'delete': handleDeleteVariable(id); break;
            }
        } else {
            toggleVariableSelection(id, e.shiftKey, e.ctrlKey || e.metaKey);
        }
    }

    function handlePropEditClick(e) {
        if (e.target.id === 'prop-save-btn') {
            const nameInput = document.getElementById('prop-edit-name');
            const valueInput = document.getElementById('prop-edit-value');
            const id = nameInput.dataset.id;
            const variable = state.data.variables.find(v => v.id === id);
            if (variable) {
                variable.name = nameInput.value.trim();
                variable.value = valueInput.value.trim();
                saveAndRender(`Variable --${variable.name} updated.`);
            }
        }
    }
    
    function handleAddCategory() {
        const newId = generateId();
        const newCat = { id: newId, name: 'New Category', isNew: true };
        state.data.categories.push(newCat);
        state.editingCategoryId = newId;
        renderCategories();
        setTimeout(() => {
            const input = dom.categoriesList.querySelector(`.category-name-input[data-id="${newId}"]`);
            if(input) { input.focus(); input.select(); }
        }, 0);
    }
    
    function handleCategoryKeyDown(e) {
        if(e.target.classList.contains('category-name-input')) {
            if(e.key === 'Enter') { e.preventDefault(); saveCategoryEdit(e.target.dataset.id); }
            else if (e.key === 'Escape') { cancelCategoryEdit(e.target.dataset.id); }
        }
    }
    
    function handleViewToggle(view) { 
        if(state.viewMode === view) return;
        state.viewMode = view; 
        saveAndRender();
    }

    function handleSelectAll(e) {
        const visibleVarIds = getVisibleVariables().map(v => v.id);
        if (e.target.checked) {
            visibleVarIds.forEach(id => state.selectedVariableIds.add(id));
        } else {
            state.selectedVariableIds.clear();
        }
        render();
    }
    function clearSelection() { if (state.selectedVariableIds.size > 0) { state.selectedVariableIds.clear(); state.lastSelectedVarId = null; render(); } }
    function clearCategorySelection() { if(state.selectedCategoryIds.size > 0) { state.selectedCategoryIds.clear(); state.lastSelectedCatId = null; render(); }}


    // --- ACTIONS ---
    function toggleVariableSelection(id, isShiftKey, isCtrlOrCmdKey) {
        const isSelected = state.selectedVariableIds.has(id);
        if (isShiftKey && state.lastSelectedVarId && state.lastSelectedVarId !== id) {
            const visibleVarIds = getVisibleVariables().map(v => v.id);
            const lastIndex = visibleVarIds.indexOf(state.lastSelectedVarId);
            const currentIndex = visibleVarIds.indexOf(id);
            if(lastIndex > -1 && currentIndex > -1) {
                const start = Math.min(lastIndex, currentIndex);
                const end = Math.max(lastIndex, currentIndex);
                if (!isCtrlOrCmdKey) state.selectedVariableIds.clear();
                for (let i = start; i <= end; i++) {
                    if (visibleVarIds[i]) state.selectedVariableIds.add(visibleVarIds[i]);
                }
            }
        } else if (isCtrlOrCmdKey) {
            isSelected ? state.selectedVariableIds.delete(id) : state.selectedVariableIds.add(id);
        } else {
            if (isSelected && state.selectedVariableIds.size === 1) {
                state.selectedVariableIds.clear();
            } else {
                state.selectedVariableIds.clear();
                state.selectedVariableIds.add(id);
            }
        }
        state.lastSelectedVarId = state.selectedVariableIds.has(id) ? id : null;
        render();
    }

    function toggleCategorySelection(id, isShiftKey, isCtrlOrCmdKey) {
        const isSelected = state.selectedCategoryIds.has(id);
        const selectableCats = state.data.categories.filter(c => c.id !== 'all' && c.id !== 'uncategorized');
        const catIds = selectableCats.map(c => c.id);

        if (isShiftKey && state.lastSelectedCatId && state.lastSelectedCatId !== id) {
            const lastIndex = catIds.indexOf(state.lastSelectedCatId);
            const currentIndex = catIds.indexOf(id);
            if (lastIndex > -1 && currentIndex > -1) {
                const start = Math.min(lastIndex, currentIndex);
                const end = Math.max(lastIndex, currentIndex);
                if (!isCtrlOrCmdKey) state.selectedCategoryIds.clear();
                for (let i = start; i <= end; i++) {
                    if (catIds[i]) state.selectedCategoryIds.add(catIds[i]);
                }
            }
        } else if (isCtrlOrCmdKey) {
            isSelected ? state.selectedCategoryIds.delete(id) : state.selectedCategoryIds.add(id);
        } else {
             if (isSelected && state.selectedCategoryIds.size === 1) {
                state.selectedCategoryIds.clear();
            } else {
                state.selectedCategoryIds.clear();
                state.selectedCategoryIds.add(id);
            }
        }
        state.lastSelectedCatId = state.selectedCategoryIds.has(id) ? id : null;
        render();
    }
    
    function handleBulkCategoryDelete() {
        if (state.selectedCategoryIds.size === 0) return;
        const count = state.selectedCategoryIds.size;
        const title = `Delete ${count} Categories?`;
        const message = `This will permanently delete the selected categories AND all variables inside them. This action cannot be undone.`;
        const details = `<ul>${Array.from(state.selectedCategoryIds).map(id => `<li>${state.data.categories.find(c => c.id === id)?.name || 'unknown'}</li>`).join('')}</ul>`;

        openDeleteConfirmModal(title, message, () => {
            const varIdsToDelete = new Set(
                state.data.variables
                    .filter(v => state.selectedCategoryIds.has(v.category))
                    .map(v => v.id)
            );
            state.data.variables = state.data.variables.filter(v => !varIdsToDelete.has(v.id));
            state.data.categories = state.data.categories.filter(c => !state.selectedCategoryIds.has(c.id));
            
            if (state.selectedCategoryIds.has(state.activeCategoryId)) {
                state.activeCategoryId = 'all';
            }
            state.selectedCategoryIds.clear();
            cleanupDynamicModals(); // Clean up any open modals since categories changed
            saveAndRender(`${count} categories and their variables deleted.`);
        }, null, details);
    }

    function handleResetApp() {
        openDeleteConfirmModal(
            'Reset Application?',
            'This will permanently delete all your categories and variables from this browser. Are you sure you want to proceed?',
            () => {
                localStorage.removeItem('bricksVarManager');
                cleanupDynamicModals(); // Clean up any open modals
                showToast('Application has been reset.', 'success');
                setTimeout(() => {
                   state = getInitialState();
                   saveAndRender();
                }, 300);
            },
            null, null, "Yes, Reset App", "Cancel"
        );
    }

    function saveCategoryEdit(id) {
        const input = dom.categoriesList.querySelector(`.category-name-input[data-id="${id}"]`);
        if (!input) return;
        const newName = input.value.trim();
        const category = state.data.categories.find(c => c.id === id);
        if (newName && category) {
            category.name = newName;
            delete category.isNew;
            state.editingCategoryId = null;
            cleanupDynamicModals(); // Clean up any open modals since categories changed
            saveAndRender(`Category saved as "${newName}"`, 'success');
        } else { cancelCategoryEdit(id); }
    }

    function cancelCategoryEdit(id) {
        const category = state.data.categories.find(c => c.id === id);
        if (category && category.isNew) state.data.categories = state.data.categories.filter(c => c.id !== id);
        state.editingCategoryId = null;
        renderCategories();
    }

    function handleDeleteCategory(id) {
        const category = state.data.categories.find(c => c.id === id);
        if (!category) return;
        const varsInCatCount = state.data.variables.filter(v => v.category === id).length;
        const title = `Delete Category: "${category.name}"?`;
        const message = `This will permanently delete the category and all ${varsInCatCount} variables inside it. Are you sure?`;

        openDeleteConfirmModal(title, message, () => {
            state.data.variables = state.data.variables.filter(v => v.category !== id);
            state.data.categories = state.data.categories.filter(c => c.id !== id);
            if (state.activeCategoryId === id) state.activeCategoryId = 'all';
            cleanupDynamicModals(); // Clean up any open modals since categories changed
            saveAndRender(`Category "${category.name}" and its variables deleted.`);
        });
    }

    function handleDeleteVariable(id) {
         const variable = state.data.variables.find(v => v.id === id);
         if(!variable) return;
         openDeleteConfirmModal(`Delete Variable?`, `Are you sure you want to delete --${variable.name}?`, () => {
            state.data.variables = state.data.variables.filter(v => v.id !== id);
            state.selectedVariableIds.delete(id);
            saveAndRender(`Variable --${variable.name} deleted.`);
         });
    }
    
    function handleBulkDelete() {
        if (state.selectedVariableIds.size === 0) return;
        const title = `Delete ${state.selectedVariableIds.size} Variables?`;
        const message = `Are you sure? This action cannot be undone.`;
        const details = `<ul>${Array.from(state.selectedVariableIds).map(id => `<li>--${state.data.variables.find(v => v.id === id)?.name || 'unknown'}</li>`).join('')}</ul>`;
        openDeleteConfirmModal(title, message, () => {
            const count = state.selectedVariableIds.size;
            state.data.variables = state.data.variables.filter(v => !state.selectedVariableIds.has(v.id));
            state.selectedVariableIds.clear();
            saveAndRender(`${count} variables deleted.`);
        }, null, details);
    }

    function handleBulkMove() {
        const targetCatId = dom.moveCategorySelect.value;
        if (!targetCatId) return;
        state.data.variables.forEach(v => { if (state.selectedVariableIds.has(v.id)) v.category = targetCatId; });
        const count = state.selectedVariableIds.size;
        const catName = state.data.categories.find(c => c.id === targetCatId).name;
        clearSelection();
        saveAndRender(`${count} variables moved to "${catName}".`);
    }
    
    // --- UI & MODAL HELPERS ---
    function showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.textContent = message;
        document.getElementById('toast-container').appendChild(toast);
        setTimeout(() => toast.classList.add('show'), 10);
        setTimeout(() => { toast.classList.remove('show'); toast.addEventListener('transitionend', () => toast.remove()); }, 3000);
    }
    
    function openModal(id) { 
        const modal = document.getElementById(id);
        if (modal) {
            modal.classList.add('visible'); 
        }
    }
    
    function closeModal(id) { 
        const modal = document.getElementById(id);
        if (modal) {
            modal.classList.remove('visible'); 
        }
    }
    
    function cleanupDynamicModals() {
        // Clean up any dynamically created modals
        const dynamicModals = [
            'css-export-selection-modal',
            'json-export-selection-modal', 
            'uncategorized-rename-modal'
        ];
        
        dynamicModals.forEach(modalId => {
            const modal = document.getElementById(modalId);
            if (modal) {
                document.body.removeChild(modal);
            }
        });
        
        // Clean up temporary variables
        delete window.uncategorizedRename;
        delete window.selectedExportCategories;
    }
    
    function setupModalCloseHandlers(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;
        
        // Handle close button clicks
        const closeButtons = modal.querySelectorAll('[data-modal-close]');
        closeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                closeModal(modalId);
                // Clean up dynamic modals
                if (['css-export-selection-modal', 'json-export-selection-modal', 'uncategorized-rename-modal'].includes(modalId)) {
                    setTimeout(() => {
                        if (document.getElementById(modalId)) {
                            document.body.removeChild(document.getElementById(modalId));
                        }
                    }, 300);
                }
                // Clean up temporary variables when closing code modal
                if (modalId === 'code-modal') {
                    delete window.selectedExportCategories;
                }
            });
        });
        
        // Handle escape key
        const handleEscape = (e) => {
            if (e.key === 'Escape' && modal.classList.contains('visible')) {
                closeModal(modalId);
                if (['css-export-selection-modal', 'json-export-selection-modal', 'uncategorized-rename-modal'].includes(modalId)) {
                    setTimeout(() => {
                        if (document.getElementById(modalId)) {
                            document.body.removeChild(document.getElementById(modalId));
                        }
                    }, 300);
                }
                // Clean up temporary variables when closing code modal
                if (modalId === 'code-modal') {
                    delete window.selectedExportCategories;
                }
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);
    }

    function openVariableModal(id = null, isDuplicating = false) {
        dom.variableForm.reset();
        dom.variableIdInput.value = '';
        
        dom.variableCategorySelect.innerHTML = state.data.categories
            .map(c => `<option value="${c.id}">${c.name}</option>`)
            .join('');

        if (id) {
            const v = state.data.variables.find(v => v.id === id);
            if (isDuplicating) {
                dom.variableModalTitle.textContent = 'Duplicate Variable';
                dom.variableModalSaveBtn.textContent = 'Duplicate Variable';
                dom.variableNameInput.value = `copy-of-${v.name}`;
                dom.variableValueInput.value = v.value;
                dom.variableCategorySelect.value = v.category;
            } 
            if (/^#/.test(v.value)) dom.variableColorPicker.value = v.value;
        } else {
            dom.variableModalTitle.textContent = 'Add New Variable';
            dom.variableModalSaveBtn.textContent = 'Add Variable';
            dom.variableCategorySelect.value = state.activeCategoryId !== 'all' ? state.activeCategoryId : 'uncategorized';
        }
        openModal('variable-modal');
    }

    function handleVariableFormSubmit(e) {
        e.preventDefault();
        const id = dom.variableIdInput.value;
        const name = dom.variableNameInput.value.trim();
        const value = dom.variableValueInput.value.trim();
        const category = dom.variableCategorySelect.value;
        
        if (state.data.variables.some(v => v.name === name && v.id !== id)) {
            showToast(`A variable named "${name}" already exists.`, 'error');
            return;
        }

        const newVar = { id: generateId(), name, value, category };
        state.data.variables.push(newVar);
        saveAndRender(`Variable "${name}" created.`);
        
        closeModal('variable-modal');
    }

    function openDeleteConfirmModal(title, message, confirmCallback, cancelCallback = null, detailsHTML = null, confirmText = "Delete", cancelText = "Cancel") {
        dom.deleteConfirmTitle.textContent = title;
        dom.deleteConfirmMessage.textContent = message;
        
        dom.deleteConfirmDetails.innerHTML = detailsHTML || '';
        dom.deleteConfirmDetails.style.display = detailsHTML ? 'block' : 'none';
        
        const isMultiOption = cancelText !== "Cancel";

        dom.deleteConfirmBtn.textContent = confirmText;
        const newConfirmBtn = dom.deleteConfirmBtn.cloneNode(true);
        dom.deleteConfirmBtn.parentNode.replaceChild(newConfirmBtn, dom.deleteConfirmBtn);
        newConfirmBtn.addEventListener('click', () => { if (confirmCallback) confirmCallback(); closeModal('delete-confirm-modal'); });
        dom.deleteConfirmBtn = newConfirmBtn;

        dom.deleteConfirmCancelBtn.textContent = cancelText;
        const newCancelBtn = dom.deleteConfirmCancelBtn.cloneNode(true);
        dom.deleteConfirmCancelBtn.parentNode.replaceChild(newCancelBtn, dom.deleteConfirmCancelBtn);
        newCancelBtn.addEventListener('click', () => { if (cancelCallback) cancelCallback(); closeModal('delete-confirm-modal'); });
        dom.deleteConfirmCancelBtn = newCancelBtn;

        openModal('delete-confirm-modal');
    }
    
    function showPropTab(tabName) {
        dom.propTabs.forEach(tab => tab.classList.toggle('active', tab.dataset.tab === tabName));
        document.querySelectorAll('[data-tab-content]').forEach(content => {
            content.style.display = content.dataset.tabContent === tabName ? 'block' : 'none';
        });
    }

    // --- IMPORT/EXPORT/CODE MODAL ---
    function openCodeImportModal() {
        // Always get fresh category options
        const categoryOptions = state.data.categories
            .map(c => `<option value="${c.id}">${c.name}</option>`)
            .join('');
            
        const modalContent = `
            <div class="modal" style="max-width: 800px;">
                <div class="modal-header">
                    <h3>Import CSS Variables</h3>
                    <button class="close-btn" data-modal-close>×</button>
                </div>
                
                <p style="margin-bottom: 1rem;">Paste CSS code below. Variables will be parsed and added to the selected category.</p>
                
                <div class="category-selection-group">
                    <label for="css-import-category-select">Select destination category:</label>
                    <div class="custom-select-wrapper">
                        <select id="css-import-category-select" class="custom-select">
                            ${categoryOptions}
                        </select>
                    </div>
                    <div class="category-selection-help">Default: Uncategorized</div>
                </div>
                
                <textarea id="css-editor"></textarea>
                
                <div class="modal-actions">
                    <button type="button" class="main-btn btn-secondary" data-modal-close>Cancel</button>
                    <button type="button" class="main-btn btn-primary" id="css-import-btn">Import Variables</button>
                </div>
            </div>
        `;
        
        // Clean up existing CodeMirror instance
        if (cssEditor) {
            cssEditor.toTextArea();
            cssEditor = null;
        }
        
        document.getElementById('code-modal').innerHTML = modalContent;
        openModal('code-modal');
        
        // Setup modal close handlers
        setupModalCloseHandlers('code-modal');
        
        // Always initialize fresh CodeMirror
        cssEditor = CodeMirror.fromTextArea(document.getElementById('css-editor'), {
            mode: 'css',
            theme: 'dracula',
            lineNumbers: true,
        });
        
        cssEditor.setValue(':root {\n  --brand-primary: #70D6FF;\n  --text-color: #EBE9E6;\n}');
        
        // Set default to uncategorized
        document.getElementById('css-import-category-select').value = 'uncategorized';
        
        // Setup import handler
        document.getElementById('css-import-btn').onclick = handleCssImportWithCategory;
        
        setTimeout(() => cssEditor.refresh(), 1);
    }
    
    function openCodeExportModal() {
        showCssExportCategorySelection();
    }

    function showCssExportCategorySelection() {
        // Clean up any existing modal
        const existingModal = document.getElementById('css-export-selection-modal');
        if (existingModal) {
            document.body.removeChild(existingModal);
        }
        
        // Always get fresh category data
        const categoriesWithVars = state.data.categories
            .map(cat => ({
                ...cat,
                varCount: state.data.variables.filter(v => v.category === cat.id).length
            }))
            .filter(cat => cat.varCount > 0);

        if (categoriesWithVars.length === 0) {
            showToast('No categories with variables to export.', 'info');
            return;
        }

        const modalContent = `
            <div class="modal">
                <div class="modal-header">
                    <h3>Export CSS Variables</h3>
                    <button class="close-btn" data-modal-close>×</button>
                </div>
                
                <p style="margin-bottom: 1rem;">Select which categories to include in the CSS export:</p>
                
                <div class="category-export-list">
                    <div class="category-export-header">
                        <label>
                            <input type="checkbox" id="select-all-css-export" checked>
                            Select All Categories
                        </label>
                    </div>
                    
                    ${categoriesWithVars.map(cat => `
                        <label class="category-export-item">
                            <div class="category-export-left">
                                <input type="checkbox" class="css-export-category-checkbox"
                                        data-category-id="${cat.id}" checked>
                                <span class="category-export-name">${cat.name}</span>
                            </div>
                            <span class="category-export-count">${cat.varCount} variables</span>
                        </label>
                    `).join('')}
                </div>
                
                <div class="modal-actions">
                    <button type="button" class="main-btn btn-secondary" data-modal-close>Cancel</button>
                    <button type="button" class="main-btn btn-primary" id="proceed-css-export-btn">Continue</button>
                </div>
            </div>
        `;
        
        // Create and show modal
        const modalEl = document.createElement('div');
        modalEl.className = 'modal-overlay';
        modalEl.id = 'css-export-selection-modal';
        modalEl.innerHTML = modalContent;
        document.body.appendChild(modalEl);
        
        openModal('css-export-selection-modal');
        
        // Setup modal close handlers
        setupModalCloseHandlers('css-export-selection-modal');
        
        // Setup event handlers
        setupCssExportSelectionHandlers();
    }

    function setupCssExportSelectionHandlers() {
        const selectAllCheckbox = document.getElementById('select-all-css-export');
        const categoryCheckboxes = document.querySelectorAll('.css-export-category-checkbox');
        const proceedBtn = document.getElementById('proceed-css-export-btn');
        
        // Select all functionality
        selectAllCheckbox.addEventListener('change', (e) => {
            categoryCheckboxes.forEach(cb => cb.checked = e.target.checked);
        });
        
        // Individual checkbox changes
        categoryCheckboxes.forEach(cb => {
            cb.addEventListener('change', () => {
                const allChecked = Array.from(categoryCheckboxes).every(cb => cb.checked);
                selectAllCheckbox.checked = allChecked;
            });
        });
        
        // Proceed with export
        proceedBtn.addEventListener('click', () => {
            const selectedCategories = Array.from(categoryCheckboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.dataset.categoryId);
                
            if (selectedCategories.length === 0) {
                showToast('Please select at least one category to export.', 'error');
                return;
            }
                
            closeModal('css-export-selection-modal');
            const modalEl = document.getElementById('css-export-selection-modal');
            if (modalEl) {
                document.body.removeChild(modalEl);
            }
                
            proceedWithCssExport(selectedCategories);
        });
    }

    function proceedWithCssExport(selectedCategoryIds) {
        // Store selected categories for the final modal
        window.selectedExportCategories = selectedCategoryIds;
        
        // Create category options for the final modal
        const allCategoriesOption = '<option value="all">All Categories</option>';
        const categoryOptions = selectedCategoryIds
            .map(catId => {
                const category = state.data.categories.find(c => c.id === catId);
                return `<option value="${catId}">${category.name}</option>`;
            })
            .join('');
        
        // Generate initial CSS for all categories
        let initialCssString = generateCssForCategories(selectedCategoryIds);
        
        const modalContent = `
            <div class="modal" style="max-width: 800px;">
                <div class="modal-header">
                    <h3>Export CSS Variables</h3>
                    <button class="close-btn" data-modal-close>×</button>
                </div>
                
                <div class="category-selection-group">
                    <label for="css-export-category-filter">View categories:</label>
                    <div class="custom-select-wrapper">
                        <select id="css-export-category-filter" class="custom-select">
                            ${allCategoriesOption}
                            ${categoryOptions}
                        </select>
                    </div>
                    <div class="category-selection-help">Select which categories to display in the code editor</div>
                </div>
                
                <textarea id="css-editor"></textarea>
                
                <div class="modal-actions">
                    <button type="button" class="main-btn btn-secondary" data-modal-close>Cancel</button>
                    <button type="button" class="main-btn btn-secondary" id="copy-css-btn">Copy to Clipboard</button>
                    <button type="button" class="main-btn btn-primary" id="download-css-btn">Download .css file</button>
                </div>
            </div>
        `;
        
        // Clean up existing CodeMirror instance
        if (cssEditor) {
            cssEditor.toTextArea();
            cssEditor = null;
        }
        
        document.getElementById('code-modal').innerHTML = modalContent;
        openModal('code-modal');
        
        // Setup modal close handlers
        setupModalCloseHandlers('code-modal');
        
        // Initialize CodeMirror
        cssEditor = CodeMirror.fromTextArea(document.getElementById('css-editor'), {
            mode: 'css',
            theme: 'dracula',
            lineNumbers: true,
        });
        
        cssEditor.setValue(initialCssString);
        
        // Setup category filter change handler
        document.getElementById('css-export-category-filter').addEventListener('change', (e) => {
            const selectedValue = e.target.value;
            let newCssString;
            
            if (selectedValue === 'all') {
                newCssString = generateCssForCategories(window.selectedExportCategories);
            } else {
                newCssString = generateCssForCategories([selectedValue]);
            }
            
            cssEditor.setValue(newCssString);
        });
        
        // Setup action buttons
        document.getElementById('copy-css-btn').addEventListener('click', () => {
            navigator.clipboard.writeText(cssEditor.getValue());
            showToast('CSS copied to clipboard!', 'success');
        });
        
        document.getElementById('download-css-btn').addEventListener('click', () => {
            const cssString = cssEditor.getValue();
            const blob = new Blob([cssString], { type: 'text/css' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'bricks-variables.css';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            showToast('CSS file download initiated.', 'success');
        });
        
        setTimeout(() => cssEditor.refresh(), 1);
    }
    
    function generateCssForCategories(categoryIds) {
        let cssString = ':root {\n';
        
        categoryIds.forEach(catId => {
            const category = state.data.categories.find(c => c.id === catId);
            const varsInCategory = state.data.variables.filter(v => v.category === catId);
            
            if (varsInCategory.length > 0) {
                cssString += `\n  /* ${category.name} */\n`;
                varsInCategory.forEach(v => {
                    cssString += `  --${v.name}: ${v.value};\n`;
                });
            }
        });
        
        cssString += '\n}';
        return cssString;
    }

    function openCodeModal(title, description, content, actions) {
        dom.codeModalTitle.textContent = title;
        dom.codeModalDesc.textContent = description;
        dom.codeModalActions.innerHTML = '';
        actions.forEach(action => {
            const btn = document.createElement('button');
            btn.className = `main-btn ${action.class}`;
            btn.textContent = action.label;
            btn.onclick = action.action;
            dom.codeModalActions.appendChild(btn);
        });

        openModal('code-modal');
        
        // Always ensure fresh CodeMirror instance
        if (!cssEditor) {
            cssEditor = CodeMirror.fromTextArea(dom.cssEditorEl, { 
                mode: 'css', 
                theme: 'dracula', 
                lineNumbers: true 
            });
        }
        
        cssEditor.setValue(content);
        setTimeout(() => cssEditor.refresh(), 1);
    }
    
    function handleCssImport() {
        const cssText = cssEditor.getValue();
        const regex = /--([a-zA-Z0-9-]+)\s*:\s*([^;]+)/g;
        let match;
        let newVarsCount = 0;
        
        while((match = regex.exec(cssText)) !== null) {
            const name = match[1].trim();
            const value = match[2].trim();
            if (!state.data.variables.some(v => v.name === name)) {
                state.data.variables.push({ id: generateId(), name, value, category: 'uncategorized' });
                newVarsCount++;
            }
        }
        
        closeModal('code-modal');
        if (newVarsCount > 0) saveAndRender(`${newVarsCount} new variables imported.`);
        else showToast('No new variables found to import.', 'info');
    }

    function handleCssImportWithCategory() {
        const cssText = cssEditor.getValue();
        const selectedCategoryId = document.getElementById('css-import-category-select').value;
        
        if (!cssText.trim()) {
            showToast('Please provide CSS code to import.', 'error');
            return;
        }
        
        const regex = /--([a-zA-Z0-9-]+)\s*:\s*([^;]+)/g;
        let match;
        let newVarsCount = 0;
        
        while((match = regex.exec(cssText)) !== null) {
            const name = match[1].trim();
            const value = match[2].trim();
            
            if (!state.data.variables.some(v => v.name === name)) {
                state.data.variables.push({
                    id: generateId(),
                    name,
                    value,
                    category: selectedCategoryId
                });
                newVarsCount++;
            }
        }
        
        closeModal('code-modal');
        
        if (newVarsCount > 0) {
            const categoryName = state.data.categories.find(c => c.id === selectedCategoryId)?.name || 'Unknown';
            saveAndRender(`${newVarsCount} variables imported to "${categoryName}".`);
        } else {
            showToast('No new variables found to import.', 'info');
        }
    }
    


    function openJsonImportModal() { openModal('import-json-modal'); }
    
    function handleJsonFile(file) {
         if (!file || !file.type.includes('json')) {
            showToast('Invalid file. Please upload a .json file.', 'error');
            return;
        }
        const reader = new FileReader();
        reader.onload = e => {
            try {
                const imported = JSON.parse(e.target.result);
                // This robust line handles both old ({data: ...}) and new formats.
                let importedData = imported.data ? imported.data : imported;

                if (!importedData.variables || !importedData.categories) {
                    throw new Error("Invalid format");
                }
                
                const finalCategories = [...state.data.categories.filter(c => c.id === 'uncategorized')];
                const importedUserCategories = importedData.categories.filter(c => c.id !== 'uncategorized');
                finalCategories.push(...importedUserCategories);

                state.data = {
                    categories: finalCategories,
                    variables: importedData.variables
                };

                state.activeCategoryId = 'all';
                clearSelection();
                clearCategorySelection();
                cleanupDynamicModals(); // Clean up any open modals since categories changed
                saveAndRender('JSON data imported successfully!');
                closeModal('import-json-modal');
            } catch(err) {
                console.error("Import Error:", err);
                showToast('Invalid JSON format. Please use a compatible file.', 'error');
            }
        };
        reader.readAsText(file);
    }
    
    function exportAsJson() {
        const uncategorizedVars = state.data.variables.filter(v => v.category === 'uncategorized');
        
        if (uncategorizedVars.length > 0) {
            // First, handle uncategorized renaming
            showUncategorizedRenameModal(() => {
                showJsonExportCategorySelection();
            });
        } else {
            // No uncategorized variables, go straight to category selection
            showJsonExportCategorySelection();
        }
    }

    function showUncategorizedRenameModal(callback) {
        // Clean up any existing modal
        const existingModal = document.getElementById('uncategorized-rename-modal');
        if (existingModal) {
            document.body.removeChild(existingModal);
        }
        
        const modalContent = `
            <div class="modal">
                <div class="modal-header">
                    <h3>Rename Uncategorized Category</h3>
                    <button class="close-btn" data-modal-close>×</button>
                </div>
                
                <p style="margin-bottom: 1rem;">You have variables in the "Uncategorized" category. To prevent conflicts when importing into Bricks, please provide a name for this category:</p>
                
                <div class="form-group">
                    <label for="uncategorized-rename-input">Category Name</label>
                    <input type="text" id="uncategorized-rename-input"
                            class="form-control"
                           placeholder="e.g., General, Imported, Miscellaneous"
                           value="General Variables">
                </div>
                
                <div class="modal-actions">
                    <button type="button" class="main-btn btn-secondary" data-modal-close>Cancel</button>
                    <button type="button" class="main-btn btn-primary" id="confirm-rename-btn">Continue</button>
                </div>
            </div>
        `;
        
        const modalEl = document.createElement('div');
        modalEl.className = 'modal-overlay';
        modalEl.id = 'uncategorized-rename-modal';
        modalEl.innerHTML = modalContent;
        document.body.appendChild(modalEl);
        
        openModal('uncategorized-rename-modal');
        
        // Setup modal close handlers
        setupModalCloseHandlers('uncategorized-rename-modal');
        
        // Handle confirm button
        document.getElementById('confirm-rename-btn').onclick = () => {
            const newName = document.getElementById('uncategorized-rename-input').value.trim();
            if (!newName) {
                showToast('Please provide a category name.', 'error');
                return;
            }
                
            closeModal('uncategorized-rename-modal');
            const modalToRemove = document.getElementById('uncategorized-rename-modal');
            if (modalToRemove) {
                document.body.removeChild(modalToRemove);
            }
                
            // Store the rename for later use
            window.uncategorizedRename = newName;
            callback();
        };
    }

    function showJsonExportCategorySelection() {
        // Clean up any existing modal
        const existingModal = document.getElementById('json-export-selection-modal');
        if (existingModal) {
            document.body.removeChild(existingModal);
        }
        
        // Always get fresh category data
        const categoriesWithVars = state.data.categories
            .map(cat => ({
                ...cat,
                varCount: state.data.variables.filter(v => v.category === cat.id).length,
                displayName: cat.id === 'uncategorized' && window.uncategorizedRename ?
                              window.uncategorizedRename : cat.name
            }))
            .filter(cat => cat.varCount > 0);

        if (categoriesWithVars.length === 0) {
            showToast('No categories with variables to export.', 'info');
            return;
        }

        const modalContent = `
            <div class="modal">
                <div class="modal-header">
                    <h3>Select Categories to Export</h3>
                    <button class="close-btn" data-modal-close>×</button>
                </div>
                
                <p style="margin-bottom: 1rem;">Choose which categories to include in the JSON export:</p>
                
                <div class="category-export-list">
                    <div class="category-export-header">
                        <label>
                            <input type="checkbox" id="select-all-json-export" checked>
                            Select All Categories
                        </label>
                    </div>
                    
                    ${categoriesWithVars.map(cat => `
                        <label class="category-export-item">
                            <div class="category-export-left">
                                <input type="checkbox" class="json-export-category-checkbox"
                                        data-category-id="${cat.id}" checked>
                                <span class="category-export-name">${cat.displayName}</span>
                            </div>
                            <span class="category-export-count">${cat.varCount} variables</span>
                        </label>
                    `).join('')}
                </div>
                
                <div class="modal-actions">
                    <button type="button" class="main-btn btn-secondary" data-modal-close>Cancel</button>
                    <button type="button" class="main-btn btn-primary" id="confirm-json-export-btn">Export Selected</button>
                </div>
            </div>
        `;
        
        const modalEl = document.createElement('div');
        modalEl.className = 'modal-overlay';
        modalEl.id = 'json-export-selection-modal';
        modalEl.innerHTML = modalContent;
        document.body.appendChild(modalEl);
        
        openModal('json-export-selection-modal');
        
        // Setup modal close handlers
        setupModalCloseHandlers('json-export-selection-modal');
        
        setupJsonExportSelectionHandlers();
    }

    function setupJsonExportSelectionHandlers() {
        const selectAllCheckbox = document.getElementById('select-all-json-export');
        const categoryCheckboxes = document.querySelectorAll('.json-export-category-checkbox');
        const confirmBtn = document.getElementById('confirm-json-export-btn');
        
        // Select all functionality
        selectAllCheckbox.addEventListener('change', (e) => {
            categoryCheckboxes.forEach(cb => cb.checked = e.target.checked);
        });
        
        // Individual checkbox changes
        categoryCheckboxes.forEach(cb => {
            cb.addEventListener('change', () => {
                const allChecked = Array.from(categoryCheckboxes).every(cb => cb.checked);
                selectAllCheckbox.checked = allChecked;
            });
        });
        
        // Confirm export
        confirmBtn.addEventListener('click', () => {
            const selectedCategories = Array.from(categoryCheckboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.dataset.categoryId);
                
            if (selectedCategories.length === 0) {
                showToast('Please select at least one category to export.', 'error');
                return;
            }
                
            closeModal('json-export-selection-modal');
            const modalEl = document.getElementById('json-export-selection-modal');
            if (modalEl) {
                document.body.removeChild(modalEl);
            }
                
            proceedWithJsonExport(selectedCategories);
        });
    }

    function proceedWithJsonExport(selectedCategoryIds) {
        // Prepare export data
        const exportCategories = [];
        const exportVariables = [];
        
        selectedCategoryIds.forEach(catId => {
            const category = state.data.categories.find(c => c.id === catId);
            const categoryVars = state.data.variables.filter(v => v.category === catId);
            
            if (category && categoryVars.length > 0) {
                // Handle uncategorized rename
                const exportCategory = {
                    ...category,
                    name: catId === 'uncategorized' && window.uncategorizedRename ?
                           window.uncategorizedRename : category.name
                };
                
                exportCategories.push(exportCategory);
                exportVariables.push(...categoryVars);
            }
        });
        
        // Ensure we have the uncategorized category if needed
        if (!exportCategories.some(c => c.id === 'uncategorized')) {
            exportCategories.unshift({ id: 'uncategorized', name: 'Uncategorized' });
        }
        
        const dataToExport = {
            categories: exportCategories,
            variables: exportVariables
        };
        
        // Download the file
        const dataStr = JSON.stringify(dataToExport, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'bricks-variables.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        // Clean up temporary rename
        delete window.uncategorizedRename;
        
        showToast('Selected categories exported successfully!', 'success');
    }


    // --- DRAG & DROP / SORTABLE ---
    function setupCategorySortable() {
        if(categorySortable) categorySortable.destroy();
        categorySortable = Sortable.create(dom.categoriesList, { 
            handle: '.handle', animation: 150,
            filter: '.category-item[data-id="all"], .category-item[data-id="uncategorized"]',
            onEnd: (evt) => {
                const { oldIndex, newIndex } = evt;
                // Adjust for the 2 static items at the top
                const movableCats = state.data.categories.filter(c => c.id !== 'uncategorized');
                const [movedItem] = movableCats.splice(oldIndex - 2, 1);
                movableCats.splice(newIndex - 2, 0, movedItem);
                
                const uncategorized = state.data.categories.find(c => c.id === 'uncategorized');
                state.data.categories = [uncategorized, ...movableCats];
                
                saveAndRender('Categories reordered.');
            }
        });
    }

    function setupVariableSortable() {
        const container = document.getElementById('variable-container-inner');
        if (!container) return;
        if (variableSortable) variableSortable.destroy();
        
        variableSortable = Sortable.create(container, {
            handle: '.handle',
            animation: 150,
            disabled: state.viewMode !== 'row',
            onEnd: (evt) => {
                const { oldIndex, newIndex } = evt;
                if (oldIndex === newIndex) return;

                const visibleVars = getVisibleVariables();
                const movedVarId = visibleVars[oldIndex].id;
                
                const globalFromIndex = state.data.variables.findIndex(v => v.id === movedVarId);
                const [movedItem] = state.data.variables.splice(globalFromIndex, 1);
                
                if (newIndex >= visibleVars.length -1) {
                     const lastVisibleVarId = visibleVars[visibleVars.length - 1].id;
                     const globalToIndex = state.data.variables.findIndex(v => v.id === lastVisibleVarId);
                     state.data.variables.splice(globalToIndex + 1, 0, movedItem);
                } else {
                    const referenceVarId = visibleVars[newIndex].id;
                    const globalToIndex = state.data.variables.findIndex(v => v.id === referenceVarId);
                    state.data.variables.splice(globalToIndex, 0, movedItem);
                }
                
                saveAndRender('Variables reordered.');
            }
        });
    }
    
    function setupDragDrop(element, callback) {
        element.addEventListener('dragover', e => { e.preventDefault(); element.classList.add('drag-over'); });
        element.addEventListener('dragleave', () => element.classList.remove('drag-over'));
        element.addEventListener('drop', e => { e.preventDefault(); element.classList.remove('drag-over'); if (e.dataTransfer.files.length) callback(e.dataTransfer.files[0]); });
    }
    
    init();
});