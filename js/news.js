/**
 * ==========================================================================
 *        MÓDULO DE NOVEDADES Y CONFIG - ZYRA EDITORIAL (PREMIUM)
 * ==========================================================================
 */

class ZyraNewsSlider {
    constructor(config) {
        this.config = config || {};
        this.newsContainer = document.getElementById('timeline-feed-wrapper');
        this.init();
    }

    init() {
        if (!this.newsContainer) return;
        
        let html = "";

        // 1. Inyectar Novedades
        if (this.config.components.enableNews && this.config.news) {
            this.config.news.forEach(item => {
                const badgeText = item.type === 'update' ? 'UPDATE' : 'EVENT';
                html += `
                    <div class="changelog-item">
                        <div class="item-meta">
                            <span class="item-badge">${badgeText}</span>
                            <span class="item-date">${item.date}</span>
                        </div>
                        <h4 class="item-title">${item.title}</h4>
                        <p class="item-desc">${item.description}</p>
                    </div>`;
            });
        }

        // 2. Inyectar Atajos de Teclado
        if (this.config.controls && this.config.controls.length > 0) {
            let keysHtml = "";
            this.config.controls.forEach(ctrl => {
                keysHtml += `
                    <div class="control-line">
                        <kbd>${ctrl.key}</kbd>
                        <span>${ctrl.description}</span>
                    </div>`;
            });

            html += `
                <div class="changelog-item">
                    <div class="item-meta">
                        <span class="item-badge">SYSTEM</span>
                        <span class="item-date">KEY MAPS</span>
                    </div>
                    <h4 class="item-title">Server Controls</h4>
                    <div class="controls-list">
                        ${keysHtml}
                    </div>
                </div>`;
        }

        this.newsContainer.innerHTML = html;
    }
}
window.ZyraNewsSlider = ZyraNewsSlider;
