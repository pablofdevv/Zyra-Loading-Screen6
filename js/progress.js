/**
 * ==========================================================================
 *        MÓDULO DE PROGRESO DE CARGA VERTICAL - ZYRA EDITORIAL (PREMIUM)
 * ==========================================================================
 */

class ZyraProgress {
    constructor(config) {
        this.config = config || {};
        this.progressBar = document.getElementById('vertical-progress-bar');
        this.progressValText = document.getElementById('progress-val-text');
    }

    updateProgress(percentage) {
        const val = Math.min(Math.max(percentage, 0), 100);

        if (this.progressBar) {
            if (window.innerWidth <= 800) {
                this.progressBar.style.width = `${val}%`;
                this.progressBar.style.height = '100%';
            } else {
                this.progressBar.style.height = `${val}%`;
                this.progressBar.style.width = '100%';
            }
        }

        if (this.progressValText) {
            this.progressValText.innerText = `${Math.round(val)}%`;
        }
    }
}
window.ZyraProgress = ZyraProgress;
